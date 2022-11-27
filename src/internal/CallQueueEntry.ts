import { Call } from "./Call";

export interface CallQueueEntry<TResult = unknown> extends Call<TResult> {
  /**
   * The call queue entry id.
   *
   * @remarks Used primarily for logging.
   */
  id: string;
  /** The optional abort signal. */
  signal?: AbortSignal;
  /** The resolve callback for the call {@link Promise}. */
  resolve: (value: TResult) => void;
  /** The reject callback for the call {@link Promise}. */
  reject: (reason?: unknown) => void;
}
