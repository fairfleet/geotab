[@fairfleet/geotab](../README.md) / SourceSearch

# Interface: SourceSearch

The object used to specify the
 arguments when searching for a [Source](Source.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`SourceSearch`**

## Table of contents

### Properties

- [id](SourceSearch.md#id)
- [name](SourceSearch.md#name)
- [propertySelector](SourceSearch.md#propertyselector)
- [version](SourceSearch.md#version)

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

Gets or sets the name of the
 [Source](Source.md) search
 criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/SourceSearch.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/SourceSearch.ts#L17)

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

Gets or sets the row version of the
 [Source](Source.md) search
 criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/SourceSearch.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/SourceSearch.ts#L23)
