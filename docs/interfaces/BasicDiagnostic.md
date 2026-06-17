[@fairfleet/geotab](../README.md) / BasicDiagnostic

# Interface: BasicDiagnostic

Information from the engine computer that can either be measurement data or fault code data. This
 inherited class only consists of a diagnostics Id.

## Hierarchy

- [`Diagnostic`](Diagnostic.md)

  ↳ **`BasicDiagnostic`**

## Table of contents

### Properties

- [code](BasicDiagnostic.md#code)
- [controller](BasicDiagnostic.md#controller)
- [diagnosticType](BasicDiagnostic.md#diagnostictype)
- [engineType](BasicDiagnostic.md#enginetype)
- [faultResetMode](BasicDiagnostic.md#faultresetmode)
- [id](BasicDiagnostic.md#id)
- [isLogGuaranteedOnEstimateError](BasicDiagnostic.md#islogguaranteedonestimateerror)
- [isReadOnly](BasicDiagnostic.md#isreadonly)
- [metadata](BasicDiagnostic.md#metadata)
- [name](BasicDiagnostic.md#name)
- [source](BasicDiagnostic.md#source)
- [tamperingDiagnostics](BasicDiagnostic.md#tamperingdiagnostics)
- [unitOfMeasure](BasicDiagnostic.md#unitofmeasure)
- [validLoggingPeriod](BasicDiagnostic.md#validloggingperiod)
- [version](BasicDiagnostic.md#version)

## Properties

### code

• **code**: `number`

Gets or sets the diagnostic parameter code number.

#### Inherited from

[Diagnostic](Diagnostic.md).[code](Diagnostic.md#code)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L22)

___

### controller

• **controller**: [`Controller`](Controller.md)

Gets or sets the applicable [Controller](Controller.md) for the diagnostic parameter.

#### Inherited from

[Diagnostic](Diagnostic.md).[controller](Diagnostic.md#controller)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L24)

___

### diagnosticType

• **diagnosticType**: [`DiagnosticType`](../README.md#diagnostictype)

Gets or sets the [DiagnosticType](../README.md#diagnostictype) (source) of the diagnostic parameter.

#### Inherited from

[Diagnostic](Diagnostic.md).[diagnosticType](Diagnostic.md#diagnostictype)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L26)

___

### engineType

• **engineType**: [`EngineType`](EngineType.md)

Gets or sets the [EngineType](EngineType.md) for this diagnostic if
 applicable, otherwise null.

#### Inherited from

[Diagnostic](Diagnostic.md).[engineType](Diagnostic.md#enginetype)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L31)

___

### faultResetMode

• **faultResetMode**: [`FaultResetMode`](../README.md#faultresetmode)

Gets or sets the [FaultResetMode](../README.md#faultresetmode) of the diagnostic (whether the fault resets automatically or manually).

#### Inherited from

[Diagnostic](Diagnostic.md).[faultResetMode](Diagnostic.md#faultresetmode)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L33)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity.

#### Inherited from

[Diagnostic](Diagnostic.md).[id](Diagnostic.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L35)

___

### isLogGuaranteedOnEstimateError

• **isLogGuaranteedOnEstimateError**: `boolean`

Gets or sets the value which describes if the diagnostic guarantees it will log when estimate error is exceeded.

#### Inherited from

[Diagnostic](Diagnostic.md).[isLogGuaranteedOnEstimateError](Diagnostic.md#islogguaranteedonestimateerror)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L37)

___

### isReadOnly

• **isReadOnly**: `boolean`

Gets a value indicating whether the diagnostic is readonly

#### Inherited from

[Diagnostic](Diagnostic.md).[isReadOnly](Diagnostic.md#isreadonly)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L39)

___

### metadata

• **metadata**: `Object`

Gets or sets the metadata associated with the diagnostic.

#### Index signature

▪ [key: `string`]: `any`

#### Inherited from

[Diagnostic](Diagnostic.md).[metadata](Diagnostic.md#metadata)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L41)

___

### name

• **name**: `string`

Gets or sets the name of this entity which identifies it and is used when displaying this entity.

#### Inherited from

[Diagnostic](Diagnostic.md).[name](Diagnostic.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L43)

___

### source

• **source**: [`Source`](Source.md)

Gets or sets the [Source](Source.md) for the diagnostic (the type of diagnostic code).

#### Inherited from

[Diagnostic](Diagnostic.md).[source](Diagnostic.md#source)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L45)

___

### tamperingDiagnostics

• **tamperingDiagnostics**: [`Diagnostic`](Diagnostic.md)[]

Gets the tampering diagnostic codes.

#### Inherited from

[Diagnostic](Diagnostic.md).[tamperingDiagnostics](Diagnostic.md#tamperingdiagnostics)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L47)

___

### unitOfMeasure

• **unitOfMeasure**: [`UnitOfMeasure`](UnitOfMeasure.md)

Gets or sets the [UnitOfMeasure](UnitOfMeasure.md) applicable to the diagnostic parameter.

#### Inherited from

[Diagnostic](Diagnostic.md).[unitOfMeasure](Diagnostic.md#unitofmeasure)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L49)

___

### validLoggingPeriod

• **validLoggingPeriod**: [`ValidLoggingPeriod`](../README.md#validloggingperiod)

Gets or sets the Diagnostic.ValidLoggingPeriod. The diagnostic should only be interpolated within the range of the given type.

#### Inherited from

[Diagnostic](Diagnostic.md).[validLoggingPeriod](Diagnostic.md#validloggingperiod)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/Diagnostic.ts#L51)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[Diagnostic](Diagnostic.md).[version](Diagnostic.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
