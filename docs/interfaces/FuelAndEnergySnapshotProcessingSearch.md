[@fairfleet/geotab](../README.md) / FuelAndEnergySnapshotProcessingSearch

# Interface: FuelAndEnergySnapshotProcessingSearch

The object used to specify the arguments when searching for a [FuelAndEnergySnapshotProcessing](FuelAndEnergySnapshotProcessing.md) entry.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`FuelAndEnergySnapshotProcessingSearch`**

## Table of contents

### Properties

- [deviceSearch](FuelAndEnergySnapshotProcessingSearch.md#devicesearch)
- [fromDate](FuelAndEnergySnapshotProcessingSearch.md#fromdate)
- [id](FuelAndEnergySnapshotProcessingSearch.md#id)
- [isProcessingComplete](FuelAndEnergySnapshotProcessingSearch.md#isprocessingcomplete)
- [propertySelector](FuelAndEnergySnapshotProcessingSearch.md#propertyselector)
- [snapshotType](FuelAndEnergySnapshotProcessingSearch.md#snapshottype)
- [toDate](FuelAndEnergySnapshotProcessingSearch.md#todate)
- [version](FuelAndEnergySnapshotProcessingSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the device search criteria for the FuelAndEnergySnapshotProcessing entry with this [DeviceSearch](DeviceSearch.md) Id. Available DeviceSearch options are:.
 <list><item><description>Id</description><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessingSearch.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessingSearch.ts#L14)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for Snapshot Processing recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessingSearch.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessingSearch.ts#L16)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### isProcessingComplete

• **isProcessingComplete**: `boolean`

Gets or sets the IsProcessingComplete flag, which is used to search for Snapshot Processing that is completed.

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessingSearch.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessingSearch.ts#L18)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### snapshotType

• **snapshotType**: `string`

Gets or sets the to snapshot type, which is used to search for Snapshot Processing.

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessingSearch.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessingSearch.ts#L20)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date, which is used to search for Snapshot Processing recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessingSearch.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessingSearch.ts#L22)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
