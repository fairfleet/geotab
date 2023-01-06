[@fairfleet/geotab](../README.md) / DisplayUnitOfMeasure

# Interface: DisplayUnitOfMeasure

Contains the conversion between the base UnitOfMeasure to the DisplayUnitOfMeasure.

**`Deprecated`**

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`DisplayUnitOfMeasure`**

## Table of contents

### Properties

- [baseId](DisplayUnitOfMeasure.md#baseid)
- [factorFromBase](DisplayUnitOfMeasure.md#factorfrombase)
- [id](DisplayUnitOfMeasure.md#id)
- [inversionOperation](DisplayUnitOfMeasure.md#inversionoperation)
- [name](DisplayUnitOfMeasure.md#name)
- [offsetFromBase](DisplayUnitOfMeasure.md#offsetfrombase)
- [version](DisplayUnitOfMeasure.md#version)

## Properties

### baseId

• **baseId**: `string`

Gets or sets the Identifier of the base unit of measure.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayUnitOfMeasure.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayUnitOfMeasure.ts#L14)

___

### factorFromBase

• **factorFromBase**: `number`

Gets or sets the conversion factor from base units to the current unit.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayUnitOfMeasure.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayUnitOfMeasure.ts#L16)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### inversionOperation

• **inversionOperation**: `boolean`

Gets or sets a value indicating whether gets or sets whether or not an inversion operation is performed on unit conversion.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayUnitOfMeasure.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayUnitOfMeasure.ts#L18)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### offsetFromBase

• **offsetFromBase**: `number`

Gets or sets the offset to convert from base unit to current unit.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayUnitOfMeasure.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayUnitOfMeasure.ts#L20)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
