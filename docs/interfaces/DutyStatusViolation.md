[@fairfleet/geotab](../README.md) / DutyStatusViolation

# Interface: DutyStatusViolation

A [DutyStatusLog](DutyStatusLog.md) violation for a [User](User.md).

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`DutyStatusViolation`**

## Table of contents

### Properties

- [daysLimit](DutyStatusViolation.md#dayslimit)
- [deletedDateTime](DutyStatusViolation.md#deleteddatetime)
- [driver](DutyStatusViolation.md#driver)
- [drivingDuration](DutyStatusViolation.md#drivingduration)
- [fromDate](DutyStatusViolation.md#fromdate)
- [hoursLimit](DutyStatusViolation.md#hourslimit)
- [id](DutyStatusViolation.md#id)
- [logId](DutyStatusViolation.md#logid)
- [periodsLimit](DutyStatusViolation.md#periodslimit)
- [reason](DutyStatusViolation.md#reason)
- [toDate](DutyStatusViolation.md#todate)
- [type](DutyStatusViolation.md#type)
- [version](DutyStatusViolation.md#version)

## Properties

### daysLimit

• **daysLimit**: `number`

Gets or sets the maximum or minimum days limit of the duty status violation.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L12)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L16)

___

### driver

• **driver**: [`User`](User.md)

Gets or sets the [User](User.md) associated with the duty status violation.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L18)

___

### drivingDuration

• **drivingDuration**: `string`

Gets or sets the driving duration of the duty status violation.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L20)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the date and time that the duty status violation started.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L22)

___

### hoursLimit

• **hoursLimit**: `number`

Gets or sets the maximum or minimum hours limit of the duty status violation.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L24)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### logId

• **logId**: `string`

Gets or sets the log Id.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L26)

___

### periodsLimit

• **periodsLimit**: `number`

Gets or sets the maximum or minimum hours limit of the duty status Cycle Rest violation.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L28)

___

### reason

• **reason**: `string`

Gets or sets the stated reason why the duty status violation occurred.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L30)

___

### toDate

• **toDate**: `Date`

Gets or sets the date and time that the duty status violation ended.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L32)

___

### type

• **type**: [`DutyStatusViolationType`](../README.md#dutystatusviolationtype)

Gets or sets the [DutyStatusViolationType](../README.md#dutystatusviolationtype) of the duty status violation.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolation.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolation.ts#L34)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
