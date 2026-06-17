[@fairfleet/geotab](../README.md) / CustomReportScheduleSearch

# Interface: CustomReportScheduleSearch

The object used to specify the arguments when searching for [CustomReportSchedule](CustomReportSchedule.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`CustomReportScheduleSearch`**

## Table of contents

### Properties

- [groups](CustomReportScheduleSearch.md#groups)
- [id](CustomReportScheduleSearch.md#id)
- [includeTemplateDetails](CustomReportScheduleSearch.md#includetemplatedetails)
- [isActive](CustomReportScheduleSearch.md#isactive)
- [maxId](CustomReportScheduleSearch.md#maxid)
- [reportDataSource](CustomReportScheduleSearch.md#reportdatasource)
- [reportDestination](CustomReportScheduleSearch.md#reportdestination)
- [templatesFilter](CustomReportScheduleSearch.md#templatesfilter)
- [userSearch](CustomReportScheduleSearch.md#usersearch)
- [version](CustomReportScheduleSearch.md#version)
- [visibleReportOnly](CustomReportScheduleSearch.md#visiblereportonly)

## Properties

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for CustomReportSchedule that are members of these [GroupSearch](GroupSearch.md)(s) one of
 it's children or one of it's parents. Available GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts#L19)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeTemplateDetails

• **includeTemplateDetails**: `boolean`

Gets or sets a value indicating whether to include template details.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts#L21)

___

### isActive

• **isActive**: `boolean`

Gets or sets the isActive of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts#L23)

___

### maxId

• **maxId**: `string`

Gets or sets the maxId of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts#L25)

___

### reportDataSource

• **reportDataSource**: [`ReportDataSource`](../README.md#reportdatasource)

Gets or sets the Report Data Source of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts#L27)

___

### reportDestination

• **reportDestination**: [`ReportDestination`](../README.md#reportdestination)

Gets or sets the Report Destination of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts#L29)

___

### templatesFilter

• **templatesFilter**: [`ReportTemplate`](ReportTemplate.md)[]

Gets or sets the templatesFilter of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts#L31)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets the User of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts#L33)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### visibleReportOnly

• **visibleReportOnly**: `boolean`

Gets or sets a value indicating whether to show only report dropdown.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportScheduleSearch.ts#L35)
