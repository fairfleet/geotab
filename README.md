# @fairfleet/geotab

[![Codecov](https://img.shields.io/codecov/c/github/fairfleet/geotab?style=flat-square&token=GT7V1LNB88)](https://app.codecov.io/gh/fairfleet/geotab)
[![npm](https://img.shields.io/npm/v/@fairfleet/geotab?style=flat-square)](https://www.npmjs.com/package/@fairfleet/geotab)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@fairfleet/geotab@latest?style=flat-square)](https://bundlephobia.com/package/@fairfleet/geotab@latest)

An unofficial Geotab API client written in TypeScript.

# Installation

```bash
npm i @fairfleet/geotab

yarn i @fairfleet/geotab

pnpm i @fairfleet/geotab
```

# Quick Start

Obtaining an instance of the [Geotab](docs/interfaces/Geotab.md) client the function
[createGeotab](docs/README.md#creategeotab) should be called. Options can be supplied to determine
the API url, credentials, call buffer options, and etc.

```typescript
import { geotab } from "@fairfleet/geotab";

// Create un-authenticated Geotab client.
const geotab = createGeotab();
```

# Authentication

In the pursuit of small bundle sizes and reduced complexity the [Geotab](docs/interfaces/Geotab.md)
client does not allow mutation of the internal state to track the users' session
[Credentials](docs/interfaces/Credentials.md).

You must supply the [Credentials](docs/interfaces/Credentials.md) when constructing the
[Geotab](docs/interfaces/Geotab.md) via [GeotabOptions](docs/interfaces/GeotabOptions.md) parameter
in [createGeotab](docs/README.md#creategeotab). The [Credentials](docs/interfaces/Credentials.md)
can be extracted from the [LoginResult](docs/interfaces/LoginResult.md) returned by
[Geotab.authenticate](Geotab.md#authenticate) as shown below.

```typescript
import { createGeotab } from "@fairfleet/geotab";

// Construct a {@link Geotab} client with the default options.
const unAuthenticatedClient = createGeotab();

// Calls the Geotab `Authenticate` JSON-RPC method.
const { credentials } = await unAuthenticatedClient.authenticate(
  process.env.USERNAME,
  process.env.PASSWORD
);

// Construct a {@link Geotab} client with the credentials returned from the `Authenticate` JSON-RPC
// call.
const authenticatedClient = createGeotab({ credentials });
```

# Get

The functions [Geotab.get](docs/interfaces/Geotab.md#get) and [Geotab.getFeed](docs/interfaces/Geotab.md#getfeed)
can be used to get data from the Geotab API.

The first parameter of these functions `typeName` is a string that determine which type of data will
be returned. The second parameter `search` is used to define the search criteria when fetching
data. Typescript magic is used to derive which `search` type should be used for which type with the
given `typeName`.

```typescript
import { Geotab, DriverChange } from "@fairfleet/geotab";

/**
 * Gets the latest {@link DriverChange} for the given driver.  If a driver change doesn't exist the
 * value `null` is returned.
 */
export function getLatestDriverChangeForDriver(
  geotab: Geotab,
  driverId: string
): Promise<DriverChange | null> {
  return geotab
    .get("DriverChange", {
      driverSearch: { id: driverId },
      includeOverlappedChanges: true,
    })
    .then((changes) => changes[0] ?? null);
}
```

# GetFeed

Geotab provides a method for getting data updates in a more resource efficient manner accessible via
the [Geotab.getFeed](docs/interfaces/Geotab.md#getfeed) function. While the behavior might change
depending on the type the basic concept is the same.

The [Geotab.getFeed](docs/interfaces/Geotab.md#getfeed) function takes a nullable `fromVersion` parameter
and the returned object contains an array of results and a `toVersion` value. Each `getFeed` call
supplied with the last `toVersion` will return only the new and or update records. The first call
to `getFeed` should apply the search criteria for the duration of the feed, although this doesn't
always mean that existing records matching the given criteria will be returned on the first call.

Details on the differences in behavior between
types are described in detail on the
[Data Feed](https://geotab.github.io/sdk/software/guides/data-feed/) page in the official Geotab SDK
documentation.

```typescript
import { Geotab, DriverChange } from "@fairfleet/geotab";

type OnDriverChange = (driverChange: DriverChange) => void;

/**
 * Polls the `DriverChange` data feed every 10 seconds calling the `onDriverChange` function each
 * time a new {@link DriverChange} record is found for the user.
 *
 * @param geotab - The {@link Geotab} client.
 * @param userId - The id of the user to check driver changes for.
 * @param onDriverChange - The function called when a new {@link DriverChange} is found.
 */
function watchDriverChanges(geotab: Geotab, userId: string, onDriverChange: OnDriverChange) {
  let fromVersion: string | undefined;

  return setInterval(async () => {
    const search = { driverSearch: { id: userId } };
    const result = await geotab.getFeed("DriverChange", search, fromVersion);

    for (const change of result.data) {
      onDriverChange(change);
    }

    fromVersion = result.toVersion;
  }, 10_000);
}
```

# Mutations

Data mutation functions are similar to the [Geotab.get](docs/interfaces/Geotab.md#get) and
[Geotab.getFeed](docs/interfaces/Geotab.md#getfeed) functions in which they require a `typeName`
parameter to be supplied. The key differences are the second parameter which is typically a `entity`
rather than search criteria.

Functions provided by [Geotab](docs/interfaces/Geotab.md) are as follows:

- [Geotab.set](docs/interfaces/Geotab.md#set) Updates an existing entity using the id field provided
  by the `entity` parameter.
- [Geotab.add](docs/interfaces/Geotab.md@add) Adds a new entity with the details provided by the
  `entity` parameter and returns the `id` of the newly added entity.
- [Geotab.remove] Removes the entity matching the `id` provided by the `entity` parameter.

It should be noted call [buffering](#buffering) by default does not apply to methods that mutate data.

# Buffering

The Geotab API provides a method called `ExecuteMultiCall` which provides the ability to execute many
JSON-RPC calls with one HTTP request. To reduce traffic the [Geotab](docs/interfaces/Geotab.md)
client will buffer certain calls with a configurable maximum limit of calls and for a configurable
duration.

The call buffer is configurable during initialization of the [Geotab](docs/interfaces/Geotab.md)
client using the following fields.

- [queueBufferTime](docs/interfaces/GeotabOptions.md#queueBufferTime) The time in milliseconds to
  wait for requests before flushing the queue.
  - Defaults to `1500`.
- [queueMaxSize](docs/interfaces/GeotabOptions.md#queueMaxSize) The maximum number of entries that
  can be queued before a flush is triggered.
  - Defaults to `100`.
  - Setting this value to `0` effectively disables call buffering as the queue will be flushed for
    every call.
- [queueMethods](docs/interfaces/GeotabOptions.md#queueMethods) The JSON-RPC methods names that should
  be queued.
  - Defaults to `["Get", "GetAddresses", "GetCountOf", "GetFeed", "GetVersion", "GetVersionInformation"]`.
  - The default containing only side-effect free calls is intentional and recommended by Geotab.

An example of how the queue can be utilized can be seen below:

```typescript
import { Geotab } from "@fairfleet/geotab";

function getTwoUsersInParallel(geotab: Geotab, user1Id: string, user2Id: string) {
  // The call to `get` will push the JSON-RPC `Get` call to the call buffer and start a count down.
  // While this count down is running more requests can be added to the buffer.
  const user1Promise = geotab.get("User", { id: user1Id });
  // Now we add another request to the call buffer.
  const user2Promise = geotab.get("User", { id: user2Id });

  // With two calls in the buffer if we await the returned promises the count down will complete and
  // the call queue will be flushed sending both requests as a single `ExecuteMultiCall`.
  //
  // A single `POST /apiv1 HTTP/1.1` request will be sent to the Geotab API.
  return await Promise.all([user1Promise, user2Promise]);
}
```

# Tidbits

## KnownIds

Geotab uses quite a few constant strings defined here as [KnownId](docs/enums/KnownId.md) and
[KnownUnitOfMeasure](docs/enums/KnownUnitOfMeasure.md). Using these values in your frontend bundle
should be done with care as it can increase your bundle size for little reason.

- [KnownId](docs/enums/KnownId.md) - `11.1kB` gzip
- [KnownUnitOfMeasure](docs/enums/KnownUnitOfMeasure.md) - `525.0B` gzip

## Where do the Geotab types come from?

Geotab provides a Nuget package [Geotab.Checkmate.ObjectModel](https://www.nuget.org/packages/Geotab.Checkmate.ObjectModel/10.0.0-preview1).
A tool written in C# called [CaroKann](tools/CaroKann/) uses [Reinforced.Typings](https://www.nuget.org/packages/Reinforced.Typings)
to extract the types defined in the Geotab C# SDK and convert them to Typescript type definitions.
