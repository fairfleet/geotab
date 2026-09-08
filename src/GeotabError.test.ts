import { GeotabError, isOverLimitError } from "./GeotabError";

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

describe("isOverLimitError", () => {
  test("Given a JSON-RPC error typed OverLimitException, it should be true", () => {
    const error = new GeotabError({
      code: -32000,
      message: "Something the API did not spell out",
      data: { type: "OverLimitException" },
    });

    expect(isOverLimitError(error)).toBe(true);
  });

  test("Given a quota message without a type, it should be true", () => {
    const error = new GeotabError({
      code: -32000,
      message: "API calls quota exceeded. Maximum admitted 1000 per 1m.",
    });

    expect(isOverLimitError(error)).toBe(true);
  });

  test("Given another Geotab error, it should be false", () => {
    const error = new GeotabError({ code: -32000, message: "Invalid Id", data: {} });

    expect(isOverLimitError(error)).toBe(false);
  });

  test("Given another type whose message mentions a quota, it should be false", () => {
    const error = new GeotabError({
      code: -32000,
      message: "storage quota exceeded",
      data: { type: "InvalidDataException" },
    });

    expect(isOverLimitError(error)).toBe(false);
  });

  test("Given a plain error mentioning the quota, it should be false", () => {
    expect(isOverLimitError(new Error("quota exceeded"))).toBe(false);
  });
});
