import { parseJsonWithDates } from "./parseJsonWithDates";
import { getCallMany } from "./rpc/getCallMany";
import { getCallWithBatching } from "./rpc/getCallWithBatching";
import {
  Coordinate,
  Credentials,
  LoginResult,
  ReverseGeocodeAddress,
  VersionInformation,
} from "./types";
import { EntityTypes } from "./types/EntityTypes";
import { FeedResult } from "./types/FeedResult";
import { O } from "ts-toolbelt";
import { SearchTypes } from "./types/SearchTypes";

/**
 * The {@link Geotab} options.
 */
export interface GeotabOptions {
  /**
   * The Geotab API url.
   *
   * @remarks Defaults to "https://my.geotab.com/apiv1".
   */
  url?: string;

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
   * The function that parses JSONRPC responses.
   *
   * @remarks Defaults to a function that parses dates in ISO 8601 format.
   */
  parseJSON?: typeof JSON.parse;

  /**
   * Called when the API is about to make a call to the server.
   *
   * @param method - The name of the method to call.
   * @param params - The parameters to supply to the method.
   */
  onCall?(method: string, params: Record<string, unknown>): void;

  /**
   * Called when the API has received a response from the server.
   * @param method - The name of the method that was called.
   * @param params - The parameters that were supplied to the method.
   * @param result - The result of the call.
   */
  onCallOk?(method: string, params: Record<string, unknown>, result: unknown): void;

  /**
   * Called when the API has received an error from the server.
   * @param method - The name of the method that was called.
   * @param params - The parameters that were supplied to the method.
   * @param error - The error that was returned.
   */
  onCallError?(method: string, params: Record<string, unknown>, error: unknown): void;
}

/**
 * A Geotab API client.
 */
export interface Geotab {
  /**
   * Executes a JSONRPC call and returns a {@link Promise} when the call is complete.
   *
   * @param method - The name of the method to call.
   * @param params - The parameters to supply to the method.
   * @returns - A {@link Promise} that resolves with the result of the call.
   */
  call<TResult>(method: string, params: Record<string, unknown>): Promise<TResult>;

  /**
   * Authenticates the user with the given login credentials and stores the session information for
   * future calls.
   *
   * @param userName - The user name (typically an email address) that identifies the user.
   * @param password - The user's Geotab password.
   * @param database - The name of the database to authenticate against.
   * @returns - The {@link LoginResult} object.
   */
  login(userName: string, password: string, database?: string): Promise<LoginResult>;

  /**
   * Logs out the current user.
   */
  logout(): void;

  /**
   * Configures the {@link Geotab} client to use the credentials provided in the given
   * {@link LoginResult} for future calls.
   *
   * @param loginResult - The {@link LoginResult} containing the credentials to use.
   */
  useLoginResult(loginResult: LoginResult): void;

  /**
   * Adds a new entity to the Geotab database.
   *
   * @param typeName The name of the entity type.
   * @param entity The entity to add.
   * @returns The id of the added entity.
   */
  add<TType extends keyof EntityTypes, TEntity extends object = EntityTypes[TType]>(
    typeName: TType,
    entity: O.Partial<TEntity>
  ): Promise<string>;

  /**
   * Authenticates a user and provides a {@link LoginResult} if successful.
   *
   * @remarks Maximum 10 attempts per minute.
   *
   * @param userName - The user name (typically an email address) that identifies the user.
   * @param password - The user's Geotab password.
   * @param database - The name of the database to authenticate against.
   * @returns A {@link LoginResult} object.
   */
  authenticate(userName: string, password: string, database?: string): Promise<LoginResult>;

  /**
   * Gets collection of entities from the database that match the supplied search
   * criteria.
   *
   * @param typeName The name of the entity type.
   * @param search The search criteria to use.
   * @param resultsLimit The maximum number of entities that will be returned.
   * @param signal - The optional abort signal.
   * @returns The entities matching search criteria.
   */
  get<
    TType extends keyof EntityTypes & keyof SearchTypes,
    TEntity = EntityTypes[TType],
    TSearch extends object = SearchTypes[TType]
  >(
    typeName: TType,
    search: O.Partial<TSearch>,
    resultsLimit?: number,
    signal?: AbortSignal
  ): Promise<TEntity[]>;

  /**
   * Gets the number of of entities in the database.
   *
   * @param typeName The name of the entity type.
   * @param signal - The optional abort signal.
   * @returns The number of entities in the database.
   */
  getCountOf<TType extends keyof EntityTypes>(
    typeName: TType,
    signal?: AbortSignal
  ): Promise<number>;

  /**
   * Gets collection of entities from the database that have changed since the supplied
   * `fromVersion` and that match the supplied search criteria.
   *
   * @remarks
   *
   * Supported types are as follows:
   * - {@link AnnotationLog} and AnnotationLogSearch for Annotation Log related parameters.
   * - {@link Audit} and AuditSearch to provide a fromDate from which to seed the feed.
   * - {@link CustomData} and CustomDataSearch for Custom Data related parameters.
   * - {@link DebugData} and DebugDataSearch for Debug Data related parameters.
   * - {@link Device} *search not supported. Maximum results: 5,000.
   * - {@link DeviceShare} *search not supported. Beta
   * - {@link DeviceStatusInfo} *search not supported.
   * - {@link Diagnostic} *search not supported.
   * - {@link DriverChange} and DriverChangeSearch to provide a fromDate from which to seed the feed.
   * - {@link DutyStatusLog} and DutyStatusLogSearch for Duty Status Log related parameters.
   * - {@link DVIRLog} and DVIRLogSearch for DVIR Log related parameters.
   * - {@link ExceptionEvent} and ExceptionEventSearch for Exception Event related parameters.
   * - {@link FaultData} and FaultDataSearch for Fault Data related parameters.
   * - {@link FuelTaxDetail} and FuelTaxDetailSearch for Fuel Tax Detail related parameters.
   * - {@link IoxAddOn} and IoxAddOnSearch for Iox Add-On related parameters.
   * - {@link LogRecord} and LogRecordSearch for Log Record related parameters.
   * - {@link MediaFile} *search not supported. Maximum results: 10,000. Beta
   * - {@link Route} and RouteSearch to provide a fromDate from which to seed the feed. Maximum results: 10,000.
   * - {@link Rule} (including ZoneStop ExceptionRuleBaseType) *search not supported. Maximum results: 10,000.
   * - {@link ShipmentLog} and ShipmentLogSearch for Shipment Log related parameters.
   * - {@link StatusData} and StatusDataSearch for Status Data parameters.
   * - {@link TextMessage} and TextMessageSearch to provide a fromDate from which to seed the feed.
   * - {@link Trailer} *search not supported.
   * - {@link TrailerAttachment} and TrailerAttachmentSearch for Trailer Attachment related parameters.
   * - {@link Trip} and TripSearch for Trip related parameters.
   * - {@link User} (including Driver) *search not supported. Maximum results: 5,000.
   * - {@link Zone} *search not supported. Maximum results: 10,000.
   *
   * @param typeName The name of the entity type.
   * @param search The search criteria to use.
   * @param fromVersion The version retrieved from the last {@link GetFeed} request.
   * @param resultsLimit The maximum number of entities that will be returned.
   * @param signal - The optional abort signal.
   * @returns The feed result containing the entities matching supplied criteria.
   */
  getFeed<
    TType extends keyof EntityTypes & keyof SearchTypes,
    TEntity = EntityTypes[TType],
    TSearch extends object = SearchTypes[TType]
  >(
    typeName: TType,
    search: O.Partial<TSearch>,
    fromVersion?: string,
    resultsLimit?: number,
    signal?: AbortSignal
  ): Promise<FeedResult<TEntity>>;

  /**
   * Gets the version of the server.
   * @param signal - The optional abort signal.
   * @returns The string representation of the server version.
   */
  getVersion(signal?: AbortSignal): Promise<string>;

  /**
   * Gets the version information of the server.
   *
   * @param signal - The optional abort signal.
   * @returns The version information of the server.
   */
  getVersionInformation(signal?: AbortSignal): Promise<VersionInformation>;

  /**
   * Removes the given entity from the database.
   * @param typeName - The type of entity.
   * @param entity - The entity to remove.
   */
  remove<TType extends keyof EntityTypes, TEntity extends object = EntityTypes[TType]>(
    typeName: TType,
    entity: O.Partial<TEntity> & { id: string }
  ): Promise<void>;

  /**
   * Modifies an {@link TEntity}.
   *
   * @param typeName The name of the entity type.
   * @param entity The entity to modify.
   */
  set<TType extends keyof EntityTypes, TEntity extends object = EntityTypes[TType]>(
    typeName: TType,
    entity: O.Partial<TEntity>
  ): Promise<void>;

  /**
   * Gets the addresses from the list of {@link Coordinate}, as well as any {@link Zone}s in the
   * system that contain the given coordinates.
   *
   * @param coordinates - The array of {@link Coordinate} to get the addresses for.
   * @param hosAddresses - If true, the direction and distance to the nearest city with a population
   * greater than 5000 will be returned.
   * @param movingAddresses - If true, the coordinates are being specified for a moving object.
   * @param signal - The optional abort signal.
   * @returns A list of populated {@link ReverseGeocodeAddress}.
   */
  getAddresses(
    coordinates: Coordinate[],
    hosAddresses?: boolean,
    movingAddresses?: boolean,
    signal?: AbortSignal
  ): Promise<ReverseGeocodeAddress[]>;
}

/**
 * Creates a {@link Geotab} instance with the given options.
 *
 * @param options - The {@link GeotabOptions}.
 * @returns A {@link Geotab} instance.
 */
export function geotab(options: GeotabOptions = {}): Geotab {
  const urlInitial = options.url ?? "https://my.geotab.com/apiv1";
  let url = urlInitial;
  const headers = options.headers ?? {};
  const callQueueMaxSize = options.callQueueMaxSize ?? 100;
  const callQueueBufferTime = options.callQueueBufferTime ?? 1500;
  const parseJson = options.parseJSON ?? parseJsonWithDates;

  let callMany = getCallMany(url, headers, options.credentials, parseJson);
  let callWithBatching = getCallWithBatching(callQueueMaxSize, callQueueBufferTime, callMany);

  async function call<TResult>(method: string, params: Record<string, unknown>): Promise<TResult> {
    try {
      options.onCall?.(method, params);
      const result = await callMany([{ method, params }]);
      options.onCallOk?.(method, params, result);
      return result as TResult;
    } catch (err) {
      options.onCallError?.(method, params, err);
      throw err;
    }
  }

  async function callBatched<TResult>(
    method: string,
    params: Record<string, unknown>,
    signal?: AbortSignal
  ): Promise<TResult> {
    try {
      options.onCall?.(method, params);
      const result = await callBatched(method, params, signal);
      options.onCallOk?.(method, params, result);
      return result as TResult;
    } catch (err) {
      options.onCallError?.(method, params, err);
      throw err;
    }
  }

  return {
    call,

    async login(userName: string, password: string, database?: string): Promise<LoginResult> {
      const result = await this.authenticate(userName, password, database);
      this.useLoginResult(result);
      return result;
    },

    logout() {
      url = urlInitial;
    },

    useLoginResult(loginResult: LoginResult) {
      url = loginResult.path === "ThisServer" ? url : `https://${loginResult.path}/apiv1`;
      callMany = getCallMany(url, headers, loginResult.credentials, parseJson);
      callWithBatching = getCallWithBatching(callQueueMaxSize, callQueueBufferTime, callMany);
    },

    add<TType extends keyof EntityTypes, TEntity extends object = EntityTypes[TType]>(
      typeName: TType,
      entity: O.Partial<TEntity>
    ): Promise<string> {
      return call("Add", { typeName, entity });
    },

    authenticate(userName: string, password: string, database?: string): Promise<LoginResult> {
      return call("Authenticate", { userName, password, database });
    },

    get<
      TType extends keyof EntityTypes & keyof SearchTypes,
      TEntity = EntityTypes[TType],
      TSearch extends object = SearchTypes[TType]
    >(
      typeName: TType,
      search: O.Partial<TSearch>,
      resultsLimit?: number,
      signal?: AbortSignal
    ): Promise<TEntity[]> {
      return callBatched("Get", { typeName, search, resultsLimit }, signal);
    },

    getCountOf<TType extends keyof EntityTypes>(
      typeName: TType,
      signal?: AbortSignal
    ): Promise<number> {
      return callBatched("GetCountOf", { typeName }, signal);
    },

    getFeed<
      TType extends keyof EntityTypes & keyof SearchTypes,
      TEntity = EntityTypes[TType],
      TSearch extends object = SearchTypes[TType]
    >(
      typeName: TType,
      search: O.Partial<TSearch>,
      fromVersion?: string,
      resultsLimit?: number,
      signal?: AbortSignal
    ): Promise<FeedResult<TEntity>> {
      return callBatched("GetFeed", { typeName, search, fromVersion, resultsLimit }, signal);
    },

    getVersion(signal?: AbortSignal): Promise<string> {
      return callBatched("GetVersion", {}, signal);
    },

    getVersionInformation(signal?: AbortSignal): Promise<VersionInformation> {
      return callBatched("GetVersionInformation", {}, signal);
    },

    remove<TType extends keyof EntityTypes, TEntity extends object = EntityTypes[TType]>(
      typeName: TType,
      entity: O.Partial<TEntity> & { id: string }
    ): Promise<void> {
      return call("Remove", { typeName, entity });
    },

    set<TType extends keyof EntityTypes, TEntity extends object = EntityTypes[TType]>(
      typeName: TType,
      entity: O.Partial<TEntity>
    ): Promise<void> {
      return call("Set", { typeName, entity });
    },

    getAddresses(
      coordinates: Coordinate[],
      hosAddresses = false,
      movingAddresses = false,
      signal?: AbortSignal
    ): Promise<ReverseGeocodeAddress[]> {
      return callBatched("GetAddresses", { coordinates, hosAddresses, movingAddresses }, signal);
    },
  };
}
