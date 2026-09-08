import { abortError } from "./abortError";

/**
 * Geotab enforces a rolling "maximum admitted 1000 per 1m" limit on API calls, and every call
 * inside an `ExecuteMultiCall` counts individually. A {@link CallBudget} is the meter for that
 * allowance: callers announce how many calls they are about to make and are held back until doing
 * so keeps the rolling window under the limit.
 */
export interface CallBudget {
  /**
   * Resolves once issuing `weight` further calls keeps the rolling window under the limit.
   *
   * @param weight - How many API calls the caller is about to make.
   * @param signal - Aborts the wait.
   * @throws {RangeError} Synchronously, when `weight` exceeds the whole budget and could never fit.
   */
  acquire(weight: number, signal?: AbortSignal): Promise<void>;
  /**
   * Marks the window as spent, so no call is admitted until a full window has passed.
   *
   * @remarks
   * Used when the server reports the quota as exceeded although the local count had room, which
   * happens when other clients share the session.
   */
  exhaust(): void;
}

/** An abortable wait. Injected so the waiting behaviour can be tested without spending time. */
export type Sleep = (ms: number, signal?: AbortSignal) => Promise<void>;

export interface CallBudgetOptions {
  /** Length of the rolling window in milliseconds. */
  windowMs?: number;
  /** How many calls may be issued within one window. */
  maxCalls?: number;
  /** Clock source, injectable for tests. */
  now?: () => number;
  /** Wait implementation, injectable for tests. */
  sleep?: Sleep;
  /** Called before each wait with its length and the weight that is waiting. */
  onWait?: (ms: number, weight: number) => void;
}

export const DEFAULT_WINDOW_MS = 60_000;

/**
 * Geotab's documented ceiling is 1000 calls per minute. Staying a little under it leaves headroom
 * for other clients sharing the session.
 */
export const DEFAULT_MAX_CALLS = 900;

/** Added to each computed wait so the window has demonstrably rolled once the wait is over. */
const WAIT_MARGIN_MS = 25;

/** Calls issued at the same moment, counted together rather than one entry each. */
interface CallGroup {
  at: number;
  count: number;
}

export function defaultSleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(abortError(signal));
      return;
    }

    const onAbort = () => {
      clearTimeout(timeout);
      reject(abortError(signal as AbortSignal));
    };

    const timeout = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);

    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

/**
 * Creates a {@link CallBudget} with a sliding window.
 *
 * @param options - The budget options.
 * @returns - The {@link CallBudget}.
 */
export function createCallBudget(options: CallBudgetOptions = {}): CallBudget {
  const windowMs = options.windowMs ?? DEFAULT_WINDOW_MS;
  const maxCalls = options.maxCalls ?? DEFAULT_MAX_CALLS;
  const now = options.now ?? Date.now;
  const sleep = options.sleep ?? defaultSleep;
  const onWait = options.onWait;

  /** Calls counted against the current window, oldest first. */
  const groups: CallGroup[] = [];
  /** Index of the oldest live entry. Advancing it avoids an O(n) shift per expiry. */
  let oldest = 0;
  /** Running sum of the live entries' counts. */
  let live = 0;

  function dropExpired(current: number): void {
    while (oldest < groups.length && current - groups[oldest].at >= windowMs) {
      live -= groups[oldest].count;
      oldest++;
    }
    // Reclaim the consumed prefix once it dominates, so the array cannot grow without bound.
    if (oldest > 0 && oldest * 2 >= groups.length) {
      groups.splice(0, oldest);
      oldest = 0;
    }
  }

  function charge(current: number, count: number): void {
    const last = groups[groups.length - 1];
    if (last !== undefined && last.at === current) {
      last.count += count;
    } else {
      groups.push({ at: current, count });
    }
    live += count;
  }

  return {
    acquire(weight, signal) {
      // A caller asking for more than the whole allowance can never fit, and clamping would let
      // an oversized request through; refuse it up front so the caller can split it.
      if (weight > maxCalls) {
        throw new RangeError(
          `Cannot acquire ${weight} calls: the budget admits at most ${maxCalls} per window`
        );
      }

      return admit(Math.max(weight, 1), signal);
    },

    exhaust() {
      const current = now();
      dropExpired(current);
      // Charge a whole window's worth so that nothing fits until this moment has aged out,
      // regardless of what was recorded before it.
      charge(current, maxCalls);
    },
  };

  async function admit(effectiveWeight: number, signal?: AbortSignal): Promise<void> {
    for (;;) {
      if (signal?.aborted) {
        throw abortError(signal);
      }

      const current = now();
      dropExpired(current);

      if (live + effectiveWeight <= maxCalls) {
        charge(current, effectiveWeight);
        return;
      }

      // Only time passing can free capacity, and the oldest entry's expiry is exactly when
      // the next capacity appears, so wait for it instead of waking up repeatedly to look.
      const untilOldestExpires = windowMs - (current - groups[oldest].at) + WAIT_MARGIN_MS;
      const ms = Math.max(WAIT_MARGIN_MS, untilOldestExpires);

      onWait?.(ms, effectiveWeight);
      await sleep(ms, signal);
    }
  }
}
