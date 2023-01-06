[@fairfleet/geotab](../README.md) / Diagnostic

# Interface: Diagnostic

Vehicle diagnostic information from the engine computer that can either be
 measurement data or fault code data.

**`Remarks`**

Note: Diagnostics cannot be added, set or removed via the API.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`Diagnostic`**

## Table of contents

### Properties

- [code](Diagnostic.md#code)
- [controller](Diagnostic.md#controller)
- [diagnosticType](Diagnostic.md#diagnostictype)
- [engineType](Diagnostic.md#enginetype)
- [faultResetMode](Diagnostic.md#faultresetmode)
- [id](Diagnostic.md#id)
- [isLogGuaranteedOnEstimateError](Diagnostic.md#islogguaranteedonestimateerror)
- [isReadOnly](Diagnostic.md#isreadonly)
- [name](Diagnostic.md#name)
- [source](Diagnostic.md#source)
- [tamperingDiagnostics](Diagnostic.md#tamperingdiagnostics)
- [unitOfMeasure](Diagnostic.md#unitofmeasure)
- [validLoggingPeriod](Diagnostic.md#validloggingperiod)
- [version](Diagnostic.md#version)

## Properties

### code

• **code**: `number`

Gets or sets the diagnostic parameter code number.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L22)

___

### controller

• **controller**: [`Controller`](Controller.md)

Gets or sets the applicable [Controller](Controller.md) for the diagnostic parameter.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:24](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L24)

___

### diagnosticType

• **diagnosticType**: [`DiagnosticType`](../README.md#diagnostictype)

Gets or sets the [DiagnosticType](../README.md#diagnostictype) (source) of the diagnostic parameter.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:26](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L26)

___

### engineType

• **engineType**: [`EngineType`](EngineType.md)

Gets or sets the [EngineType](EngineType.md) for this diagnostic if
 applicable, otherwise null.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:31](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L31)

___

### faultResetMode

• **faultResetMode**: [`FaultResetMode`](../README.md#faultresetmode)

Gets or sets the [FaultResetMode](../README.md#faultresetmode) of the diagnostic (whether the fault resets automatically or manually).

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:33](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L33)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:35](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L35)

___

### isLogGuaranteedOnEstimateError

• **isLogGuaranteedOnEstimateError**: `boolean`

Gets or sets the value which describes if the diagnostic guarantees it will log when estimate error is exceeded.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:37](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L37)

___

### isReadOnly

• **isReadOnly**: `boolean`

Gets a value indicating whether the diagnostic is readonly

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:39](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L39)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:41](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L41)

___

### source

• **source**: [`Source`](Source.md)

Gets or sets the [Source](Source.md) for the diagnostic (the type of diagnostic code).

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:43](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L43)

___

### tamperingDiagnostics

• **tamperingDiagnostics**: [`Diagnostic`](Diagnostic.md)[]

Gets the tampering diagnostic codes.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:45](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L45)

___

### unitOfMeasure

• **unitOfMeasure**: [`UnitOfMeasure`](UnitOfMeasure.md)

Gets or sets the [UnitOfMeasure](UnitOfMeasure.md) applicable to the diagnostic parameter.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:47](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L47)

___

### validLoggingPeriod

• **validLoggingPeriod**: [`ValidLoggingPeriod`](../README.md#validloggingperiod)

Gets or sets the Diagnostic.ValidLoggingPeriod. The diagnostic should only be interpolated within the range of the given type.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:49](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L49)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
