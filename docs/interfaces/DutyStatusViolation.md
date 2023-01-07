[@fairfleet/geotab](../README.md) / DutyStatusViolation

# Interface: DutyStatusViolation

A [DutyStatusLog](DutyStatusLog.md) violation for a [User](User.md).

## Table of contents

### Properties

- [daysLimit](DutyStatusViolation.md#dayslimit)
- [driver](DutyStatusViolation.md#driver)
- [drivingDuration](DutyStatusViolation.md#drivingduration)
- [fromDate](DutyStatusViolation.md#fromdate)
- [hoursLimit](DutyStatusViolation.md#hourslimit)
- [id](DutyStatusViolation.md#id)
- [logId](DutyStatusViolation.md#logid)
- [reason](DutyStatusViolation.md#reason)
- [toDate](DutyStatusViolation.md#todate)
- [type](DutyStatusViolation.md#type)

## Properties

### daysLimit

• **daysLimit**: `number`

Gets or sets the maximum or minimum days limit of the duty status violation.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L13)

___

### driver

• **driver**: [`User`](User.md)

Gets or sets the [User](User.md) associated with the duty status violation.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L15)

___

### drivingDuration

• **drivingDuration**: `string`

Gets or sets the driving duration of the duty status violation.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L17)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the date and time that the duty status violation started.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L19)

___

### hoursLimit

• **hoursLimit**: `number`

Gets or sets the maximum or minimum hours limit of the duty status violation.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L21)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:23](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L23)

___

### logId

• **logId**: `string`

Gets or sets the log Id.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:25](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L25)

___

### reason

• **reason**: `string`

Gets or sets the stated reason why the duty status violation occurred.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:27](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L27)

___

### toDate

• **toDate**: `Date`

Gets or sets the date and time that the duty status violation ended.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:29](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L29)

___

### type

• **type**: [`DutyStatusViolationType`](../README.md#dutystatusviolationtype)

Gets or sets the [DutyStatusViolationType](../README.md#dutystatusviolationtype) of the duty status violation.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:31](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L31)
