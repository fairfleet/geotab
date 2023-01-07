[@fairfleet/geotab](../README.md) / FlashCode

# Interface: FlashCode

The optional summary code references for specific
 [Diagnostic](Diagnostic.md) items referencing
 [FaultData](FaultData.md) records.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`FlashCode`**

## Table of contents

### Properties

- [circuitIndex](FlashCode.md#circuitindex)
- [diagnostic](FlashCode.md#diagnostic)
- [failureMode](FlashCode.md#failuremode)
- [flashCodeIndex](FlashCode.md#flashcodeindex)
- [helpUrl](FlashCode.md#helpurl)
- [id](FlashCode.md#id)
- [name](FlashCode.md#name)
- [pageReference](FlashCode.md#pagereference)
- [priorityLevel](FlashCode.md#prioritylevel)

## Properties

### circuitIndex

• **circuitIndex**: `string`

Gets or sets the circuit index reference to the flash code.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FlashCode.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FlashCode.ts#L16)

___

### diagnostic

• **diagnostic**: [`Diagnostic`](Diagnostic.md)

Gets or sets the associated [Diagnostic](Diagnostic.md) to the flash code.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FlashCode.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FlashCode.ts#L18)

___

### failureMode

• **failureMode**: [`FailureMode`](FailureMode.md)

Gets or sets the associated [FailureMode](FailureMode.md) to the flash code.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FlashCode.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FlashCode.ts#L20)

___

### flashCodeIndex

• **flashCodeIndex**: `string`

Gets or sets the flash code index.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FlashCode.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FlashCode.ts#L22)

___

### helpUrl

• **helpUrl**: `string`

Gets or sets an optional URL which points to the associated documentation for the flash code.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FlashCode.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FlashCode.ts#L24)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Overrides

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FlashCode.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FlashCode.ts#L26)

___

### name

• **name**: `string`

Gets or sets the name of this entity that both uniquely identifies it and is used for display.

#### Overrides

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FlashCode.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FlashCode.ts#L28)

___

### pageReference

• **pageReference**: `string`

Gets or sets the page reference, if applicable.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FlashCode.ts:30](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FlashCode.ts#L30)

___

### priorityLevel

• **priorityLevel**: `number`

Gets or sets the priority level of the fault flash code.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FlashCode.ts:32](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FlashCode.ts#L32)
