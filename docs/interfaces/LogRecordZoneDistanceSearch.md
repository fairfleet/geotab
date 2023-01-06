[@fairfleet/geotab](../README.md) / LogRecordZoneDistanceSearch

# Interface: LogRecordZoneDistanceSearch

The object used to specify the arguments when searching for
 [LogRecord](LogRecord.md) from GPSZoneDistance page(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`LogRecordZoneDistanceSearch`**

## Table of contents

### Properties

- [deviceSearch](LogRecordZoneDistanceSearch.md#devicesearch)
- [fromDate](LogRecordZoneDistanceSearch.md#fromdate)
- [id](LogRecordZoneDistanceSearch.md#id)
- [propertySelector](LogRecordZoneDistanceSearch.md#propertyselector)
- [toDate](LogRecordZoneDistanceSearch.md#todate)
- [version](LogRecordZoneDistanceSearch.md#version)
- [zoneSearch](LogRecordZoneDistanceSearch.md#zonesearch)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [LogRecordZoneDistance](LogRecordZoneDistance.md)s that were created for
 [DeviceSearch](DeviceSearch.md)(s).
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordZoneDistanceSearch.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/LogRecordZoneDistanceSearch.ts#L20)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for [LogRecordZoneDistance](LogRecordZoneDistance.md)s that were recorded at this
 date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordZoneDistanceSearch.ts:25](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/LogRecordZoneDistanceSearch.ts#L25)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### toDate

• **toDate**: `Date`

Gets or sets search for [LogRecordZoneDistance](LogRecordZoneDistance.md)s that were recorded at this
 date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordZoneDistanceSearch.ts:30](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/LogRecordZoneDistanceSearch.ts#L30)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)

___

### zoneSearch

• **zoneSearch**: [`ZoneSearch`](ZoneSearch.md)

Gets or sets search for [LogRecordZoneDistance](LogRecordZoneDistance.md)s that were created for
 [ZoneSearch](ZoneSearch.md)(s).
 Available ZoneSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordZoneDistanceSearch.ts:37](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/LogRecordZoneDistanceSearch.ts#L37)
