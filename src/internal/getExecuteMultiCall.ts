import { getCall } from "../internal/getCall";
import { Call } from "./Call";

type CallResults<TCalls extends Call[]> = {
  [K in keyof TCalls]: TCalls[K] extends Call<infer TResult> ? TResult : never;
};

export function getExecuteMultiCall(call: ReturnType<typeof getCall>) {
  return function executeMultiCall<TCalls extends Call[]>(calls: TCalls) {
    return call<CallResults<TCalls>>("ExecuteMultiCall", { calls });
  };
}
