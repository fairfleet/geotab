[@fairfleet/geotab](../README.md) / DisplayMeasurementProfileSearch

# Interface: DisplayMeasurementProfileSearch

The object used to specify the arguments when searching for a [DisplayMeasurementProfile](DisplayMeasurementProfile.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DisplayMeasurementProfileSearch`**

## Table of contents

### Properties

- [id](DisplayMeasurementProfileSearch.md#id)
- [includeDetails](DisplayMeasurementProfileSearch.md#includedetails)
- [includeUnitDetails](DisplayMeasurementProfileSearch.md#includeunitdetails)
- [version](DisplayMeasurementProfileSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeDetails

• **includeDetails**: `boolean`

Gets or sets whether or not to include corresponding DisplayMeasurementProfileDetails. It can only be used when the number of returned profiles is limited by id or resultsLimit.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileSearch.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileSearch.ts#L10)

___

### includeUnitDetails

• **includeUnitDetails**: `boolean`

Gets or sets whether or not to include the display unit of measure details.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileSearch.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileSearch.ts#L12)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
