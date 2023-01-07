[@fairfleet/geotab](../README.md) / EntitySetting

# Interface: EntitySetting

Represents a entity-linked setting in JSON format. Every setting has an specific key.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EntitySetting`**

## Table of contents

### Properties

- [data](EntitySetting.md#data)
- [entityId](EntitySetting.md#entityid)
- [entityType](EntitySetting.md#entitytype)
- [id](EntitySetting.md#id)
- [key](EntitySetting.md#key)
- [settingValue](EntitySetting.md#settingvalue)

## Properties

### data

• **data**: [`AddInData`](AddInData.md)

Gets or sets the [AddInData](AddInData.md) for this setting.

#### Defined in

src/types/Checkmate/ObjectModel/EntitySettings/EntitySetting.ts:12

___

### entityId

• **entityId**: `string`

Gets or sets the entity identifier of this setting.

#### Defined in

src/types/Checkmate/ObjectModel/EntitySettings/EntitySetting.ts:14

___

### entityType

• **entityType**: [`EntityType`](../README.md#entitytype)

Gets or sets the entity type of this setting.

#### Defined in

src/types/Checkmate/ObjectModel/EntitySettings/EntitySetting.ts:16

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### key

• **key**: `string`

Gets or sets the key for this setting.

#### Defined in

src/types/Checkmate/ObjectModel/EntitySettings/EntitySetting.ts:18

___

### settingValue

• **settingValue**: `string`

Gets or sets the setting value of this setting.

#### Defined in

src/types/Checkmate/ObjectModel/EntitySettings/EntitySetting.ts:20
