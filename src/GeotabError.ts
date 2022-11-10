export class GeotabError extends Error {
  /** The error code that indicates the error that occurred. */
  public readonly code: number;
  /** The data associated with the error. */
  public readonly data?: unknown;

  constructor(error: unknown) {
    const data = getErrorData(error);

    super(data.message);

    this.code = data.code;
    this.data = data.data;
  }
}

/**
 * Contains the JSONRPC error data.
 */
interface RpcErrorData {
  /** The data associated with the error. */
  data?: unknown;
  /** The error code that indicates the error that occurred. */
  code: number;
  /** The error message. */
  message: string;
}

/**
 * Validates the given error and returns the error data.
 *
 * @param error - The error to validate.
 * @returns The error data.
 */
export function getErrorData(error: unknown): RpcErrorData {
  if (typeof error !== "object") {
    return {
      code: 0,
      message: String(error),
    };
  }

  const data = error as Record<string, unknown>;
  return {
    data: data.data,
    code: data.code as number,
    message: data.message as string,
  };
}
