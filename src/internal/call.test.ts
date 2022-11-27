import fetch from "cross-fetch";
import { getCall } from "./call";

vi.mock("cross-fetch");

const call = getCall({});

beforeEach(() => {
  vi.resetAllMocks();
});

test("Should return JSON-RPC result", async () => {
  vi.mocked(fetch).mockResolvedValue({
    ok: true,
    text: async () =>
      JSON.stringify({
        result: "ok",
      }),
  } as never);

  await expect(call({ method: "Test" })).resolves.toBe("ok");
});

test("Should throw on error JSON-RPC response", async () => {
  vi.mocked(fetch).mockResolvedValue({
    ok: true,
    text: async () =>
      JSON.stringify({
        error: "err",
      }),
  } as never);

  await expect(call({ method: "Test" })).rejects.toThrow("err");
});

test("Should throw on bad HTTP status", async () => {
  vi.mocked(fetch).mockResolvedValue({
    ok: false,
    status: 500,
  } as never);

  await expect(call({ method: "Test" })).rejects.toThrow("HTTP status 500");
});
