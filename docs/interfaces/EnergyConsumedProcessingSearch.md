[@fairfleet/geotab](../README.md) / EnergyConsumedProcessingSearch

# Interface: EnergyConsumedProcessingSearch

The object used to specify the arguments when searching for a [EnergyConsumedProcessing](EnergyConsumedProcessing.md) entry.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EnergyConsumedProcessingSearch`**

## Table of contents

### Properties

- [deviceSearch](EnergyConsumedProcessingSearch.md#devicesearch)
- [fromDate](EnergyConsumedProcessingSearch.md#fromdate)
- [id](EnergyConsumedProcessingSearch.md#id)
- [propertySelector](EnergyConsumedProcessingSearch.md#propertyselector)
- [toDate](EnergyConsumedProcessingSearch.md#todate)
- [version](EnergyConsumedProcessingSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the device search criteria for the EnergyConsumedProcessing entry with this [DeviceSearch](DeviceSearch.md) Id. Available DeviceSearch options are:.
 <list><item><description>Id</description><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/EnergyConsumedProcessingSearch.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Processing/EnergyConsumedProcessingSearch.ts#L14)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for ChargeEvent(s) recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/EnergyConsumedProcessingSearch.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Processing/EnergyConsumedProcessingSearch.ts#L16)

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

Gets or sets the to date, which is used to search for ChargeEvent(s) recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/EnergyConsumedProcessingSearch.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Processing/EnergyConsumedProcessingSearch.ts#L18)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
