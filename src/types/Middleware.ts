import { Call } from "./Call";

/**
 * A function that returns a middleware function.
 *
 * @param next - The next {@link Next} in the chain.
 */
export type Middleware = (next: Next) => Next;

/** A function that executes the given JSON-RPC call and returns the call results. */
export type Next = (call: Call) => Promise<unknown>;
