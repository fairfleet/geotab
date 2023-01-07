[@fairfleet/geotab](../README.md) / ZoneTypeSearch

# Interface: ZoneTypeSearch

The object used to specify the arguments when searching for
 [ZoneType](ZoneType.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ZoneTypeSearch`**

## Table of contents

### Properties

- [id](ZoneTypeSearch.md#id)
- [name](ZoneTypeSearch.md#name)
- [version](ZoneTypeSearch.md#version)

## Properties

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

Gets or sets get name of ZoneType to search for. Wildcard can be used by prepending/appending "%" to string.
 Example "%comments%".

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneTypeSearch.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ZoneTypeSearch.ts#L18)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
