[@fairfleet/geotab](../README.md) / IoxAddOnStatus

# Interface: IoxAddOnStatus

Represents the status of an IoxAddOn that is attached to a GO unit.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`IoxAddOnStatus`**

## Table of contents

### Properties

- [delivered](IoxAddOnStatus.md#delivered)
- [device](IoxAddOnStatus.md#device)
- [deviceConnectionStatus](IoxAddOnStatus.md#deviceconnectionstatus)
- [id](IoxAddOnStatus.md#id)
- [lastCommunicated](IoxAddOnStatus.md#lastcommunicated)
- [queueSize](IoxAddOnStatus.md#queuesize)
- [version](IoxAddOnStatus.md#version)

## Properties

### delivered

• **delivered**: `Date`

Gets or sets date/time the message was delivered.

#### Defined in

src/types/Checkmate/ObjectModel/IoxAddOnStatus.ts:11

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) this IoxAddOn is connected to.

#### Defined in

src/types/Checkmate/ObjectModel/IoxAddOnStatus.ts:13

___

### deviceConnectionStatus

• **deviceConnectionStatus**: `number`

Gets or sets the device connection status (Active = 0, Inactive = 4, Disconnected = 1).

#### Defined in

src/types/Checkmate/ObjectModel/IoxAddOnStatus.ts:15

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lastCommunicated

• **lastCommunicated**: `Date`

Gets or sets the date/time of last IOX/Passthrough communication for the device.

#### Defined in

src/types/Checkmate/ObjectModel/IoxAddOnStatus.ts:17

___

### queueSize

• **queueSize**: `number`

Gets or sets the queue size of pending messages.

#### Defined in

src/types/Checkmate/ObjectModel/IoxAddOnStatus.ts:19

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
