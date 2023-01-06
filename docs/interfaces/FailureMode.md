[@fairfleet/geotab](../README.md) / FailureMode

# Interface: FailureMode

The Failure Mode Identifier (FMI) used to describe engine fault
 codes. This is represented by the string "NoFailureModeId" when there is no applicable FMI.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`FailureMode`**

## Table of contents

### Properties

- [code](FailureMode.md#code)
- [id](FailureMode.md#id)
- [name](FailureMode.md#name)
- [source](FailureMode.md#source)

## Properties

### code

• **code**: `number`

Gets or sets the specific FMI code number.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FailureMode.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/FailureMode.ts#L14)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Overrides

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FailureMode.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/FailureMode.ts#L16)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Overrides

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FailureMode.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/FailureMode.ts#L18)

___

### source

• **source**: [`Source`](Source.md)

Gets or sets the [Source](Source.md) type for the FMI.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FailureMode.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/FailureMode.ts#L20)
