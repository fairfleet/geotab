import { nanoid } from "nanoid/non-secure";
import { GeotabError } from "../GeotabError";
import { Credentials } from "../types";
import fetch from "cross-fetch";

export interface RpcCall {
  method: string;
  params: Record<string, unknown>;
}

/**
 * Gets a function that can be used to POST JSONRPC calls.
 *
 * @param url - The URL to post to.
 * @param headers - The headers to supply with the request.
 * @param credentials - The credentials to use for authentication.
 * @param parseJSON - The function to use to parse the JSON response.
 * @returns A function that can be used to post JSONRPC calls.
 */
export function getCallMany(
  url: string,
  headers: HeadersInit | undefined,
  credentials: Credentials | undefined,
  parseJSON: typeof JSON.parse
) {
  function getBody(...calls: RpcCall[]): unknown {
    if (calls.length > 1) {
      return getBody({
        method: "ExecuteMultiCall",
        params: {
          calls: calls.map((call) => ({ method: call.method, params: call.params })),
          credentials,
        },
      });
    }

    const first = calls[0];
    return {
      id: nanoid(),
      method: first.method,
      params: {
        ...first.params,
        credentials,
      },
      jsonrpc: "2.0",
    };
  }

  /**
   * Posts a JSONRPC request to the configured url.
   *
   * @param calls The JSONRPC calls to post.
   * @param signal The abort signal.
   * @returns The JSONRPC response result.
   * @throws {GeotabError} If the JSONRPC response contains an error.
   * @throws {Error} If the HTTP status indicates a failure occurred.
   */
  return async function callMany(calls: RpcCall[], signal?: AbortSignal) {
    const body = getBody(...calls);
    const httpResponse = await fetch(url, {
      body: JSON.stringify(body),
      headers: headers,
      method: "POST",
      signal,
    });

    const rpcResponse = parseJSON(await httpResponse.text()) as Record<string, unknown>;
    if (rpcResponse.error) {
      throw new GeotabError(rpcResponse.error);
    }

    return rpcResponse.result;
  };
}
