[@fairfleet/geotab](../README.md) / TripGeohash

# Interface: TripGeohash

This stores unique geohash based on [LogRecord](LogRecord.md) for a [Trip](Trip.md).

**`Deprecated`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`TripGeohash`**

## Table of contents

### Properties

- [dateTime](TripGeohash.md#datetime)
- [device](TripGeohash.md#device)
- [geohash](TripGeohash.md#geohash)
- [id](TripGeohash.md#id)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the associated trip start date time.

#### Defined in

[src/types/Checkmate/ObjectModel/TripGeohash.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/TripGeohash.ts#L15)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with the [TripGeohash](TripGeohash.md).

#### Defined in

[src/types/Checkmate/ObjectModel/TripGeohash.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/TripGeohash.ts#L17)

___

### geohash

• **geohash**: `string`

Gets or sets geohash of precision 6 based on latitude and longitude of [LogRecord](LogRecord.md).

#### Defined in

[src/types/Checkmate/ObjectModel/TripGeohash.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/TripGeohash.ts#L19)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)
