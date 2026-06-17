[@fairfleet/geotab](../README.md) / DiagnosticLookupTable

# Interface: DiagnosticLookupTable

Represents a diagnostic lookup table containing fault data.
 This maps to the "lookupTables" section in diagnostics.json.
 Lookup tables contain arrays of fault records with their descriptions and metadata.
 For example, the "obdii_faults" table contains all OBD-II fault codes with their details.
 Example from diagnostics.json lookupTables section:
 <code>
 "obdii_faults": [
 {
 "code": 0,
 "controller": 66,
 "description": "ISO/SAE reserved"
 },
 {
 "code": 1,
 "controller": 66,
 "description": "Driver frontal stage 1 deployment control",
 "metadata": { ... }
 }
 ]
 </code>

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`DiagnosticLookupTable`**

## Table of contents

### Properties

- [data](DiagnosticLookupTable.md#data)
- [id](DiagnosticLookupTable.md#id)
- [name](DiagnosticLookupTable.md#name)
- [version](DiagnosticLookupTable.md#version)

## Properties

### data

• **data**: `any`

Gets or sets the array of records for this lookup table.
 Contains the raw JSON data from the lookupTables section.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticLookupTable.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticLookupTable.ts#L34)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### name

• **name**: `string`

Gets or sets the name of this entity which identifies it and is used when displaying this entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
