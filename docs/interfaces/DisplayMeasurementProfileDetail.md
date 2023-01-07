[@fairfleet/geotab](../README.md) / DisplayMeasurementProfileDetail

# Interface: DisplayMeasurementProfileDetail

Class to track a single DisplayUnitOfMeasure for a given DisplayMeasurementProfile.

**`Deprecated`**

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`DisplayMeasurementProfileDetail`**

## Table of contents

### Properties

- [diagnosticId](DisplayMeasurementProfileDetail.md#diagnosticid)
- [displayUnitOfMeasure](DisplayMeasurementProfileDetail.md#displayunitofmeasure)
- [id](DisplayMeasurementProfileDetail.md#id)
- [profileId](DisplayMeasurementProfileDetail.md#profileid)
- [version](DisplayMeasurementProfileDetail.md#version)

## Properties

### diagnosticId

• **diagnosticId**: `string`

Gets or Sets the Identifier of the related Diagnostic.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetail.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetail.ts#L15)

___

### displayUnitOfMeasure

• **displayUnitOfMeasure**: [`DisplayUnitOfMeasure`](DisplayUnitOfMeasure.md)

Gets or sets the DisplayMeasurementProfileDetail.DisplayUnitOfMeasure matched to the base diagnostic Id for the profile.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetail.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetail.ts#L17)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### profileId

• **profileId**: `string`

Gets or sets the Identifier of the related profile.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetail.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetail.ts#L19)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
