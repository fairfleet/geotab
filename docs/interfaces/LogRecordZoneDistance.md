[@fairfleet/geotab](../README.md) / LogRecordZoneDistance

# Interface: LogRecordZoneDistance

Couples a [LogRecord](LogRecord.md) and a
 [Zone](Zone.md) objects with a distance between them in kilometers.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`LogRecordZoneDistance`**

## Table of contents

### Properties

- [dateTime](LogRecordZoneDistance.md#datetime)
- [device](LogRecordZoneDistance.md#device)
- [distance](LogRecordZoneDistance.md#distance)
- [id](LogRecordZoneDistance.md#id)
- [zone](LogRecordZoneDistance.md#zone)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the date.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordZoneDistance.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecordZoneDistance.ts#L15)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordZoneDistance.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecordZoneDistance.ts#L17)

___

### distance

• **distance**: `number`

Gets or sets nullable Single Distance.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordZoneDistance.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecordZoneDistance.ts#L19)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### zone

• **zone**: [`Zone`](Zone.md)

Gets or sets [Zone](Zone.md).

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordZoneDistance.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecordZoneDistance.ts#L21)
