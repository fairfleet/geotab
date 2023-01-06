[@fairfleet/geotab](../README.md) / FuelSnapshotRecordSearch

# Interface: FuelSnapshotRecordSearch

The object used to specify the arguments when searching for a [FuelSnapshotRecord](FuelSnapshotRecord.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`FuelSnapshotRecordSearch`**

## Table of contents

### Properties

- [deviceSearch](FuelSnapshotRecordSearch.md#devicesearch)
- [fromDate](FuelSnapshotRecordSearch.md#fromdate)
- [id](FuelSnapshotRecordSearch.md#id)
- [includeAdjacent](FuelSnapshotRecordSearch.md#includeadjacent)
- [isWaitingForData](FuelSnapshotRecordSearch.md#iswaitingfordata)
- [propertySelector](FuelSnapshotRecordSearch.md#propertyselector)
- [toDate](FuelSnapshotRecordSearch.md#todate)
- [version](FuelSnapshotRecordSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the device search criteria for the [FuelSnapshotRecord](FuelSnapshotRecord.md) records with this [DeviceSearch](DeviceSearch.md) Id. Available DeviceSearch options are:.
 <list><item><description>Id</description><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecordSearch.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecordSearch.ts#L14)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for [FuelSnapshotRecord](FuelSnapshotRecord.md) records recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecordSearch.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecordSearch.ts#L16)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### includeAdjacent

• **includeAdjacent**: `boolean`

Gets or sets the IncludeAdjacent flag which, when true, includes the [FuelSnapshotRecord](FuelSnapshotRecord.md) records immediately before and after the date range specified

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecordSearch.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecordSearch.ts#L18)

___

### isWaitingForData

• **isWaitingForData**: `boolean`

Gets or sets the isWaitingForData flag which is used to search for [FuelSnapshotRecord](FuelSnapshotRecord.md) records recorded with a isWaitingForData flag set to true

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecordSearch.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecordSearch.ts#L20)

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

Gets or sets the to date, which is used to search for [FuelSnapshotRecord](FuelSnapshotRecord.md) records recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecordSearch.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecordSearch.ts#L22)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
