[@fairfleet/geotab](../README.md) / TagSearch

# Interface: TagSearch

The object used to specify the arguments when searching Tag entries.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`TagSearch`**

## Table of contents

### Properties

- [id](TagSearch.md#id)
- [name](TagSearch.md#name)
- [names](TagSearch.md#names)
- [tagIds](TagSearch.md#tagids)
- [version](TagSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### name

• **name**: `string`

Gets or sets search for Tags with this Name. Wildcard can be used by prepending/appending "%" to string.
 Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/TagSearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/TagSearch.ts#L13)

___

### names

• **names**: `string`[]

Gets or sets search for tag names. Supports up to 500 names. Does not support wildcards.

#### Defined in

[src/types/Checkmate/ObjectModel/TagSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/TagSearch.ts#L15)

___

### tagIds

• **tagIds**: `string`[]

Gets or sets search for Tag with given Tag Ids. Supports up to 500 Ids.

#### Defined in

[src/types/Checkmate/ObjectModel/TagSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/TagSearch.ts#L17)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
