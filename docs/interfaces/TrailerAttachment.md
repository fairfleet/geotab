[@fairfleet/geotab](../README.md) / TrailerAttachment

# Interface: TrailerAttachment

A TrailerAttachment is a record of the attachment of a [Trailer](Trailer.md) to a [Device](Device.md) over a period of time.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`TrailerAttachment`**

## Table of contents

### Properties

- [activeFrom](TrailerAttachment.md#activefrom)
- [activeTo](TrailerAttachment.md#activeto)
- [dateTime](TrailerAttachment.md#datetime)
- [device](TrailerAttachment.md#device)
- [id](TrailerAttachment.md#id)
- [trailer](TrailerAttachment.md#trailer)
- [version](TrailerAttachment.md#version)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets the date and time the [Trailer](Trailer.md) was attached. Default [UtcNow].

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerAttachment.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TrailerAttachment.ts#L12)

___

### activeTo

• **activeTo**: `Date`

Gets or sets the date and time the [Trailer](Trailer.md) was detached. Default [MaxDate].

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerAttachment.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TrailerAttachment.ts#L14)

___

### dateTime

• **dateTime**: `Date`

Gets the date the [Trailer](Trailer.md) was attached. This is only present so that we can implement IDeviceProvider.

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerAttachment.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TrailerAttachment.ts#L16)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) which the [Trailer](Trailer.md) is associated with.

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerAttachment.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TrailerAttachment.ts#L18)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### trailer

• **trailer**: [`Trailer`](Trailer.md)

Gets or sets the attached [Trailer](Trailer.md).

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerAttachment.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TrailerAttachment.ts#L20)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
