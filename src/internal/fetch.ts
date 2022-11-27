import { fetch as http } from "cross-fetch";
import { nanoid } from "nanoid/non-secure";
import { GeotabOptions } from "../types/GeotabOptions";
import { GeotabError } from "../GeotabError";
import { parseJsonWithDates } from "./parseJsonWithDates";
import { Call } from "../types";

export function fetch(options: GeotabOptions) {
  const url = options.url ?? "https://my.geotab.com/apiv1";
  const parseJSON = options.parseJSON ?? parseJsonWithDates;

  return async function call({ method, params, signal }: Call) {
    const httpResponse = await http(url, {
      body: JSON.stringify({
        id: nanoid(),
        method,
        params: { ...params, credentials: options.credentials },
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

    return jsonRpcResponse.result;
  };
}
