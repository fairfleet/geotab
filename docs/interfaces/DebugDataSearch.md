[@fairfleet/geotab](../README.md) / DebugDataSearch

# Interface: DebugDataSearch

The object used to specify the arguments when searching
 [DebugData](DebugData.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DebugDataSearch`**

## Table of contents

### Properties

- [deviceSearch](DebugDataSearch.md#devicesearch)
- [fromDate](DebugDataSearch.md#fromdate)
- [id](DebugDataSearch.md#id)
- [propertySelector](DebugDataSearch.md#propertyselector)
- [toDate](DebugDataSearch.md#todate)
- [version](DebugDataSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the search for DebugData recorded for this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DebugDataSearch.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DebugDataSearch.ts#L18)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the date after which DebugData was recorded.

#### Defined in

[src/types/Checkmate/ObjectModel/DebugDataSearch.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DebugDataSearch.ts#L20)

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

Gets or sets the date before which DebugData was recorded.

#### Defined in

[src/types/Checkmate/ObjectModel/DebugDataSearch.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DebugDataSearch.ts#L22)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
