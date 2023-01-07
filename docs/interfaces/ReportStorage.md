[@fairfleet/geotab](../README.md) / ReportStorage

# Interface: ReportStorage

Stores the binary data for a generate excel report.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`ReportStorage`**

## Table of contents

### Properties

- [binaryData](ReportStorage.md#binarydata)
- [creationDate](ReportStorage.md#creationdate)
- [dashboardInstance](ReportStorage.md#dashboardinstance)
- [expiry](ReportStorage.md#expiry)
- [id](ReportStorage.md#id)
- [lastUpdated](ReportStorage.md#lastupdated)
- [reportDateRange](ReportStorage.md#reportdaterange)
- [reportName](ReportStorage.md#reportname)
- [reportSource](ReportStorage.md#reportsource)
- [reportType](ReportStorage.md#reporttype)
- [size](ReportStorage.md#size)
- [status](ReportStorage.md#status)
- [version](ReportStorage.md#version)

## Properties

### binaryData

• **binaryData**: `number`[]

Gets or sets the excel binary data.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportStorage.ts#L13)

___

### creationDate

• **creationDate**: `Date`

Gets or sets a DateTime of when the report was generated.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportStorage.ts#L15)

___

### dashboardInstance

• **dashboardInstance**: `any`

Gets or sets the dashboard instance of the drop down report request.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportStorage.ts#L17)

___

### expiry

• **expiry**: `Date`

Gets or sets the expiry date of the report in the storage.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportStorage.ts#L19)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lastUpdated

• **lastUpdated**: `Date`

Gets or sets the datetime when the report was known to be processing or finished processing.
 This property is updated periodically like a heart beat when a report is getting processed by the service.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportStorage.ts#L24)

___

### reportDateRange

• **reportDateRange**: [`DateRange`](DateRange.md)

Gets or sets the reports date range.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportStorage.ts#L26)

___

### reportName

• **reportName**: `string`

Gets or sets the name of the report.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportStorage.ts#L28)

___

### reportSource

• **reportSource**: [`ReportDestination`](../README.md#reportdestination)

Gets or sets the source of the report whether it's dropdown or email [ReportDestination](../README.md#reportdestination).

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:30](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportStorage.ts#L30)

___

### reportType

• **reportType**: `string`

Gets or sets the type of the report whether it's pdf or excel.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:32](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportStorage.ts#L32)

___

### size

• **size**: `number`

Gets or sets the size (bytes) of the report.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:34](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportStorage.ts#L34)

___

### status

• **status**: [`ReportProcessingStatus`](../README.md#reportprocessingstatus)

Gets or sets the current status of the report which is being prepared, completed or failed [ReportProcessingStatus](../README.md#reportprocessingstatus).

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:36](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportStorage.ts#L36)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
