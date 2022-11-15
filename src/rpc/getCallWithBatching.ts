import { getCallMany, RpcCall } from "./getCallMany";

export function getCallWithBatching(
  callQueueMaxSize: number,
  callQueueBufferTimeMs: number,
  callMany: ReturnType<typeof getCallMany>
) {
  let callQueue: BatchedRpcCall[] = [];
  let callQueueTimeout: NodeJS.Timeout | undefined;

  function touchCallQueue() {
    if (callQueue.length >= callQueueMaxSize) {
      // If a timeout is pending, clear it.
      if (callQueueTimeout !== undefined) {
        clearTimeout(callQueueTimeout);
      }

      return flushCallQueue();
    } else {
      callQueueTimeout ??= setTimeout(() => {
        // Cleanup the timeout handle.
        callQueueTimeout = undefined;
        flushCallQueue();
      }, callQueueBufferTimeMs);
    }
  }

  async function flushCallQueue() {
    // Clone the call queue and clear the shared queue allowing calls to queue.
    const queue = callQueue;
    const abortController = new AbortController();

    callQueue = [];

    if (queue.length === 0) {
      return;
    }

    // Remove any calls that have been aborted, otherwise add an event listener to each call's
    // signal to abort the entire request before it is sent.
    for (let i = queue.length; i > 0; i--) {
      const call = queue[i - 1];
      const signal = call.signal;

      if (signal === undefined) {
        continue;
      }

      try {
        signal.throwIfAborted();

        const onAbort = () => {
          abortController.abort();
          signal.removeEventListener("abort", onAbort);
        };

        signal.addEventListener("abort", onAbort);
      } catch (err) {
        call.reject(err);
        queue.splice(i - 1, 1);
      }
    }

    try {
      const response = await callMany(queue, abortController.signal);
      handleResponse(response, queue);
    } catch (error) {
      if (abortController.signal.aborted) {
        // If the error was due to an abort it is likely that the abort was triggered for a single
        // call.  If this is the case we must attempt to re-queue the calls that were not aborted.
        for (const call of queue) {
          if (!call.signal?.aborted) {
            callQueue.push(call);
            touchCallQueue();
          } else {
            call.reject(error);
          }
        }
      } else {
        // Notify all buffered requests that an unrecoverable error occurred.
        for (const entry of queue) {
          entry.reject(error);
        }
      }
    }
  }

  /**
   * Queues a JSONRPC call to be executed and returns a {@link Promise} when the call is complete.
   *
   * @param method - The name of the method to call.
   * @param params - The parameters to supply to the method.
   * @param signal - The optional abort signal.
   * @returns - A {@link Promise} that resolves with the result of the call.
   */
  return function call<TResult>(
    method: string,
    params: Record<string, unknown>,
    signal?: AbortSignal
  ): Promise<TResult> {
    return new Promise((resolve, reject) => {
      callQueue.push({ signal, method, params, resolve, reject });
      touchCallQueue();
    });
  };
}

interface BatchedRpcCall extends RpcCall {
  signal?: AbortSignal;
  resolve(result: unknown): void;
  reject(error: unknown): void;
}

function handleResponse(response: unknown, queue: BatchedRpcCall[]) {
  if (queue.length === 1) {
    return queue[0].resolve(response as never);
  }

  if (!Array.isArray(response)) {
    throw new Error(`'ExecuteMultiCall' response returned a non-array type`);
  }

  // We also expect the response array to as long as the queue array, otherwise we
  // may not be able to accurately map the response to the response handler.
  if (response.length !== queue.length) {
    throw new Error(
      `'ExecuteMultiCall' response returned an array of length ${response.length}, expected ${queue.length}`
    );
  }

  for (let i = 0; i < queue.length; i++) {
    queue[i].resolve(response[i] as never);
  }
}
