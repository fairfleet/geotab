import { nanoid } from "nanoid/non-secure";
import { GeotabOptions } from "../Geotab";
import { CallQueueEntry } from "./CallQueueEntry";
import { getCall } from "./getCall";
import { getExecuteMultiCall } from "./getExecuteMultiCall";

type GetCallQueuedOptions = Pick<GeotabOptions, "callQueueMaxSize" | "callQueueBufferTime">;

export function getCallQueued(
  call: ReturnType<typeof getCall>,
  executeMultiCall: ReturnType<typeof getExecuteMultiCall>,
  options: GetCallQueuedOptions
) {
  const callQueueMaxSize = options.callQueueMaxSize ?? 100;
  const callQueueBufferTime = options.callQueueBufferTime ?? 1500;

  let queue: CallQueueEntry[] = [];
  let timeout: NodeJS.Timeout | undefined;

  /**
   * Flushes the call queue and emits the results to the call queue entries' promise callbacks.
   */

  async function flushQueue() {
    const calls = queue;
    queue = [];

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
  /*@__INLINE__ */
  async function getCallsResults(calls: CallQueueEntry[]) {
    if (calls.length === 0) {
      return [];
    }

    if (calls.length === 1) {
      return [await call(calls[0].method, calls[0].params)];
    }

    return await executeMultiCall(calls);
  }

  return function callQueued<TResult>(
    method: string,
    params: Record<string, unknown>,
    signal?: AbortSignal
  ) {
    return new Promise<unknown>((resolve, reject) => {
      queue.push({
        id: nanoid(),
        method,
        params,
        resolve,
        reject,
        signal,
      });

      if (timeout) {
        clearTimeout(timeout);
        timeout = undefined;
      }

      if (queue.length >= callQueueMaxSize) {
        flushQueue();
      } else {
        timeout = setTimeout(flushQueue, callQueueBufferTime);
      }
    }) as Promise<TResult>;
  };
}
