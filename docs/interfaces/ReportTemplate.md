[@fairfleet/geotab](../README.md) / ReportTemplate

# Interface: ReportTemplate

ReportTemplate class represents a template for reports that is an Excel file.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`ReportTemplate`**

## Table of contents

### Properties

- [binaryData](ReportTemplate.md#binarydata)
- [description](ReportTemplate.md#description)
- [id](ReportTemplate.md#id)
- [isSystem](ReportTemplate.md#issystem)
- [name](ReportTemplate.md#name)
- [reportDataSource](ReportTemplate.md#reportdatasource)
- [reportExtensionType](ReportTemplate.md#reportextensiontype)
- [reportTemplateType](ReportTemplate.md#reporttemplatetype)
- [showReport](ReportTemplate.md#showreport)
- [tags](ReportTemplate.md#tags)

## Properties

### binaryData

• **binaryData**: `number`[]

Gets or sets the Excel binary data.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L14)

___

### description

• **description**: `string`

Gets or sets the description of the ReportTemplate.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L16)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isSystem

• **isSystem**: `boolean`

Gets or sets whether the ReportTemplate is System.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L18)

___

### name

• **name**: `string`

Gets or sets the name of this entity which identifies it and is used when displaying this entity.

#### Inherited from

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### reportDataSource

• **reportDataSource**: [`ReportDataSource`](../README.md#reportdatasource)

Gets or sets the [ReportDataSource](../README.md#reportdatasource).

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L20)

___

### reportExtensionType

• **reportExtensionType**: [`ReportExtensionType`](../README.md#reportextensiontype)

Gets or sets the [ReportExtensionType](../README.md#reportextensiontype).

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L22)

___

### reportTemplateType

• **reportTemplateType**: [`ReportTemplateType`](../README.md#reporttemplatetype)

Gets or sets the [ReportTemplateType](../README.md#reporttemplatetype).

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L24)

___

### showReport

• **showReport**: `boolean`

Gets or sets whether the ReportTemplate is shown in the report dropdowns.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L26)

___

### tags

• **tags**: [`ReportTag`](ReportTag.md)[]

Gets or sets the [ReportTag](ReportTag.md) list associated with the [ReportTemplate](ReportTemplate.md).

#### Defined in

[src/types/Checkmate/ObjectModel/ReportTemplate.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ReportTemplate.ts#L28)
