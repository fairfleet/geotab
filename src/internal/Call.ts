export interface Call<TResult = unknown> {
  /** The JSON-RPC method to call. */
  method: string;

  /** The JSON-RPC method parameters. */
  params: Record<string, unknown>;
}
