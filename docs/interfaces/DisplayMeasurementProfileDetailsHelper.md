[@fairfleet/geotab](../README.md) / DisplayMeasurementProfileDetailsHelper

# Interface: DisplayMeasurementProfileDetailsHelper

Class to track Diagnostic to DisplayUnitOfMeasure for a given DisplayMeasurementProfile.

**`Deprecated`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DisplayMeasurementProfileDetailsHelper`**

## Table of contents

### Properties

- [displayDetails](DisplayMeasurementProfileDetailsHelper.md#displaydetails)
- [id](DisplayMeasurementProfileDetailsHelper.md#id)
- [knownIdLookup](DisplayMeasurementProfileDetailsHelper.md#knownidlookup)
- [profileId](DisplayMeasurementProfileDetailsHelper.md#profileid)

## Properties

### displayDetails

• **displayDetails**: [`DisplayMeasurementProfileDetail`](DisplayMeasurementProfileDetail.md)[]

Gets or sets the list to lookup the relevant [DisplayMeasurementProfileDetail](DisplayMeasurementProfileDetail.md) according to the base diagnostic Id.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetailsHelper.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetailsHelper.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### knownIdLookup

• **knownIdLookup**: `string`[]

Gets the KnownIds for DisplayMeasurementProfiles.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetailsHelper.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetailsHelper.ts#L17)

___

### profileId

• **profileId**: `string`

Gets or sets the Identifier of the related profile.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetailsHelper.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetailsHelper.ts#L19)
