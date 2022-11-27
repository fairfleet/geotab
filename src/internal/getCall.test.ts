import fetch from "cross-fetch";
import { getCall } from "./getCall";

const call = getCall({});

vi.mock("cross-fetch");

beforeEach(() => {
  vi.resetAllMocks();
});

test("Should return result", async () => {
  vi.mocked(fetch).mockResolvedValue({
    ok: true,
    text: () => Promise.resolve('{"result": "test"}'),
  } as never);

  await expect(call("Test", {})).resolves.toBe("test");
});

test("Should throw on bad status", async () => {
  vi.mocked(fetch).mockResolvedValue({
    ok: false,
    status: 500,
  } as never);

  await expect(call("Test", {})).rejects.toThrow("HTTP status 500");
});

test("Should throw on JSON-RPC error", async () => {
  vi.mocked(fetch).mockResolvedValue({
    ok: true,
    text: () => Promise.resolve('{"error": "test"}'),
  } as never);

  await expect(call("Test", {})).rejects.toThrow("test");
});
