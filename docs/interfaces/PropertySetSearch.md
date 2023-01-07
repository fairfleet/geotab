[@fairfleet/geotab](../README.md) / PropertySetSearch

# Interface: PropertySetSearch

The search object of the [PropertySet](PropertySet.md) class.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`PropertySetSearch`**

## Table of contents

### Properties

- [externalReference](PropertySetSearch.md#externalreference)
- [groupFilterCondition](PropertySetSearch.md#groupfiltercondition)
- [groups](PropertySetSearch.md#groups)
- [id](PropertySetSearch.md#id)
- [name](PropertySetSearch.md#name)
- [version](PropertySetSearch.md#version)

## Properties

### externalReference

• **externalReference**: `string`

Gets or sets search for PropertySets with this External Reference. Wildcard can be used by prepending/appending "%" to string. Example
 "%comments%".

#### Defined in

[src/types/Checkmate/ObjectModel/PropertySetSearch.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/PropertySetSearch.ts#L15)

___

### groupFilterCondition

• **groupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets the PropertySets that belong to groups that are combined with the and/or relation.

#### Defined in

[src/types/Checkmate/ObjectModel/PropertySetSearch.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/PropertySetSearch.ts#L17)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for PropertySets that are members of these [GroupSearch](GroupSearch.md)(s) one of
 it's children or
 one of it's parents. Available GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/PropertySetSearch.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/PropertySetSearch.ts#L24)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### name

• **name**: `string`

Gets or sets search for PropertySets with this Name. Wildcard can be used by prepending/appending "%" to string. Example
 "%comments%".

#### Defined in

[src/types/Checkmate/ObjectModel/PropertySetSearch.ts:29](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/PropertySetSearch.ts#L29)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
