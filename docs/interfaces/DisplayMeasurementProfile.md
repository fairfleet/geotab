[@fairfleet/geotab](../README.md) / DisplayMeasurementProfile

# Interface: DisplayMeasurementProfile

Contains the DisplayMeasurementProfile for conversion information for each profile.

**`Deprecated`**

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`DisplayMeasurementProfile`**

## Table of contents

### Properties

- [displayMeasurementProfileDetails](DisplayMeasurementProfile.md#displaymeasurementprofiledetails)
- [id](DisplayMeasurementProfile.md#id)
- [name](DisplayMeasurementProfile.md#name)
- [parentId](DisplayMeasurementProfile.md#parentid)
- [version](DisplayMeasurementProfile.md#version)

## Properties

### displayMeasurementProfileDetails

• **displayMeasurementProfileDetails**: [`DisplayMeasurementProfileDetailsHelper`](DisplayMeasurementProfileDetailsHelper.md)

Gets or sets the [DisplayMeasurementProfileDetailsHelper](DisplayMeasurementProfileDetailsHelper.md) associated with the profile.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfile.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfile.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### parentId

• **parentId**: `string`

Gets or sets the Identifier of the parent profile.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfile.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfile.ts#L17)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
