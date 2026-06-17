[@fairfleet/geotab](../README.md) / DiscreteAvailabilitySnapshotSearch

# Interface: DiscreteAvailabilitySnapshotSearch

The object used to specify the arguments when searching for [DiscreteAvailabilitySnapshot](DiscreteAvailabilitySnapshot.md) objects.

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DiscreteAvailabilitySnapshotSearch`**

## Table of contents

### Properties

- [fromDate](DiscreteAvailabilitySnapshotSearch.md#fromdate)
- [id](DiscreteAvailabilitySnapshotSearch.md#id)
- [includeBoundaryAfter](DiscreteAvailabilitySnapshotSearch.md#includeboundaryafter)
- [includeBoundaryBefore](DiscreteAvailabilitySnapshotSearch.md#includeboundarybefore)
- [includeDeleted](DiscreteAvailabilitySnapshotSearch.md#includedeleted)
- [maxVersion](DiscreteAvailabilitySnapshotSearch.md#maxversion)
- [minVersion](DiscreteAvailabilitySnapshotSearch.md#minversion)
- [toDate](DiscreteAvailabilitySnapshotSearch.md#todate)
- [userSearch](DiscreteAvailabilitySnapshotSearch.md#usersearch)
- [version](DiscreteAvailabilitySnapshotSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets the start date for filtering snapshots.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts#L15)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeBoundaryAfter

• **includeBoundaryAfter**: `boolean`

Gets or sets a value indicating whether to include the availability record immediately after the ToDate.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts#L17)

___

### includeBoundaryBefore

• **includeBoundaryBefore**: `boolean`

Gets or sets a value indicating whether to include the availability record immediately before the FromDate.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts#L19)

___

### includeDeleted

• **includeDeleted**: `boolean`

Gets or sets a value indicating whether to include soft-deleted records in the search results.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts#L21)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum row version for filtering (used internally for feed operations).

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts#L27)

___

### minVersion

• **minVersion**: `number`

Gets or sets the minimum row version for filtering (used internally for feed operations).

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts#L33)

___

### toDate

• **toDate**: `Date`

Gets or sets the end date for filtering snapshots.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts#L35)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for discrete availability objects with this [UserSearch](UserSearch.md).
 Available UserSearch options are:
 <list><item><description>Id</description></item><item><description>DriverGroups</description></item><item><description>DriverGroupFilterCondition</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshotSearch.ts#L41)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
