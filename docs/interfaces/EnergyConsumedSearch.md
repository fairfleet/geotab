[@fairfleet/geotab](../README.md) / EnergyConsumedSearch

# Interface: EnergyConsumedSearch

The object used to specify the arguments when searching for a [EnergyConsumed](EnergyConsumed.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EnergyConsumedSearch`**

## Table of contents

### Properties

- [deviceSearch](EnergyConsumedSearch.md#devicesearch)
- [fromDate](EnergyConsumedSearch.md#fromdate)
- [id](EnergyConsumedSearch.md#id)
- [propertySelector](EnergyConsumedSearch.md#propertyselector)
- [toDate](EnergyConsumedSearch.md#todate)
- [version](EnergyConsumedSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the device search criteria for the [EnergyConsumed](EnergyConsumed.md) records with this [DeviceSearch](DeviceSearch.md) Id. Available DeviceSearch options are:.
 <list><item><description>Id</description><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergyConsumedSearch.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergyConsumedSearch.ts#L14)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for [EnergyConsumed](EnergyConsumed.md) records recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergyConsumedSearch.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergyConsumedSearch.ts#L16)

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

Gets or sets the to date, which is used to search for [EnergyConsumed](EnergyConsumed.md) records recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergyConsumedSearch.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergyConsumedSearch.ts#L18)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
