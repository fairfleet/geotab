import fetch from "cross-fetch";
import { getCall } from "./getCall";
import { getCallQueued } from "./getCallQueued";
import { getExecuteMultiCall } from "./getExecuteMultiCall";

const QUEUE_MAX_SIZE = 5;
const QUEUE_BUFFER_TIME = 10_000;

const call = getCall({});
const executeMultiCall = getExecuteMultiCall(call);
const callQueued = getCallQueued(call, executeMultiCall, {
  callQueueMaxSize: QUEUE_MAX_SIZE,
  callQueueBufferTime: QUEUE_BUFFER_TIME,
});

vi.mock("cross-fetch");

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.restoreAllMocks();
});

test("Should return result", async () => {
  mockResult("test");

  const call = callQueued("Test", {});

  vi.advanceTimersToNextTimer();

  await expect(call).resolves.toBe("test");
});

test("Should throw on error result", async () => {
  mockError("test");

  const call = callQueued("Test", {});

  vi.advanceTimersToNextTimer();

  await expect(call).rejects.toThrow("test");
});

test("Should throw on non-array result", async () => {
  mockResult("test");

  const call1 = callQueued("Test", {});
  const call2 = callQueued("Test", {});

  vi.advanceTimersToNextTimer();

  await expect(call1).rejects.toThrow("Unexpected JSON-RPC response, expected an array #2");
  await expect(call2).rejects.toThrow("Unexpected JSON-RPC response, expected an array #2");
});

test("Should throw on abort", async () => {
  mockResult("test");

  const controller = new AbortController();
  const call = callQueued("Test", {}, controller.signal);

  controller.abort();

  vi.advanceTimersToNextTimer();

  await expect(call).rejects.toThrow("Call aborted");
});

test("Should return all results", async () => {
  mockResult(["test1", "test2", "test3"]);

  const call1 = callQueued("Test", {});
  const call2 = callQueued("Test", {});
  const call3 = callQueued("Test", {});

  vi.advanceTimersToNextTimer();

  await expect(call1).resolves.toBe("test1");
  await expect(call2).resolves.toBe("test2");
  await expect(call3).resolves.toBe("test3");
});

test("Should throw all on JSON-RPC error", async () => {
  mockError("test");

  const call1 = callQueued("Test", {});
  const call2 = callQueued("Test", {});
  const call3 = callQueued("Test", {});

  vi.advanceTimersToNextTimer();

  await expect(call1).rejects.toThrow("test");
  await expect(call2).rejects.toThrow("test");
  await expect(call3).rejects.toThrow("test");
});

test("Should flush queue on overflow", async () => {
  mockResult(Array.from({ length: QUEUE_MAX_SIZE }, () => "test"));

  const calls = Array.from({ length: QUEUE_MAX_SIZE }, () => callQueued("Test", {}));
  const now = Date.now();

  for (const call of calls) {
    await expect(call).resolves.toBe("test");
  }

  expect(Date.now() - now).toBeLessThan(QUEUE_BUFFER_TIME);
});

test("Should flush queue on overflow after timeout", async () => {
  // Flush queue using timeout
  mockResult("test");
  callQueued("Test", {});
  vi.advanceTimersToNextTimer();

  mockResult(Array.from({ length: QUEUE_MAX_SIZE }, () => "test"));

  const calls = Array.from({ length: QUEUE_MAX_SIZE }, () => callQueued("Test", {}));

  for (const call of calls) {
    await expect(call).resolves.toBe("test");
  }
});

test("Should flush queue on timeout after overflow", async () => {
  // Flush queue using overflow
  mockResult(Array.from({ length: QUEUE_MAX_SIZE }, () => "test"));
  await Promise.all(Array.from({ length: QUEUE_MAX_SIZE }, () => callQueued("Test", {})));

  mockResult("test");

  const call = callQueued("Test", {});

  vi.advanceTimersToNextTimer();

  await expect(call).resolves.toBe("test");
});

test("Should flush queue on overflow with abort", async () => {
  mockResult(Array.from({ length: QUEUE_MAX_SIZE }, () => "test"));

  const controller = new AbortController();
  callQueued("Test", {}, controller.signal).catch(noop);
  const calls = Array.from({ length: QUEUE_MAX_SIZE - 1 }, () => callQueued("Test", {}));

  controller.abort();

  for (const call of calls) {
    await expect(call).resolves.toBe("test");
  }
});

test("Should flush queue on timeout with abort", async () => {
  mockResult("test");

  const controller = new AbortController();
  callQueued("Test", {}, controller.signal).catch(noop);
  const call = callQueued("Test", {});

  controller.abort();

  vi.advanceTimersToNextTimer();

  await expect(call).resolves.toBe("test");
});

function mockResult(result: unknown) {
  vi.mocked(fetch).mockResolvedValue({
    ok: true,
    text: () => Promise.resolve(JSON.stringify({ result })),
  } as never);
}

function mockError(error: unknown) {
  vi.mocked(fetch).mockResolvedValue({
    ok: true,
    text: () => Promise.resolve(JSON.stringify({ error })),
  } as never);
}

function noop() {
  // ignore
}
