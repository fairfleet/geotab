[@fairfleet/geotab](../README.md) / EnergySnapshotRecordSearch

# Interface: EnergySnapshotRecordSearch

The object used to specify the arguments when searching for [EnergySnapshotRecord](EnergySnapshotRecord.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EnergySnapshotRecordSearch`**

## Table of contents

### Properties

- [deviceSearch](EnergySnapshotRecordSearch.md#devicesearch)
- [fromDate](EnergySnapshotRecordSearch.md#fromdate)
- [id](EnergySnapshotRecordSearch.md#id)
- [includeAdjacent](EnergySnapshotRecordSearch.md#includeadjacent)
- [includeSnapshotsAfterToDate](EnergySnapshotRecordSearch.md#includesnapshotsaftertodate)
- [includeSnapshotsBeforeFromDate](EnergySnapshotRecordSearch.md#includesnapshotsbeforefromdate)
- [isWaitingForData](EnergySnapshotRecordSearch.md#iswaitingfordata)
- [logReasons](EnergySnapshotRecordSearch.md#logreasons)
- [toDate](EnergySnapshotRecordSearch.md#todate)
- [version](EnergySnapshotRecordSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the device search criteria for the [EnergySnapshotRecordSearch](EnergySnapshotRecordSearch.md) records with this [DeviceSearch](DeviceSearch.md) Id. Available DeviceSearch options are:.
 <list><item><description>Id</description><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts#L14)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for [EnergySnapshotRecord](EnergySnapshotRecord.md) recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts#L16)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeAdjacent

• **includeAdjacent**: `boolean`

Gets or sets the IncludeAdjacent flag which, when true, includes the [EnergySnapshotRecord](EnergySnapshotRecord.md) records immediately before and after the date range specified

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts#L18)

___

### includeSnapshotsAfterToDate

• **includeSnapshotsAfterToDate**: `number`

Gets or sets value. If &gt; 0, retrieve n snapshots after the to date.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts#L20)

___

### includeSnapshotsBeforeFromDate

• **includeSnapshotsBeforeFromDate**: `number`

Gets or sets value. If &gt; 0, retrieve n snapshots before the from date.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts#L22)

___

### isWaitingForData

• **isWaitingForData**: `boolean`

Gets or sets the isWaitingForData flag which is used to search for [EnergySnapshotRecord](EnergySnapshotRecord.md) records recorded with a isWaitingForData flag set to true

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts#L24)

___

### logReasons

• **logReasons**: `string`[]

Gets or sets logs reasons. Includes the [EnergySnapshotRecord](EnergySnapshotRecord.md) records with matching log reasons.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts#L26)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date, which is used to search for [EnergySnapshotRecord](EnergySnapshotRecord.md) recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecordSearch.ts#L28)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
