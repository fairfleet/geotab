[@fairfleet/geotab](../README.md) / DiagnosticDataSearch

# Interface: DiagnosticDataSearch

The object used to specify the
 arguments when searching for [DiagnosticData](DiagnosticData.md).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DiagnosticDataSearch`**

## Table of contents

### Properties

- [deviceSearch](DiagnosticDataSearch.md#devicesearch)
- [diagnosticSearch](DiagnosticDataSearch.md#diagnosticsearch)
- [fromDate](DiagnosticDataSearch.md#fromdate)
- [id](DiagnosticDataSearch.md#id)
- [timeSeriesId](DiagnosticDataSearch.md#timeseriesid)
- [toDate](DiagnosticDataSearch.md#todate)
- [version](DiagnosticDataSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the device to filter by.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticDataSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticDataSearch.ts#L17)

___

### diagnosticSearch

• **diagnosticSearch**: [`DiagnosticSearch`](DiagnosticSearch.md)

Gets or sets the diagnostic to filter by.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticDataSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticDataSearch.ts#L19)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the start date for history queries.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticDataSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticDataSearch.ts#L21)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### timeSeriesId

• **timeSeriesId**: `number`

Gets or sets the optional time series ID filter.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticDataSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticDataSearch.ts#L23)

___

### toDate

• **toDate**: `Date`

Gets or sets the end date for history queries.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticDataSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticDataSearch.ts#L25)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
