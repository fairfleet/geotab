[@fairfleet/geotab](../README.md) / GroupSearch

# Interface: GroupSearch

The object used to specify the arguments when searching for a [Group](Group.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`GroupSearch`**

  ↳↳ [`DefectSearch`](DefectSearch.md)

## Table of contents

### Properties

- [id](GroupSearch.md#id)
- [includeAllTrees](GroupSearch.md#includealltrees)
- [maxId](GroupSearch.md#maxid)
- [name](GroupSearch.md#name)
- [propertySelector](GroupSearch.md#propertyselector)
- [reference](GroupSearch.md#reference)
- [version](GroupSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### includeAllTrees

• **includeAllTrees**: `boolean`

Gets or sets include Groups from all trees, for example "Security Groups" and "Private User Groups". The"Company Group" tree is included by default.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupSearch.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/GroupSearch.ts#L10)

___

### maxId

• **maxId**: `string`

Gets or sets gets maximum Id of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupSearch.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/GroupSearch.ts#L12)

___

### name

• **name**: `string`

Gets or sets search for Groups with this Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/GroupSearch.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/GroupSearch.ts#L14)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### reference

• **reference**: `string`

Gets or sets search for Groups with this Reference. Wildcard can be used by prepending/appending "%" to string. Example "%reference%".

#### Defined in

[src/types/Checkmate/ObjectModel/GroupSearch.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/GroupSearch.ts#L16)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
