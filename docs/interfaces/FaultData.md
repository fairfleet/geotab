[@fairfleet/geotab](../README.md) / FaultData

# Interface: FaultData

A record that represents a fault code record from the engine
 system of the specific [Device](Device.md).

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`FaultData`**

## Table of contents

### Properties

- [amberWarningLamp](FaultData.md#amberwarninglamp)
- [classCode](FaultData.md#classcode)
- [controller](FaultData.md#controller)
- [count](FaultData.md#count)
- [dateTime](FaultData.md#datetime)
- [device](FaultData.md#device)
- [diagnostic](FaultData.md#diagnostic)
- [dismissDateTime](FaultData.md#dismissdatetime)
- [dismissUser](FaultData.md#dismissuser)
- [failureMode](FaultData.md#failuremode)
- [faultLampState](FaultData.md#faultlampstate)
- [faultState](FaultData.md#faultstate)
- [faultStates](FaultData.md#faultstates)
- [flashCode](FaultData.md#flashcode)
- [id](FaultData.md#id)
- [malfunctionLamp](FaultData.md#malfunctionlamp)
- [protectWarningLamp](FaultData.md#protectwarninglamp)
- [redStopLamp](FaultData.md#redstoplamp)
- [severity](FaultData.md#severity)
- [sourceAddress](FaultData.md#sourceaddress)

## Properties

### amberWarningLamp

• **amberWarningLamp**: `boolean`

Gets or sets whether the amber warning lamp state.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L23)

___

### classCode

• **classCode**: [`DtcClass`](../README.md#dtcclass)

Gets or sets the [DtcClass](../README.md#dtcclass) code of the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:25](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L25)

___

### controller

• **controller**: [`Controller`](Controller.md)

Gets or sets the [Controller](Controller.md) code related to the fault code; if applicable.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:27](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L27)

___

### count

• **count**: `number`

Gets or sets the number of times the fault occurred.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:29](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L29)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time at which the event occurred.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:31](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L31)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) that generated the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:33](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L33)

___

### diagnostic

• **diagnostic**: [`Diagnostic`](Diagnostic.md)

Gets or sets the [Diagnostic](Diagnostic.md) associated with the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:35](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L35)

___

### dismissDateTime

• **dismissDateTime**: `Date`

Gets or sets the date and time that the DismissUser dismissed the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:37](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L37)

___

### dismissUser

• **dismissUser**: [`User`](User.md)

Gets or sets the [User](User.md) that dismissed the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:39](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L39)

___

### failureMode

• **failureMode**: [`FailureMode`](FailureMode.md)

Gets or sets the [FailureMode](FailureMode.md) of the fault; if applicable.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:41](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L41)

___

### faultLampState

• **faultLampState**: [`FaultLampState`](../README.md#faultlampstate)

Gets or sets the [FaultLampState](../README.md#faultlampstate) of a J1939 vehicle. See
 [FaultLampState](../README.md#faultlampstate) for the possible values.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:46](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L46)

___

### faultState

• **faultState**: [`FaultState`](../README.md#faultstate)

Gets or sets the [FaultState](../README.md#faultstate) code from the engine system of
 the specific device.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:51](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L51)

___

### faultStates

• **faultStates**: `unknown`

Gets or sets the FaultStatus(s) from the engine system of
 the specific device.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:56](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L56)

___

### flashCode

• **flashCode**: [`FlashCode`](FlashCode.md)

Gets or sets the [FlashCode](FlashCode.md) associated with the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:58](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L58)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the entity. See Id.

#### Overrides

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:60](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L60)

___

### malfunctionLamp

• **malfunctionLamp**: `boolean`

Gets or sets the malfunction light state.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:62](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L62)

___

### protectWarningLamp

• **protectWarningLamp**: `boolean`

Gets or sets whether the protect warning lamp is on.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:64](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L64)

___

### redStopLamp

• **redStopLamp**: `boolean`

Gets or sets whether the red stop lamp is on.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:66](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L66)

___

### severity

• **severity**: [`DtcSeverity`](../README.md#dtcseverity)

Gets or sets the [DtcSeverity](../README.md#dtcseverity) of the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:68](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L68)

___

### sourceAddress

• **sourceAddress**: `number`

Gets or sets the source address for enhanced faults.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:70](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L70)
