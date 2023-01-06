[@fairfleet/geotab](../README.md) / SecurityIdSearch

# Interface: SecurityIdSearch

The object used to specify the arguments when searching for
 [SecurityId](SecurityId.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`SecurityIdSearch`**

## Table of contents

### Properties

- [customPageName](SecurityIdSearch.md#custompagename)
- [id](SecurityIdSearch.md#id)
- [propertySelector](SecurityIdSearch.md#propertyselector)
- [version](SecurityIdSearch.md#version)

## Properties

### customPageName

• **customPageName**: `string`

Gets or sets a Search for SecurityId that has this customPageName.

#### Defined in

[src/types/Checkmate/ObjectModel/SecurityIdSearch.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/SecurityIdSearch.ts#L15)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

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
