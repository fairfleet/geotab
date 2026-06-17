[@fairfleet/geotab](../README.md) / CameraHealth

# Interface: CameraHealth

Stores the camera health status information.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`CameraHealth`**

## Table of contents

### Properties

- [camera](CameraHealth.md#camera)
- [id](CameraHealth.md#id)
- [lastUpdated](CameraHealth.md#lastupdated)
- [status](CameraHealth.md#status)
- [version](CameraHealth.md#version)

## Properties

### camera

• **camera**: [`Camera`](Camera.md)

Gets or sets the camera.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraHealth.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraHealth.ts#L12)

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

Gets or sets the timestamp when the health status was last updated.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraHealth.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraHealth.ts#L14)

___

### status

• **status**: [`CameraHealthStatus`](../README.md#camerahealthstatus)

Gets or sets the camera health status.

#### Defined in

[src/types/Checkmate/ObjectModel/CameraHealth.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CameraHealth.ts#L16)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
