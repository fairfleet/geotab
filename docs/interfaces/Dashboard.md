[@fairfleet/geotab](../README.md) / Dashboard

# Interface: Dashboard

Dashboard class represents a single dashboard that has widgets and reports that are an Excel file, displayed on dashboard page.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`Dashboard`**

## Table of contents

### Properties

- [activeFrom](Dashboard.md#activefrom)
- [activeTo](Dashboard.md#activeto)
- [comment](Dashboard.md#comment)
- [id](Dashboard.md#id)
- [jsonDetails](Dashboard.md#jsondetails)
- [name](Dashboard.md#name)
- [owner](Dashboard.md#owner)
- [period](Dashboard.md#period)
- [rangeFrom](Dashboard.md#rangefrom)
- [rangeTo](Dashboard.md#rangeto)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets the date the dashboard is active from. Default [UtcNow].

#### Defined in

[src/types/Checkmate/ObjectModel/Dashboard.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Dashboard.ts#L12)

___

### activeTo

• **activeTo**: `Date`

Gets or sets the date the dashboard is active to. Default [MaxDate].

#### Defined in

[src/types/Checkmate/ObjectModel/Dashboard.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Dashboard.ts#L14)

___

### comment

• **comment**: `string`

Gets or sets the comment of the dashboard. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Dashboard.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Dashboard.ts#L16)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### jsonDetails

• **jsonDetails**: `string`

Gets or sets the details of the dashboard. The details are in json format. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Dashboard.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Dashboard.ts#L18)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### owner

• **owner**: [`User`](User.md)

Gets or sets the [User](User.md) who is the owner of the dashboard.

#### Defined in

[src/types/Checkmate/ObjectModel/Dashboard.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Dashboard.ts#L20)

___

### period

• **period**: [`ReportPeriod`](../README.md#reportperiod)

Gets or sets the [ReportPeriod](../README.md#reportperiod) of scheduled report.

#### Defined in

[src/types/Checkmate/ObjectModel/Dashboard.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Dashboard.ts#L22)

___

### rangeFrom

• **rangeFrom**: `Date`

Gets or sets the date from when the dashboard data starts.

#### Defined in

[src/types/Checkmate/ObjectModel/Dashboard.ts:24](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Dashboard.ts#L24)

___

### rangeTo

• **rangeTo**: `Date`

Gets or sets the date to when the dashboard data ends.

#### Defined in

[src/types/Checkmate/ObjectModel/Dashboard.ts:26](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Dashboard.ts#L26)
