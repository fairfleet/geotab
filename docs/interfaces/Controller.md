[@fairfleet/geotab](../README.md) / Controller

# Interface: Controller

The controller that the diagnostic belongs to. Controllers could be ABS controller, suspension controller etc. The available controllers are listed in the [KnownId](../enums/KnownId.md).

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`Controller`**

## Table of contents

### Properties

- [code](Controller.md#code)
- [codeId](Controller.md#codeid)
- [id](Controller.md#id)
- [name](Controller.md#name)
- [source](Controller.md#source)
- [version](Controller.md#version)

## Properties

### code

• **code**: `number`

Gets the controller diagnostic code (if applicable).

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Controller.ts:11](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/Controller.ts#L11)

___

### codeId

• **codeId**: `number`

Gets or sets the message identification code for the controller of the diagnostic (if applicable).

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Controller.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/Controller.ts#L13)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Controller.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/Controller.ts#L15)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Controller.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/Controller.ts#L17)

___

### source

• **source**: [`Source`](Source.md)

Gets or sets the standard (format) of the [Source](Source.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/Controller.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/Controller.ts#L19)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
