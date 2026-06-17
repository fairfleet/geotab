[@fairfleet/geotab](../README.md) / DeviceCommunicationHistory

# Interface: DeviceCommunicationHistory

The DeviceCommunicationHistory entity provides insights about the communication history of a device.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`DeviceCommunicationHistory`**

## Table of contents

### Properties

- [dateTime](DeviceCommunicationHistory.md#datetime)
- [device](DeviceCommunicationHistory.md#device)
- [id](DeviceCommunicationHistory.md#id)
- [lastActiveDateTime](DeviceCommunicationHistory.md#lastactivedatetime)
- [lastModifiedDateTime](DeviceCommunicationHistory.md#lastmodifieddatetime)
- [nextActiveDateTime](DeviceCommunicationHistory.md#nextactivedatetime)
- [version](DeviceCommunicationHistory.md#version)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time the device communication history was created.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationHistory.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationHistory.ts#L11)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the device.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationHistory.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationHistory.ts#L13)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lastActiveDateTime

• **lastActiveDateTime**: `Date`

Gets or sets the date and time when a device actively communicated last time.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationHistory.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationHistory.ts#L15)

___

### lastModifiedDateTime

• **lastModifiedDateTime**: `Date`

Gets or sets the last modified date and time.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationHistory.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationHistory.ts#L17)

___

### nextActiveDateTime

• **nextActiveDateTime**: `Date`

Gets or sets the next active date and time when device started communicating.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationHistory.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationHistory.ts#L19)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
