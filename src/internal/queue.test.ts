import { combineSignals, queue } from "./queue";

const getResult = vi.fn();
const queueMaxSize = 5;
const queueBufferTime = 9999_9999;
const callQueued = queue({ queueMethods: ["Test"], queueMaxSize, queueBufferTime })(getResult);

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.resetAllMocks();
});

test("Should return result", async () => {
  getResult.mockResolvedValue("test");

  const call = callQueued({ method: "Test" });

  vi.advanceTimersToNextTimer();

  await expect(call).resolves.toBe("test");
});

test("Should throw on error result", async () => {
  getResult.mockRejectedValueOnce("test");

  const call = callQueued({ method: "Test" });

  vi.advanceTimersToNextTimer();

  await expect(call).rejects.toThrow("test");
});

test("Should throw on non-array result", async () => {
  getResult.mockResolvedValueOnce("test");

  const call1 = callQueued({ method: "Test" });
  const call2 = callQueued({ method: "Test" });

  vi.advanceTimersToNextTimer();

  await expect(call1).rejects.toThrow(
    "Unexpected JSON-RPC response, expected an array of 2 results (aborted entries excluded)"
  );
  await expect(call2).rejects.toThrow(
    "Unexpected JSON-RPC response, expected an array of 2 results (aborted entries excluded)"
  );
});

test("Should throw on abort", async () => {
  getResult.mockResolvedValueOnce("test");

  const controller = new AbortController();
  const call = callQueued({ method: "Test", signal: controller.signal });

  controller.abort();

  vi.advanceTimersToNextTimer();

  await expect(call).rejects.toThrow();
});

test("Should return all results", async () => {
  getResult.mockResolvedValueOnce(["test1", "test2", "test3"]);

  const call1 = callQueued({ method: "Test" });
  const call2 = callQueued({ method: "Test" });
  const call3 = callQueued({ method: "Test" });

  vi.advanceTimersToNextTimer();

  await expect(call1).resolves.toBe("test1");
  await expect(call2).resolves.toBe("test2");
  await expect(call3).resolves.toBe("test3");
});

test("Should throw all on JSON-RPC error", async () => {
  getResult.mockRejectedValueOnce("test");

  const call1 = callQueued({ method: "Test" });
  const call2 = callQueued({ method: "Test" });
  const call3 = callQueued({ method: "Test" });

  vi.advanceTimersToNextTimer();

  await expect(call1).rejects.toThrow("test");
  await expect(call2).rejects.toThrow("test");
  await expect(call3).rejects.toThrow("test");
});

test("Should flush queue on overflow", async () => {
  getResult.mockResolvedValueOnce(Array.from({ length: queueMaxSize }, () => "test"));

  const calls = Array.from({ length: queueMaxSize }, () => callQueued({ method: "Test" }));
  const now = Date.now();

  for (const call of calls) {
    await expect(call).resolves.toBe("test");
  }

  expect(Date.now() - now).toBeLessThan(queueMaxSize);
});

test("Should flush queue on overflow after timeout", async () => {
  // Flush queue using timeout
  callQueued({ method: "Test" });
  vi.advanceTimersToNextTimer();

  // Flush queue using overflow
  getResult.mockResolvedValueOnce(Array.from({ length: queueMaxSize }, () => "test"));

  const calls = Array.from({ length: queueMaxSize }, () => callQueued({ method: "Test" }));

  for (const call of calls) {
    await expect(call).resolves.toBe("test");
  }
});

test("Should flush queue on timeout after overflow", async () => {
  // Flush queue using overflow
  getResult.mockResolvedValueOnce(Array.from({ length: queueMaxSize }, () => "test"));
  await Promise.all(Array.from({ length: queueMaxSize }, () => callQueued({ method: "Test" })));

  // Flush queue using timeout
  getResult.mockResolvedValueOnce("test");
  const call = callQueued({ method: "Test" });

  vi.advanceTimersToNextTimer();

  await expect(call).resolves.toBe("test");
});

test("Should flush queue on overflow with abort", async () => {
  const controller = new AbortController();

  getResult.mockResolvedValueOnce(Array.from({ length: queueMaxSize }, () => "test"));

  // Call with an abort signal
  controller.abort();
  callQueued({ method: "Test", signal: controller.signal }).catch(noop);

  // Queue enough calls to trigger a flush
  const calls = Array.from({ length: queueMaxSize - 1 }, () => callQueued({ method: "Test" }));

  for (const call of calls) {
    await expect(call).resolves.toBe("test");
  }
});

test("Should flush queue on timeout with abort", async () => {
  const controller = new AbortController();

  getResult.mockResolvedValueOnce("test");

  // Call with an abort signal
  controller.abort();
  callQueued({ method: "Test", signal: controller.signal }).catch(noop);

  // Queue a single call
  const call = callQueued({ method: "Test" });

  // Flush queue using timeout
  vi.advanceTimersToNextTimer();

  await expect(call).resolves.toBe("test");
});

test("First request should define timeout", async () => {
  getResult.mockResolvedValueOnce(["test1", "test2"]);

  // Make a call and advance the timer
  const call1 = callQueued({ method: "Test" });
  expect(getResult).toHaveBeenCalledTimes(0);
  vi.advanceTimersByTime(queueBufferTime / 2);

  // Make a second call and advance the timer past the buffer time
  const call2 = callQueued({ method: "Test" });
  expect(getResult).toHaveBeenCalledTimes(0);
  vi.advanceTimersByTime(queueBufferTime / 2);

  await expect(call1).resolves.toBe("test1");
  await expect(call2).resolves.toBe("test2");
});

test("Should serialize only method+params into ExecuteMultiCall (no signal/resolve/reject)", async () => {
  getResult.mockResolvedValueOnce(["a", "b"]);
  const controller = new AbortController();

  const c1 = callQueued({ method: "Test", params: { x: 1 }, signal: controller.signal });
  const c2 = callQueued({ method: "Test", params: { y: 2 } });

  vi.advanceTimersToNextTimer();
  await Promise.all([c1, c2]);

  expect(getResult).toHaveBeenCalledWith({
    method: "ExecuteMultiCall",
    params: {
      calls: [
        { method: "Test", params: { x: 1 } },
        { method: "Test", params: { y: 2 } },
      ],
    },
  });
});

test("Should reject an entry aborted while its flush is in flight instead of resolving it", async () => {
  let resolveResults: (value: unknown) => void = noop;
  getResult.mockReturnValueOnce(new Promise((resolve) => (resolveResults = resolve)));
  const controller = new AbortController();

  const aborted = callQueued({ method: "Test", signal: controller.signal });
  const kept = callQueued({ method: "Test" });
  vi.advanceTimersToNextTimer();

  controller.abort();
  resolveResults(["a", "b"]);

  await expect(aborted).rejects.toThrow();
  await expect(kept).resolves.toBe("b");
});

test("Should give the multicall a signal that aborts once every entry has aborted", async () => {
  let resolveResults: (value: unknown) => void = noop;
  getResult.mockReturnValueOnce(new Promise((resolve) => (resolveResults = resolve)));
  const controller1 = new AbortController();
  const controller2 = new AbortController();

  const call1 = callQueued({ method: "Test", signal: controller1.signal });
  const call2 = callQueued({ method: "Test", signal: controller2.signal });
  vi.advanceTimersToNextTimer();

  const flushSignal = getResult.mock.calls[0][0].signal as AbortSignal;
  expect(flushSignal).toBeInstanceOf(AbortSignal);
  expect(flushSignal.aborted).toBe(false);

  controller1.abort();
  expect(flushSignal.aborted).toBe(false);

  controller2.abort();
  expect(flushSignal.aborted).toBe(true);

  resolveResults(["a", "b"]);
  await expect(call1).rejects.toThrow();
  await expect(call2).rejects.toThrow();
});

test("Should give the multicall no signal when an entry cannot be aborted", async () => {
  getResult.mockResolvedValueOnce(["a", "b"]);
  const controller = new AbortController();

  const call1 = callQueued({ method: "Test", signal: controller.signal });
  const call2 = callQueued({ method: "Test" });
  vi.advanceTimersToNextTimer();
  await Promise.all([call1, call2]);

  expect(getResult.mock.calls[0][0].signal).toBeUndefined();
});

describe("combineSignals", () => {
  test("Should count an entry that was already aborted so the rest can still abort the whole", () => {
    const aborted = new AbortController();
    const live = new AbortController();
    aborted.abort();

    const combined = combineSignals([aborted.signal, live.signal]);

    expect(combined?.signal.aborted).toBe(false);
    live.abort();
    expect(combined?.signal.aborted).toBe(true);
  });

  test("Should abort immediately when every entry was already aborted", () => {
    const controller = new AbortController();
    controller.abort("gone");

    const combined = combineSignals([controller.signal, controller.signal]);

    expect(combined?.signal.aborted).toBe(true);
    expect(combined?.signal.reason).toBe("gone");
  });

  test("Should return undefined when an entry has no signal", () => {
    expect(combineSignals([new AbortController().signal, undefined])).toBeUndefined();
  });
});

function noop() {
  // ignore
}
