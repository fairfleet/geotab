import { GeotabOptions } from "../types/GeotabOptions";
import { Call, Next } from "../types";
import { isOverLimitError } from "../GeotabError";
import { abortError } from "./abortError";
import {
  createCallBudget,
  defaultSleep,
  DEFAULT_MAX_CALLS,
  DEFAULT_WINDOW_MS,
  Sleep,
} from "./callBudget";

/** Mirrors the default in `queue.ts`; needed here to check a flush fits the budget. */
const DEFAULT_QUEUE_MAX_SIZE = 100;

/** Clock and wait implementations, injectable for tests. */
export interface RateLimitDependencies {
  now?: () => number;
  sleep?: Sleep;
}

export function rateLimit(options: GeotabOptions, dependencies: RateLimitDependencies = {}) {
  validateOptions(options);

  const limit = options.rateLimit;
  // Without a budget there is nothing to pace a retry, so fail fast unless retries are asked for.
  const retries = options.retryOnOverLimit ?? (limit === false ? 0 : 1);
  const windowMs = (limit ? limit.windowMs : undefined) ?? DEFAULT_WINDOW_MS;
  const sleep = dependencies.sleep ?? defaultSleep;
  const onRateLimit = options.onRateLimit;
  const budget =
    limit === false
      ? undefined
      : createCallBudget({
          maxCalls: limit?.maxCalls,
          windowMs,
          ...dependencies,
          onWait: (ms, weight) => onRateLimit?.({ kind: "wait", ms, weight }),
        });
  const flushGate =
    options.maxConcurrentFlushes != null ? createGate(options.maxConcurrentFlushes) : undefined;

  return function setup(next: Next) {
    return async function middleware(call: Call) {
      const weight = getWeight(call);

      // The budget is charged right before the send, so a flush parked at the gate does not
      // hold a charge that ages while it waits. Charging sits inside the loop so a retry spends
      // budget again.
      async function send() {
        await budget?.acquire(weight, call.signal);
        return await next(call);
      }

      for (let attempt = 0; ; attempt++) {
        try {
          if (flushGate && isMultiCall(call)) {
            return await flushGate(send, call.signal);
          }

          return await send();
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

          onRateLimit?.({ kind: "retry", ms: windowMs, weight });

          if (!budget) {
            await sleep(windowMs, call.signal);
          }
        }
      }
    };
  };
}

/**
 * Rejects option values the limiter cannot honour.
 *
 * @param options - The options to check.
 * @throws {RangeError} When a value is out of range.
 */
function validateOptions(options: GeotabOptions) {
  const { rateLimit: limit, retryOnOverLimit, maxConcurrentFlushes } = options;

  if (limit !== false && limit !== undefined) {
    if (limit.maxCalls !== undefined && !isPositiveInteger(limit.maxCalls)) {
      throw new RangeError(`rateLimit.maxCalls must be an integer >= 1, got ${limit.maxCalls}`);
    }

    if (limit.windowMs !== undefined && !(Number.isFinite(limit.windowMs) && limit.windowMs > 0)) {
      throw new RangeError(`rateLimit.windowMs must be a finite number > 0, got ${limit.windowMs}`);
    }
  }

  if (
    retryOnOverLimit !== undefined &&
    retryOnOverLimit !== Infinity &&
    !(Number.isInteger(retryOnOverLimit) && retryOnOverLimit >= 0)
  ) {
    throw new RangeError(
      `retryOnOverLimit must be a non-negative integer or Infinity, got ${retryOnOverLimit}`
    );
  }

  if (maxConcurrentFlushes != null && !isPositiveInteger(maxConcurrentFlushes)) {
    throw new RangeError(
      `maxConcurrentFlushes must be an integer >= 1, got ${maxConcurrentFlushes}`
    );
  }

  if (limit !== false) {
    const maxCalls = limit?.maxCalls ?? DEFAULT_MAX_CALLS;
    const queueMaxSize = options.queueMaxSize ?? DEFAULT_QUEUE_MAX_SIZE;

    if (queueMaxSize > maxCalls) {
      throw new RangeError(
        `queueMaxSize (${queueMaxSize}) must not exceed rateLimit.maxCalls (${maxCalls}): ` +
          "a flush would produce an ExecuteMultiCall wider than the budget"
      );
    }
  }
}

function isPositiveInteger(value: number) {
  return Number.isInteger(value) && value >= 1;
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

  return async function run<T>(task: () => Promise<T>, signal?: AbortSignal): Promise<T> {
    if (active < max) {
      active++;
    } else {
      // The finishing task hands its slot over directly, so `active` is not touched here.
      await park(signal);
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

  function park(signal?: AbortSignal) {
    if (signal === undefined) {
      return new Promise<void>((resolve) => waiters.push(resolve));
    }

    return parkAbortable(signal);
  }

  function parkAbortable(signal: AbortSignal) {
    return new Promise<void>((resolve, reject) => {
      if (signal.aborted) {
        reject(abortError(signal));
        return;
      }

      const onAbort = () => {
        const index = waiters.indexOf(admit);
        if (index >= 0) {
          waiters.splice(index, 1);
        }
        reject(abortError(signal));
      };

      const admit = () => {
        signal.removeEventListener("abort", onAbort);
        resolve();
      };

      signal.addEventListener("abort", onAbort, { once: true });
      waiters.push(admit);
    });
  }
}
