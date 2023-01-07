[@fairfleet/geotab](../README.md) / GroupFilterCondition

# Interface: GroupFilterCondition

GroupFilterCondition model the logic that govern a [GroupFilter](GroupFilter.md) and can be used to specify the type of operator (AND and OR) to use when searching for entities.
 GroupFilterCondition are structured in hierarchical tree.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`GroupFilterCondition`**

## Table of contents

### Properties

- [groupFilterConditions](GroupFilterCondition.md#groupfilterconditions)
- [groupFilterId](GroupFilterCondition.md#groupfilterid)
- [groupId](GroupFilterCondition.md#groupid)
- [id](GroupFilterCondition.md#id)
- [includeGroups](GroupFilterCondition.md#includegroups)
- [parent](GroupFilterCondition.md#parent)
- [relation](GroupFilterCondition.md#relation)
- [version](GroupFilterCondition.md#version)

## Properties

### groupFilterConditions

• **groupFilterConditions**: [`GroupFilterCondition`](GroupFilterCondition.md)[]

Gets or sets the groups.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilterCondition.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupFilterCondition.ts#L15)

___

### groupFilterId

• **groupFilterId**: `string`

Gets or sets Parent.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilterCondition.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupFilterCondition.ts#L17)

___

### groupId

• **groupId**: `string`

Gets or sets group id.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilterCondition.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupFilterCondition.ts#L19)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeGroups

• **includeGroups**: [`IncludeGroups`](../README.md#includegroups)

Gets or sets IncludeGroups for ZoneSearch only.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilterCondition.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupFilterCondition.ts#L21)

___

### parent

• **parent**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets Parent.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilterCondition.ts:23](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupFilterCondition.ts#L23)

___

### relation

• **relation**: [`SearchRelation`](../README.md#searchrelation)

Gets or sets how to search the group relations.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilterCondition.ts:25](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupFilterCondition.ts#L25)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
