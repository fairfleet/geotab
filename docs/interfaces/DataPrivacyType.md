[@fairfleet/geotab](../README.md) / DataPrivacyType

# Interface: DataPrivacyType

A unique identifier for different types of [DataPrivacyType](DataPrivacyType.md)s.
 The DataPrivacyType type can be one of the following "Unknown", "Public", "Private", or "PrivateStrict".

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`DataPrivacyType`**

## Table of contents

### Properties

- [id](DataPrivacyType.md#id)
- [isPrivate](DataPrivacyType.md#isprivate)
- [isPublic](DataPrivacyType.md#ispublic)
- [isStrict](DataPrivacyType.md#isstrict)
- [name](DataPrivacyType.md#name)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Overrides

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/DataPrivacyType.ts:13](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DataPrivacyType.ts#L13)

___

### isPrivate

• **isPrivate**: `boolean`

Gets a value indicating whether the privacy mode is private.

#### Defined in

[src/types/Checkmate/ObjectModel/DataPrivacyType.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DataPrivacyType.ts#L15)

___

### isPublic

• **isPublic**: `boolean`

Gets a value indicating whether the privacy mode is public.

#### Defined in

[src/types/Checkmate/ObjectModel/DataPrivacyType.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DataPrivacyType.ts#L17)

___

### isStrict

• **isStrict**: `boolean`

Gets a value indicating whether the privacy mode is private strict.

#### Defined in

[src/types/Checkmate/ObjectModel/DataPrivacyType.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DataPrivacyType.ts#L19)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Overrides

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/DataPrivacyType.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DataPrivacyType.ts#L21)
