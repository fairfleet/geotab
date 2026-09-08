import { GeotabOptions } from "../types/GeotabOptions";
import { Call, Next } from "../types";
import { abortError } from "./abortError";

interface CallQueueEntry<TResult = unknown> extends Call<TResult> {
  /** The resolve callback for the call {@link Promise}. */
  resolve: (value: TResult) => void;
  /** The reject callback for the call {@link Promise}. */
  reject: (reason?: unknown) => void;
}

export function queue(options: GeotabOptions) {
  const queueMaxSize = options.queueMaxSize ?? 100;
  const queueBufferTime = options.queueBufferTime ?? 1500;
  const queueMethods = options.queueMethods ?? [
    "Get",
    "GetAddresses",
    "GetCountOf",
    "GetFeed",
    "GetVersion",
    "GetVersionInformation",
  ];

  return function setup(next: Next) {
    let queue: CallQueueEntry[] = [];
    let timeout: NodeJS.Timeout | undefined;

    /**
     * Flushes the call queue and emits the results to the call queue entries' promise callbacks.
     */
    async function flushQueue() {
      const calls = queue;
      queue = [];

      clearTimeout(timeout);
      timeout = undefined;

      try {
        filterAborted(calls);

        const results = await getCallsResults(calls);

        if (!Array.isArray(results) || results.length < calls.length) {
          // `calls` no longer holds the entries `filterAborted` removed, so the count is
          // what was actually sent.
          throw new Error(
            `Unexpected JSON-RPC response, expected an array of ${calls.length} results ` +
              "(aborted entries excluded)"
          );
        }

        for (let i = 0; i < calls.length; i++) {
          const signal = calls[i].signal;

          // The caller may have given up while the multicall was held or in flight.
          if (signal?.aborted) {
            calls[i].reject(abortError(signal));
          } else {
            calls[i].resolve(results[i]);
          }
        }
      } catch (err) {
        for (const call of calls) {
          call.reject(err);
        }
      }
    }

    /**
     * Removes any calls that have been aborted from the given array and calls their reject handlers.
     *
     * @param calls - The array of calls to process.
     */
    function filterAborted(calls: CallQueueEntry[]) {
      for (let i = calls.length - 1; i >= 0; i--) {
        const call = calls[i];
        const signal = call.signal;

        if (signal === undefined) {
          continue;
        }

        try {
          if (signal.aborted) {
            throw new Error(signal.reason ?? "Call aborted");
          }
        } catch (err) {
          call.reject(err);
          calls.splice(i, 1);
        }
      }
    }

    /**
     * Gets the JSON-RPC results for the given calls.
     * @param calls - The calls to get the results for.
     * @returns - The JSON-RPC results.
     */
    async function getCallsResults(calls: CallQueueEntry[]) {
      if (calls.length === 0) {
        return [];
      }

      if (calls.length === 1) {
        return [await next(calls[0])];
      }

      const combined = combineSignals(calls.map((call) => call.signal));

      try {
        return await next({
          method: "ExecuteMultiCall",
          params: { calls: calls.map(({ method, params }) => ({ method, params })) },
          ...(combined && { signal: combined.signal }),
        });
      } finally {
        combined?.dispose();
      }
    }

    return async function middleware(call: Call) {
      if (!queueMethods.includes(call.method)) {
        return await next(call);
      }

      return new Promise((resolve, reject) => {
        queue.push({
          ...call,
          resolve,
          reject,
        });

        if (queue.length >= queueMaxSize) {
          flushQueue();
        } else {
          timeout ??= setTimeout(flushQueue, queueBufferTime);
        }
      });
    };
  };
}

/**
 * Combines the entries' signals into one that aborts once every entry has aborted, so a held or
 * waiting multicall can be cancelled when nobody is waiting for it anymore.
 *
 * @param signals - The entries' signals.
 * @returns - The combined signal and its cleanup, or `undefined` when an entry has no signal and
 * the multicall can therefore never be abandoned.
 */
export function combineSignals(signals: (AbortSignal | undefined)[]) {
  const unique = new Set<AbortSignal>();

  for (const signal of signals) {
    if (signal === undefined) {
      return undefined;
    }

    unique.add(signal);
  }

  const controller = new AbortController();
  let remaining = unique.size;

  function settle(signal: AbortSignal) {
    if (--remaining === 0) {
      controller.abort(signal.reason);
    }
  }

  function onAbort(this: AbortSignal) {
    settle(this);
  }

  for (const signal of unique) {
    // An already aborted signal never fires again, so it has to be counted right away.
    if (signal.aborted) {
      settle(signal);
    } else {
      signal.addEventListener("abort", onAbort, { once: true });
    }
  }

  return {
    signal: controller.signal,
    dispose() {
      for (const signal of unique) {
        signal.removeEventListener("abort", onAbort);
      }
    },
  };
}
