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
- [id](ReportStorage.md#id)
- [reportDateRange](ReportStorage.md#reportdaterange)
- [reportName](ReportStorage.md#reportname)
- [reportType](ReportStorage.md#reporttype)
- [version](ReportStorage.md#version)

## Properties

### binaryData

• **binaryData**: `number`[]

Gets or sets the excel binary data.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:11](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ReportStorage.ts#L11)

___

### creationDate

• **creationDate**: `Date`

Gets or sets a DateTime of when the report was generated.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:13](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ReportStorage.ts#L13)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### reportDateRange

• **reportDateRange**: [`DateRange`](DateRange.md)

Gets or sets the start of the reports date range.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ReportStorage.ts#L15)

___

### reportName

• **reportName**: `string`

Gets or sets the name of the report.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ReportStorage.ts#L17)

___

### reportType

• **reportType**: `string`

Gets or sets the type of the report.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorage.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ReportStorage.ts#L19)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
