[@fairfleet/geotab](../README.md) / FuelAndEnergyUsedSearch

# Interface: FuelAndEnergyUsedSearch

The object used to specify the arguments when searching for [FuelAndEnergyUsed](FuelAndEnergyUsed.md).
 This search has been designed to work efficiently with these parameters:<list><item><description>Id</description></item><item><description>DeviceSearch + FromDate and/or ToDate</description></item></list>

## Hierarchy

- [`FuelUsedSearch`](FuelUsedSearch.md)

  ↳ **`FuelAndEnergyUsedSearch`**

## Table of contents

### Properties

- [deviceSearch](FuelAndEnergyUsedSearch.md#devicesearch)
- [fromDate](FuelAndEnergyUsedSearch.md#fromdate)
- [id](FuelAndEnergyUsedSearch.md#id)
- [includeDeleted](FuelAndEnergyUsedSearch.md#includedeleted)
- [maxVersion](FuelAndEnergyUsedSearch.md#maxversion)
- [toDate](FuelAndEnergyUsedSearch.md#todate)
- [version](FuelAndEnergyUsedSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any data that are assigned to that Device.
 Providing the Groups will search for data for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Inherited from

[FuelUsedSearch](FuelUsedSearch.md).[deviceSearch](FuelUsedSearch.md#devicesearch)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts#L20)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for records recorded on or after this date.

#### Inherited from

[FuelUsedSearch](FuelUsedSearch.md).[fromDate](FuelUsedSearch.md#fromdate)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts#L22)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[FuelUsedSearch](FuelUsedSearch.md).[id](FuelUsedSearch.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeDeleted

• **includeDeleted**: `boolean`

Gets or sets a value indicating whether search includes records that have the dtDeleted column set

#### Inherited from

[FuelUsedSearch](FuelUsedSearch.md).[includeDeleted](FuelUsedSearch.md#includedeleted)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts#L24)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum row version of the
 [FuelUsed](FuelUsed.md) search criteria.

#### Inherited from

[FuelUsedSearch](FuelUsedSearch.md).[maxVersion](FuelUsedSearch.md#maxversion)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts#L29)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date, which is used to search for records recorded on or before this date.

#### Inherited from

[FuelUsedSearch](FuelUsedSearch.md).[toDate](FuelUsedSearch.md#todate)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts#L31)

___

### version

• **version**: `number`

Gets or sets the row version of the [FuelUsed](FuelUsed.md)
 search criteria.

#### Inherited from

[FuelUsedSearch](FuelUsedSearch.md).[version](FuelUsedSearch.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts#L36)
