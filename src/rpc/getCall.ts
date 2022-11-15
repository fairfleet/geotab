import { getCallMany } from "./getCallMany";

export interface RpcCall {
  method: string;
  params: Record<string, unknown>;
}

/**
 * Gets a function that can be used to POST JSONRPC calls.
 *
 * @param callMany - The callMany function.
 * @returns A function that can be used to post JSONRPC calls.
 */
export function getCall(callMany: ReturnType<typeof getCallMany>) {
  /**
   * Executes a JSONRPC call and returns a {@link Promise} when the call is complete.
   *
   * @param method - The name of the method to call.
   * @param params - The parameters to supply to the method.
   * @returns - A {@link Promise} that resolves with the result of the call.
   */
  return async function call<TResult>(
    method: string,
    params: Record<string, unknown>
  ): Promise<TResult> {
    return (await callMany([{ method, params }])) as TResult;
  };
}
