[@fairfleet/geotab](../README.md) / MaintenanceWorkRequestSearch

# Interface: MaintenanceWorkRequestSearch

The object used to specify the arguments when searching for [MaintenanceWorkRequest](MaintenanceWorkRequest.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`MaintenanceWorkRequestSearch`**

## Table of contents

### Properties

- [deviceSearch](MaintenanceWorkRequestSearch.md#devicesearch)
- [dueCriteriaSearch](MaintenanceWorkRequestSearch.md#duecriteriasearch)
- [fromDate](MaintenanceWorkRequestSearch.md#fromdate)
- [id](MaintenanceWorkRequestSearch.md#id)
- [includeDeleted](MaintenanceWorkRequestSearch.md#includedeleted)
- [isOverdue](MaintenanceWorkRequestSearch.md#isoverdue)
- [isReviewed](MaintenanceWorkRequestSearch.md#isreviewed)
- [isSnoozed](MaintenanceWorkRequestSearch.md#issnoozed)
- [isVisible](MaintenanceWorkRequestSearch.md#isvisible)
- [maintenanceTypeSearch](MaintenanceWorkRequestSearch.md#maintenancetypesearch)
- [scheduleSearch](MaintenanceWorkRequestSearch.md#schedulesearch)
- [severities](MaintenanceWorkRequestSearch.md#severities)
- [sources](MaintenanceWorkRequestSearch.md#sources)
- [version](MaintenanceWorkRequestSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [MaintenanceWorkRequest](MaintenanceWorkRequest.md)s matching this
 [DeviceSearch](DeviceSearch.md). Providing a device ID will
 search for any MaintenanceWorkRequest that are assigned to that Device.
 Providing the Groups will search for MaintenanceWorkRequest for that have Devices in that group.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>DeviceIds</description></item><item><description>Groups</description></item><item><description>GroupFilterCondition</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts#L22)

___

### dueCriteriaSearch

• **dueCriteriaSearch**: [`DueCriteriaSearch`](DueCriteriaSearch.md)

Gets or sets search for Work Requests based on due-related parameters.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts#L24)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for [MaintenanceWorkRequest](MaintenanceWorkRequest.md)s updated at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts#L26)

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

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts#L28)

___

### isOverdue

• **isOverdue**: `boolean`

Gets or sets whether the [MaintenanceWorkRequest](MaintenanceWorkRequest.md)s are overdue or not.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts#L30)

___

### isReviewed

• **isReviewed**: `boolean`

Gets or sets whether the [MaintenanceWorkRequest](MaintenanceWorkRequest.md)s are reviewed or not.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts#L32)

___

### isSnoozed

• **isSnoozed**: `boolean`

Gets or sets whether the [MaintenanceWorkRequest](MaintenanceWorkRequest.md)s are snoozed or not.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts#L34)

___

### isVisible

• **isVisible**: `boolean`

Gets or sets whether the [MaintenanceWorkRequest](MaintenanceWorkRequest.md)s are visible or not.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts#L36)

___

### maintenanceTypeSearch

• **maintenanceTypeSearch**: [`EventTypeSearch`](EventTypeSearch.md)

Gets or sets search for Work Requests matching this
 [EventTypeSearch](EventTypeSearch.md).
 Available EventTypeSearch options are:.
 <list><item><description>Ids</description></item><item><description>Labels</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts#L43)

___

### scheduleSearch

• **scheduleSearch**: [`MaintenanceScheduleSearch`](MaintenanceScheduleSearch.md)

Gets or sets search for [MaintenanceWorkRequest](MaintenanceWorkRequest.md)s matching this
 [MaintenanceScheduleSearch](MaintenanceScheduleSearch.md). Providing a schedule id will
 search for any MaintenanceWorkRequest that are assigned to that Schedule.
 Available ScheduleSearch options are:
 <list><item><description>Id</description></item><item><description>ScheduleIds</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts#L51)

___

### severities

• **severities**: [`MaintenanceSeverity`](../README.md#maintenanceseverity)[]

Gets or sets the list of severities to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts:53](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts#L53)

___

### sources

• **sources**: `string`[]

Gets or sets the list of sources to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts:55](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequestSearch.ts#L55)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
