[@fairfleet/geotab](../README.md) / CustomData

# Interface: CustomData

Generic Custom Data from a GO unit that was sent through from a third-party device that is attached to the serial port.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`CustomData`**

## Table of contents

### Properties

- [data](CustomData.md#data)
- [dateTime](CustomData.md#datetime)
- [device](CustomData.md#device)
- [id](CustomData.md#id)

## Properties

### data

• **data**: `number`[]

Gets or sets the custom data in binary format. Default [empty].

#### Defined in

[src/types/Checkmate/ObjectModel/CustomData.ts:11](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/CustomData.ts#L11)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time the log was created.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomData.ts:13](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/CustomData.ts#L13)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) for which the data was recorded.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomData.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/CustomData.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)
