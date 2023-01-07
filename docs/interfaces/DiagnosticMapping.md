[@fairfleet/geotab](../README.md) / DiagnosticMapping

# Interface: DiagnosticMapping

Represents the relationship of a DiagnosticMapping.Device and a DiagnosticMapping.MappedDiagnostic with a DiagnosticMapping.Diagnostic.
 DiagnosticMapping.Device and DiagnosticMapping.MappedDiagnostic pair must be unique for this entity, so a DiagnosticMapping.MappedDiagnostic
 can be resolved as follows: "For this device and mapped diagnostic, tell me which is the actual diagnostic I have to use.".

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DiagnosticMapping`**

## Table of contents

### Properties

- [device](DiagnosticMapping.md#device)
- [diagnostic](DiagnosticMapping.md#diagnostic)
- [id](DiagnosticMapping.md#id)
- [mappedDiagnostic](DiagnosticMapping.md#mappeddiagnostic)

## Properties

### device

• **device**: [`Device`](Device.md)

Gets or sets the device for this mapping.

#### Defined in

src/types/Checkmate/ObjectModel/Engine/DiagnosticMapping.ts:17

___

### diagnostic

• **diagnostic**: [`Diagnostic`](Diagnostic.md)

Gets or sets the actual diagnostic that must be used for this DiagnosticMapping.Device and DiagnosticMapping.MappedDiagnostic pair.

#### Defined in

src/types/Checkmate/ObjectModel/Engine/DiagnosticMapping.ts:19

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### mappedDiagnostic

• **mappedDiagnostic**: [`MappedDiagnostic`](MappedDiagnostic.md)

Gets or sets the mapped diagnostic for this mapping.

#### Defined in

src/types/Checkmate/ObjectModel/Engine/DiagnosticMapping.ts:21
