[@fairfleet/geotab](../README.md) / CustomReportSchedule

# Interface: CustomReportSchedule

Used to represent the schedule for emailed reports and dashboard graphic elements.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`CustomReportSchedule`**

## Table of contents

### Properties

- [arguments](CustomReportSchedule.md#arguments)
- [argumentsJsonText](CustomReportSchedule.md#argumentsjsontext)
- [description](CustomReportSchedule.md#description)
- [destination](CustomReportSchedule.md#destination)
- [frequency](CustomReportSchedule.md#frequency)
- [groups](CustomReportSchedule.md#groups)
- [id](CustomReportSchedule.md#id)
- [includeAllChildrenGroups](CustomReportSchedule.md#includeallchildrengroups)
- [includeDirectChildrenOnlyGroups](CustomReportSchedule.md#includedirectchildrenonlygroups)
- [individualRecipients](CustomReportSchedule.md#individualrecipients)
- [interactiveSettings](CustomReportSchedule.md#interactivesettings)
- [isActive](CustomReportSchedule.md#isactive)
- [lastModifiedUser](CustomReportSchedule.md#lastmodifieduser)
- [lastRun](CustomReportSchedule.md#lastrun)
- [lastUpdated](CustomReportSchedule.md#lastupdated)
- [name](CustomReportSchedule.md#name)
- [nullifyScopeGroupFilter](CustomReportSchedule.md#nullifyscopegroupfilter)
- [period](CustomReportSchedule.md#period)
- [scopeGroupFilter](CustomReportSchedule.md#scopegroupfilter)
- [scopeGroups](CustomReportSchedule.md#scopegroups)
- [template](CustomReportSchedule.md#template)

## Properties

### arguments

• **arguments**: [`ReportTypedArgument`](ReportTypedArgument.md)

Gets or sets the arguments of scheduled report.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L18)

___

### argumentsJsonText

• **argumentsJsonText**: `string`

Gets or sets argument of the report represented in Json formatted text.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L20)

___

### description

• **description**: `string`

Gets or sets the description of the report schedule.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L22)

___

### destination

• **destination**: [`ReportDestination`](../README.md#reportdestination)

Gets or sets the [ReportDestination](../README.md#reportdestination) (email or dashboard) of scheduled report.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L24)

___

### frequency

• **frequency**: [`ReportFrequency`](../README.md#reportfrequency)

Gets or sets the frequency of scheduled report.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L26)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets the [Group](Group.md)(s) collection.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L28)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### includeAllChildrenGroups

• **includeAllChildrenGroups**: [`Group`](Group.md)[]

Gets or sets [Group](Group.md)(s) that define the groups that dashboard/email to be sent to all users under it.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L30)

___

### includeDirectChildrenOnlyGroups

• **includeDirectChildrenOnlyGroups**: [`Group`](Group.md)[]

Gets or sets [Group](Group.md)(s) that the groups that dashboard/email to be sent to direct users under it.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L32)

___

### individualRecipients

• **individualRecipients**: [`User`](User.md)[]

Gets or sets the individually added [User](User.md)(s) as the dashboard/email recipients.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L34)

___

### interactiveSettings

• **interactiveSettings**: `string`

Gets or sets interactive dashboard settings of scheduled report.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L36)

___

### isActive

• **isActive**: `boolean`

Gets or sets a value indicating whether weather the scheduled report is active or not.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L38)

___

### lastModifiedUser

• **lastModifiedUser**: [`User`](User.md)

Gets or sets the last modified user.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L40)

___

### lastRun

• **lastRun**: `Date`

Gets or sets the date of the last run of the scheduled report.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L42)

___

### lastUpdated

• **lastUpdated**: `Date`

Gets or sets the last updated time.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L44)

___

### name

• **name**: `string`

Gets or sets the name of this entity which identifies it and is used when displaying this entity.

#### Inherited from

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### nullifyScopeGroupFilter

• **nullifyScopeGroupFilter**: `boolean`

Gets or sets a value to nullify ScopeGroupFilter.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L46)

___

### period

• **period**: [`ReportPeriod`](../README.md#reportperiod)

Gets or sets the [ReportPeriod](../README.md#reportperiod) of scheduled report.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L48)

___

### scopeGroupFilter

• **scopeGroupFilter**: [`GroupFilter`](GroupFilter.md)

Gets or sets [GroupFilter](GroupFilter.md)(s) that define data scope group filter of the report schedule.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L50)

___

### scopeGroups

• **scopeGroups**: [`Group`](Group.md)[]

Gets or sets [Group](Group.md)(s) that define data scope of the report schedule.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L52)

___

### template

• **template**: [`ReportTemplate`](ReportTemplate.md)

Gets or sets the [ReportTemplate](ReportTemplate.md) of scheduled report.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomReportSchedule.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CustomReportSchedule.ts#L54)
