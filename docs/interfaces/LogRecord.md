[@fairfleet/geotab](../README.md) / LogRecord

# Interface: LogRecord

Record of log entries containing data for a device's position and speed at a specific date and time.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`LogRecord`**

## Table of contents

### Properties

- [dateTime](LogRecord.md#datetime)
- [device](LogRecord.md#device)
- [id](LogRecord.md#id)
- [isLastActive](LogRecord.md#islastactive)
- [latitude](LogRecord.md#latitude)
- [longitude](LogRecord.md#longitude)
- [speed](LogRecord.md#speed)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time the log was recorded.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecord.ts:11](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecord.ts#L11)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) this log belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecord.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecord.ts#L13)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isLastActive

• **isLastActive**: `boolean`

Gets or sets a value indicating whether this instance is the last active record in the vehicle's active period. Possible values are:.
 <list type="bullet"><item><description>false: The record is within the active period and not the last active record</description></item><item><description>true: The record is within the active period and is the last active record</description></item><item><description>null: The record is not within the active period (ex. GPS heartbeat)</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecord.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecord.ts#L18)

___

### latitude

• **latitude**: `number`

Gets or sets the latitude of the log record.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecord.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecord.ts#L20)

___

### longitude

• **longitude**: `number`

Gets or sets the longitude of the log record.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecord.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecord.ts#L22)

___

### speed

• **speed**: `number`

Gets or sets the logged speed or an invalid speed (in km/h).

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecord.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecord.ts#L24)
