[@fairfleet/geotab](../README.md) / ZoneType

# Interface: ZoneType

The type of the zone.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`ZoneType`**

## Table of contents

### Properties

- [comment](ZoneType.md#comment)
- [defaultFillColorForNewZoneType](ZoneType.md#defaultfillcolorfornewzonetype)
- [fillColor](ZoneType.md#fillcolor)
- [id](ZoneType.md#id)
- [isBuiltIn](ZoneType.md#isbuiltin)
- [name](ZoneType.md#name)

## Properties

### comment

• **comment**: `string`

Gets or sets a free text field where any user information can be stored and referenced for this entity. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneType.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ZoneType.ts#L11)

___

### defaultFillColorForNewZoneType

• **defaultFillColorForNewZoneType**: [`Color`](Color.md)

Gets the default fill color for a new ZoneType.

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneType.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ZoneType.ts#L13)

___

### fillColor

• **fillColor**: [`Color`](Color.md)

Gets or sets the fill color of the zone type.

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneType.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ZoneType.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isBuiltIn

• **isBuiltIn**: `boolean`

Gets or sets a value indicating whether the zone type is built-in.

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneType.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ZoneType.ts#L17)

___

### name

• **name**: `string`

Gets or sets the name of this entity which identifies it and is used when displaying this entity.

#### Inherited from

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)
