export class GeotabError extends Error {
  /** The error code that indicates the error that occurred. */
  public readonly code: number;
  /** The data associated with the error. */
  public readonly data?: unknown;

  constructor(error: unknown) {
    let code = 0;
    let data: unknown;
    let message = String(error);

    if (typeof error === "object" && error !== null) {
      const errorRecord = error as Record<string, unknown>;

      code = Number(errorRecord.code) || 0;
      data = errorRecord.data;
      message = String(errorRecord.message) || message;
    }

    super(message);

    this.code = code;
    this.data = data;
  }
}
