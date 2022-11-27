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
   * The list of method names to queue.
   *
   * @remarks
   * Defaults to `["Get", "GetAddresses", "GetCountOf", "GetFeed", "GetVersion", "GetVersionInformation"]`.
   *
   * Ideally, methods that are not idempotent should not be queued, rather should be
   * executed immediately.
   */
  queueMethods?: string[];

  /**
   * The maximum number of calls to queue before flushing.
   *
   * @remarks Defaults to 100.
   */
  queueMaxSize?: number;
  /**
   * The number of milliseconds to wait before flushing the call queue.
   *
   * @remarks Defaults to 1500ms
   */
  queueBufferTime?: number;

  /**
   * The function that parses JSON-RPC responses.
   *
   * @remarks Defaults to a function that parses dates in ISO 8601 format.
   */
  parseJSON?: typeof JSON.parse;
}
