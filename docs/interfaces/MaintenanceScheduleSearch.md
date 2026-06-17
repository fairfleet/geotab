[@fairfleet/geotab](../README.md) / MaintenanceScheduleSearch

# Interface: MaintenanceScheduleSearch

The object used to specify the
 arguments when searching for [MaintenanceSchedule](MaintenanceSchedule.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`MaintenanceScheduleSearch`**

## Table of contents

### Properties

- [active](MaintenanceScheduleSearch.md#active)
- [days](MaintenanceScheduleSearch.md#days)
- [deviceSearch](MaintenanceScheduleSearch.md#devicesearch)
- [engineHours](MaintenanceScheduleSearch.md#enginehours)
- [eventTypeId](MaintenanceScheduleSearch.md#eventtypeid)
- [eventTypeIds](MaintenanceScheduleSearch.md#eventtypeids)
- [eventTypeSearch](MaintenanceScheduleSearch.md#eventtypesearch)
- [groupFilterCondition](MaintenanceScheduleSearch.md#groupfiltercondition)
- [groups](MaintenanceScheduleSearch.md#groups)
- [id](MaintenanceScheduleSearch.md#id)
- [includeDeleted](MaintenanceScheduleSearch.md#includedeleted)
- [includeGroups](MaintenanceScheduleSearch.md#includegroups)
- [includeWorkRequestCount](MaintenanceScheduleSearch.md#includeworkrequestcount)
- [kilometers](MaintenanceScheduleSearch.md#kilometers)
- [months](MaintenanceScheduleSearch.md#months)
- [name](MaintenanceScheduleSearch.md#name)
- [nameOrLabels](MaintenanceScheduleSearch.md#nameorlabels)
- [nonRepeating](MaintenanceScheduleSearch.md#nonrepeating)
- [repeats](MaintenanceScheduleSearch.md#repeats)
- [scheduleIds](MaintenanceScheduleSearch.md#scheduleids)
- [source](MaintenanceScheduleSearch.md#source)
- [version](MaintenanceScheduleSearch.md#version)
- [weeks](MaintenanceScheduleSearch.md#weeks)

## Properties

### active

• **active**: `boolean`

Gets or sets search for all Active [MaintenanceSchedule](MaintenanceSchedule.md).

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L20)

___

### days

• **days**: `boolean`

Gets or sets a value indicating whether to filter for EventRules that have the days recurrence field populated.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L22)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [MaintenanceSchedule](MaintenanceSchedule.md)s matching this
 MaintenanceScheduleSearch.DeviceSearch. Used to filter devices when calculating work request counts.
 Available DeviceSearch options are:.
 <list><item><description>FromDate</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L29)

___

### engineHours

• **engineHours**: `boolean`

Gets or sets a value indicating whether to filter for EventRules that are set to not generate recurring events.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L31)

___

### eventTypeId

• **eventTypeId**: `string`

Gets or sets a value indicating whether to filter for EventRules by the event type id.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L33)

___

### eventTypeIds

• **eventTypeIds**: `string`[]

Gets or sets a value indicating a list of [EventType](EventType.md) Id-s to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L35)

___

### eventTypeSearch

• **eventTypeSearch**: [`EventTypeSearch`](EventTypeSearch.md)

Gets or sets the MaintenanceScheduleSearch.EventTypeSearch to search for [MaintenanceSchedule](MaintenanceSchedule.md) by.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L37)

___

### groupFilterCondition

• **groupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets the groups to find the event rules belonging to parents or children of the groups using and/or relationship.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L39)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Event Rules that are members of these [GroupSearch](GroupSearch.md)(s) one of
 it's children or one of it's parents.
 Available GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L46)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeDeleted

• **includeDeleted**: `boolean`

Gets or sets a value indicating whether search includes records that have the dtDeleted column set

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L48)

___

### includeGroups

• **includeGroups**: [`IncludeGroups`](../README.md#includegroups)

Gets or sets a value indicating how to filter on Group.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L50)

___

### includeWorkRequestCount

• **includeWorkRequestCount**: `boolean`

Gets or sets a value indicating whether to include vehicle work request count for the returned schedules.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L52)

___

### kilometers

• **kilometers**: `boolean`

Gets or sets a value indicating whether to filter for EventRules that have the kilometers recurrence field populated.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L54)

___

### months

• **months**: `boolean`

Gets or sets a value indicating whether to filter for EventRules that have the months recurrence field populated.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L56)

___

### name

• **name**: `string`

Gets or sets search for all [MaintenanceSchedule](MaintenanceSchedule.md) matching this Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L58)

___

### nameOrLabels

• **nameOrLabels**: `string`

Gets or sets search for all [MaintenanceSchedule](MaintenanceSchedule.md) matching this Name or in their labelds. Wildcard can be used by prepending/appending "%" to string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:60](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L60)

___

### nonRepeating

• **nonRepeating**: `boolean`

Gets or sets a value indicating whether to filter for EventRules that have the datetime one-off field populated.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:62](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L62)

___

### repeats

• **repeats**: `boolean`

Gets or sets a value indicating whether to filter for EventRules that are set to generate recurring events.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:64](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L64)

___

### scheduleIds

• **scheduleIds**: `string`[]

Gets or sets search for Schedules with these unique Id(s). Not Supported
 for searching for schedules, only for [MaintenanceWorkRequest](MaintenanceWorkRequest.md).

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:69](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L69)

___

### source

• **source**: `string`

Gets or sets search for all [MaintenanceSchedule](MaintenanceSchedule.md) matching this Source.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:71](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L71)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### weeks

• **weeks**: `boolean`

Gets or sets a value indicating whether to filter for EventRules that have the weeks recurrence field populated.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts:73](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceScheduleSearch.ts#L73)
