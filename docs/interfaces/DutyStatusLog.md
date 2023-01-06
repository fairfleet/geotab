[@fairfleet/geotab](../README.md) / DutyStatusLog

# Interface: DutyStatusLog

A DutyStatusLog is a record of duty status for Hours of Service regulations. The log is first required to have a driver, dateTime, status, and device. Location is not required and will be calculated from the device's data.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`DutyStatusLog`**

## Table of contents

### Properties

- [annotations](DutyStatusLog.md#annotations)
- [coDrivers](DutyStatusLog.md#codrivers)
- [dateTime](DutyStatusLog.md#datetime)
- [deferralMinutes](DutyStatusLog.md#deferralminutes)
- [deferralStatus](DutyStatusLog.md#deferralstatus)
- [device](DutyStatusLog.md#device)
- [distanceSinceValidCoordinates](DutyStatusLog.md#distancesincevalidcoordinates)
- [driver](DutyStatusLog.md#driver)
- [editDateTime](DutyStatusLog.md#editdatetime)
- [editRequestedByUser](DutyStatusLog.md#editrequestedbyuser)
- [engineHours](DutyStatusLog.md#enginehours)
- [eventCheckSum](DutyStatusLog.md#eventchecksum)
- [eventCode](DutyStatusLog.md#eventcode)
- [eventRecordStatus](DutyStatusLog.md#eventrecordstatus)
- [eventType](DutyStatusLog.md#eventtype)
- [id](DutyStatusLog.md#id)
- [isHidden](DutyStatusLog.md#ishidden)
- [isIgnored](DutyStatusLog.md#isignored)
- [isTransitioning](DutyStatusLog.md#istransitioning)
- [location](DutyStatusLog.md#location)
- [malfunction](DutyStatusLog.md#malfunction)
- [odometer](DutyStatusLog.md#odometer)
- [origin](DutyStatusLog.md#origin)
- [parentId](DutyStatusLog.md#parentid)
- [sequence](DutyStatusLog.md#sequence)
- [state](DutyStatusLog.md#state)
- [status](DutyStatusLog.md#status)
- [userHosRuleSet](DutyStatusLog.md#userhosruleset)
- [verifyDateTime](DutyStatusLog.md#verifydatetime)
- [version](DutyStatusLog.md#version)

## Properties

### annotations

• **annotations**: [`AnnotationLog`](AnnotationLog.md)[]

Gets or sets the list of [AnnotationLog](AnnotationLog.md)(s) which are associated with this
 log.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:25](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L25)

___

### coDrivers

• **coDrivers**: [`User`](User.md)[]

Gets or sets the list of the co-driver [User](User.md)(s) for this log.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:27](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L27)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time the log was created.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:29](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L29)

___

### deferralMinutes

• **deferralMinutes**: `number`

Gets or sets the deferral minutes.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:31](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L31)

___

### deferralStatus

• **deferralStatus**: [`DutyStatusDeferralType`](../README.md#dutystatusdeferraltype)

Gets or sets the [DutyStatusDeferralType](../README.md#dutystatusdeferraltype).

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:33](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L33)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with this log.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:35](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L35)

___

### distanceSinceValidCoordinates

• **distanceSinceValidCoordinates**: `number`

Gets or sets the distance since last valid coordinate measurement.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:37](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L37)

___

### driver

• **driver**: [`User`](User.md)

Gets or sets the [User](User.md) who created this log.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:39](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L39)

___

### editDateTime

• **editDateTime**: `Date`

Gets or sets the date and time the log was edited. If the log has not been edited, this will not be set.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:41](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L41)

___

### editRequestedByUser

• **editRequestedByUser**: [`User`](User.md)

Gets or sets the [User](User.md) that requested an edit to this log.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:43](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L43)

___

### engineHours

• **engineHours**: `number`

Gets or sets the engine hours for the DutyStatusLog.Device at the DutyStatusLog.DateTime of this log.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:45](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L45)

___

### eventCheckSum

• **eventCheckSum**: `number`

Gets or sets the event checksum of this log.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:47](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L47)

___

### eventCode

• **eventCode**: `number`

Gets or sets the event code of this log
 (Table 6; 7.20 of the ELD Final Rule).

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:52](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L52)

___

### eventRecordStatus

• **eventRecordStatus**: `number`

Gets the record status number of this log
 1 = active
 2 = inactive - changed
 3 = inactive - change requested
 4 = inactive - change rejected.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:60](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L60)

___

### eventType

• **eventType**: `number`

Gets or sets the event type number of this log
 1 = A change in driver's duty-status
 2 = An intermediate log
 3 = A change in driver's indication of authorized personal use of CMV or yard moves
 4 = A driver's certification/re-certification of records
 5 = A driver's login/logout activity
 6 = CMV's engine power up / shut down activity
 7 = A malfunction or data diagnostic detection occurrence
 (Table 6; 7.25 of the ELD Final Rule).

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:72](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L72)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Overrides

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:74](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L74)

___

### isHidden

• **isHidden**: `boolean`

Gets or sets if the log is hidden.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:76](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L76)

___

### isIgnored

• **isIgnored**: `boolean`

Gets or sets if the log is ignored. True means it will not affect the Driver's HOS availability.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:78](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L78)

___

### isTransitioning

• **isTransitioning**: `boolean`

Gets or sets a value indicating whether the log is in transitioning state.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:80](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L80)

___

### location

• **location**: [`AddressLookupData`](AddressLookupData.md)

Gets or sets an object with the location information for the log data.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:82](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L82)

___

### malfunction

• **malfunction**: [`DutyStatusMalfunctionTypes`](../README.md#dutystatusmalfunctiontypes)

Gets or sets the [DutyStatusMalfunctionTypes](../README.md#dutystatusmalfunctiontypes) of the [DutyStatusLog](DutyStatusLog.md) record. As a flag it can be both a diagnostic and malfunction state
 which is used to mark status based records (e.g. "D", "SB") as having a diagnostic or malfunction present at time of recording.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:87](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L87)

___

### odometer

• **odometer**: `number`

Gets or sets the odometer in meters for the DutyStatusLog.Device at the DutyStatusLog.DateTime of this log.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:89](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L89)

___

### origin

• **origin**: [`DutyStatusOrigin`](../README.md#dutystatusorigin)

Gets or sets the [DutyStatusOrigin](../README.md#dutystatusorigin) from where this log originated.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:91](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L91)

___

### parentId

• **parentId**: `string`

Gets or sets the DutyStatusLog.Id of the parent [DutyStatusLog](DutyStatusLog.md).
 Used when a DutyStatusLog is edited. When returning history, this field will be populated.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:96](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L96)

___

### sequence

• **sequence**: `number`

Gets or sets the sequence number, which is used to generate the sequence ID.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:98](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L98)

___

### state

• **state**: [`DutyStatusState`](../README.md#dutystatusstate)

Gets or sets the [DutyStatusState](../README.md#dutystatusstate) of the [DutyStatusLog](DutyStatusLog.md) record.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:100](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L100)

___

### status

• **status**: [`DutyStatusLogType`](../README.md#dutystatuslogtype)

Gets or sets the [DutyStatusLogType](../README.md#dutystatuslogtype) representing the driver's duty status.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:102](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L102)

___

### userHosRuleSet

• **userHosRuleSet**: [`UserHosRuleSet`](UserHosRuleSet.md)

Gets or sets the linked [UserHosRuleSet](UserHosRuleSet.md).
 This property is only used to link rulesets to log events that affect the driver's operating zone and/or cycle. (Canadian ELD)

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:107](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L107)

___

### verifyDateTime

• **verifyDateTime**: `Date`

Gets or sets the date and time the log was verified. If the log is unverified, this will not be set.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:109](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L109)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Overrides

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLog.ts:111](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLog.ts#L111)
