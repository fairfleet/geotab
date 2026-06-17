[@fairfleet/geotab](../README.md) / LogRecordGeohash

# Interface: LogRecordGeohash

This stores unique geohash based on LogRecordGeohash.LogRecord for a LogRecordGeohash.LogRecord.

**`Deprecated`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`LogRecordGeohash`**

## Table of contents

### Properties

- [dateTime](LogRecordGeohash.md#datetime)
- [device](LogRecordGeohash.md#device)
- [geohash](LogRecordGeohash.md#geohash)
- [id](LogRecordGeohash.md#id)
- [logRecord](LogRecordGeohash.md#logrecord)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the associated Log Record date time.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordGeohash.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LogRecordGeohash.ts#L16)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with the [LogRecordGeohash](LogRecordGeohash.md).

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordGeohash.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LogRecordGeohash.ts#L18)

___

### geohash

• **geohash**: `string`

Gets or sets geohash of precision 6 based on latitude and longitude of LogRecordGeohash.LogRecord.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordGeohash.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LogRecordGeohash.ts#L20)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### logRecord

• **logRecord**: [`LogRecord`](LogRecord.md)

Gets or sets the LogRecordGeohash.LogRecord.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordGeohash.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LogRecordGeohash.ts#L22)
