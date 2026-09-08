import { Credentials, Middleware } from ".";

/**
 * The rolling call budget applied to every request the client sends.
 */
export interface RateLimitOptions {
  /**
   * The number of calls admitted per window.
   *
   * @remarks
   * Defaults to 900, a margin below Geotab's limit of 1000 calls per minute. Must be an integer
   * of at least 1 and no smaller than `queueMaxSize`, otherwise a flush could never fit.
   */
  maxCalls?: number;
  /**
   * The length of the rolling window in milliseconds.
   *
   * @remarks Defaults to 60000. Must be a finite number greater than 0.
   */
  windowMs?: number;
}

/**
 * A rate limiting event, see {@link GeotabOptions.onRateLimit}.
 */
export interface RateLimitEvent {
  /**
   * `"wait"` when a request is held until the budget window rolls, `"retry"` when a request
   * failed with an `OverLimitException` and is about to be retried.
   */
  kind: "wait" | "retry";
  /** The wait in milliseconds before the request is sent. */
  ms: number;
  /** The number of JSON-RPC calls the request carries. */
  weight: number;
}

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
   * The rolling call budget, or `false` to disable it.
   *
   * @remarks
   * Defaults to `{ maxCalls: 900, windowMs: 60000 }`.
   *
   * Geotab admits roughly 1000 calls per rolling minute per session, and every entry inside an
   * `ExecuteMultiCall` counts individually. Before a request is sent, the client charges the
   * number of JSON-RPC calls it carries against the budget and waits for the window to roll if
   * the budget is exhausted. A request carrying more calls than `maxCalls` is rejected with a
   * `RangeError` rather than sent.
   *
   * When the server reports an `OverLimitException` anyway, the whole window is marked as spent
   * and every call on this instance waits a full window, because the quota is session-wide.
   *
   * The budget is per client instance. Other clients or browser tabs sharing the same session
   * are not visible to it, so keep a margin below the real limit.
   */
  rateLimit?: RateLimitOptions | false;

  /**
   * The number of extra attempts after a call fails with an `OverLimitException`.
   *
   * @remarks
   * Defaults to 1, or to 0 when `rateLimit` is `false` so calls fail fast. Each retry first
   * waits for a full window and is charged against the budget again. A successful retry is
   * transparent to the caller; once the retries are spent, the original {@link GeotabError} is
   * thrown. Must be a non-negative integer or `Infinity`.
   */
  retryOnOverLimit?: number;

  /**
   * The maximum number of `ExecuteMultiCall` requests in flight at once.
   *
   * @remarks
   * Defaults to unlimited. Must be an integer of at least 1. Direct calls are not capped. A
   * request that never completes keeps its slot, as the client applies no fetch timeout, and
   * waiting requests are not guaranteed to be admitted in arrival order.
   */
  maxConcurrentFlushes?: number;

  /**
   * Called whenever rate limiting delays a request, see {@link RateLimitEvent}.
   *
   * @remarks Useful for logging or surfacing a "waiting for API quota" state to the user.
   */
  onRateLimit?: (event: RateLimitEvent) => void;

  /**
   * The function that parses JSON-RPC responses.
   *
   * @remarks Defaults to a function that parses dates in ISO 8601 format.
   */
  parseJSON?: typeof JSON.parse;
}
