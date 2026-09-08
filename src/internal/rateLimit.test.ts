import { GeotabError } from "../GeotabError";
import { queue } from "./queue";
import { rateLimit } from "./rateLimit";

/**
 * A controllable clock: `sleep` advances time instead of waiting, so the tests assert the
 * waiting behaviour without spending real time.
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

function overLimitError() {
  return new GeotabError({
    code: -32000,
    message: "API calls quota exceeded. Maximum admitted 1000 per 1m.",
    data: { type: "OverLimitException" },
  });
}

function multiCall(count: number) {
  return {
    method: "ExecuteMultiCall",
    params: { calls: Array.from({ length: count }, () => ({ method: "Get", params: {} })) },
  };
}

const next = vi.fn();

afterEach(() => {
  vi.resetAllMocks();
});

test("Should pass the call through and return its result", async () => {
  next.mockResolvedValue("test");
  const call = rateLimit({}, makeClock())(next);

  await expect(call({ method: "Test", params: { a: 1 } })).resolves.toBe("test");

  expect(next).toHaveBeenCalledWith({ method: "Test", params: { a: 1 } });
});

test("Should charge one call for a direct call", async () => {
  next.mockResolvedValue("test");
  const clock = makeClock();
  const call = rateLimit({ queueMaxSize: 1, rateLimit: { maxCalls: 2, windowMs: 1000 } }, clock)(next);

  await call({ method: "Test" });
  await call({ method: "Test" });
  expect(clock.sleeps).toEqual([]);

  await call({ method: "Test" });
  expect(clock.sleeps).toHaveLength(1);
  expect(clock.now()).toBeGreaterThanOrEqual(1000);
});

test("Should charge one call per ExecuteMultiCall entry", async () => {
  next.mockResolvedValue([]);
  const clock = makeClock();
  const call = rateLimit({ queueMaxSize: 1, rateLimit: { maxCalls: 5, windowMs: 1000 } }, clock)(next);

  await call(multiCall(3));
  expect(clock.sleeps).toEqual([]);

  await call(multiCall(3));
  expect(clock.sleeps).toHaveLength(1);
  expect(clock.now()).toBeGreaterThanOrEqual(1000);
});

test("Should not wait when rate limiting is disabled", async () => {
  next.mockResolvedValue([]);
  const clock = makeClock();
  const call = rateLimit({ rateLimit: false }, clock)(next);

  await call(multiCall(5000));
  await call(multiCall(5000));

  expect(clock.sleeps).toEqual([]);
  expect(next).toHaveBeenCalledTimes(2);
});

test("Should use the default budget when no options are given", async () => {
  next.mockResolvedValue([]);
  const clock = makeClock();
  const call = rateLimit({}, clock)(next);

  await call(multiCall(900));
  expect(clock.sleeps).toEqual([]);

  await call(multiCall(1));
  expect(clock.sleeps).toHaveLength(1);
  expect(clock.now()).toBeGreaterThanOrEqual(60_000);
});

test("Should retry once after an OverLimitException and wait a full window first", async () => {
  next.mockRejectedValueOnce(overLimitError()).mockResolvedValue("test");
  const clock = makeClock();
  const call = rateLimit({ queueMaxSize: 1, rateLimit: { maxCalls: 10, windowMs: 1000 } }, clock)(next);

  await expect(call({ method: "Test" })).resolves.toBe("test");

  expect(next).toHaveBeenCalledTimes(2);
  expect(clock.now()).toBeGreaterThanOrEqual(1000);
});

test("Should charge the budget again on retry", async () => {
  next.mockRejectedValueOnce(overLimitError()).mockResolvedValue([]);
  const clock = makeClock();
  const call = rateLimit({ queueMaxSize: 1, rateLimit: { maxCalls: 3, windowMs: 1000 } }, clock)(next);

  await call(multiCall(3));
  const retriedAt = clock.now();

  // The retry charged the whole budget again, so the next call has to wait for it to roll.
  await call({ method: "Test" });
  expect(clock.now()).toBeGreaterThanOrEqual(retriedAt + 1000);
});

test("Should surface the original GeotabError once retries are spent", async () => {
  next.mockRejectedValue(overLimitError());
  const clock = makeClock();
  const call = rateLimit({ retryOnOverLimit: 2 }, clock)(next);

  await expect(call({ method: "Test" })).rejects.toBeInstanceOf(GeotabError);
  await expect(call({ method: "Test" })).rejects.toThrow(/quota exceeded/);
  expect(next).toHaveBeenCalledTimes(6);
});

test("Should not retry when retryOnOverLimit is 0", async () => {
  next.mockRejectedValue(overLimitError());
  const clock = makeClock();
  const call = rateLimit({ retryOnOverLimit: 0 }, clock)(next);

  await expect(call({ method: "Test" })).rejects.toThrow(/quota exceeded/);
  expect(next).toHaveBeenCalledTimes(1);
  expect(clock.sleeps).toEqual([]);
});

test("Should exhaust the budget even when the OverLimitException is not retried", async () => {
  next.mockRejectedValueOnce(overLimitError()).mockResolvedValue("test");
  const clock = makeClock();
  const options = { queueMaxSize: 1, retryOnOverLimit: 0, rateLimit: { maxCalls: 10, windowMs: 1000 } };
  const call = rateLimit(options, clock)(next);

  await expect(call({ method: "Test" })).rejects.toThrow(/quota exceeded/);
  expect(clock.sleeps).toEqual([]);

  // The server said the session is over its quota, so the next call has to wait out a window.
  await expect(call({ method: "Test" })).resolves.toBe("test");
  expect(clock.now()).toBeGreaterThanOrEqual(1000);
});

test("Should not retry other errors", async () => {
  next.mockRejectedValue(new GeotabError({ code: -32000, message: "Invalid Id" }));
  const clock = makeClock();
  const call = rateLimit({}, clock)(next);

  await expect(call({ method: "Test" })).rejects.toThrow("Invalid Id");
  expect(next).toHaveBeenCalledTimes(1);
  expect(clock.sleeps).toEqual([]);
});

test("Should not retry when rate limiting is disabled", async () => {
  next.mockRejectedValueOnce(overLimitError()).mockResolvedValue("test");
  const clock = makeClock();
  const call = rateLimit({ rateLimit: false }, clock)(next);

  await expect(call({ method: "Test" })).rejects.toThrow(/quota exceeded/);
  expect(next).toHaveBeenCalledTimes(1);
  expect(clock.sleeps).toEqual([]);
});

test("Should retry after a window when rate limiting is disabled but retries are asked for", async () => {
  next.mockRejectedValueOnce(overLimitError()).mockResolvedValue("test");
  const clock = makeClock();
  const call = rateLimit({ rateLimit: false, retryOnOverLimit: 1 }, clock)(next);

  await expect(call({ method: "Test" })).resolves.toBe("test");
  expect(clock.sleeps).toEqual([60_000]);
});

test("Should reject instead of waiting when the signal is aborted", async () => {
  next.mockResolvedValue("test");
  const clock = makeClock();
  const call = rateLimit({ queueMaxSize: 1, rateLimit: { maxCalls: 1, windowMs: 1000 } }, clock)(next);
  const controller = new AbortController();

  await call({ method: "Test" });
  controller.abort();

  await expect(call({ method: "Test", signal: controller.signal })).rejects.toThrow();
  expect(next).toHaveBeenCalledTimes(1);
});

test("Should retry a whole flushed multicall transparently to the queued callers", async () => {
  next.mockRejectedValueOnce(overLimitError()).mockResolvedValue(["a", "b"]);
  const clock = makeClock();
  const options = { queueMethods: ["Test"], queueMaxSize: 2, rateLimit: { maxCalls: 10 } };
  const call = queue(options)(rateLimit(options, clock)(next));

  const [a, b] = await Promise.all([call({ method: "Test" }), call({ method: "Test" })]);

  expect(a).toBe("a");
  expect(b).toBe("b");
  expect(next).toHaveBeenCalledTimes(2);
  expect(next).toHaveBeenLastCalledWith({
    method: "ExecuteMultiCall",
    params: {
      calls: [
        { method: "Test", params: undefined },
        { method: "Test", params: undefined },
      ],
    },
  });
});

test("Should cap in-flight multicalls at maxConcurrentFlushes", async () => {
  const resolvers: ((value: unknown) => void)[] = [];
  next.mockImplementation(() => new Promise((resolve) => resolvers.push(resolve)));
  const call = rateLimit({ maxConcurrentFlushes: 2 }, makeClock())(next);

  const calls = [call(multiCall(1)), call(multiCall(1)), call(multiCall(1))];
  await Promise.resolve();
  expect(next).toHaveBeenCalledTimes(2);

  resolvers[0]([]);
  await calls[0];
  expect(next).toHaveBeenCalledTimes(3);

  resolvers[1]([]);
  resolvers[2]([]);
  await Promise.all(calls);
});

test("Should reject a parked multicall when its signal aborts and keep the slot count right", async () => {
  const resolvers: ((value: unknown) => void)[] = [];
  next.mockImplementation(() => new Promise((resolve) => resolvers.push(resolve)));
  const call = rateLimit({ maxConcurrentFlushes: 1 }, makeClock())(next);
  const controller = new AbortController();

  const first = call(multiCall(1));
  const parked = call({ ...multiCall(1), signal: controller.signal });
  await Promise.resolve();
  expect(next).toHaveBeenCalledTimes(1);

  controller.abort();
  await expect(parked).rejects.toThrow();
  expect(next).toHaveBeenCalledTimes(1);

  // The slot is still held by the first flush; releasing it must admit exactly one more.
  const third = call(multiCall(1));
  await Promise.resolve();
  expect(next).toHaveBeenCalledTimes(1);

  resolvers[0]([]);
  await first;
  expect(next).toHaveBeenCalledTimes(2);

  resolvers[1]([]);
  await third;
});

test("Should charge the budget when the multicall is sent, not when it is parked", async () => {
  const resolvers: ((value: unknown) => void)[] = [];
  next.mockImplementation(() => new Promise((resolve) => resolvers.push(resolve)));
  const clock = makeClock();
  const options = { queueMaxSize: 1, maxConcurrentFlushes: 1, rateLimit: { maxCalls: 1, windowMs: 1000 } };
  const call = rateLimit(options, clock)(next);

  const first = call(multiCall(1));
  const parked = call(multiCall(1));
  await Promise.resolve();
  expect(next).toHaveBeenCalledTimes(1);

  // Had the parked flush been charged on arrival it would have shared the first one's moment
  // and the window would have to roll before it could be sent. Charged on send, it fits
  // once the first flush's charge has aged out.
  clock.advance(1000);
  resolvers[0]([]);
  await first;
  await Promise.resolve();
  await Promise.resolve();

  expect(next).toHaveBeenCalledTimes(2);
  expect(clock.sleeps).toEqual([]);

  resolvers[1]([]);
  await parked;
});

test("Should not cap direct calls with maxConcurrentFlushes", async () => {
  next.mockImplementation(() => new Promise(() => undefined));
  const call = rateLimit({ maxConcurrentFlushes: 1 }, makeClock())(next);

  call({ method: "Test" });
  call({ method: "Test" });
  await Promise.resolve();

  expect(next).toHaveBeenCalledTimes(2);
});

describe("option validation", () => {
  test.each([
    ["maxCalls 0", { rateLimit: { maxCalls: 0 } }],
    ["maxCalls fractional", { rateLimit: { maxCalls: 1.5 } }],
    ["maxCalls NaN", { rateLimit: { maxCalls: NaN } }],
    ["windowMs 0", { rateLimit: { windowMs: 0 } }],
    ["windowMs Infinity", { rateLimit: { windowMs: Infinity } }],
    ["windowMs NaN", { rateLimit: { windowMs: NaN } }],
    ["retryOnOverLimit negative", { retryOnOverLimit: -1 }],
    ["retryOnOverLimit fractional", { retryOnOverLimit: 0.5 }],
    ["retryOnOverLimit NaN", { retryOnOverLimit: NaN }],
    ["maxConcurrentFlushes 0", { maxConcurrentFlushes: 0 }],
    ["maxConcurrentFlushes negative", { maxConcurrentFlushes: -1 }],
    ["maxConcurrentFlushes NaN", { maxConcurrentFlushes: NaN }],
  ])("Should throw a RangeError for %s", (_, options) => {
    expect(() => rateLimit(options)).toThrow(RangeError);
  });

  test("Should reject a queueMaxSize wider than the budget and say why", () => {
    expect(() => rateLimit({ queueMaxSize: 200, rateLimit: { maxCalls: 100 } })).toThrow(
      /queueMaxSize.*200.*maxCalls.*100.*flush/
    );
  });

  test("Should accept a queueMaxSize equal to the budget", () => {
    expect(() => rateLimit({ queueMaxSize: 100, rateLimit: { maxCalls: 100 } })).not.toThrow();
  });

  test("Should not compare queueMaxSize against a disabled budget", () => {
    expect(() => rateLimit({ queueMaxSize: 5000, rateLimit: false })).not.toThrow();
  });

  test("Should accept Infinity retries and an unlimited gate", () => {
    expect(() =>
      rateLimit({ retryOnOverLimit: Infinity, maxConcurrentFlushes: undefined })
    ).not.toThrow();
  });
});
