import { createCallBudget } from "./callBudget";

/**
 * A controllable clock: `sleep` advances time instead of waiting, so the tests assert the
 * budget's waiting behaviour without spending real time.
 */
function makeClock() {
  let current = 0;
  const sleeps: number[] = [];
  return {
    now: () => current,
    sleeps,
    sleep: (ms: number, signal?: AbortSignal) => {
      sleeps.push(ms);
      if (signal?.aborted) {
        return Promise.reject(new Error("aborted"));
      }
      current += ms;
      return Promise.resolve();
    },
    advance: (ms: number) => {
      current += ms;
    },
  };
}

test("Should admit calls up to the limit without waiting", async () => {
  const clock = makeClock();
  const budget = createCallBudget({ windowMs: 1000, maxCalls: 3, ...clock });

  await budget.acquire(2);
  await budget.acquire(1);

  expect(clock.sleeps).toEqual([]);
});

test("Should wait until the window has rolled past the oldest call", async () => {
  const clock = makeClock();
  const budget = createCallBudget({ windowMs: 1000, maxCalls: 3, ...clock });

  await budget.acquire(3);
  expect(clock.sleeps).toEqual([]);

  await budget.acquire(1);

  expect(clock.sleeps.length).toBeGreaterThan(0);
  expect(clock.now()).toBeGreaterThanOrEqual(1000);
});

test("Should admit immediately once the window has rolled on its own", async () => {
  const clock = makeClock();
  const budget = createCallBudget({ windowMs: 1000, maxCalls: 3, ...clock });

  await budget.acquire(3);
  clock.advance(1000);
  await budget.acquire(3);

  expect(clock.sleeps).toEqual([]);
});

test("Should throw synchronously when a single acquire is larger than the whole budget", () => {
  const clock = makeClock();
  const budget = createCallBudget({ windowMs: 1000, maxCalls: 3, ...clock });

  expect(() => budget.acquire(4)).toThrow(RangeError);
  expect(clock.sleeps).toEqual([]);
});

test("Should admit an acquire of exactly the whole budget", async () => {
  const clock = makeClock();
  const budget = createCallBudget({ windowMs: 1000, maxCalls: 3, ...clock });

  await budget.acquire(3);

  expect(clock.sleeps).toEqual([]);
});

test("Should throw when the signal is already aborted", async () => {
  const clock = makeClock();
  const budget = createCallBudget({ windowMs: 1000, maxCalls: 3, ...clock });
  const controller = new AbortController();
  controller.abort();

  await expect(budget.acquire(1, controller.signal)).rejects.toThrow();
  expect(clock.sleeps).toEqual([]);
});

test("Should stop waiting when the signal aborts mid-wait", async () => {
  const clock = makeClock();
  const budget = createCallBudget({ windowMs: 1000, maxCalls: 1, ...clock });
  const controller = new AbortController();

  await budget.acquire(1);
  controller.abort();

  await expect(budget.acquire(1, controller.signal)).rejects.toThrow();
});

test("Should wait exactly once for the window instead of waking up repeatedly", async () => {
  const clock = makeClock();
  const budget = createCallBudget({ windowMs: 60_000, maxCalls: 2, ...clock });

  await budget.acquire(2);
  await budget.acquire(1);

  expect(clock.sleeps).toHaveLength(1);
  expect(clock.sleeps[0]).toBeGreaterThanOrEqual(60_000);
});

test("Should count a whole batch against the window", async () => {
  const clock = makeClock();
  const budget = createCallBudget({ windowMs: 60_000, maxCalls: 100, ...clock });

  await budget.acquire(100);
  expect(clock.sleeps).toEqual([]);

  await budget.acquire(100);
  expect(clock.sleeps).toHaveLength(1);
  expect(clock.now()).toBeGreaterThanOrEqual(60_000);
});

test("Should free capacity group by group as each batch expires", async () => {
  const clock = makeClock();
  const budget = createCallBudget({ windowMs: 1000, maxCalls: 4, ...clock });

  await budget.acquire(2);
  clock.advance(600);
  await budget.acquire(2);
  expect(clock.sleeps).toEqual([]);

  // Only the first batch has aged out by now, so exactly its two calls come free.
  clock.advance(400);
  await budget.acquire(2);
  expect(clock.sleeps).toEqual([]);
});

test("Should make the next acquire wait for a full window after exhaust", async () => {
  const clock = makeClock();
  const budget = createCallBudget({ windowMs: 1000, maxCalls: 10, ...clock });

  await budget.acquire(1);
  clock.advance(500);
  budget.exhaust();

  await budget.acquire(1);

  expect(clock.sleeps.length).toBeGreaterThan(0);
  expect(clock.now()).toBeGreaterThanOrEqual(1500);
});

test("Should not count more than the limit when exhausted twice", async () => {
  const clock = makeClock();
  const budget = createCallBudget({ windowMs: 1000, maxCalls: 10, ...clock });

  budget.exhaust();
  budget.exhaust();
  clock.advance(1000);

  await budget.acquire(10);

  expect(clock.sleeps).toEqual([]);
});
