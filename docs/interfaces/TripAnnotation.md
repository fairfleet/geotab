[@fairfleet/geotab](../README.md) / TripAnnotation

# Interface: TripAnnotation

A class used to annotate a trip. Represents a comment at a moment in time for a device.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`TripAnnotation`**

## Table of contents

### Properties

- [dateTime](TripAnnotation.md#datetime)
- [device](TripAnnotation.md#device)
- [id](TripAnnotation.md#id)
- [text](TripAnnotation.md#text)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the TripAnnotation.DateTime of the annotation.

#### Defined in

[src/types/Checkmate/ObjectModel/TripAnnotation.ts:11](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TripAnnotation.ts#L11)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the TripAnnotation.Device of the annotation.

#### Defined in

[src/types/Checkmate/ObjectModel/TripAnnotation.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TripAnnotation.ts#L13)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### text

• **text**: `string`

Gets or sets the text of the annotation.

#### Defined in

[src/types/Checkmate/ObjectModel/TripAnnotation.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TripAnnotation.ts#L15)
