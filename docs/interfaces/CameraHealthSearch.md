[@fairfleet/geotab](../README.md) / CameraHealthSearch

# Interface: CameraHealthSearch

The object used to specify the arguments when searching for [CameraHealth](CameraHealth.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`CameraHealthSearch`**

## Table of contents

### Properties

- [cameraIds](CameraHealthSearch.md#cameraids)
- [id](CameraHealthSearch.md#id)
- [maxVersion](CameraHealthSearch.md#maxversion)
- [statuses](CameraHealthSearch.md#statuses)
- [version](CameraHealthSearch.md#version)

## Properties

### cameraIds

• **cameraIds**: `string`[]

Gets or sets the camera id(s) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraHealthSearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraHealthSearch.ts#L13)

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

Gets or sets the maximum row version of the [CameraHealth](CameraHealth.md) search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraHealthSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraHealthSearch.ts#L15)

___

### statuses

• **statuses**: [`CameraHealthStatus`](../README.md#camerahealthstatus)[]

Gets or sets the health status(es) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraHealthSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraHealthSearch.ts#L17)

___

### version

• **version**: `number`

Gets or sets the row version of the [CameraHealth](CameraHealth.md) search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/CameraHealthSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraHealthSearch.ts#L19)
