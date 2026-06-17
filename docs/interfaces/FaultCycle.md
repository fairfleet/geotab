[@fairfleet/geotab](../README.md) / FaultCycle

# Interface: FaultCycle

A class that holds the cycles for a fault.

## Table of contents

### Properties

- [activeEventCount](FaultCycle.md#activeeventcount)
- [breakdownDuration](FaultCycle.md#breakdownduration)
- [breakdownRisk](FaultCycle.md#breakdownrisk)
- [confirmedEventCount](FaultCycle.md#confirmedeventcount)
- [controller](FaultCycle.md#controller)
- [cycleEnd](FaultCycle.md#cycleend)
- [cycleOnGoing](FaultCycle.md#cycleongoing)
- [cycleStart](FaultCycle.md#cyclestart)
- [dateInserted](FaultCycle.md#dateinserted)
- [device](FaultCycle.md#device)
- [diagnostic](FaultCycle.md#diagnostic)
- [failureMode](FaultCycle.md#failuremode)
- [pendingEventCount](FaultCycle.md#pendingeventcount)
- [source](FaultCycle.md#source)
- [summaryCycleDistanceActive](FaultCycle.md#summarycycledistanceactive)
- [summaryCycleDistanceConfirmed](FaultCycle.md#summarycycledistanceconfirmed)
- [summaryCycleDistancePending](FaultCycle.md#summarycycledistancepending)
- [summaryCycleDurationActive](FaultCycle.md#summarycycledurationactive)
- [summaryCycleDurationConfirmed](FaultCycle.md#summarycycledurationconfirmed)
- [summaryCycleDurationPending](FaultCycle.md#summarycycledurationpending)
- [summaryCycleFirstActive](FaultCycle.md#summarycyclefirstactive)
- [summaryCycleFirstConfirmed](FaultCycle.md#summarycyclefirstconfirmed)
- [summaryCycleFirstPending](FaultCycle.md#summarycyclefirstpending)
- [summaryCycleLastActive](FaultCycle.md#summarycyclelastactive)
- [summaryCycleLastConfirmed](FaultCycle.md#summarycyclelastconfirmed)
- [summaryCycleLastPending](FaultCycle.md#summarycyclelastpending)
- [summaryCycleOdometerFirstActive](FaultCycle.md#summarycycleodometerfirstactive)
- [summaryCycleOdometerFirstConfirmed](FaultCycle.md#summarycycleodometerfirstconfirmed)
- [summaryCycleOdometerFirstPending](FaultCycle.md#summarycycleodometerfirstpending)
- [summaryCycleOdometerLastActive](FaultCycle.md#summarycycleodometerlastactive)
- [summaryCycleOdometerLastConfirmed](FaultCycle.md#summarycycleodometerlastconfirmed)
- [summaryCycleOdometerLastPending](FaultCycle.md#summarycycleodometerlastpending)
- [validCycle](FaultCycle.md#validcycle)

## Properties

### activeEventCount

• **activeEventCount**: `number`

Gets or sets the count of all Active cycles inside the cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L14)

___

### breakdownDuration

• **breakdownDuration**: `number`

Gets or sets the duration of break down in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L16)

___

### breakdownRisk

• **breakdownRisk**: `number`

Gets or sets the posibility of break down, percentage.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L18)

___

### confirmedEventCount

• **confirmedEventCount**: `number`

Gets or sets the count of all Confirmed cycles inside the cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L20)

___

### controller

• **controller**: [`Controller`](Controller.md)

Gets or sets the Controller.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L22)

___

### cycleEnd

• **cycleEnd**: `Date`

Gets or sets the last DateTime of the Cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L24)

___

### cycleOnGoing

• **cycleOnGoing**: `boolean`

Gets or sets the indication whether the cycle is considered as persistent.
 If the cycle is persistent the last seen cycle is not yet set as the cycle end and can still update.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L29)

___

### cycleStart

• **cycleStart**: `Date`

Gets or sets the first DateTime of the Cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L31)

___

### dateInserted

• **dateInserted**: `Date`

Gets or sets the date and time when the fault cycle record was first inserted into the database.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L33)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L35)

___

### diagnostic

• **diagnostic**: [`Diagnostic`](Diagnostic.md)

Gets or sets the Diagnostic.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L37)

___

### failureMode

• **failureMode**: [`FailureMode`](FailureMode.md)

Gets or sets the FailureMode.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L39)

___

### pendingEventCount

• **pendingEventCount**: `number`

Gets or sets the count of all Pending cycles inside the cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L41)

___

### source

• **source**: [`Source`](Source.md)

Gets or sets the Source.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L43)

___

### summaryCycleDistanceActive

• **summaryCycleDistanceActive**: `number`

Gets or sets the distance driven with cycle in active state.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L45)

___

### summaryCycleDistanceConfirmed

• **summaryCycleDistanceConfirmed**: `number`

Gets or sets the distance driven with cycle in confirmed state.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L47)

___

### summaryCycleDistancePending

• **summaryCycleDistancePending**: `number`

Gets or sets the distance driven with cycle in pending state.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L49)

___

### summaryCycleDurationActive

• **summaryCycleDurationActive**: `number`

Gets or sets the duration where cycle is in the active state.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L51)

___

### summaryCycleDurationConfirmed

• **summaryCycleDurationConfirmed**: `number`

Gets or sets the duration where cycle is in the confirmed state.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:53](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L53)

___

### summaryCycleDurationPending

• **summaryCycleDurationPending**: `number`

Gets or sets the duration where cycle is in the pending state.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:55](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L55)

___

### summaryCycleFirstActive

• **summaryCycleFirstActive**: `Date`

Gets or sets the DateTime of the first Active cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:57](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L57)

___

### summaryCycleFirstConfirmed

• **summaryCycleFirstConfirmed**: `Date`

Gets or sets the DateTime of the first Confirmed cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:59](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L59)

___

### summaryCycleFirstPending

• **summaryCycleFirstPending**: `Date`

Gets or sets the datetime of the first pending.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:61](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L61)

___

### summaryCycleLastActive

• **summaryCycleLastActive**: `Date`

Gets or sets the dateTime of the last Active cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:63](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L63)

___

### summaryCycleLastConfirmed

• **summaryCycleLastConfirmed**: `Date`

Gets or sets the DateTime of the last Confirmed cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:65](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L65)

___

### summaryCycleLastPending

• **summaryCycleLastPending**: `Date`

Gets or sets the dateTime of the last pending cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:67](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L67)

___

### summaryCycleOdometerFirstActive

• **summaryCycleOdometerFirstActive**: `number`

Gets or sets the Odometer value of the first Active cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:69](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L69)

___

### summaryCycleOdometerFirstConfirmed

• **summaryCycleOdometerFirstConfirmed**: `number`

Gets or sets the Odometer value of the first Confirmed cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:71](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L71)

___

### summaryCycleOdometerFirstPending

• **summaryCycleOdometerFirstPending**: `number`

Gets or sets the odometer value of the first pending cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:73](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L73)

___

### summaryCycleOdometerLastActive

• **summaryCycleOdometerLastActive**: `number`

Gets or sets the Odometer value of the last Active cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:75](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L75)

___

### summaryCycleOdometerLastConfirmed

• **summaryCycleOdometerLastConfirmed**: `number`

Gets or sets the Odometer value of the last Confirmed cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:77](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L77)

___

### summaryCycleOdometerLastPending

• **summaryCycleOdometerLastPending**: `number`

Gets or sets the odometer value of the last Pending cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:79](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L79)

___

### validCycle

• **validCycle**: `boolean`

Gets or sets the indication wheter a cycle is valid or invalid due to more recent cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycle.ts:81](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycle.ts#L81)
