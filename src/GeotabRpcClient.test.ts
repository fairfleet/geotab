import { GeotabRpcClient } from "./GeotabRpcClient";

describe("GeotabRpcClient", () => {
  describe("call", () => {
    test("Given calls greater than queue max size within buffer time, should flush one before buffer timeout", () => {
      const client = new GeotabRpcClient({
        url: "",
        callQueueMaxSize: 2,
        callQueueBufferTime: 9999_9999,
      });

      const flush = vi.spyOn(client, "flushCallQueue").mockImplementation(() => Promise.resolve());

      client.call("Get", {});
      client.call("Get", {});

      expect(flush).toHaveBeenCalledTimes(1);
    });

    test("Given a single call, should flush once after buffer timeout", async () => {
      const client = new GeotabRpcClient({
        url: "",
        callQueueBufferTime: 50,
      });

      const flush = vi.spyOn(client, "flushCallQueue").mockImplementation(() => Promise.resolve());

      client.call("Get", {});

      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(flush).toHaveBeenCalledTimes(1);
    });

    test("Given multiple calls, should flush once after buffer timeout", async () => {
      const client = new GeotabRpcClient({
        url: "",
        callQueueBufferTime: 50,
      });

      const flush = vi.spyOn(client, "flushCallQueue").mockImplementation(() => Promise.resolve());

      client.call("Get", {});
      client.call("Get", {});

      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(flush).toHaveBeenCalledTimes(1);
    });

    test("Given calls after a timeout flush, should flush after buffer timeout", async () => {
      const client = new GeotabRpcClient({
        url: "",
        callQueueBufferTime: 50,
      });

      const flush = vi.spyOn(client, "flushCallQueue").mockImplementation(() => Promise.resolve());

      client.call("Get", {});
      await new Promise((resolve) => setTimeout(resolve, 50));
      expect(flush).toHaveBeenCalledTimes(1);

      client.call("Get", {});
      await new Promise((resolve) => setTimeout(resolve, 50));
      expect(flush).toHaveBeenCalledTimes(2);
    });

    test("When a single call response throws, should throw error", async () => {
      const client = new GeotabRpcClient({ url: "" });
      const error = new Error("test error");

      vi.spyOn(client, "postJsonRpcRequest")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .mockImplementation(() => Promise.reject<string>(error));

      await client.flushCallQueue();

      await expect(client.call("Get", {})).rejects.toThrow(error);
    });

    test("When multiple call responses throws, should all promises should be rejected", async () => {
      const client = new GeotabRpcClient({ url: "" });
      const error = new Error("test error");

      vi.spyOn(client, "postJsonRpcRequest")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .mockImplementation(() => Promise.reject<string>(error));

      const call1 = client.call("Get", {});
      const call2 = client.call("Get", {});

      await client.flushCallQueue();

      await expect(call1).rejects.toThrow(error);
      await expect(call2).rejects.toThrow(error);
    });
  });

  describe("flushCallQueue", () => {
    test("Given an empty queue, should not throw", async () => {
      const client = new GeotabRpcClient({ url: "" });

      vi.spyOn(client, "postJsonRpcRequest").mockImplementation(() => Promise.resolve(""));

      await expect(client.flushCallQueue()).resolves.toBeUndefined();
    });

    test("Given a single call, should post a normal JSONRPC request", async () => {
      const client = new GeotabRpcClient({ url: "" });
      const postJsonRpcRequest = vi
        .spyOn(client, "postJsonRpcRequest")
        .mockImplementation(() => Promise.resolve("{}"));

      client.call("Get", { param1: "yes", param2: false });
      await client.flushCallQueue();

      expect(postJsonRpcRequest).toHaveBeenCalledTimes(1);
      expect(postJsonRpcRequest).toHaveBeenCalledWith({
        id: expect.any(String),
        method: "Get",
        params: {
          param1: "yes",
          param2: false,
        },
        jsonrpc: "2.0",
      });
    });

    test("Given multiple calls, should post a 'ExecuteMultiCall' JSONRPC request", async () => {
      const client = new GeotabRpcClient({ url: "" });
      const postJsonRpcRequest = vi
        .spyOn(client, "postJsonRpcRequest")
        .mockImplementation(() => Promise.resolve(`{ "result": [0, 1] }`));

      client.call("Get", { param1: "yes", param2: false });
      client.call("Get", { param1: "yes", param2: false });

      await client.flushCallQueue();

      expect(postJsonRpcRequest).toHaveBeenCalledTimes(1);
      expect(postJsonRpcRequest).toHaveBeenCalledWith({
        id: expect.any(String),
        method: "ExecuteMultiCall",
        params: {
          calls: [
            { method: "Get", params: { param1: "yes", param2: false } },
            { method: "Get", params: { param1: "yes", param2: false } },
          ],
          credentials: undefined,
        },
        jsonrpc: "2.0",
      });
    });
  });
});
