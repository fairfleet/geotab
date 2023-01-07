[@fairfleet/geotab](../README.md) / GroupFilter

# Interface: GroupFilter

GroupFilter can be used to specify the type of operator (AND and OR) to use when searching for entities.
 The GroupsFilter option allows you to use more than one type of operator when searching for a specific group.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`GroupFilter`**

## Table of contents

### Properties

- [comments](GroupFilter.md#comments)
- [groupFilterCondition](GroupFilter.md#groupfiltercondition)
- [id](GroupFilter.md#id)
- [name](GroupFilter.md#name)

## Properties

### comments

• **comments**: `string`

Gets or sets the comments

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilter.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupFilter.ts#L14)

___

### groupFilterCondition

• **groupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets the GroupFilter

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilter.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupFilter.ts#L16)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)
