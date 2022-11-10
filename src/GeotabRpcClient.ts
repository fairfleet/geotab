import { Credentials } from "./types";
import { nanoid } from "nanoid/non-secure";
import fetch from "cross-fetch";
import { GeotabError } from "./GeotabError";

/**
 * The {@link GeotabRpcClient} options.
 */
export interface GeotabRpcClientOptions {
  /** The URL to POST JSONRPC requests to. */
  url: string;
  /** The headers to supply for each POST request. */
  headers?: HeadersInit;
  /** The Geotab credentials to supply to each JSONRPC call. */
  credentials?: Credentials;
  /**
   * The maximum number of calls to queue before flushing.
   *
   * @remarks Defaults to 100.
   */
  callQueueMaxSize?: number;
  /**
   * The number of milliseconds to wait before flushing the call queue.
   *
   * @remarks Defaults to 1500ms
   */
  callQueueBufferTime?: number;
  /**
   * The function that parses the JSON response.
   *
   * @remarks Defaults to JSON.parse.
   */
  parseJSON?(json: string): unknown;
}

/**
 * Provides methods for making JSONRPC calls to the Geotab API.
 *
 * @remarks
 * The calls are queued and flushed periodically to reduce the number of network requests. The
 * queue can be flushed manually by calling the {@link GeotabRpcClient.flushCallQueue} method. The
 *  duration between flushes can be configured by setting the
 * {@link GeotabRpcClientOptions.callQueueBufferTime} option. The maximum number of calls that can
 * be queued before a flush is forced can be configured by setting the
 * {@link GeotabRpcClientOptions.callQueueMaxSize} option.
 */
export class GeotabRpcClient {
  public url: string;
  public callQueueMaxSize: number;
  public callQueueBufferTimeMs: number;
  private credentials?: Credentials;
  private callQueue: Call[] = [];
  private callQueueTimeout?: NodeJS.Timeout;
  private readonly headers?: HeadersInit;
  private readonly parseJSON: (json: string) => unknown;

  /**
   * Creates an instance of {@link GeotabRpcClient} with the given options.
   * @param options - The options to use.
   */
  constructor(options: GeotabRpcClientOptions) {
    this.url = options.url;
    this.headers = options.headers;
    this.parseJSON = options.parseJSON ?? JSON.parse;
    this.credentials = options.credentials;
    this.callQueueMaxSize = options.callQueueMaxSize ?? 100;
    this.callQueueBufferTimeMs = options.callQueueBufferTime ?? 1500;
  }

  /**
   * Queues a JSONRPC call to be executed and returns a {@link Promise} when the call is complete.
   *
   * @param method - The name of the method to call.
   * @param params - The parameters to supply to the method.
   * @returns - A {@link Promise} that resolves with the result of the call.
   */
  public call<TResult>(method: string, params: Record<string, unknown>): Promise<TResult> {
    return new Promise((resolve, reject) => {
      this.callQueue.push({ method, params, resolve, reject });
      this.touchCallQueue();
    });
  }

  /**
   * Sets the credentials to use for subsequent calls.
   * @param credentials - The credentials to use.
   */
  public setCredentials(credentials?: Credentials) {
    this.credentials = credentials;
  }

  /**
   * Flushes the call queue resolving or rejecting each {@link Promise} in the queue.
   */
  public async flushCallQueue() {
    // Clone the call queue and clear the shared queue allowing calls to queue.
    const queue = this.callQueue;
    this.callQueue = [];

    if (queue.length === 0) {
      return;
    }

    try {
      const request = this.getBody(queue);
      const json = await this.postJsonRpcRequest(request);
      const response = this.parseResponse(json);

      this.handleResponse(response, queue);
    } catch (error) {
      // Notify all buffered requests that an unrecoverable error occurred.
      for (const entry of queue) {
        entry.reject(error);
      }
    }
  }

  /**
   * Posts the given JSONRPC request to the server.
   *
   * @remarks This methods is public for testing purposes.  It should not be called directly.
   * @param request - The JSONRPC request to post.
   * @returns - The JSON response.
   */
  public async postJsonRpcRequest(request: Record<string, unknown>) {
    const body = JSON.stringify(request);
    const httpResponse = await fetch(this.url, { body, headers: this.headers, method: "POST" });
    if (!httpResponse.ok) {
      throw new Error(`HTTP ${httpResponse.status} ${httpResponse.statusText}`);
    }

    return await httpResponse.text();
  }

  private touchCallQueue() {
    if (this.callQueue.length >= this.callQueueMaxSize) {
      this.flushCallQueueImmediately();
    } else {
      this.flushCallQueueEventually();
    }
  }

  private flushCallQueueImmediately() {
    // If a timeout is pending, clear it.
    if (this.callQueueTimeout !== undefined) {
      clearTimeout(this.callQueueTimeout);
    }

    return this.flushCallQueue();
  }

  private flushCallQueueEventually() {
    this.callQueueTimeout ??= setTimeout(() => {
      this.flushCallQueue().then(() => {
        // Cleanup the timeout handle.
        this.callQueueTimeout = undefined;
      });
    }, this.callQueueBufferTimeMs);
  }

  private getBody(queue: Call[]) {
    if (queue.length > 1) {
      return {
        id: nanoid(),
        method: "ExecuteMultiCall",
        params: {
          calls: queue.map((call) => ({ method: call.method, params: call.params })),
          credentials: this.credentials,
        },
        jsonrpc: "2.0",
      };
    }

    const first = queue[0];
    return {
      id: nanoid(),
      method: first.method,
      params: {
        ...first.params,
        credentials: this.credentials,
      },
      jsonrpc: "2.0",
    };
  }

  private parseResponse(json: string) {
    const parsed = this.parseJSON(json);

    if (typeof parsed !== "object") {
      throw new Error(`Unexpected response type '${typeof parsed}'`);
    }

    const response = parsed as Record<string, unknown>;
    if (response.error) {
      throw new GeotabError(response.error);
    }

    return response.result;
  }

  private handleResponse(response: unknown, queue: Call[]) {
    if (queue.length > 1) {
      return this.handleResponseMulti(response, queue);
    }

    return this.handleResponseSingle(response, queue[0]);
  }

  private handleResponseSingle(response: unknown, call: Call) {
    call.resolve(response as never);
  }

  private handleResponseMulti(response: unknown, queue: Call[]) {
    if (!Array.isArray(response)) {
      throw new Error(`'ExecuteMultiCall' response returned a non-array type '${typeof response}'`);
    }

    // We also expect the response array to as long as the queue array, otherwise we
    // may not be able to accurately map the response to the response handler.
    if (response.length !== queue.length) {
      throw new Error(
        `'ExecuteMultiCall' response returned an array of length ${response.length}, expected ${queue.length}`
      );
    }

    for (let i = 0; i < queue.length; i++) {
      queue[i].resolve(response[i] as never);
    }
  }
}

interface Call {
  method: string;
  params: Record<string, unknown>;
  reject(reason: unknown): void;
  resolve(value: unknown): void;
}
