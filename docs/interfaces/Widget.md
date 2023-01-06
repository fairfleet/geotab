[@fairfleet/geotab](../README.md) / Widget

# Interface: Widget

Widget class represents a single widget that is a part of dashboard displayed on dashboard page.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`Widget`**

## Table of contents

### Properties

- [activeFrom](Widget.md#activefrom)
- [activeTo](Widget.md#activeto)
- [id](Widget.md#id)
- [jsonDetails](Widget.md#jsondetails)
- [name](Widget.md#name)
- [owner](Widget.md#owner)
- [period](Widget.md#period)
- [type](Widget.md#type)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets the date the widget is active from. Default [UtcNow].

#### Defined in

[src/types/Checkmate/ObjectModel/Widget.ts:13](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Widget.ts#L13)

___

### activeTo

• **activeTo**: `Date`

Gets or sets the date the widget is active to. Default [MaxDate].

#### Defined in

[src/types/Checkmate/ObjectModel/Widget.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Widget.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### jsonDetails

• **jsonDetails**: `string`

Gets or sets the details of the widget. The details are in json format. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Widget.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Widget.ts#L17)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### owner

• **owner**: [`User`](User.md)

Gets or sets the [User](User.md) who created the widget.

#### Defined in

[src/types/Checkmate/ObjectModel/Widget.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Widget.ts#L19)

___

### period

• **period**: [`ReportPeriod`](../README.md#reportperiod)

Gets or sets the [ReportPeriod](../README.md#reportperiod) of scheduled report.

#### Defined in

[src/types/Checkmate/ObjectModel/Widget.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Widget.ts#L21)

___

### type

• **type**: [`WidgetType`](../README.md#widgettype)

Gets or sets the widget type.

#### Defined in

[src/types/Checkmate/ObjectModel/Widget.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Widget.ts#L23)
