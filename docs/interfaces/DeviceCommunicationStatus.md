[@fairfleet/geotab](../README.md) / DeviceCommunicationStatus

# Interface: DeviceCommunicationStatus

Object model for the DeviceCommunicationStatus of a device.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`DeviceCommunicationStatus`**

## Table of contents

### Properties

- [dateTime](DeviceCommunicationStatus.md#datetime)
- [device](DeviceCommunicationStatus.md#device)
- [deviceCommunicationStatusState](DeviceCommunicationStatus.md#devicecommunicationstatusstate)
- [id](DeviceCommunicationStatus.md#id)
- [isActive](DeviceCommunicationStatus.md#isactive)
- [version](DeviceCommunicationStatus.md#version)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the dateTime when the status was last updated.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationStatus.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationStatus.ts#L12)

___

### device

• **device**: [`Device`](Device.md)

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationStatus.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationStatus.ts#L16)

___

### deviceCommunicationStatusState

• **deviceCommunicationStatusState**: [`DeviceCommunicationStatusState`](../README.md#devicecommunicationstatusstate)

Gets or sets the communication state of the device.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationStatus.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationStatus.ts#L18)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isActive

• **isActive**: `boolean`

Gets or sets a value indicating whether the status is active.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationStatus.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationStatus.ts#L20)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
