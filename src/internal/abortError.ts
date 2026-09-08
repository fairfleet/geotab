/**
 * Normalises an {@link AbortSignal}'s reason into an {@link Error}.
 *
 * @remarks An abort reason is caller-supplied and may be any value.
 *
 * @param signal - The aborted signal.
 */
export function abortError(signal: AbortSignal): Error {
  const { reason } = signal;
  if (reason instanceof Error) {
    return reason;
  }
  return new Error(typeof reason === "string" && reason.length > 0 ? reason : "Call aborted");
}
