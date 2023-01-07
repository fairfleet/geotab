[@fairfleet/geotab](../README.md) / DisplayUnitOfMeasureSearch

# Interface: DisplayUnitOfMeasureSearch

The object used to specify the arguments when searching for a [DisplayUnitOfMeasure](DisplayUnitOfMeasure.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DisplayUnitOfMeasureSearch`**

## Table of contents

### Properties

- [diagnosticSearch](DisplayUnitOfMeasureSearch.md#diagnosticsearch)
- [displayMeasurementProfileSearch](DisplayUnitOfMeasureSearch.md#displaymeasurementprofilesearch)
- [id](DisplayUnitOfMeasureSearch.md#id)
- [version](DisplayUnitOfMeasureSearch.md#version)

## Properties

### diagnosticSearch

• **diagnosticSearch**: [`DiagnosticSearch`](DiagnosticSearch.md)[]

Gets or sets search for DisplayUnitsOfMeasurse with this IEnumerable`1 with an id for each DiagnosticSearch.
 Available DiagnosticSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayUnitOfMeasureSearch.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayUnitOfMeasureSearch.ts#L16)

___

### displayMeasurementProfileSearch

• **displayMeasurementProfileSearch**: [`DisplayMeasurementProfileSearch`](DisplayMeasurementProfileSearch.md)

Gets or sets search for DisplayProfileDetail with this [DisplayMeasurementProfileSearch](DisplayMeasurementProfileSearch.md) Id.
 Available DisplayMeasurementProfileSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayUnitOfMeasureSearch.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayUnitOfMeasureSearch.ts#L22)

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
