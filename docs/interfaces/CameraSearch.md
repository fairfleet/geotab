[@fairfleet/geotab](../README.md) / CameraSearch

# Interface: CameraSearch

The object used to specify the arguments when searching for [Camera](Camera.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`CameraSearch`**

## Table of contents

### Properties

- [cameraHealthSearch](CameraSearch.md#camerahealthsearch)
- [cameraStatusSearch](CameraSearch.md#camerastatussearch)
- [deviceSearch](CameraSearch.md#devicesearch)
- [deviceSerialNumbers](CameraSearch.md#deviceserialnumbers)
- [fromDate](CameraSearch.md#fromdate)
- [id](CameraSearch.md#id)
- [maxVersion](CameraSearch.md#maxversion)
- [onlyCamerasWithInactiveDevice](CameraSearch.md#onlycameraswithinactivedevice)
- [partnerDeviceIds](CameraSearch.md#partnerdeviceids)
- [partners](CameraSearch.md#partners)
- [toDate](CameraSearch.md#todate)
- [version](CameraSearch.md#version)

## Properties

### cameraHealthSearch

• **cameraHealthSearch**: [`CameraHealthSearch`](CameraHealthSearch.md)

Gets or sets search for camera health.
 Supported [CameraHealthSearch](CameraHealthSearch.md) options are:
 <list><item><description>Statuses</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/CameraSearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraSearch.ts#L20)

___

### cameraStatusSearch

• **cameraStatusSearch**: [`CameraStatusSearch`](CameraStatusSearch.md)

Gets or sets search for camera device status.
 Supported [CameraStatusSearch](CameraStatusSearch.md) options are:
 <list><item><description>Statuses</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/CameraSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraSearch.ts#L26)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for device paired to camera.
 Supported [DeviceSearch](DeviceSearch.md) options are:
 <list><item><description>Name</description></item><item><description>VehicleIdentificationNumber</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/CameraSearch.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraSearch.ts#L32)

___

### deviceSerialNumbers

• **deviceSerialNumbers**: `string`[]

Gets or sets the associated go device serial number(s) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraSearch.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraSearch.ts#L34)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the start of the date range to search for active cameras.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraSearch.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraSearch.ts#L36)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum row version of the [Camera](Camera.md) search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraSearch.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraSearch.ts#L38)

___

### onlyCamerasWithInactiveDevice

• **onlyCamerasWithInactiveDevice**: `boolean`

Gets or sets whether to return only cameras with inactive devices.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraSearch.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraSearch.ts#L40)

___

### partnerDeviceIds

• **partnerDeviceIds**: `string`[]

Gets or sets the partner device id(s) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraSearch.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraSearch.ts#L42)

___

### partners

• **partners**: [`CameraPartner`](../README.md#camerapartner)[]

Gets or sets the partner(s) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraSearch.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraSearch.ts#L44)

___

### toDate

• **toDate**: `Date`

Gets or sets the end of the date range to search for active cameras.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraSearch.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraSearch.ts#L46)

___

### version

• **version**: `number`

Gets or sets the row version of the [Camera](Camera.md) search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/CameraSearch.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraSearch.ts#L48)
