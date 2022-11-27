import { fetch, queue } from "./internal";
import { Geotab, GeotabOptions } from "./types";

export * from "./GeotabError";
export * from "./types/Checkmate/ObjectModel/Engine/KnownUnitOfMeasure";
export * from "./types/Checkmate/ObjectModel/KnownId";

/**
 * Creates a {@link Geotab} instance from the given options.
 *
 * @param options - The options to use.
 * @returns - The {@link Geotab} instance.
 */
export function createGeotab(options: GeotabOptions = {}) {
  const middleware = options.middleware ?? [];

  let call = fetch(options);

  middleware.push(queue(options));

  for (let i = middleware.length - 1; i >= 0; i--) {
    call = middleware[i](call);
  }

  return {
    call(method, params, signal) {
      return call({ method, params, signal });
    },

    add(typeName, entity) {
      return this.call("Add", { typeName, entity });
    },

    authenticate(userName, password, database) {
      return this.call("Authenticate", { userName, password, database });
    },

    get(typeName, search, resultLimit, signal) {
      return this.call("Get", { typeName, search, resultLimit }, signal);
    },

    getAddresses(coordinates, hosAddresses, movingAddresses, signal) {
      return this.call("GetAddresses", { coordinates, hosAddresses, movingAddresses }, signal);
    },

    getCountOf(typeName, signal?) {
      return this.call("GetCountOf", { typeName }, signal);
    },

    getFeed(typeName, search, fromVersion, resultsLimit, signal) {
      return this.call("GetFeed", { typeName, search, fromVersion, resultsLimit }, signal);
    },

    getVersion(signal) {
      return this.call("GetVersion", {}, signal);
    },

    getVersionInformation(signal) {
      return this.call("GetVersionInformation", {}, signal);
    },

    remove(typeName, entity) {
      return this.call("Remove", { typeName, entity });
    },

    set(typeName, entity) {
      return this.call("Set", { typeName, entity });
    },
  } as Geotab;
}
