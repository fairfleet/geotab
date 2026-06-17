[@fairfleet/geotab](../README.md) / TripSearch

# Interface: TripSearch

The object used to specify the arguments when searching for
 [Trip](Trip.md)(s).
 This search has been designed to work efficiently with these combinations of parameters:<list><item><description>Id</description></item><item><description>DeviceSearch + FromDate and/or ToDate (+ IncludeOverlappedTrips)</description></item><item><description>UserSearch + FromDate and/or ToDate (+ IncludeOverlappedTrips)</description></item></list>

## Hierarchy

- [`Search`](Search.md)

  ↳ **`TripSearch`**

## Table of contents

### Properties

- [deviceSearch](TripSearch.md#devicesearch)
- [fromDate](TripSearch.md#fromdate)
- [id](TripSearch.md#id)
- [includeDeleted](TripSearch.md#includedeleted)
- [includeOverlappedTrips](TripSearch.md#includeoverlappedtrips)
- [maxVersion](TripSearch.md#maxversion)
- [minVersion](TripSearch.md#minversion)
- [searchArea](TripSearch.md#searcharea)
- [toDate](TripSearch.md#todate)
- [userSearch](TripSearch.md#usersearch)
- [version](TripSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for Trips with this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TripSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/TripSearch.ts#L21)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for Trips recorded at this date or after. When "IncludeOverlappedTrips" is set to True, search for Trips
 where the NextTripStartTime is at this date, after or NULL.

#### Defined in

[src/types/Checkmate/ObjectModel/TripSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/TripSearch.ts#L26)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeDeleted

• **includeDeleted**: `boolean`

Gets or sets a value indicating whether trip search allows including deleted records

#### Defined in

[src/types/Checkmate/ObjectModel/TripSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/TripSearch.ts#L28)

___

### includeOverlappedTrips

• **includeOverlappedTrips**: `boolean`

Gets or sets a value indicating whether when OverlappedTrips is set to True; any part of a trip that overlaps with the FromDate or ToDate boundary
 will have the entire trip included in the data.

#### Defined in

[src/types/Checkmate/ObjectModel/TripSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/TripSearch.ts#L33)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets maximum Version of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/TripSearch.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/TripSearch.ts#L35)

___

### minVersion

• **minVersion**: `number`

Gets or sets minimum Version of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/TripSearch.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/TripSearch.ts#L37)

___

### searchArea

• **searchArea**: [`BoundingBox`](BoundingBox.md)

Gets or sets search rectangular area for Trips; the trips being retrieved must be located in this area.
 The [BoundingBox](BoundingBox.md) object should contain the bottom left and top right coordinates of the searching rectangle.

#### Defined in

[src/types/Checkmate/ObjectModel/TripSearch.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/TripSearch.ts#L42)

___

### toDate

• **toDate**: `Date`

Gets or sets search for Trips recorded at this date or before. When "IncludeOverlappedTrips" is set to True, search for Trips
 where the StartDateTime is this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/TripSearch.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/TripSearch.ts#L47)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for Trips with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TripSearch.ts:53](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/TripSearch.ts#L53)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
