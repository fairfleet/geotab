[@fairfleet/geotab](../README.md) / CameraStatusSearch

# Interface: CameraStatusSearch

The object used to specify the arguments when searching for [CameraStatus](CameraStatus.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`CameraStatusSearch`**

## Table of contents

### Properties

- [cameraIds](CameraStatusSearch.md#cameraids)
- [id](CameraStatusSearch.md#id)
- [maxVersion](CameraStatusSearch.md#maxversion)
- [statuses](CameraStatusSearch.md#statuses)
- [version](CameraStatusSearch.md#version)

## Properties

### cameraIds

• **cameraIds**: `string`[]

Gets or sets the camera id(s) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraStatusSearch.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraStatusSearch.ts#L11)

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

Gets or sets the maximum version to search.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraStatusSearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraStatusSearch.ts#L13)

___

### statuses

• **statuses**: [`CameraDeviceStatus`](../README.md#cameradevicestatus)[]

Gets or sets the camera status(es) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraStatusSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraStatusSearch.ts#L15)

___

### version

• **version**: `number`

Gets or sets the version to search from (for feed operations).

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/CameraStatusSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraStatusSearch.ts#L17)
