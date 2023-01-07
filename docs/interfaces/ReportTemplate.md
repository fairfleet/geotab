[@fairfleet/geotab](../README.md) / ReportTemplate

# Interface: ReportTemplate

ReportTemplate class represents a template for reports that is an Excel file.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`ReportTemplate`**

## Table of contents

### Properties

- [binaryData](ReportTemplate.md#binarydata)
- [id](ReportTemplate.md#id)
- [isSystem](ReportTemplate.md#issystem)
- [name](ReportTemplate.md#name)
- [reportDataSource](ReportTemplate.md#reportdatasource)
- [reportTemplateType](ReportTemplate.md#reporttemplatetype)
- [showReport](ReportTemplate.md#showreport)
- [signingInfo](ReportTemplate.md#signinginfo)

## Properties

### binaryData

• **binaryData**: `number`[]

Gets or sets the Excel binary data.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L13)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isSystem

• **isSystem**: `boolean`

Gets or sets whether the ReportTemplate is System.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L15)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### reportDataSource

• **reportDataSource**: [`ReportDataSource`](../README.md#reportdatasource)

Gets or sets the [ReportDataSource](../README.md#reportdatasource).

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L17)

___

### reportTemplateType

• **reportTemplateType**: [`ReportTemplateType`](../README.md#reporttemplatetype)

Gets or sets the [ReportTemplateType](../README.md#reporttemplatetype).

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L19)

___

### showReport

• **showReport**: `boolean`

Gets or sets whether the ReportTemplate is shown in the report dropdowns.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L21)

___

### signingInfo

• **signingInfo**: [`SigningInfo`](SigningInfo.md)

Gets or sets the ReportTemplate.SigningInfo.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:23](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L23)
