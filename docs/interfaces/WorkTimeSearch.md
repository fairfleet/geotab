[@fairfleet/geotab](../README.md) / WorkTimeSearch

# Interface: WorkTimeSearch

The object used to specify the
 arguments when searching for a [WorkTime](WorkTime.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`WorkTimeSearch`**

## Table of contents

### Properties

- [id](WorkTimeSearch.md#id)
- [name](WorkTimeSearch.md#name)
- [version](WorkTimeSearch.md#version)

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

Gets or sets search for WorkTimes with this Name. Wildcard can be used by prepending/appending "%" to
 string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/WorkTimeSearch.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/WorkTimeSearch.ts#L16)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
