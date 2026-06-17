[@fairfleet/geotab](../README.md) / BinaryDataSearch

# Interface: BinaryDataSearch

The object used to specify the arguments when searching for [BinaryData](BinaryData.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`BinaryDataSearch`**

## Table of contents

### Properties

- [binaryDataType](BinaryDataSearch.md#binarydatatype)
- [controllerSearch](BinaryDataSearch.md#controllersearch)
- [deviceSearch](BinaryDataSearch.md#devicesearch)
- [fromDate](BinaryDataSearch.md#fromdate)
- [id](BinaryDataSearch.md#id)
- [onlyMostRecentDeviceAndController](BinaryDataSearch.md#onlymostrecentdeviceandcontroller)
- [toDate](BinaryDataSearch.md#todate)
- [version](BinaryDataSearch.md#version)

## Properties

### binaryDataType

• **binaryDataType**: [`BinaryDataType`](../README.md#binarydatatype)

Gets or sets search for BinaryData that has this [BinaryDataType](../README.md#binarydatatype).

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryDataSearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BinaryDataSearch.ts#L13)

___

### controllerSearch

• **controllerSearch**: [`ControllerSearch`](ControllerSearch.md)

Gets or sets the search options which are used to search for binary data for a controller
 BinaryDataSearch.ControllerSearch
 by Id and protocol's Id. Available ControllerSearch options are:.
 <list><item><description>Id</description></item><item><description>SourceSearch.Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryDataSearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BinaryDataSearch.ts#L20)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any BinaryData that are assigned to that Device.
 Providing the Groups will search for BinaryData for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Group</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryDataSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BinaryDataSearch.ts#L28)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for BinaryData records that were logged at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryDataSearch.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BinaryDataSearch.ts#L30)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### onlyMostRecentDeviceAndController

• **onlyMostRecentDeviceAndController**: `boolean`

Gets or sets search for most rececennt BinaryData grouped by Device and Controller.

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryDataSearch.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BinaryDataSearch.ts#L32)

___

### toDate

• **toDate**: `Date`

Gets or sets search for BinaryData records that were logged at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryDataSearch.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BinaryDataSearch.ts#L34)

___

### version

• **version**: `number`

Gets or sets the row version of the
 [BinaryData](BinaryData.md)
 search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryDataSearch.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BinaryDataSearch.ts#L40)
