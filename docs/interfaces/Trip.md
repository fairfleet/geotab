[@fairfleet/geotab](../README.md) / Trip

# Interface: Trip

This is a vehicles trip and a summary of the driving activity during that trip.
 To get more information about stops during a trip please see
 [ExceptionEvent](ExceptionEvent.md).
 A complete "trip" is defined as starting at the time in which the vehicle starts and begins being driven.
 The trip continues after the vehicle has been stopped and ends at the time the vehicle restarts and begins being
 driven again; which then starts the next trip.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`Trip`**

## Table of contents

### Properties

- [afterHoursDistance](Trip.md#afterhoursdistance)
- [afterHoursDrivingDuration](Trip.md#afterhoursdrivingduration)
- [afterHoursEnd](Trip.md#afterhoursend)
- [afterHoursStart](Trip.md#afterhoursstart)
- [afterHoursStopDuration](Trip.md#afterhoursstopduration)
- [averageSpeed](Trip.md#averagespeed)
- [dateTime](Trip.md#datetime)
- [deletedDateTime](Trip.md#deleteddatetime)
- [device](Trip.md#device)
- [distance](Trip.md#distance)
- [driver](Trip.md#driver)
- [drivingDuration](Trip.md#drivingduration)
- [engineHours](Trip.md#enginehours)
- [from](Trip.md#from)
- [id](Trip.md#id)
- [idlingDuration](Trip.md#idlingduration)
- [isSeatBeltOff](Trip.md#isseatbeltoff)
- [maximumSpeed](Trip.md#maximumspeed)
- [nextTripStart](Trip.md#nexttripstart)
- [odometer](Trip.md#odometer)
- [speedRange1](Trip.md#speedrange1)
- [speedRange1Duration](Trip.md#speedrange1duration)
- [speedRange2](Trip.md#speedrange2)
- [speedRange2Duration](Trip.md#speedrange2duration)
- [speedRange3](Trip.md#speedrange3)
- [speedRange3Duration](Trip.md#speedrange3duration)
- [start](Trip.md#start)
- [stop](Trip.md#stop)
- [stopDuration](Trip.md#stopduration)
- [stopPoint](Trip.md#stoppoint)
- [to](Trip.md#to)
- [version](Trip.md#version)
- [workDistance](Trip.md#workdistance)
- [workDrivingDuration](Trip.md#workdrivingduration)
- [workStopDuration](Trip.md#workstopduration)

## Properties

### afterHoursDistance

• **afterHoursDistance**: `number`

Gets or sets the distance the vehicle was driven after work hours (in km).

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L19)

___

### afterHoursDrivingDuration

• **afterHoursDrivingDuration**: `string`

Gets or sets the duration the vehicle was driven after work hours.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L21)

___

### afterHoursEnd

• **afterHoursEnd**: `boolean`

Gets or sets whether the trip ends after hours.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L23)

___

### afterHoursStart

• **afterHoursStart**: `boolean`

Gets or sets whether the trip starts after hours.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L25)

___

### afterHoursStopDuration

• **afterHoursStopDuration**: `string`

Gets or sets the duration the vehicle was stopped after work hours.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L27)

___

### averageSpeed

• **averageSpeed**: `number`

Gets or sets the average speed in km/h. This only includes the average speed while driving.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L29)

___

### dateTime

• **dateTime**: `Date`

Gets the trip date time.

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L35)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L39)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with the trip.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L41)

___

### distance

• **distance**: `number`

Gets or sets the distance the vehicle was driven during this trip (in km).

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L43)

___

### driver

• **driver**: [`Driver`](Driver.md)

Gets or sets the [Driver](Driver.md) for the trip.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L45)

___

### drivingDuration

• **drivingDuration**: `string`

Gets or sets the duration between the start and stop of the trip.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L47)

___

### engineHours

• **engineHours**: `number`

Gets or sets a value indicating the engine hours as of the end of the trip.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L49)

___

### from

• **from**: `Date`

Gets the "From" Date.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L51)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### idlingDuration

• **idlingDuration**: `string`

Gets or sets total end of trip idling (idling is defined as speed is 0 and ignition on). It is calculated
 from the beginning of this trip to beginning of next trip.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L56)

___

### isSeatBeltOff

• **isSeatBeltOff**: `boolean`

Gets or sets a value indicating if this trip have a seat belt off incident.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L58)

___

### maximumSpeed

• **maximumSpeed**: `number`

Gets or sets the maximum speed of the vehicle during this trip (in km/h).

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:60](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L60)

___

### nextTripStart

• **nextTripStart**: `Date`

Gets or sets the start date of the next trip, as well as the end of the current trip session.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:62](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L62)

___

### odometer

• **odometer**: `number`

Gets or sets a value indicating the vehicle odometer value as of the end of the trip (in meters).

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:64](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L64)

___

### speedRange1

• **speedRange1**: `number`

Gets or sets the number of incidents where the vehicle reached the first range of speeding triggers.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:66](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L66)

___

### speedRange1Duration

• **speedRange1Duration**: `string`

Gets or sets the duration where the vehicle drove in the first range of speeding triggers.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:68](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L68)

___

### speedRange2

• **speedRange2**: `number`

Gets or sets the number of incidents where the vehicle reached the second range of speeding triggers.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:70](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L70)

___

### speedRange2Duration

• **speedRange2Duration**: `string`

Gets or sets the duration where the vehicle drove in the second range of speeding triggers.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:72](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L72)

___

### speedRange3

• **speedRange3**: `number`

Gets or sets the number of incidents where the vehicle reached the third range of speeding triggers.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:74](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L74)

___

### speedRange3Duration

• **speedRange3Duration**: `string`

Gets or sets the duration where the vehicle drove in the third range of speeding triggers.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:76](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L76)

___

### start

• **start**: `Date`

Gets or sets the date and time that the drive session started. This also signals the start of the trip.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:78](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L78)

___

### stop

• **stop**: `Date`

Gets or sets the date and time the trip drive session ended, and the vehicle stopped moving. Note that this doesn't correspond to end of the trip session.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:80](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L80)

___

### stopDuration

• **stopDuration**: `string`

Gets or sets the duration the vehicle was stopped at the end of the trip. This also includes any idling done at the end of a trip.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:82](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L82)

___

### stopPoint

• **stopPoint**: `unknown`

Gets or sets the [Coordinate](Coordinate.md) associated with this Trip's stop.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:84](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L84)

___

### to

• **to**: `Date`

Gets the "To" Date.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:86](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L86)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)

___

### workDistance

• **workDistance**: `number`

Gets or sets the distance the vehicle was driven during work hours.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:88](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L88)

___

### workDrivingDuration

• **workDrivingDuration**: `string`

Gets or sets the duration the vehicle was driven during work hours.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:90](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L90)

___

### workStopDuration

• **workStopDuration**: `string`

Gets or sets the duration the vehicle was stopped during work hours.

#### Defined in

[src/types/Checkmate/ObjectModel/Trip.ts:92](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Trip.ts#L92)
