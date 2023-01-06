[@fairfleet/geotab](../README.md) / DashboardSearch

# Interface: DashboardSearch

The object used to specify the
 arguments when searching for a [Dashboard](Dashboard.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DashboardSearch`**

## Table of contents

### Properties

- [id](DashboardSearch.md#id)
- [name](DashboardSearch.md#name)
- [propertySelector](DashboardSearch.md#propertyselector)
- [version](DashboardSearch.md#version)

## Properties

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

Gets or sets search for Dashboard with this Name. Wildcard can be used by prepending/appending "%" to
 string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/DashboardSearch.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DashboardSearch.ts#L16)

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
