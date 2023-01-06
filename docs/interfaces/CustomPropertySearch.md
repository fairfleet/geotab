[@fairfleet/geotab](../README.md) / CustomPropertySearch

# Interface: CustomPropertySearch

A new search property for entities that support custom properties.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`CustomPropertySearch`**

## Table of contents

### Properties

- [id](CustomPropertySearch.md#id)
- [propertySearches](CustomPropertySearch.md#propertysearches)
- [propertySelector](CustomPropertySearch.md#propertyselector)
- [propertySetSearches](CustomPropertySearch.md#propertysetsearches)
- [value](CustomPropertySearch.md#value)
- [version](CustomPropertySearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### propertySearches

• **propertySearches**: [`PropertySearch`](PropertySearch.md)[]

Gets or sets search for Entities that are a member of these [PropertySearch](PropertySearch.md)(s). Each PropertySearch is an object within the array.
 Available
 PropertySearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/CustomPropertySearch.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/CustomPropertySearch.ts#L17)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### propertySetSearches

• **propertySetSearches**: [`PropertySetSearch`](PropertySetSearch.md)[]

Gets or sets search for Entities that are a member of these [PropertySetSearch](PropertySetSearch.md)(s). Each PropertySetSearch is an object within the array.
 Available
 PropertySetSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/CustomPropertySearch.ts:24](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/CustomPropertySearch.ts#L24)

___

### value

• **value**: `string`

Gets or sets search for Properties with this Value. Wildcard can be used by prepending/appending "%" to string. Example
 "%Value%".

#### Defined in

[src/types/Checkmate/ObjectModel/CustomPropertySearch.ts:29](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/CustomPropertySearch.ts#L29)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
