export class GeotabError extends Error {
  /** The error code that indicates the error that occurred. */
  public readonly code: number;
  /** The data associated with the error. */
  public readonly data?: unknown;

  constructor(error: unknown) {
    let code = 0;
    let data: unknown;
    let message = String(error);

    if (typeof error === "object" && error) {
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

/**
 * Whether the given error is Geotab's `OverLimitException`, reported when the session has
 * exceeded its API call quota.
 *
 * @remarks
 * The JSON-RPC error `data.type` is checked first; the message text is a fallback because the
 * wording has changed between API versions while the type has not.
 *
 * @param error - The error to inspect.
 */
export function isOverLimitError(error: unknown): error is GeotabError {
  if (!(error instanceof GeotabError)) {
    return false;
  }

  const data = error.data as { type?: unknown } | undefined;

  if (typeof data === "object" && data !== null && data.type === "OverLimitException") {
    return true;
  }

  return /OverLimitException|quota exceeded/i.test(error.message);
}
