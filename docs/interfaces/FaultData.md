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
- [diagnosticSeverity](FaultData.md#diagnosticseverity)
- [dismissDateTime](FaultData.md#dismissdatetime)
- [dismissUser](FaultData.md#dismissuser)
- [effectOnComponent](FaultData.md#effectoncomponent)
- [failureMode](FaultData.md#failuremode)
- [faultDescription](FaultData.md#faultdescription)
- [faultLampState](FaultData.md#faultlampstate)
- [faultRichSeverity](FaultData.md#faultrichseverity)
- [faultSeverity](FaultData.md#faultseverity)
- [faultState](FaultData.md#faultstate)
- [faultStates](FaultData.md#faultstates)
- [flashCode](FaultData.md#flashcode)
- [id](FaultData.md#id)
- [malfunctionLamp](FaultData.md#malfunctionlamp)
- [protectWarningLamp](FaultData.md#protectwarninglamp)
- [recommendation](FaultData.md#recommendation)
- [redStopLamp](FaultData.md#redstoplamp)
- [riskOfBreakdown](FaultData.md#riskofbreakdown)
- [severity](FaultData.md#severity)
- [sourceAddress](FaultData.md#sourceaddress)

## Properties

### amberWarningLamp

• **amberWarningLamp**: `boolean`

Gets or sets whether the amber warning lamp state.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L23)

___

### classCode

• **classCode**: [`DtcClass`](../README.md#dtcclass)

Gets or sets the [DtcClass](../README.md#dtcclass) code of the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L25)

___

### controller

• **controller**: [`Controller`](Controller.md)

Gets or sets the [Controller](Controller.md) code related to the fault code; if applicable.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L27)

___

### count

• **count**: `number`

Gets or sets the number of times the fault occurred.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L29)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time at which the event occurred.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L31)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) that generated the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L33)

___

### diagnostic

• **diagnostic**: [`Diagnostic`](Diagnostic.md)

Gets or sets the [Diagnostic](Diagnostic.md) associated with the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L35)

___

### diagnosticSeverity

• **diagnosticSeverity**: [`DtcSeverity`](../README.md#dtcseverity)

Gets or sets the [DtcSeverity](../README.md#dtcseverity) level of the diagnostic associated with this fault

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L37)

___

### dismissDateTime

• **dismissDateTime**: `Date`

Gets or sets the date and time that the DismissUser dismissed the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L39)

___

### dismissUser

• **dismissUser**: [`User`](User.md)

Gets or sets the [User](User.md) that dismissed the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L41)

___

### effectOnComponent

• **effectOnComponent**: `string`

Gets or sets the effect on component for enriched fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L43)

___

### failureMode

• **failureMode**: [`FailureMode`](FailureMode.md)

Gets or sets the [FailureMode](FailureMode.md) of the fault; if applicable.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L45)

___

### faultDescription

• **faultDescription**: `string`

Gets or sets the fault description for enriched fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L47)

___

### faultLampState

• **faultLampState**: [`FaultLampState`](../README.md#faultlampstate)

Gets or sets the [FaultLampState](../README.md#faultlampstate) of a J1939 vehicle. See
 [FaultLampState](../README.md#faultlampstate) for the possible values.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L52)

___

### faultRichSeverity

• **faultRichSeverity**: [`DtcSeverity`](../README.md#dtcseverity)

Gets or sets the rich [DtcSeverity](../README.md#dtcseverity) level of the fault.
 This property provides a more customized severity assessment than the general FaultData.FaultSeverity, allowing for finer-grained control over fault severity reporting.
 Note: This property is not available for all clients.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L58)

___

### faultSeverity

• **faultSeverity**: [`DtcSeverity`](../README.md#dtcseverity)

Gets or sets the [DtcSeverity](../README.md#dtcseverity) level of the fault

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:60](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L60)

___

### faultState

• **faultState**: [`FaultState`](../README.md#faultstate)

Gets or sets the [FaultState](../README.md#faultstate) code from the engine system of
 the specific device.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:65](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L65)

___

### faultStates

• **faultStates**: `unknown`

Gets or sets the FaultStatus(s) from the engine system of
 the specific device.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:70](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L70)

___

### flashCode

• **flashCode**: [`FlashCode`](FlashCode.md)

Gets or sets the [FlashCode](FlashCode.md) associated with the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:72](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L72)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the entity. See Id.

#### Overrides

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:74](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L74)

___

### malfunctionLamp

• **malfunctionLamp**: `boolean`

Gets or sets the malfunction light state.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:76](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L76)

___

### protectWarningLamp

• **protectWarningLamp**: `boolean`

Gets or sets whether the protect warning lamp is on.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:78](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L78)

___

### recommendation

• **recommendation**: `string`

Gets or sets the recommendation for enriched fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:80](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L80)

___

### redStopLamp

• **redStopLamp**: `boolean`

Gets or sets whether the red stop lamp is on.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:82](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L82)

___

### riskOfBreakdown

• **riskOfBreakdown**: `number`

Gets or sets the risk of breakdown associated with the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:84](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L84)

___

### severity

• **severity**: [`DtcSeverity`](../README.md#dtcseverity)

Gets or sets the overall severity level of the fault. This value is determined by coalescing the following properties in order of precedence:
 <list type="number"><item>FaultData.FaultSeverity</item><item>FaultData.DiagnosticSeverity</item></list>
 Effectively, this property represents <c>FaultSeverity ?? DiagnosticSeverity</c>.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:90](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L90)

___

### sourceAddress

• **sourceAddress**: `number`

Gets or sets the source address for enhanced faults.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultData.ts:92](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultData.ts#L92)
