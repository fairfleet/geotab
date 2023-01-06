[@fairfleet/geotab](../README.md) / PropertySearch

# Interface: PropertySearch

The search object for [Property](Property.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`PropertySearch`**

## Table of contents

### Properties

- [externalReference](PropertySearch.md#externalreference)
- [id](PropertySearch.md#id)
- [name](PropertySearch.md#name)
- [propertySelector](PropertySearch.md#propertyselector)
- [version](PropertySearch.md#version)

## Properties

### externalReference

• **externalReference**: `string`

Gets or sets search for Properties with this External Reference. Wildcard can be used by prepending/appending "%" to string. Example
 "%externalreference%".

#### Defined in

[src/types/Checkmate/ObjectModel/PropertySearch.ts:13](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/PropertySearch.ts#L13)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### name

• **name**: `string`

Gets or sets search for Properties with this Name. Wildcard can be used by prepending/appending "%" to string. Example
 "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/PropertySearch.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/PropertySearch.ts#L18)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
