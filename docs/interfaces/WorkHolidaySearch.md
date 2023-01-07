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
- [version](WorkHolidaySearch.md#version)

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

Gets or sets search for WorkHolidays with this Name. Wildcard can be used by prepending/appending "%" to
 string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/WorkHolidaySearch.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/WorkHolidaySearch.ts#L16)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
