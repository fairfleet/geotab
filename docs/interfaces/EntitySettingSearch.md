[@fairfleet/geotab](../README.md) / EntitySettingSearch

# Interface: EntitySettingSearch

A [Search](Search.md) object to search for [EntitySetting](EntitySetting.md) rows.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EntitySettingSearch`**

## Table of contents

### Properties

- [entityId](EntitySettingSearch.md#entityid)
- [entityType](EntitySettingSearch.md#entitytype)
- [id](EntitySettingSearch.md#id)
- [key](EntitySettingSearch.md#key)
- [version](EntitySettingSearch.md#version)

## Properties

### entityId

• **entityId**: `string`

Gets or sets the entity Id.

#### Defined in

src/types/Checkmate/ObjectModel/EntitySettings/EntitySettingSearch.ts:11

___

### entityType

• **entityType**: [`EntityType`](../README.md#entitytype)

Gets or sets the EntitySettingSearch.EntityType.

#### Defined in

src/types/Checkmate/ObjectModel/EntitySettings/EntitySettingSearch.ts:13

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### key

• **key**: `string`

Gets or sets the settings key.

#### Defined in

src/types/Checkmate/ObjectModel/EntitySettings/EntitySettingSearch.ts:15

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
