import { O } from "ts-toolbelt";
import { getCall } from "./internal/getCall";
import { getCallQueued } from "./internal/getCallQueued";
import { getExecuteMultiCall } from "./internal/getExecuteMultiCall";
import {
  Coordinate,
  EntityTypes,
  FeedResult,
  LoginResult,
  ReverseGeocodeAddress,
  SearchTypes,
  VersionInformation,
} from "./types";
import { Credentials } from "./types/Checkmate/ObjectModel/Credentials";

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

  /** The Geotab credentials to supply to each JSON-RPC call. */
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
   * The function that parses JSON-RPC responses.
   *
   * @remarks Defaults to a function that parses dates in ISO 8601 format.
   */
  parseJSON?: typeof JSON.parse;
}

/**
 * A Geotab API client.
 */
export interface Geotab {
  /**
   * Sends a JSON-RPC call to the Geotab API and returns the result.
   *
   * @param geotab - The Geotab instance to use.
   * @param method - The method to call.
   * @param params - The parameters to pass to the method.
   * @param signal - The optional abort signal.
   * @returns - The result of the call.
   * @throws {Error} If the HTTP status indicates a failure occurred.
   * @throws {GeotabError} If the JSONRPC response contains an error.
   */
  call<TResult>(method: string, params: Record<string, unknown>): Promise<TResult>;

  /**
   * Sends a JSON-RPC call to the Geotab API and returns the result.
   *
   * @remarks Calls are queued and flushed based on the {@link GeotabOptions.callQueueMaxSize}
   * and {@link GeotabOptions.callQueueBufferTime} options.  Multiple queued calls are sent as a
   * single JSON-RPC call to the Geotab API to conserve network usage.
   *
   * @param method - The name of the method to call.
   * @param params - The parameters to supply to the method.
   * @returns - A {@link Promise} that resolves with the result of the call.
   */
  callQueued<TResult>(
    method: string,
    params: Record<string, unknown>,
    signal?: AbortSignal
  ): Promise<TResult>;

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
}

/**
 * Creates a {@link Geotab} instance from the given options.
 *
 * @param options - The options to use.
 * @returns - The {@link Geotab} instance.
 */
export function createGeotab(options: GeotabOptions = {}) {
  const call = getCall(options);
  const executeMultiCall = getExecuteMultiCall(call);
  const callQueued = getCallQueued(call, executeMultiCall, options);

  return {
    call,
    callQueued,

    add(typeName, entity) {
      return this.callQueued("Add", { typeName, entity });
    },

    authenticate(userName, password, database) {
      return this.call("Authenticate", { userName, password, database });
    },

    get(typeName, search, resultLimit, signal) {
      return this.callQueued("Get", { typeName, search, resultLimit }, signal);
    },

    getAddresses(coordinates, hosAddresses, movingAddresses, signal) {
      return this.callQueued(
        "GetAddresses",
        { coordinates, hosAddresses, movingAddresses },
        signal
      );
    },

    getCountOf(typeName, signal?) {
      return this.callQueued("GetCountOf", { typeName }, signal);
    },

    getFeed(typeName, search, fromVersion, resultsLimit, signal) {
      return this.callQueued("GetFeed", { typeName, search, fromVersion, resultsLimit }, signal);
    },

    getVersion(signal) {
      return this.callQueued("GetVersion", {}, signal);
    },

    getVersionInformation(signal) {
      return this.callQueued("GetVersionInformation", {}, signal);
    },

    remove(typeName, entity) {
      return this.call("Remove", { typeName, entity });
    },

    set(typeName, entity) {
      return this.call("Set", { typeName, entity });
    },
  } as Geotab;
}

/**
 * Creates a {@link Geotab} instance from the given credentials.
 *
 * @remarks Calls made with the returned {@link Geotab} instance will have credentials supplied in
 * the call parameters.
 *
 * @param result - The {@link LoginResult} to use.
 * @param options - The options to use.
 * @returns - The {@link Geotab} instance.
 */
export function createGeotabFromLoginResult(result: LoginResult, options: GeotabOptions = {}) {
  // In the Geotab API documentation it is noted that the URL should be derived from the
  // LoginResult.path.However, since the myxxx.geotab.com URL deprecation, the path no longer
  // appears to be necessary.
  return createGeotab({
    ...options,
    credentials: result.credentials,
  });
}
