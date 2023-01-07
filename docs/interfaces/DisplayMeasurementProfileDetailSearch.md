[@fairfleet/geotab](../README.md) / DisplayMeasurementProfileDetailSearch

# Interface: DisplayMeasurementProfileDetailSearch

The object used to specify the arguments when searching for a [DisplayMeasurementProfileDetail](DisplayMeasurementProfileDetail.md).
 When searching for DisplayMeasurementDProfileDetails including DisplayMeasurementProfileSearch and DiagnosticSearch
 the system will return all records that match the search criteria.
 This search has been designed to work efficiently with these combinations of parameters:<list><item><description>Id</description></item><item><description>DisplayMeasurementProfileSearch + DiagnosticSearch</description></item></list>

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DisplayMeasurementProfileDetailSearch`**

## Table of contents

### Properties

- [diagnosticSearch](DisplayMeasurementProfileDetailSearch.md#diagnosticsearch)
- [displayMeasurementProfileSearch](DisplayMeasurementProfileDetailSearch.md#displaymeasurementprofilesearch)
- [getUnitDetails](DisplayMeasurementProfileDetailSearch.md#getunitdetails)
- [id](DisplayMeasurementProfileDetailSearch.md#id)
- [version](DisplayMeasurementProfileDetailSearch.md#version)

## Properties

### diagnosticSearch

• **diagnosticSearch**: [`DiagnosticSearch`](DiagnosticSearch.md)

Gets or sets search for DisplayProfileDetail with this [DiagnosticSearch](DiagnosticSearch.md) Id.
 Available
 DiagnosticSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetailSearch.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetailSearch.ts#L22)

___

### displayMeasurementProfileSearch

• **displayMeasurementProfileSearch**: [`DisplayMeasurementProfileSearch`](DisplayMeasurementProfileSearch.md)

Gets or sets search for DisplayProfileDetail with this [DisplayMeasurementProfileSearch](DisplayMeasurementProfileSearch.md) Id.
 Available
 DisplayMeasurementProfileSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetailSearch.ts:29](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetailSearch.ts#L29)

___

### getUnitDetails

• **getUnitDetails**: `boolean`

Gets or sets whether or not to get the display unit of measure details.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetailSearch.ts:31](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetailSearch.ts#L31)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
