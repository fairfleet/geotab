[@fairfleet/geotab](../README.md) / DiagnosticMappingSearch

# Interface: DiagnosticMappingSearch

A [Search](Search.md) object to search for [DiagnosticMapping](DiagnosticMapping.md) rows.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DiagnosticMappingSearch`**

## Table of contents

### Properties

- [deviceSearch](DiagnosticMappingSearch.md#devicesearch)
- [id](DiagnosticMappingSearch.md#id)
- [mappedDiagnosticId](DiagnosticMappingSearch.md#mappeddiagnosticid)
- [version](DiagnosticMappingSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the DiagnosticMappingSearch.DeviceSearch object. Id must be provided, because all other DiagnosticMappingSearch.DeviceSearch parameters will be ignored.

#### Defined in

src/types/Checkmate/ObjectModel/Engine/DiagnosticMappingSearch.ts:11

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### mappedDiagnosticId

• **mappedDiagnosticId**: `string`

Gets or sets the Id of the [MappedDiagnostic](MappedDiagnostic.md).

#### Defined in

src/types/Checkmate/ObjectModel/Engine/DiagnosticMappingSearch.ts:13

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
