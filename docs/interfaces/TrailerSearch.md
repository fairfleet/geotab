[@fairfleet/geotab](../README.md) / TrailerSearch

# Interface: TrailerSearch

The object used to specify the arguments when searching for
 [Trailer](Trailer.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`TrailerSearch`**

## Table of contents

### Properties

- [groupFilterCondition](TrailerSearch.md#groupfiltercondition)
- [groups](TrailerSearch.md#groups)
- [id](TrailerSearch.md#id)
- [name](TrailerSearch.md#name)
- [version](TrailerSearch.md#version)

## Properties

### groupFilterCondition

• **groupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets for Trailers that are members of these groups or one of it's children using and/or relations .

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerSearch.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TrailerSearch.ts#L15)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Trailers that are members of these [GroupSearch](GroupSearch.md)(s) one of
 it's children or
 one of it's parents. Available GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerSearch.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TrailerSearch.ts#L22)

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

Gets or sets search for Trailers with a name containing this String. Wildcard can be used by prepending/appending "%" to string.

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerSearch.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TrailerSearch.ts#L24)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
