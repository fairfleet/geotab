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
- [propertySelector](DisplayMeasurementProfileSearch.md#propertyselector)
- [version](DisplayMeasurementProfileSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### includeDetails

• **includeDetails**: `boolean`

Gets or sets whether or not to include corresponding DisplayMeasurementProfileDetails. It can only be used when the number of returned profiles is limited by id or resultsLimit.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileSearch.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileSearch.ts#L10)

___

### includeUnitDetails

• **includeUnitDetails**: `boolean`

Gets or sets whether or not to include the display unit of measure details.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileSearch.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileSearch.ts#L12)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
