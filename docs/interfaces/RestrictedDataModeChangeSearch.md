[@fairfleet/geotab](../README.md) / RestrictedDataModeChangeSearch

# Interface: RestrictedDataModeChangeSearch

The object used to specify the arguments when searching for [RestrictedDataModeChange](RestrictedDataModeChange.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`RestrictedDataModeChangeSearch`**

## Table of contents

### Properties

- [deviceSearch](RestrictedDataModeChangeSearch.md#devicesearch)
- [fromDate](RestrictedDataModeChangeSearch.md#fromdate)
- [id](RestrictedDataModeChangeSearch.md#id)
- [includeFromDateOverlap](RestrictedDataModeChangeSearch.md#includefromdateoverlap)
- [toDate](RestrictedDataModeChangeSearch.md#todate)
- [version](RestrictedDataModeChangeSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [RestrictedDataModeChange](RestrictedDataModeChange.md)s with this RestrictedDataModeChangeSearch.DeviceSearch Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

src/types/Checkmate/ObjectModel/RestrictedDataModeChangeSearch.ts:17

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for [RestrictedDataModeChange](RestrictedDataModeChange.md)s recorded at this date or after.

#### Defined in

src/types/Checkmate/ObjectModel/RestrictedDataModeChangeSearch.ts:19

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeFromDateOverlap

• **includeFromDateOverlap**: `boolean`

Gets or sets a value indicating whether gets or sets a value to include the first [RestrictedDataModeChange](RestrictedDataModeChange.md) before the RestrictedDataModeChangeSearch.FromDate. If RestrictedDataModeChangeSearch.FromDate is <c>null</c> this has no effect.

#### Defined in

src/types/Checkmate/ObjectModel/RestrictedDataModeChangeSearch.ts:21

___

### toDate

• **toDate**: `Date`

Gets or sets search for [RestrictedDataModeChange](RestrictedDataModeChange.md)s recorded at this date or before.

#### Defined in

src/types/Checkmate/ObjectModel/RestrictedDataModeChangeSearch.ts:23

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
