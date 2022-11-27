import fetch from "cross-fetch";
import { nanoid } from "nanoid/non-secure";
import { GeotabOptions } from "../Geotab";
import { GeotabError } from "../GeotabError";
import { parseJsonWithDates } from "./parseJsonWithDates";

type GetCallOptions = Pick<GeotabOptions, "credentials" | "headers" | "url" | "parseJSON">;

export function getCall(options: GetCallOptions) {
  return async function call<TResult>(
    method: string,
    params: Record<string, unknown>,
    signal?: AbortSignal
  ) {
    const url = options.url ?? "https://my.geotab.com/apiv1";
    const parseJSON = options.parseJSON ?? parseJsonWithDates;

    const httpResponse = await fetch(url, {
      body: JSON.stringify({
        id: nanoid(),
        method,
        params: {
          ...params,
          credentials: options.credentials,
        },
        jsonrpc: "2.0",
      }),
      signal,
      method: "POST",
      headers: options.headers,
    });

    if (!httpResponse.ok) {
      throw new Error(`HTTP status ${httpResponse.status}`);
    }

    const httpBody = await httpResponse.text();
    const jsonRpcResponse = parseJSON(httpBody) as Record<string, unknown>;

    if (jsonRpcResponse.error) {
      throw new GeotabError(jsonRpcResponse.error);
    }

    return jsonRpcResponse.result as TResult;
  };
}
