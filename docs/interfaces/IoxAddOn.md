[@fairfleet/geotab](../README.md) / IoxAddOn

# Interface: IoxAddOn

Represents an Iox Add-On (like modem or navigation device) that is attached to a GO unit. Each Iox Add-On is
 assigned a channel - which is the serial port number that it typically communicates with.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`IoxAddOn`**

## Table of contents

### Properties

- [channel](IoxAddOn.md#channel)
- [dateTime](IoxAddOn.md#datetime)
- [device](IoxAddOn.md#device)
- [id](IoxAddOn.md#id)
- [type](IoxAddOn.md#type)

## Properties

### channel

• **channel**: `number`

Gets or sets the channel on which the Add-On is attached to the GO unit. This is typically just a serial
 port. 0 means the Add-On is not attached.

#### Defined in

[src/types/Checkmate/ObjectModel/IoxAddOn.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/IoxAddOn.ts#L17)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the DateTime this IoxAddOn was assigned it's IoxAddOn.Channel.

#### Defined in

[src/types/Checkmate/ObjectModel/IoxAddOn.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/IoxAddOn.ts#L19)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) this IoxAddOn is connected to.

#### Defined in

[src/types/Checkmate/ObjectModel/IoxAddOn.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/IoxAddOn.ts#L21)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### type

• **type**: `number`

Gets or sets the unique identifier for this Iox Add-On type. Iox Add-On types are assigned by Geotab.
 See KnownIoxAddOnType.

#### Defined in

[src/types/Checkmate/ObjectModel/IoxAddOn.ts:26](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/IoxAddOn.ts#L26)
