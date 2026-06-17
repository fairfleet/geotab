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
- [includeSystemOnlyTemplates](ReportTemplateSearch.md#includesystemonlytemplates)
- [includeSystemTemplates](ReportTemplateSearch.md#includesystemtemplates)
- [includeUnSupportedTemplates](ReportTemplateSearch.md#includeunsupportedtemplates)
- [reportDataSources](ReportTemplateSearch.md#reportdatasources)
- [version](ReportTemplateSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeBinaryData

• **includeBinaryData**: `boolean`

Gets or sets include report Binary Data for this ReportTemplate.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts#L16)

___

### includeSystemOnlyTemplates

• **includeSystemOnlyTemplates**: `boolean`

Gets or sets whether to include only system templates in the search results.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts#L18)

___

### includeSystemTemplates

• **includeSystemTemplates**: `boolean`

Gets or sets whether to include system templates in the search results.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts#L20)

___

### includeUnSupportedTemplates

• **includeUnSupportedTemplates**: `boolean`

Gets or sets whether to include unsupported templates in the search results.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts#L22)

___

### reportDataSources

• **reportDataSources**: [`ReportDataSource`](../README.md#reportdatasource)[]

Gets or sets search for ReportTemplates with these ReportDataSources.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ReportTemplateSearch.ts#L24)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
