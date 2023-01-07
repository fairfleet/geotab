[@fairfleet/geotab](../README.md) / ReportTemplateSearch

# Interface: ReportTemplateSearch

The object used to specify the arguments when searching for
 [ReportTemplate](ReportTemplate.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ReportTemplateSearch`**

## Table of contents

### Properties

- [id](ReportTemplateSearch.md#id)
- [includeBinaryData](ReportTemplateSearch.md#includebinarydata)
- [reportDataSource](ReportTemplateSearch.md#reportdatasource)
- [version](ReportTemplateSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeBinaryData

• **includeBinaryData**: `boolean`

Gets or sets include report Binary Data for this ReportTemplate.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts#L16)

___

### reportDataSource

• **reportDataSource**: [`ReportDataSource`](../README.md#reportdatasource)

Gets or sets search for a ReportTemplate with this ReportDataSource.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts#L18)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
