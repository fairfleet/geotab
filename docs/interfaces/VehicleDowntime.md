[@fairfleet/geotab](../README.md) / VehicleDowntime

# Interface: VehicleDowntime

Represents aggregated vehicle downtime data.

## Table of contents

### Properties

- [aggregateType](VehicleDowntime.md#aggregatetype)
- [dateInserted](VehicleDowntime.md#dateinserted)
- [device](VehicleDowntime.md#device)
- [downtimeCount](VehicleDowntime.md#downtimecount)
- [downtimeDuration](VehicleDowntime.md#downtimeduration)
- [localDate](VehicleDowntime.md#localdate)
- [majorVersion](VehicleDowntime.md#majorversion)
- [minorVersion](VehicleDowntime.md#minorversion)
- [patchVersion](VehicleDowntime.md#patchversion)
- [repairClass](VehicleDowntime.md#repairclass)
- [sourceReason](VehicleDowntime.md#sourcereason)
- [timeZoneId](VehicleDowntime.md#timezoneid)

## Properties

### aggregateType

• **aggregateType**: [`IntervalAggregateType`](../README.md#intervalaggregatetype)

Gets or sets the VehicleDowntime.AggregateType of this record.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntime.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntime.ts#L11)

___

### dateInserted

• **dateInserted**: `Date`

Gets or sets the date and time when the vehicle downtime record was first inserted into the database.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntime.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntime.ts#L13)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntime.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntime.ts#L15)

___

### downtimeCount

• **downtimeCount**: `number`

Gets or sets the total count of downtime events.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntime.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntime.ts#L17)

___

### downtimeDuration

• **downtimeDuration**: `number`

Gets or sets the total time duration in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntime.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntime.ts#L19)

___

### localDate

• **localDate**: `Date`

Gets or sets the local date of the aggregation.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntime.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntime.ts#L21)

___

### majorVersion

• **majorVersion**: `number`

Gets or sets the major version of vehicle downtime.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntime.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntime.ts#L23)

___

### minorVersion

• **minorVersion**: `number`

Gets or sets the minor version of vehicle downtime.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntime.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntime.ts#L25)

___

### patchVersion

• **patchVersion**: `number`

Gets or sets the patch version of vehicle downtime.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntime.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntime.ts#L27)

___

### repairClass

• **repairClass**: `string`

Gets or sets the repair class for the downtime.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntime.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntime.ts#L29)

___

### sourceReason

• **sourceReason**: `string`

Gets or sets the source reason for the downtime.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntime.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntime.ts#L31)

___

### timeZoneId

• **timeZoneId**: `string`

Gets or sets the IANA Timezone id of the record. Default ["Etc/UTC"].

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleDowntime.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/VehicleDowntime.ts#L33)
