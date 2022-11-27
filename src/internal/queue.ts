import { GeotabOptions } from "../types/GeotabOptions";
import { Call, Next } from "../types";

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
          throw new Error(`Unexpected JSON-RPC response, expected an array #${calls.length}`);
        }

        for (let i = 0; i < calls.length; i++) {
          calls[i].resolve(results[i]);
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

      return await next({ method: "ExecuteMultiCall", params: { calls } });
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
