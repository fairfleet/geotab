[@fairfleet/geotab](../README.md) / CameraStatus

# Interface: CameraStatus

Stores camera online/offline status information.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`CameraStatus`**

## Table of contents

### Properties

- [camera](CameraStatus.md#camera)
- [id](CameraStatus.md#id)
- [lastUpdated](CameraStatus.md#lastupdated)
- [status](CameraStatus.md#status)
- [version](CameraStatus.md#version)

## Properties

### camera

• **camera**: [`Camera`](Camera.md)

Gets or sets the camera.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraStatus.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraStatus.ts#L12)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lastUpdated

• **lastUpdated**: `Date`

Gets or sets the last updated timestamp.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraStatus.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraStatus.ts#L14)

___

### status

• **status**: [`CameraDeviceStatus`](../README.md#cameradevicestatus)

Gets or sets the camera status.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraStatus.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraStatus.ts#L16)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
