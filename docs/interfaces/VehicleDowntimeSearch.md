[@fairfleet/geotab](../README.md) / VehicleDowntimeSearch

# Interface: VehicleDowntimeSearch

The object used to specify the arguments when searching for [VehicleDowntime](VehicleDowntime.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`VehicleDowntimeSearch`**

## Table of contents

### Properties

- [aggregateType](VehicleDowntimeSearch.md#aggregatetype)
- [deviceSearch](VehicleDowntimeSearch.md#devicesearch)
- [fromLocalDate](VehicleDowntimeSearch.md#fromlocaldate)
- [id](VehicleDowntimeSearch.md#id)
- [repairClass](VehicleDowntimeSearch.md#repairclass)
- [sourceReason](VehicleDowntimeSearch.md#sourcereason)
- [toLocalDate](VehicleDowntimeSearch.md#tolocaldate)
- [version](VehicleDowntimeSearch.md#version)

## Properties

### aggregateType

• **aggregateType**: [`IntervalAggregateType`](../README.md#intervalaggregatetype)

Gets or sets the aggregate type to filter by.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntimeSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntimeSearch.ts#L12)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [VehicleDowntime](VehicleDowntime.md)s matching this
 [DeviceSearch](DeviceSearch.md).
 Providing a device ID will search for any VehicleDowntime that are assigned to that Device.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntimeSearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntimeSearch.ts#L20)

___

### fromLocalDate

• **fromLocalDate**: `Date`

Gets or sets search for [VehicleDowntime](VehicleDowntime.md)s from this local date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntimeSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntimeSearch.ts#L22)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### repairClass

• **repairClass**: `string`

Gets or sets the repair class to filter by.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntimeSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntimeSearch.ts#L24)

___

### sourceReason

• **sourceReason**: `string`

Gets or sets the source reason to filter by.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntimeSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntimeSearch.ts#L26)

___

### toLocalDate

• **toLocalDate**: `Date`

Gets or sets search for [VehicleDowntime](VehicleDowntime.md)s to this local date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntimeSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntimeSearch.ts#L28)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
