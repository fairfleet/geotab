[@fairfleet/geotab](../README.md) / DeviceReprocessRequestSearch

# Interface: DeviceReprocessRequestSearch

The object used to specify the arguments when searching for a [DeviceReprocessRequest](DeviceReprocessRequest.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DeviceReprocessRequestSearch`**

## Table of contents

### Properties

- [deviceId](DeviceReprocessRequestSearch.md#deviceid)
- [groups](DeviceReprocessRequestSearch.md#groups)
- [id](DeviceReprocessRequestSearch.md#id)
- [isEmpty](DeviceReprocessRequestSearch.md#isempty)
- [reprocessRequestId](DeviceReprocessRequestSearch.md#reprocessrequestid)
- [status](DeviceReprocessRequestSearch.md#status)
- [version](DeviceReprocessRequestSearch.md#version)

## Properties

### deviceId

• **deviceId**: `string`

Gets or sets the Id of the [Device](Device.md) to search by. Mutually exclusive to all other search
 parameters.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequestSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequestSearch.ts#L15)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Devices that are a member of these [GroupSearch](GroupSearch.md)(s). Each GroupSearch is an object within the array.
 Available
 GroupSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequestSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequestSearch.ts#L22)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isEmpty

• **isEmpty**: `boolean`

Gets a value indicating whether any search criteria have been specified.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequestSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequestSearch.ts#L24)

___

### reprocessRequestId

• **reprocessRequestId**: `string`

Gets or sets the Id of the parent [ReprocessRequest](ReprocessRequest.md) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequestSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequestSearch.ts#L26)

___

### status

• **status**: [`ReprocessRequestStatus`](../README.md#reprocessrequeststatus)

Gets or sets the [ReprocessRequestStatus](../README.md#reprocessrequeststatus) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequestSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequestSearch.ts#L28)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
