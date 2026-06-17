[@fairfleet/geotab](../README.md) / FailureMode

# Interface: FailureMode

The Failure Mode Identifier (FMI) used to describe engine fault
 codes. This is represented by the string "NoFailureModeId" when there is no applicable FMI.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`FailureMode`**

## Table of contents

### Properties

- [code](FailureMode.md#code)
- [id](FailureMode.md#id)
- [name](FailureMode.md#name)
- [source](FailureMode.md#source)
- [version](FailureMode.md#version)

## Properties

### code

• **code**: `number`

Gets or sets the specific FMI code number.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FailureMode.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FailureMode.ts#L14)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FailureMode.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FailureMode.ts#L16)

___

### name

• **name**: `string`

Gets or sets the name of this entity which identifies it and is used when displaying this entity.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FailureMode.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FailureMode.ts#L18)

___

### source

• **source**: [`Source`](Source.md)

Gets or sets the [Source](Source.md) type for the FMI.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FailureMode.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FailureMode.ts#L20)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
