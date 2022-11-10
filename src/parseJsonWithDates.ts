/**
 * Converts a JavaScript Object Notation (JSON) string into an object.
 *
 * @remarks
 *
 * Converts string conforming to the {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601}
 * format into {@link Date} objects.
 *
 * @param text — A valid JSON string.
 * @returns The parsed JSON object.
 */
export default function parseJsonWithDates<TResult>(text: string): TResult {
  return JSON.parse(text, fixJsonDates);
}

/**
 * Attempts to parse {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601} dates in from
 * the supplied value.
 *
 * @remarks
 *
 * First parameter is included to match the signature of the `JSON.parse` function.
 *
 * @param _ - The name of the property being modified.
 * @param value - The value of the property being modified.
 */
export function fixJsonDates(_: string, value: unknown): unknown {
  if (typeof value === "string") {
    return tryGetIso8601Date(value);
  }

  if (Array.isArray(value)) {
    return value.map(x => (typeof x === "string" ? tryGetIso8601Date(x) : x));
  }

  return value;
}

/**
 * Attempts to parse an {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601} date from
 * the supplied value and returns the corresponding {@link Date} object.  If the value is
 * not a valid {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601} date, the original
 * value is returned.
 *
 * @param value - The string value to parse.
 * @returns The parsed date or the original value.
 */
export function tryGetIso8601Date(value: string): string | Date {
  const dateExpr =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
  const match = dateExpr.exec(value);
  if (match) {
    return new Date(value);
  }

  return value;
}
