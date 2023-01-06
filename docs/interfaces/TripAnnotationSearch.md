[@fairfleet/geotab](../README.md) / TripAnnotationSearch

# Interface: TripAnnotationSearch

A class used to search for [TripAnnotation](TripAnnotation.md)s.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`TripAnnotationSearch`**

## Table of contents

### Properties

- [deviceSearch](TripAnnotationSearch.md#devicesearch)
- [fromDate](TripAnnotationSearch.md#fromdate)
- [id](TripAnnotationSearch.md#id)
- [propertySelector](TripAnnotationSearch.md#propertyselector)
- [toDate](TripAnnotationSearch.md#todate)
- [version](TripAnnotationSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device Id will
 search for any [TripAnnotation](TripAnnotation.md)s for that Device.

#### Defined in

[src/types/Checkmate/ObjectModel/TripAnnotationSearch.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/TripAnnotationSearch.ts#L14)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the DateTime to search for search for [TripAnnotation](TripAnnotation.md)s at or
 after.

#### Defined in

[src/types/Checkmate/ObjectModel/TripAnnotationSearch.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/TripAnnotationSearch.ts#L19)

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

Gets or sets the DateTime to search for search for [TripAnnotation](TripAnnotation.md)s at or
 before.

#### Defined in

[src/types/Checkmate/ObjectModel/TripAnnotationSearch.ts:24](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/TripAnnotationSearch.ts#L24)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
