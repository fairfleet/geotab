import { CallQueueEntry } from "./CallQueueEntry";

export interface CallQueue {
  /** The call queue entries. */
  entries: CallQueueEntry[];
  /** The timeout handle used to flush the queue. */
  timeout?: number;
}
