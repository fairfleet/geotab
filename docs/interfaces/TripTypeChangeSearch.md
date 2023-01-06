[@fairfleet/geotab](../README.md) / TripTypeChangeSearch

# Interface: TripTypeChangeSearch

The object used to specify the arguments when searching for [TripTypeChange](TripTypeChange.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`TripTypeChangeSearch`**

## Table of contents

### Properties

- [deviceSearch](TripTypeChangeSearch.md#devicesearch)
- [fromDate](TripTypeChangeSearch.md#fromdate)
- [id](TripTypeChangeSearch.md#id)
- [includeFromDateOverlap](TripTypeChangeSearch.md#includefromdateoverlap)
- [propertySelector](TripTypeChangeSearch.md#propertyselector)
- [toDate](TripTypeChangeSearch.md#todate)
- [version](TripTypeChangeSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any TripTypeChanges that are assigned to that Device.
 Providing the Groups will search for TripTypeChanges for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TripTypeChangeSearch.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/TripTypeChangeSearch.ts#L19)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for [TripTypeChange](TripTypeChange.md)s recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/TripTypeChangeSearch.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/TripTypeChangeSearch.ts#L21)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### includeFromDateOverlap

• **includeFromDateOverlap**: `boolean`

Gets or sets a value indicating whether gets or sets a value to include the first [TripTypeChange](TripTypeChange.md) before the TripTypeChangeSearch.FromDate. If TripTypeChangeSearch.FromDate is <c>null</c> this has no effect.

#### Defined in

[src/types/Checkmate/ObjectModel/TripTypeChangeSearch.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/TripTypeChangeSearch.ts#L23)

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

Gets or sets search for [TripTypeChange](TripTypeChange.md)s recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/TripTypeChangeSearch.ts:25](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/TripTypeChangeSearch.ts#L25)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
