import { GeotabError } from "./GeotabError";

describe("GeotabError", () => {
  describe("constructor", () => {
    test("Given an non-object type, the message should be the string representation", () => {
      const error = new GeotabError("hello");

      expect(error.message).toBe("hello");
    });

    test("Given an non-object type, the code should be 0", () => {
      const error = new GeotabError("hello");

      expect(error.code).toBe(0);
    });

    test("Given an non-object type, the data should be `undefined`", () => {
      const error = new GeotabError("hello");

      expect(error.data).toBeUndefined();
    });

    test("Given a null type, the message should be `null`", () => {
      const error = new GeotabError(null);

      expect(error.message).toBe("null");
    });

    test("Given a undefined type, the message should be `undefined`", () => {
      const error = new GeotabError(undefined);

      expect(error.message).toBe("undefined");
    });

    test("Given a JSONRPC error, the fields should match", () => {
      const error = new GeotabError({
        code: 1,
        message: "hello",
        data: "world",
      });

      expect(error.code).toBe(1);
      expect(error.message).toBe("hello");
      expect(error.data).toBe("world");
    });
  });
});
