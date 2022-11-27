import { Credentials, Middleware } from ".";

/**
 * The {@link Geotab} options.
 */

export interface GeotabOptions {
  /**
   * The Geotab API url.
   *
   * @remarks Defaults to "https://my.geotab.com/apiv1".
   */
  url?: string;

  /** The JSON-RPC call middleware to apply. */
  middleware?: Middleware[];

  /** The headers to supply for each POST request. */
  headers?: HeadersInit;

  /** The Geotab credentials to supply to each JSON-RPC call. */
  credentials?: Credentials;

  /**
   * The maximum number of calls to queue before flushing.
   *
   * @remarks Defaults to 100.
   */
  callQueueMaxSize?: number;
  /**
   * The number of milliseconds to wait before flushing the call queue.
   *
   * @remarks Defaults to 1500ms
   */
  callQueueBufferTime?: number;

  /**
   * The function that parses JSON-RPC responses.
   *
   * @remarks Defaults to a function that parses dates in ISO 8601 format.
   */
  parseJSON?: typeof JSON.parse;
}
