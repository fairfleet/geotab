import { GeotabOptions } from "../types/GeotabOptions";
import { Call, Next } from "../types";
import { isOverLimitError } from "../GeotabError";
import { createCallBudget, defaultSleep, DEFAULT_WINDOW_MS, Sleep } from "./callBudget";

/** Clock and wait implementations, injectable for tests. */
export interface RateLimitDependencies {
  now?: () => number;
  sleep?: Sleep;
}

export function rateLimit(options: GeotabOptions, dependencies: RateLimitDependencies = {}) {
  const retries = options.retryOnOverLimit ?? 1;
  const limit = options.rateLimit;
  const windowMs = (limit ? limit.windowMs : undefined) ?? DEFAULT_WINDOW_MS;
  const sleep = dependencies.sleep ?? defaultSleep;
  const budget =
    limit === false
      ? undefined
      : createCallBudget({ maxCalls: limit?.maxCalls, windowMs, ...dependencies });
  const flushGate = options.maxConcurrentFlushes
    ? createGate(options.maxConcurrentFlushes)
    : undefined;

  return function setup(next: Next) {
    return async function middleware(call: Call) {
      const weight = getWeight(call);

      for (let attempt = 0; ; attempt++) {
        // Charging sits inside the loop so a retry spends budget again.
        await budget?.acquire(weight, call.signal);

        try {
          if (flushGate && isMultiCall(call)) {
            return await flushGate(() => next(call));
          }

          return await next(call);
        } catch (err) {
          if (!isOverLimitError(err)) {
            throw err;
          }

          // The server says the session is over its quota, whatever the local count thinks, so
          // every further call on this instance has to wait out a whole window.
          budget?.exhaust();

          if (attempt >= retries) {
            throw err;
          }

          if (!budget) {
            await sleep(windowMs, call.signal);
          }
        }
      }
    };
  };
}

function isMultiCall(call: Call) {
  return call.method === "ExecuteMultiCall";
}

/**
 * Gets the number of JSON-RPC calls the given call is charged for.
 *
 * @param call - The call to weigh.
 * @returns - The number of entries of an `ExecuteMultiCall`, `1` otherwise.
 */
function getWeight(call: Call) {
  if (isMultiCall(call)) {
    const calls = call.params?.calls;

    if (Array.isArray(calls)) {
      return calls.length;
    }
  }

  return 1;
}

/**
 * Creates a gate that runs at most `max` tasks at once; the rest wait in arrival order.
 *
 * @param max - The number of tasks allowed in flight.
 */
function createGate(max: number) {
  let active = 0;
  const waiters: (() => void)[] = [];

  return async function run<T>(task: () => Promise<T>): Promise<T> {
    if (active < max) {
      active++;
    } else {
      // The finishing task hands its slot over directly, so `active` is not touched here.
      await new Promise<void>((resolve) => waiters.push(resolve));
    }

    try {
      return await task();
    } finally {
      const waiter = waiters.shift();

      if (waiter) {
        waiter();
      } else {
        active--;
      }
    }
  };
}
