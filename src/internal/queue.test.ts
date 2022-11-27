import { queue } from "./queue";

const getResult = vi.fn();
const callQueueMaxSize = 5;
const callQueueBufferTime = 9999_9999;
const callQueued = queue({ callQueueMaxSize, callQueueBufferTime })(getResult);

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

  await expect(call1).rejects.toThrow("Unexpected JSON-RPC response, expected an array #2");
  await expect(call2).rejects.toThrow("Unexpected JSON-RPC response, expected an array #2");
});

test("Should throw on abort", async () => {
  getResult.mockResolvedValueOnce("test");

  const controller = new AbortController();
  const call = callQueued({ method: "Test", signal: controller.signal });

  controller.abort();

  vi.advanceTimersToNextTimer();

  await expect(call).rejects.toThrow("Call aborted");
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
  getResult.mockResolvedValueOnce(Array.from({ length: callQueueMaxSize }, () => "test"));

  const calls = Array.from({ length: callQueueMaxSize }, () => callQueued({ method: "Test" }));
  const now = Date.now();

  for (const call of calls) {
    await expect(call).resolves.toBe("test");
  }

  expect(Date.now() - now).toBeLessThan(callQueueMaxSize);
});

test("Should flush queue on overflow after timeout", async () => {
  // Flush queue using timeout
  callQueued({ method: "Test" });
  vi.advanceTimersToNextTimer();

  // Flush queue using overflow
  getResult.mockResolvedValueOnce(Array.from({ length: callQueueMaxSize }, () => "test"));

  const calls = Array.from({ length: callQueueMaxSize }, () => callQueued({ method: "Test" }));

  for (const call of calls) {
    await expect(call).resolves.toBe("test");
  }
});

test("Should flush queue on timeout after overflow", async () => {
  // Flush queue using overflow
  getResult.mockResolvedValueOnce(Array.from({ length: callQueueMaxSize }, () => "test"));
  await Promise.all(Array.from({ length: callQueueMaxSize }, () => callQueued({ method: "Test" })));

  // Flush queue using timeout
  getResult.mockResolvedValueOnce("test");
  const call = callQueued({ method: "Test" });

  vi.advanceTimersToNextTimer();

  await expect(call).resolves.toBe("test");
});

test("Should flush queue on overflow with abort", async () => {
  const controller = new AbortController();

  getResult.mockResolvedValueOnce(Array.from({ length: callQueueMaxSize }, () => "test"));

  // Call with an abort signal
  controller.abort();
  callQueued({ method: "Test", signal: controller.signal }).catch(noop);

  // Queue enough calls to trigger a flush
  const calls = Array.from({ length: callQueueMaxSize - 1 }, () => callQueued({ method: "Test" }));

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

function noop() {
  // ignore
}
