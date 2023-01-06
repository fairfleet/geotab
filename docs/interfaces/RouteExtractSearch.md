[@fairfleet/geotab](../README.md) / RouteExtractSearch

# Interface: RouteExtractSearch

The object used to specify the arguments when searching for
 [RouteExtract](RouteExtract.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`RouteExtractSearch`**

## Table of contents

### Properties

- [deviceSearch](RouteExtractSearch.md#devicesearch)
- [fromDate](RouteExtractSearch.md#fromdate)
- [id](RouteExtractSearch.md#id)
- [propertySelector](RouteExtractSearch.md#propertyselector)
- [toDate](RouteExtractSearch.md#todate)
- [version](RouteExtractSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for RouteExtract with this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/RouteExtractSearch.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/RouteExtractSearch.ts#L20)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for [RouteExtract](RouteExtract.md) recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/RouteExtractSearch.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/RouteExtractSearch.ts#L22)

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

### toDate

• **toDate**: `Date`

Gets or sets search for [RouteExtract](RouteExtract.md) recorded before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/RouteExtractSearch.ts:24](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/RouteExtractSearch.ts#L24)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
