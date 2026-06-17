[@fairfleet/geotab](../README.md) / GroupSearch

# Interface: GroupSearch

The object used to specify the arguments when searching for a [Group](Group.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`GroupSearch`**

  ↳↳ [`DefectSearch`](DefectSearch.md)

## Table of contents

### Properties

- [ancestors](GroupSearch.md#ancestors)
- [id](GroupSearch.md#id)
- [includeAllTrees](GroupSearch.md#includealltrees)
- [maxId](GroupSearch.md#maxid)
- [name](GroupSearch.md#name)
- [reference](GroupSearch.md#reference)
- [version](GroupSearch.md#version)

## Properties

### ancestors

• **ancestors**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Groups that are descendants of the group with this Id.
 The group with this Id would also be included in the result.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupSearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/GroupSearch.ts#L13)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeAllTrees

• **includeAllTrees**: `boolean`

Gets or sets include Groups from all trees, for example "Security Groups" and "Private User Groups". The"Company Group" tree is included by default.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/GroupSearch.ts#L15)

___

### maxId

• **maxId**: `string`

Gets or sets gets maximum Id of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/GroupSearch.ts#L17)

___

### name

• **name**: `string`

Gets or sets search for Groups with this Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/GroupSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/GroupSearch.ts#L19)

___

### reference

• **reference**: `string`

Gets or sets search for Groups with this Reference. Wildcard can be used by prepending/appending "%" to string. Example "%reference%".

#### Defined in

[src/types/Checkmate/ObjectModel/GroupSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/GroupSearch.ts#L21)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
