import { createGeotab } from ".";

const fn = vi.fn();
const geotab = createGeotab({
  callQueueMaxSize: 1,
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
      params: { typeName: "Device", search: { name: "Test" }, resultLimit: 10 },
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
    callQueueMaxSize: 1,
    middleware: [
      () => async () => 1,
      (next) => async (call) => Number(await next(call)) + 1,
      (next) => async (call) => Number(await next(call)) + 1,
    ],
  });

  await expect(geotab.call("Test")).resolves.toBe(3);
});
