[@fairfleet/geotab](../README.md) / WorkHolidaySearch

# Interface: WorkHolidaySearch

The object used to specify the
 arguments when searching for a [WorkHoliday](WorkHoliday.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`WorkHolidaySearch`**

## Table of contents

### Properties

- [id](WorkHolidaySearch.md#id)
- [name](WorkHolidaySearch.md#name)
- [propertySelector](WorkHolidaySearch.md#propertyselector)
- [version](WorkHolidaySearch.md#version)

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

Gets or sets search for WorkHolidays with this Name. Wildcard can be used by prepending/appending "%" to
 string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/WorkHolidaySearch.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/WorkHolidaySearch.ts#L16)

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
