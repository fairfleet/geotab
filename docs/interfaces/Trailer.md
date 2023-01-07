[@fairfleet/geotab](../README.md) / Trailer

# Interface: Trailer

A trailer which can be attached and detached from a vehicle with a
 [TrailerAttachment](TrailerAttachment.md) record.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`Trailer`**

## Table of contents

### Properties

- [comment](Trailer.md#comment)
- [groups](Trailer.md#groups)
- [id](Trailer.md#id)
- [name](Trailer.md#name)
- [version](Trailer.md#version)

## Properties

### comment

• **comment**: `string`

Gets or sets free text field where any user information can be stored and referenced for this entity. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Trailer.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Trailer.ts#L14)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets the list of trailer groups.

#### Defined in

[src/types/Checkmate/ObjectModel/Trailer.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Trailer.ts#L16)

___

### id

• **id**: `string`

Gets or sets the unique Id of the trailer.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Trailer.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Trailer.ts#L18)

___

### name

• **name**: `string`

Gets or sets the name of the trailer. Maximum length [255].

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Trailer.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Trailer.ts#L20)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
