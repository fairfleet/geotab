import fetch from "cross-fetch";
import { createGeotab, GeotabError } from ".";

vi.mock("cross-fetch");

const fn = vi.fn();
const geotab = createGeotab({
  queueMaxSize: 1,
  middleware: [() => fn],
});

beforeEach(() => {
  fn.mockClear();
});

test("Calls Add", async () => {
  await geotab.add("Device", { name: "Test" });

  expect(fn).toBeCalledWith(
    expect.objectContaining({
      method: "Add",
      params: { typeName: "Device", entity: { name: "Test" } },
    })
  );
});

test("Calls Authenticate", async () => {
  await geotab.authenticate("user", "pass", "db");

  expect(fn).toBeCalledWith(
    expect.objectContaining({
      method: "Authenticate",
      params: { userName: "user", password: "pass", database: "db" },
    })
  );
});

test("Calls Get", async () => {
  await geotab.get("Device", { name: "Test" }, 10);

  expect(fn).toBeCalledWith(
    expect.objectContaining({
      method: "Get",
      params: { typeName: "Device", search: { name: "Test" }, resultsLimit: 10 },
    })
  );
});

test("Calls GetAddresses", async () => {
  await geotab.getAddresses(
    [
      { x: 1, y: 2 },
      { x: 3, y: 4 },
    ],
    true,
    false
  );

  expect(fn).toBeCalledWith(
    expect.objectContaining({
      method: "GetAddresses",
      params: {
        coordinates: [
          { x: 1, y: 2 },
          { x: 3, y: 4 },
        ],
        hosAddresses: true,
        movingAddresses: false,
      },
    })
  );
});

test("Calls GetCountOf", async () => {
  await geotab.getCountOf("Device");

  expect(fn).toBeCalledWith(
    expect.objectContaining({
      method: "GetCountOf",
      params: { typeName: "Device" },
    })
  );
});

test("Calls GetFeed", async () => {
  await geotab.getFeed("Device", { name: "Test" }, "0xdead", 10);

  expect(fn).toBeCalledWith(
    expect.objectContaining({
      method: "GetFeed",
      params: {
        typeName: "Device",
        search: { name: "Test" },
        fromVersion: "0xdead",
        resultsLimit: 10,
      },
    })
  );
});

test("Calls GetVersion", async () => {
  await geotab.getVersion();

  expect(fn).toBeCalledWith(
    expect.objectContaining({
      method: "GetVersion",
    })
  );
});

test("Calls GetVersionInformation", async () => {
  await geotab.getVersionInformation();

  expect(fn).toBeCalledWith(
    expect.objectContaining({
      method: "GetVersionInformation",
    })
  );
});

test("Calls Remove", async () => {
  await geotab.remove("Device", { id: "123" });

  expect(fn).toBeCalledWith(
    expect.objectContaining({
      method: "Remove",
      params: { typeName: "Device", entity: { id: "123" } },
    })
  );
});

test("Calls Set", async () => {
  await geotab.set("Device", { id: "123", name: "Test" });

  expect(fn).toBeCalledWith(
    expect.objectContaining({
      method: "Set",
      params: { typeName: "Device", entity: { id: "123", name: "Test" } },
    })
  );
});

test("Utilizes middleware", async () => {
  const geotab = createGeotab({
    queueMaxSize: 1,
    middleware: [
      () => async () => 1,
      (next) => async (call) => Number(await next(call)) + 1,
      (next) => async (call) => Number(await next(call)) + 1,
    ],
  });

  await expect(geotab.call("Test")).resolves.toBe(3);
});

describe("rate limiting", () => {
  function mockResponses(...results: unknown[]) {
    for (const result of results) {
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        text: async () => JSON.stringify(result),
      } as never);
    }
  }

  const overLimit = {
    error: {
      code: -32000,
      message: "API calls quota exceeded. Maximum admitted 1000 per 1m.",
      data: { type: "OverLimitException" },
    },
  };

  beforeEach(() => {
    vi.mocked(fetch).mockReset();
  });

  test("Charges every entry of a flushed multicall and holds the next call", async () => {
    mockResponses({ result: ["a", "b"] });
    const geotab = createGeotab({ queueMaxSize: 2, rateLimit: { maxCalls: 2 } });
    const controller = new AbortController();

    await expect(Promise.all([geotab.getVersion(), geotab.getVersion()])).resolves.toEqual([
      "a",
      "b",
    ]);

    const held = geotab.call("Test", undefined, controller.signal);
    controller.abort();

    await expect(held).rejects.toThrow();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("Sends everything when rateLimit is false", async () => {
    mockResponses({ result: ["a", "b"] }, { result: "c" });
    const geotab = createGeotab({ queueMaxSize: 2, rateLimit: false });

    await Promise.all([geotab.getVersion(), geotab.getVersion()]);
    await expect(geotab.call("Test")).resolves.toBe("c");

    expect(fetch).toHaveBeenCalledTimes(2);
  });

  test("Surfaces the OverLimitException as a GeotabError when retries are disabled", async () => {
    mockResponses(overLimit);
    const geotab = createGeotab({ retryOnOverLimit: 0 });

    await expect(geotab.call("Test")).rejects.toBeInstanceOf(GeotabError);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
