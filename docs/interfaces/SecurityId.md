[@fairfleet/geotab](../README.md) / SecurityId

# Interface: SecurityId

For managing security identifiers.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`SecurityId`**

## Table of contents

### Properties

- [customPageName](SecurityId.md#custompagename)
- [id](SecurityId.md#id)
- [isSystemSecurityId](SecurityId.md#issystemsecurityid)
- [name](SecurityId.md#name)
- [version](SecurityId.md#version)

## Properties

### customPageName

• **customPageName**: `string`

Gets or Sets the custom page name.

#### Defined in

[src/types/Checkmate/ObjectModel/SecurityId.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/SecurityId.ts#L10)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### isSystemSecurityId

• **isSystemSecurityId**: `boolean`

Gets or sets a value indicating whether this securityIdentifier is a system Id or custom identifier.

#### Defined in

[src/types/Checkmate/ObjectModel/SecurityId.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/SecurityId.ts#L12)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
