[@fairfleet/geotab](../README.md) / FuelUsedSearch

# Interface: FuelUsedSearch

The object used to specify the arguments when searching for a [FuelUsed](FuelUsed.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`FuelUsedSearch`**

## Table of contents

### Properties

- [deviceSearch](FuelUsedSearch.md#devicesearch)
- [fromDate](FuelUsedSearch.md#fromdate)
- [id](FuelUsedSearch.md#id)
- [propertySelector](FuelUsedSearch.md#propertyselector)
- [toDate](FuelUsedSearch.md#todate)
- [version](FuelUsedSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any FuelUsed data that are assigned to that Device.
 Providing the Groups will search for FuelUsed data for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts#L17)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for [FuelUsed](FuelUsed.md) records recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts#L19)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date, which is used to search for [FuelUsed](FuelUsed.md) records recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Fuel/FuelUsedSearch.ts#L21)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
