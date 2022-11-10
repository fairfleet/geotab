import { GeotabRpcClient, GeotabRpcClientOptions } from "./GeotabRpcClient";
import { Coordinate } from "./types/Checkmate/ObjectModel/Coordinate";
import { LoginResult } from "./types/Checkmate/ObjectModel/LoginResult";
import { ReverseGeocodeAddress } from "./types/Checkmate/ObjectModel/ReverseGeocodeAddress";
import { VersionInformation } from "./types/Checkmate/ObjectModel/VersionInformation";
import parseJsonWithDates from "./parseJsonWithDates";
import { EntityTypes } from "./types/EntityTypes";
import { FeedResult } from "./types/FeedResult";
import { PartialDeep } from "./types/PartialDeep";
import { SearchTypes } from "./types/SearchTypes";

/**
 * The {@link Geotab} options.
 */
export interface GeotabOptions extends Omit<GeotabRpcClientOptions, "url" | "parseJSON"> {
  /**
   * The Geotab API url.
   *
   * @remarks Defaults to "https://my.geotab.com/apiv1".
   */
  url?: string;

  /**
   * The function that parses JSONRPC responses.
   *
   * @remarks Defaults to a function that parses dates in ISO 8601 format.
   */
  parseJSON?(json: string): unknown;
}

/**
 * Provides methods for interacting with the Geotab API.
 *
 * @remarks
 *
 * The {@link Geotab} class is a wrapper around the {@link GeotabRpcClient} class. It provides typed
 * methods for calling documented Geotab API methods.  Additionally it provides methods for logging
 * in and out of the Geotab API while storing the session credentials in memory for subsequent calls.
 *
 * Because {@link Geotab} provides multiple ways to instantiate an authenticated session a method
 * {@link Geotab.useLoginResult} is provided to manually set the session credentials.
 *
 * No attempts are made to store the session credentials in a persistent manner as this is outside
 * the scope of this library.
 *
 * @example
 *
 * Authenticate with Geotab and fetch the current user's information.
 * ```typescript
 * import { Geotab } from "@fairfleet/geotab";
 *
 * const client = new Geotab();
 *
 * await client.login(process.env.GEOTAB_USERNAME, process.env.GEOTAB_PASSWORD);
 * await client.get("User", { userName: process.env.GEOTAB_USERNAME })
 *   .then((users) => console.log(users[0]));
 * ```
 */
export class Geotab extends GeotabRpcClient {
  constructor(private readonly options: GeotabOptions = {}) {
    const url = options.url ?? "https://my.geotab.com/apiv1";
    const parseJSON = options.parseJSON ?? parseJsonWithDates;
    const optionsComplete = { ...options, url, parseJSON };

    super(optionsComplete);
    this.options = optionsComplete;
  }

  /**
   * Authenticates the user with the given login credentials and stores the session information for
   * future calls.
   *
   * @param userName - The user name (typically an email address) that identifies the user.
   * @param password - The user's Geotab password.
   * @param database - The name of the database to authenticate against.
   * @returns - The {@link LoginResult} object.
   */
  async login(userName: string, password: string, database?: string): Promise<LoginResult> {
    const resultPromise = this.authenticate(userName, password, database);
    await this.flushCallQueue();
    const result = await resultPromise;
    this.useLoginResult(result);
    return result;
  }

  /**
   * Logs out the current user.
   */
  logout() {
    this.setCredentials(undefined);
    this.url = this.options.url;
  }

  /**
   * Configures the {@link Geotab} client to use the credentials provided in the given
   * {@link LoginResult} for future calls.
   *
   * @param loginResult - The {@link LoginResult} containing the credentials to use.
   */
  useLoginResult(loginResult: LoginResult) {
    this.url = loginResult.path === "ThisServer" ? this.url : `https://${loginResult.path}/apiv1`;
    this.setCredentials(loginResult.credentials);
  }

  /**
   * Adds a new entity to the Geotab database.
   *
   * @param typeName The name of the entity type.
   * @param entity The entity to add.
   * @returns The id of the added entity.
   */
  add<TType extends keyof EntityTypes, TEntity = EntityTypes[TType]>(
    typeName: TType,
    entity: PartialDeep<TEntity>
  ): Promise<string> {
    return this.call("Add", { typeName, entity });
  }

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
  authenticate(userName: string, password: string, database?: string): Promise<LoginResult> {
    return this.call("Authenticate", { userName, password, database });
  }

  /**
   * Gets collection of entities from the database that match the supplied search
   * criteria.
   *
   * @param typeName The name of the entity type.
   * @param search The search criteria to use.
   * @param resultsLimit The maximum number of entities that will be returned.
   * @returns The entities matching search criteria.
   */
  get<
    TType extends keyof EntityTypes & keyof SearchTypes,
    TEntity = EntityTypes[TType],
    TSearch = SearchTypes[TType]
  >(typeName: TType, search: PartialDeep<TSearch>, resultsLimit?: number): Promise<TEntity[]> {
    return this.call("Get", { typeName, search, resultsLimit });
  }

  /**
   * Gets the number of of entities in the database.
   *
   * @param typeName The name of the entity type.
   * @returns The number of entities in the database.
   */
  getCountOf<TType extends keyof EntityTypes>(typeName: TType): Promise<number> {
    return this.call("GetCountOf", { typeName });
  }

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
   * @returns The feed result containing the entities matching supplied criteria.
   */
  getFeed<
    TType extends keyof EntityTypes & keyof SearchTypes,
    TEntity = EntityTypes[TType],
    TSearch = SearchTypes[TType]
  >(
    typeName: TType,
    search: PartialDeep<TSearch>,
    fromVersion?: string,
    resultsLimit?: number
  ): Promise<FeedResult<TEntity>> {
    return this.call("GetFeed", { typeName, search, fromVersion, resultsLimit });
  }

  /**
   * Gets the version of the server.
   * @returns The string representation of the server version.
   */
  getVersion(): Promise<string> {
    return this.call("GetVersion", {});
  }

  /**
   * Gets the version information of the server.
   *
   * @returns The version information of the server.
   */
  getVersionInformation(): Promise<VersionInformation> {
    return this.call("GetVersionInformation", {});
  }

  remove<TType extends keyof EntityTypes, TEntity = EntityTypes[TType]>(
    typeName: TType,
    entity: PartialDeep<TEntity> & { id: string }
  ) {
    return this.call("Remove", { typeName, entity });
  }

  /**
   * Modifies an {@link TEntity}.
   *
   * @param typeName The name of the entity type.
   * @param entity The entity to modify.
   */
  set<TType extends keyof EntityTypes, TEntity = EntityTypes[TType]>(
    typeName: TType,
    entity: PartialDeep<TEntity>
  ): Promise<void> {
    return this.call("Set", { typeName, entity });
  }

  /**
   * Gets the addresses from the list of {@link Coordinate}, as well as any {@link Zone}s in the
   * system that contain the given coordinates.
   *
   * @param coordinates - The array of {@link Coordinate} to get the addresses for.
   * @param hosAddresses - If true, the direction and distance to the nearest city with a population
   * greater than 5000 will be returned.
   * @param movingAddresses - If true, the coordinates are being specified for a moving object.
   * @returns A list of populated {@link ReverseGeocodeAddress}.
   */
  getAddresses(
    coordinates: Coordinate[],
    hosAddresses = false,
    movingAddresses = false
  ): Promise<ReverseGeocodeAddress[]> {
    return this.call("GetAddresses", { coordinates, hosAddresses, movingAddresses });
  }
}
