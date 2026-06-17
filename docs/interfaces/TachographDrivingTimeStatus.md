[@fairfleet/geotab](../README.md) / TachographDrivingTimeStatus

# Interface: TachographDrivingTimeStatus

The entity that contains the data for the [TachographDrivingTimeStatus](TachographDrivingTimeStatus.md) tachograph driving time status extractor.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`TachographDrivingTimeStatus`**

## Table of contents

### Properties

- [activeDailyDrivingStart](TachographDrivingTimeStatus.md#activedailydrivingstart)
- [activeDailyWorkingStart](TachographDrivingTimeStatus.md#activedailyworkingstart)
- [activityLastVehicle](TachographDrivingTimeStatus.md#activitylastvehicle)
- [activityStatus](TachographDrivingTimeStatus.md#activitystatus)
- [biweeklyDrivingAvailableTime](TachographDrivingTimeStatus.md#biweeklydrivingavailabletime)
- [continuousDrivingStart](TachographDrivingTimeStatus.md#continuousdrivingstart)
- [continuousDrivingTime](TachographDrivingTimeStatus.md#continuousdrivingtime)
- [continuousWorkingStart](TachographDrivingTimeStatus.md#continuousworkingstart)
- [continuousWorkingTime](TachographDrivingTimeStatus.md#continuousworkingtime)
- [cumulatedBiweeklyDrivingTime](TachographDrivingTimeStatus.md#cumulatedbiweeklydrivingtime)
- [cumulatedWeeklyDrivingTime](TachographDrivingTimeStatus.md#cumulatedweeklydrivingtime)
- [currentWeekWorkingTime](TachographDrivingTimeStatus.md#currentweekworkingtime)
- [dailyCurrentFixedWeekRest](TachographDrivingTimeStatus.md#dailycurrentfixedweekrest)
- [dailyDrivingAvailableTime](TachographDrivingTimeStatus.md#dailydrivingavailabletime)
- [dailyDrivingLongDayCount](TachographDrivingTimeStatus.md#dailydrivinglongdaycount)
- [dailyDrivingRestMinType](TachographDrivingTimeStatus.md#dailydrivingrestmintype)
- [dailyDrivingTime](TachographDrivingTimeStatus.md#dailydrivingtime)
- [dailyDrivingTimeLimit](TachographDrivingTimeStatus.md#dailydrivingtimelimit)
- [dailyFixedWeekDate](TachographDrivingTimeStatus.md#dailyfixedweekdate)
- [dailyRestType](TachographDrivingTimeStatus.md#dailyresttype)
- [dailyWorkingTime](TachographDrivingTimeStatus.md#dailyworkingtime)
- [id](TachographDrivingTimeStatus.md#id)
- [lastDailyRest](TachographDrivingTimeStatus.md#lastdailyrest)
- [lastKnownVehicle](TachographDrivingTimeStatus.md#lastknownvehicle)
- [nextCompensationDuration](TachographDrivingTimeStatus.md#nextcompensationduration)
- [nextCompensationLimit](TachographDrivingTimeStatus.md#nextcompensationlimit)
- [nextRestMaxStartTime](TachographDrivingTimeStatus.md#nextrestmaxstarttime)
- [pendingBreakTime](TachographDrivingTimeStatus.md#pendingbreaktime)
- [pendingCompensations](TachographDrivingTimeStatus.md#pendingcompensations)
- [potentialSplitDailyRest](TachographDrivingTimeStatus.md#potentialsplitdailyrest)
- [previousFixedWeekRest](TachographDrivingTimeStatus.md#previousfixedweekrest)
- [previousWeekWeeklyDrivingTime](TachographDrivingTimeStatus.md#previousweekweeklydrivingtime)
- [previousWeekWorkingTime](TachographDrivingTimeStatus.md#previousweekworkingtime)
- [restActivityStart](TachographDrivingTimeStatus.md#restactivitystart)
- [restDuration](TachographDrivingTimeStatus.md#restduration)
- [user](TachographDrivingTimeStatus.md#user)
- [weeklyDrivingAvailableTime](TachographDrivingTimeStatus.md#weeklydrivingavailabletime)
- [weeklyPeriodDailyDrivingCount](TachographDrivingTimeStatus.md#weeklyperioddailydrivingcount)
- [weeklyPeriodReducedRestCount](TachographDrivingTimeStatus.md#weeklyperiodreducedrestcount)
- [weeklyPeriodRegularRestCount](TachographDrivingTimeStatus.md#weeklyperiodregularrestcount)
- [weeklyPeriodStart](TachographDrivingTimeStatus.md#weeklyperiodstart)
- [weeklyRestMaxStartTime](TachographDrivingTimeStatus.md#weeklyrestmaxstarttime)
- [weeklyRestMinType](TachographDrivingTimeStatus.md#weeklyrestmintype)
- [workActivityStatus](TachographDrivingTimeStatus.md#workactivitystatus)

## Properties

### activeDailyDrivingStart

• **activeDailyDrivingStart**: `number`

Gets or sets the Active daily driving start in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L12)

___

### activeDailyWorkingStart

• **activeDailyWorkingStart**: `number`

Gets or sets the Active daily working start in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L14)

___

### activityLastVehicle

• **activityLastVehicle**: `string`

Gets or sets the Activity last vehicle.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L16)

___

### activityStatus

• **activityStatus**: `string`

Gets or sets the Activity status.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L18)

___

### biweeklyDrivingAvailableTime

• **biweeklyDrivingAvailableTime**: `number`

Gets or sets the Biweekly driving available time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L20)

___

### continuousDrivingStart

• **continuousDrivingStart**: `number`

Gets or sets the Continuous driving start in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L22)

___

### continuousDrivingTime

• **continuousDrivingTime**: `number`

Gets or sets the Continuous driving time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L24)

___

### continuousWorkingStart

• **continuousWorkingStart**: `number`

Gets or sets the Continuous working start in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L26)

___

### continuousWorkingTime

• **continuousWorkingTime**: `number`

Gets or sets the Continuous working time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L28)

___

### cumulatedBiweeklyDrivingTime

• **cumulatedBiweeklyDrivingTime**: `number`

Gets or sets the Cumulated biweekly driving time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L30)

___

### cumulatedWeeklyDrivingTime

• **cumulatedWeeklyDrivingTime**: `number`

Gets or sets the Cumulated weekly driving time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L32)

___

### currentWeekWorkingTime

• **currentWeekWorkingTime**: `number`

Gets or sets the Current week working time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L34)

___

### dailyCurrentFixedWeekRest

• **dailyCurrentFixedWeekRest**: [`WeekRest`](WeekRest.md)

Gets or sets the Daily current fixed week rest.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L36)

___

### dailyDrivingAvailableTime

• **dailyDrivingAvailableTime**: `number`

Gets or sets the Daily driving available time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L38)

___

### dailyDrivingLongDayCount

• **dailyDrivingLongDayCount**: `number`

Gets or sets the Daily driving long day count in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L40)

___

### dailyDrivingRestMinType

• **dailyDrivingRestMinType**: `string`

Gets or sets the Daily driving rest minimal type.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L42)

___

### dailyDrivingTime

• **dailyDrivingTime**: `number`

Gets or sets the Daily driving time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L44)

___

### dailyDrivingTimeLimit

• **dailyDrivingTimeLimit**: `number`

Gets or sets the Daily driving time limit in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L46)

___

### dailyFixedWeekDate

• **dailyFixedWeekDate**: `Date`

Gets or sets the Daily fixed Week Date.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L48)

___

### dailyRestType

• **dailyRestType**: `string`

Gets or sets the Daily rest type.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L50)

___

### dailyWorkingTime

• **dailyWorkingTime**: `number`

Gets or sets the Daily working time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L52)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lastDailyRest

• **lastDailyRest**: `Date`

Gets or sets the Last daily rest.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L54)

___

### lastKnownVehicle

• **lastKnownVehicle**: `string`

Gets or sets the Last Known Vehicle.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L56)

___

### nextCompensationDuration

• **nextCompensationDuration**: `number`

Gets or sets the Next compensation duration in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L58)

___

### nextCompensationLimit

• **nextCompensationLimit**: `number`

Gets or sets the Next compensation limit in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:60](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L60)

___

### nextRestMaxStartTime

• **nextRestMaxStartTime**: `number`

Gets or sets the Next rest maximum start time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:62](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L62)

___

### pendingBreakTime

• **pendingBreakTime**: `number`

Gets or sets the Pending break time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:64](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L64)

___

### pendingCompensations

• **pendingCompensations**: `number`

Gets or sets the Pending compensations in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:66](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L66)

___

### potentialSplitDailyRest

• **potentialSplitDailyRest**: `boolean`

Gets or sets the Potential split daily rest.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:68](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L68)

___

### previousFixedWeekRest

• **previousFixedWeekRest**: [`WeekRest`](WeekRest.md)

Gets or sets the Previous fixed week rest.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:70](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L70)

___

### previousWeekWeeklyDrivingTime

• **previousWeekWeeklyDrivingTime**: `number`

Gets or sets the Previous week weekly driving time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:72](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L72)

___

### previousWeekWorkingTime

• **previousWeekWorkingTime**: `number`

Gets or sets the Previous week working time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:74](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L74)

___

### restActivityStart

• **restActivityStart**: `Date`

Gets or sets the Rest activity start.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:76](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L76)

___

### restDuration

• **restDuration**: `number`

Gets or sets the Rest duration in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:78](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L78)

___

### user

• **user**: [`User`](User.md)

Gets or sets the TachographDrivingTimeStatus.User in this telemetry.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:80](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L80)

___

### weeklyDrivingAvailableTime

• **weeklyDrivingAvailableTime**: `number`

Gets or sets the Weekly driving available time in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:82](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L82)

___

### weeklyPeriodDailyDrivingCount

• **weeklyPeriodDailyDrivingCount**: `number`

Gets or sets the Weekly period daily driving count in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:84](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L84)

___

### weeklyPeriodReducedRestCount

• **weeklyPeriodReducedRestCount**: `number`

Gets or sets the Weekly period reduced rest count in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:86](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L86)

___

### weeklyPeriodRegularRestCount

• **weeklyPeriodRegularRestCount**: `number`

Gets or sets the Weekly period regular rest count in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:88](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L88)

___

### weeklyPeriodStart

• **weeklyPeriodStart**: `Date`

Gets or sets the Weekly period start.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:90](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L90)

___

### weeklyRestMaxStartTime

• **weeklyRestMaxStartTime**: `Date`

Gets or sets the Weekly rest maximum start time.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:92](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L92)

___

### weeklyRestMinType

• **weeklyRestMinType**: `string`

Gets or sets the Weekly rest minimal type.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:94](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L94)

___

### workActivityStatus

• **workActivityStatus**: `string`

Gets or sets the Work activity status.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts:96](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDrivingTimeStatus.ts#L96)
