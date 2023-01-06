[@fairfleet/geotab](../README.md) / GroupFilterCondition

# Interface: GroupFilterCondition

Group search list

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
- [propertySelector](GroupFilterCondition.md#propertyselector)
- [relation](GroupFilterCondition.md#relation)
- [version](GroupFilterCondition.md#version)

## Properties

### groupFilterConditions

• **groupFilterConditions**: [`GroupFilterCondition`](GroupFilterCondition.md)[]

Gets or sets the groups

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilterCondition.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/GroupFilterCondition.ts#L12)

___

### groupFilterId

• **groupFilterId**: `string`

Gets or sets Parent

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilterCondition.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/GroupFilterCondition.ts#L14)

___

### groupId

• **groupId**: `string`

Gets or sets group id

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilterCondition.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/GroupFilterCondition.ts#L16)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### includeGroups

• **includeGroups**: [`IncludeGroups`](../README.md#includegroups)

Gets or sets IncludeGroups for ZoneSearch only

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilterCondition.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/GroupFilterCondition.ts#L18)

___

### parent

• **parent**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets Parent

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilterCondition.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/GroupFilterCondition.ts#L20)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### relation

• **relation**: [`GroupSearchRelation`](../README.md#groupsearchrelation)

Gets or sets how to search the group relations

#### Defined in

[src/types/Checkmate/ObjectModel/GroupFilterCondition.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/GroupFilterCondition.ts#L22)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
