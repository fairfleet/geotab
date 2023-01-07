[@fairfleet/geotab](../README.md) / MappedDiagnostic

# Interface: MappedDiagnostic

Represents a "virtual diagnostic" which is configurable per device as a [DiagnosticMapping](DiagnosticMapping.md) and
 must be resolved along with a [Device](Device.md) to get the actual [Diagnostic](Diagnostic.md).

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`MappedDiagnostic`**

## Table of contents

### Properties

- [defaultDiagnostic](MappedDiagnostic.md#defaultdiagnostic)
- [id](MappedDiagnostic.md#id)
- [name](MappedDiagnostic.md#name)

## Properties

### defaultDiagnostic

• **defaultDiagnostic**: [`Diagnostic`](Diagnostic.md)

Gets or sets the default diagnostic that must be used when a [DiagnosticMapping](DiagnosticMapping.md) does not exist
 for a [Device](Device.md) and this [MappedDiagnostic](MappedDiagnostic.md).

#### Defined in

src/types/Checkmate/ObjectModel/Engine/MappedDiagnostic.ts:17

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)
