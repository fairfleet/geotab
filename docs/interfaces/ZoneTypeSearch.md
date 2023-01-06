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
- [propertySelector](ZoneTypeSearch.md#propertyselector)
- [version](ZoneTypeSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### name

• **name**: `string`

Gets or sets get name of ZoneType to search for. Wildcard can be used by prepending/appending "%" to string.
 Example "%comments%".

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneTypeSearch.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ZoneTypeSearch.ts#L18)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
