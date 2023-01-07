[@fairfleet/geotab](../README.md) / TripGeohashSearch

# Interface: TripGeohashSearch

The object used to specify the arguments when searching for a [TripGeohash](TripGeohash.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`TripGeohashSearch`**

## Table of contents

### Properties

- [deviceSearch](TripGeohashSearch.md#devicesearch)
- [id](TripGeohashSearch.md#id)
- [startDateTime](TripGeohashSearch.md#startdatetime)
- [version](TripGeohashSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for TripGeohashes with a [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TripGeohashSearch.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TripGeohashSearch.ts#L15)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### startDateTime

• **startDateTime**: `Date`

Gets or sets search for TripGeohashes recorded from this date onwards.

#### Defined in

[src/types/Checkmate/ObjectModel/TripGeohashSearch.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TripGeohashSearch.ts#L17)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
