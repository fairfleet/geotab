[@fairfleet/geotab](../README.md) / DebugData

# Interface: DebugData

DebugData is generated by Geotab GO devices for internal
 debugging or troubleshooting purposes. This may include information regarding the state of the modem, firmware or
 conditions that the device is experiencing.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DebugData`**

## Table of contents

### Properties

- [data](DebugData.md#data)
- [dateTime](DebugData.md#datetime)
- [debugReason](DebugData.md#debugreason)
- [device](DebugData.md#device)
- [driver](DebugData.md#driver)
- [id](DebugData.md#id)

## Properties

### data

• **data**: `number`[]

Gets or sets the binary data.

#### Defined in

[src/types/Checkmate/ObjectModel/DebugData.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DebugData.ts#L17)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time the DebugData log was created.

#### Defined in

[src/types/Checkmate/ObjectModel/DebugData.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DebugData.ts#L19)

___

### debugReason

• **debugReason**: [`DebugReason`](../README.md#debugreason)

Gets or sets the DebugReason; used for troubleshooting/debugging purposes only.

#### Defined in

[src/types/Checkmate/ObjectModel/DebugData.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DebugData.ts#L21)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with the vehicle.

#### Defined in

[src/types/Checkmate/ObjectModel/DebugData.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DebugData.ts#L23)

___

### driver

• **driver**: [`Driver`](Driver.md)

Gets or sets the [Driver](Driver.md) of the vehicle at the time the DebugData log entry was created.

#### Defined in

[src/types/Checkmate/ObjectModel/DebugData.ts:25](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DebugData.ts#L25)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)