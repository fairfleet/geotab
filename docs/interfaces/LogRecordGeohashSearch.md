[@fairfleet/geotab](../README.md) / LogRecordGeohashSearch

# Interface: LogRecordGeohashSearch

The object used to specify the arguments when searching for a [LogRecordGeohash](LogRecordGeohash.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`LogRecordGeohashSearch`**

## Table of contents

### Properties

- [deviceSearch](LogRecordGeohashSearch.md#devicesearch)
- [expansionLevel](LogRecordGeohashSearch.md#expansionlevel)
- [fromDate](LogRecordGeohashSearch.md#fromdate)
- [id](LogRecordGeohashSearch.md#id)
- [includeLogRecordDetails](LogRecordGeohashSearch.md#includelogrecorddetails)
- [maxSearchRadius](LogRecordGeohashSearch.md#maxsearchradius)
- [position](LogRecordGeohashSearch.md#position)
- [toDate](LogRecordGeohashSearch.md#todate)
- [version](LogRecordGeohashSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for LogRecordGeohashes with a [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts#L16)

___

### expansionLevel

• **expansionLevel**: `number`

Gets or sets the geohash neighbor expansion level for search area coverage.
 Level 1: 3x3 grid (9 cells) - for slow-moving or stationary devices
 Level 2: 5x5 grid (25 cells) - for normal/fast-moving devices (default)
 Level 3: 7x7 grid (49 cells) - for very fast-moving devices or larger coverage

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts#L23)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for LogRecords at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts#L25)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeLogRecordDetails

• **includeLogRecordDetails**: `boolean`

Gets or sets a value indicating whether to include LogRecord details. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts#L27)

___

### maxSearchRadius

• **maxSearchRadius**: `number`

Gets or sets the maximum search radius centre at Position when looking for nearest Devices in kilometers.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts#L29)

___

### position

• **position**: [`Coordinate`](Coordinate.md)

Gets or sets search for LogRecords in the vicinity of the provided
 [Coordinate](Coordinate.md). Starting from this position, an outward search for
 Devices will continue until the number of devices found matches the number defined in the "ClosestAssetLimit"
 property.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts#L36)

___

### toDate

• **toDate**: `Date`

Gets or sets search for LogRecords at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LogRecordGeohashSearch.ts#L38)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
