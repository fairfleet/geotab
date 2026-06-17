[@fairfleet/geotab](../README.md) / Camera

# Interface: Camera

Stores mapping between partner cameras and Geotab devices.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`Camera`**

## Table of contents

### Properties

- [activeFrom](Camera.md#activefrom)
- [activeTo](Camera.md#activeto)
- [deviceSerialNumber](Camera.md#deviceserialnumber)
- [id](Camera.md#id)
- [model](Camera.md#model)
- [partnerDeviceId](Camera.md#partnerdeviceid)
- [partnerId](Camera.md#partnerid)
- [version](Camera.md#version)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets the active from timestamp.

#### Defined in

[src/types/Checkmate/ObjectModel/Camera.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Camera.ts#L11)

___

### activeTo

• **activeTo**: `Date`

Gets or sets the active to timestamp.

#### Defined in

[src/types/Checkmate/ObjectModel/Camera.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Camera.ts#L13)

___

### deviceSerialNumber

• **deviceSerialNumber**: `string`

Gets or sets the device serial number.

#### Defined in

[src/types/Checkmate/ObjectModel/Camera.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Camera.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### model

• **model**: `string`

Gets or sets the camera model.

#### Defined in

[src/types/Checkmate/ObjectModel/Camera.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Camera.ts#L17)

___

### partnerDeviceId

• **partnerDeviceId**: `string`

Gets or sets the partner device id.

#### Defined in

[src/types/Checkmate/ObjectModel/Camera.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Camera.ts#L19)

___

### partnerId

• **partnerId**: [`CameraPartner`](../README.md#camerapartner)

Gets or sets the [CameraPartner](../README.md#camerapartner).

#### Defined in

[src/types/Checkmate/ObjectModel/Camera.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Camera.ts#L21)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
