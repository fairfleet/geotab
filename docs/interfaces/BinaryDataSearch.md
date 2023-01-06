[@fairfleet/geotab](../README.md) / BinaryDataSearch

# Interface: BinaryDataSearch

The object used to specify the arguments when searching for [BinaryData](BinaryData.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`BinaryDataSearch`**

## Table of contents

### Properties

- [binaryDataType](BinaryDataSearch.md#binarydatatype)
- [deviceSearch](BinaryDataSearch.md#devicesearch)
- [fromDate](BinaryDataSearch.md#fromdate)
- [id](BinaryDataSearch.md#id)
- [propertySelector](BinaryDataSearch.md#propertyselector)
- [toDate](BinaryDataSearch.md#todate)
- [version](BinaryDataSearch.md#version)

## Properties

### binaryDataType

• **binaryDataType**: [`BinaryDataType`](../README.md#binarydatatype)

Gets or sets search for BinaryData that has this [BinaryDataType](../README.md#binarydatatype).

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryDataSearch.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/BinaryDataSearch.ts#L12)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any BinaryData that are assigned to that Device.
 Providing the Groups will search for BinaryData for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Group</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryDataSearch.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/BinaryDataSearch.ts#L20)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for BinaryData records that were logged at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryDataSearch.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/BinaryDataSearch.ts#L22)

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

Gets or sets search for BinaryData records that were logged at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryDataSearch.ts:24](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/BinaryDataSearch.ts#L24)

___

### version

• **version**: `number`

Gets or sets the row version of the
 [BinaryData](BinaryData.md)
 search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryDataSearch.ts:30](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/BinaryDataSearch.ts#L30)
