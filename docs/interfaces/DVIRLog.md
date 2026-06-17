[@fairfleet/geotab](../README.md) / DVIRLog

# Interface: DVIRLog

A DVIRLog is a Driver Vehicle Inspection Report which is prepared by a driver
 regarding defects in parts of a vehicle associated with a [Device](Device.md) or
 [Trailer](Trailer.md). Once the report is completed
 with optional driver remarks, the DVIR log will be acted upon, and marked as repairs made or not necessary
 (usually by another [User](User.md)). The driver then will mark the log as
 certified for being safe or unsafe to operate based on the effectiveness of any repairs made or comments for repairs not performed.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`DVIRLog`**

## Table of contents

### Properties

- [authorityAddress](DVIRLog.md#authorityaddress)
- [authorityName](DVIRLog.md#authorityname)
- [certifiedBy](DVIRLog.md#certifiedby)
- [certifyDate](DVIRLog.md#certifydate)
- [certifyRemark](DVIRLog.md#certifyremark)
- [dateTime](DVIRLog.md#datetime)
- [defectList](DVIRLog.md#defectlist)
- [defects](DVIRLog.md#defects)
- [device](DVIRLog.md#device)
- [driver](DVIRLog.md#driver)
- [driverRemark](DVIRLog.md#driverremark)
- [duration](DVIRLog.md#duration)
- [dvirDefects](DVIRLog.md#dvirdefects)
- [engineHours](DVIRLog.md#enginehours)
- [id](DVIRLog.md#id)
- [isInspectedByDriver](DVIRLog.md#isinspectedbydriver)
- [isRejected](DVIRLog.md#isrejected)
- [isSafeToOperate](DVIRLog.md#issafetooperate)
- [loadHeight](DVIRLog.md#loadheight)
- [loadWidth](DVIRLog.md#loadwidth)
- [location](DVIRLog.md#location)
- [logType](DVIRLog.md#logtype)
- [odometer](DVIRLog.md#odometer)
- [repairDate](DVIRLog.md#repairdate)
- [repairRemark](DVIRLog.md#repairremark)
- [repairedBy](DVIRLog.md#repairedby)
- [trailer](DVIRLog.md#trailer)
- [version](DVIRLog.md#version)

## Properties

### authorityAddress

• **authorityAddress**: `string`

Gets or sets the authority address for the driver at the time of this log. Maximum length [255] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L24)

___

### authorityName

• **authorityName**: `string`

Gets or sets the authority name for the driver at the time of this log. Maximum length [255] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L26)

___

### certifiedBy

• **certifiedBy**: [`User`](User.md)

Gets or sets the [User](User.md) who certified the repairs (or comments if no repairs were made) to the
 [Device](Device.md) or
 [Trailer](Trailer.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L32)

___

### certifyDate

• **certifyDate**: `Date`

Gets or sets the date the [Device](Device.md) or
 [Trailer](Trailer.md) was certified.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L37)

___

### certifyRemark

• **certifyRemark**: `string`

Gets or sets the remark recorded by the [User](User.md) who certified the repairs
 (or no repairs made) to the [Device](Device.md) or
 [Trailer](Trailer.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L43)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time the log was created.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L45)

___

### defectList

• **defectList**: [`Group`](Group.md)

Gets or sets the defect list [Group](Group.md) of the log.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L47)

___

### defects

• **defects**: [`Group`](Group.md)[]

Gets or sets the list of defect [Group](Group.md)(s) for this log.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L49)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with this log.
 Either a Device or a [Trailer](Trailer.md) is defined for a log, not both (if
 the device is set, trailer must be null).

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:55](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L55)

___

### driver

• **driver**: [`User`](User.md)

Gets or sets the [User](User.md) who created the log.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:57](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L57)

___

### driverRemark

• **driverRemark**: `string`

Gets or sets the remark recorded by the driver for this log.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:59](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L59)

___

### duration

• **duration**: `string`

Gets or sets the total time spent to complete this dvir. Default [null].

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:61](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L61)

___

### dvirDefects

• **dvirDefects**: [`DVIRDefect`](DVIRDefect.md)[]

Gets or sets the list of DVIRDefects [DVIRDefect](DVIRDefect.md)(s) for this log.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:63](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L63)

___

### engineHours

• **engineHours**: `number`

Gets or sets the engine hours for the DVIRLog.Device of this log. The unit is seconds (not hours). Default [null].

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:65](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L65)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Overrides

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:67](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L67)

___

### isInspectedByDriver

• **isInspectedByDriver**: `boolean`

Gets or sets a value indicating whether the DVIR log was inspected by the driver. If false, the log was
 inspected by an inspector. Default [true].

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:72](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L72)

___

### isRejected

• **isRejected**: `boolean`

Gets or sets a value indicating whether the DVIR log was marked as rejected by the driver. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:74](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L74)

___

### isSafeToOperate

• **isSafeToOperate**: `boolean`

Gets or sets identifier for whether or not the [Device](Device.md) or
 [Trailer](Trailer.md) was certified as safe to operate.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:79](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L79)

___

### loadHeight

• **loadHeight**: `number`

Gets or sets the load height, if it was manually recorded by the driver. The unit is in meters (m), not kilometers (km).
 Default [null].

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:84](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L84)

___

### loadWidth

• **loadWidth**: `number`

Gets or sets the load width, if it was manually recorded by the driver. The unit is in meters (m), not kilometers (km).
 Default [null].

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:89](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L89)

___

### location

• **location**: [`AddressLookupData`](AddressLookupData.md)

Gets or sets an object with the location information of the log.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:91](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L91)

___

### logType

• **logType**: [`DVIRLogType`](../README.md#dvirlogtype)

Gets or sets the [DVIRLogType](../README.md#dvirlogtype) of the log. Default [Unknown].

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:93](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L93)

___

### odometer

• **odometer**: `number`

Gets or sets the odometer or hubometer of the vehicle or trailer. The unit is in meters (m), not kilometers (km).
 Default [null].

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:98](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L98)

___

### repairDate

• **repairDate**: `Date`

Gets or sets the date the [Device](Device.md) or
 [Trailer](Trailer.md) was repaired.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:103](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L103)

___

### repairRemark

• **repairRemark**: `string`

Gets or sets the remark recorded by the [User](User.md) who repaired the
 [Device](Device.md) or
 [Trailer](Trailer.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:115](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L115)

___

### repairedBy

• **repairedBy**: [`User`](User.md)

Gets or sets the [User](User.md) who repaired the
 [Device](Device.md) or
 [Trailer](Trailer.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:109](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L109)

___

### trailer

• **trailer**: [`Trailer`](Trailer.md)

Gets or sets the [Trailer](Trailer.md) associated with this log.
 Either a [Device](Device.md) or a Trailer is defined for a log, not both (if
 the trailer is set, device must be null).

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLog.ts:121](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRLog.ts#L121)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
