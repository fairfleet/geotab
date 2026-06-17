[@fairfleet/geotab](../README.md) / MaintenanceWorkOrderJobSearch

# Interface: MaintenanceWorkOrderJobSearch

The object used to specify the arguments when searching for [MaintenanceWorkOrderJob](MaintenanceWorkOrderJob.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`MaintenanceWorkOrderJobSearch`**

## Table of contents

### Properties

- [completedDatePeriod](MaintenanceWorkOrderJobSearch.md#completeddateperiod)
- [deviceSearch](MaintenanceWorkOrderJobSearch.md#devicesearch)
- [fromDate](MaintenanceWorkOrderJobSearch.md#fromdate)
- [fromDateCompleted](MaintenanceWorkOrderJobSearch.md#fromdatecompleted)
- [fromDateStarted](MaintenanceWorkOrderJobSearch.md#fromdatestarted)
- [id](MaintenanceWorkOrderJobSearch.md#id)
- [includeDeleted](MaintenanceWorkOrderJobSearch.md#includedeleted)
- [maintenanceTypeSearch](MaintenanceWorkOrderJobSearch.md#maintenancetypesearch)
- [scheduleSearch](MaintenanceWorkOrderJobSearch.md#schedulesearch)
- [sources](MaintenanceWorkOrderJobSearch.md#sources)
- [startedDatePeriod](MaintenanceWorkOrderJobSearch.md#starteddateperiod)
- [statuses](MaintenanceWorkOrderJobSearch.md#statuses)
- [toDateCompleted](MaintenanceWorkOrderJobSearch.md#todatecompleted)
- [toDateStarted](MaintenanceWorkOrderJobSearch.md#todatestarted)
- [version](MaintenanceWorkOrderJobSearch.md#version)
- [withWorkOrder](MaintenanceWorkOrderJobSearch.md#withworkorder)
- [workOrderId](MaintenanceWorkOrderJobSearch.md#workorderid)

## Properties

### completedDatePeriod

• **completedDatePeriod**: [`ReportPeriod`](../README.md#reportperiod)

Gets or sets the period for completed date filtering.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L14)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [MaintenanceWorkOrderJob](MaintenanceWorkOrderJob.md)s matching this
 [DeviceSearch](DeviceSearch.md).
 Providing a device ID will search for any MaintenanceWorkOrderJob that are assigned to that Device.
 Providing the DeviceIds will search for MaintenanceWorkOrderJob that are assigned to those Devices.
 Providing the Groups will search for MaintenanceWorkOrderJob for that have Devices in that group.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>DeviceIds</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L24)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for [MaintenanceWorkOrderJob](MaintenanceWorkOrderJob.md)s updated at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L26)

___

### fromDateCompleted

• **fromDateCompleted**: `Date`

Gets or sets search for [MaintenanceWorkOrderJob](MaintenanceWorkOrderJob.md)s completed at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L28)

___

### fromDateStarted

• **fromDateStarted**: `Date`

Gets or sets search for [MaintenanceWorkOrderJob](MaintenanceWorkOrderJob.md)s started at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L30)

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

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L32)

___

### maintenanceTypeSearch

• **maintenanceTypeSearch**: [`EventTypeSearch`](EventTypeSearch.md)

Gets or sets search for Work Jobs matching this
 [EventTypeSearch](EventTypeSearch.md).
 Available EventTypeSearch options are:.
 <list><item><description>Ids</description></item><item><description>Labels</description></item><item><description>DefectSearch</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L39)

___

### scheduleSearch

• **scheduleSearch**: [`MaintenanceScheduleSearch`](MaintenanceScheduleSearch.md)

Gets or sets search for [MaintenanceWorkOrderJob](MaintenanceWorkOrderJob.md)s matching this
 [MaintenanceScheduleSearch](MaintenanceScheduleSearch.md). Providing a schedule id will
 search for any MaintenanceWorkOrderJob that are assigned to that Schedule.
 Available ScheduleSearch options are:
 <list><item><description>Id</description></item><item><description>ScheduleIds</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L47)

___

### sources

• **sources**: `string`[]

Gets or sets the list of sources to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L49)

___

### startedDatePeriod

• **startedDatePeriod**: [`ReportPeriod`](../README.md#reportperiod)

Gets or sets the period for started date filtering.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L51)

___

### statuses

• **statuses**: `number`[]

Gets or sets the list of statuses to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:53](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L53)

___

### toDateCompleted

• **toDateCompleted**: `Date`

Gets or sets search for [MaintenanceWorkOrderJob](MaintenanceWorkOrderJob.md)s completed at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:55](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L55)

___

### toDateStarted

• **toDateStarted**: `Date`

Gets or sets search for [MaintenanceWorkOrderJob](MaintenanceWorkOrderJob.md)s started at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:57](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L57)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### withWorkOrder

• **withWorkOrder**: `boolean`

Gets or sets search for [MaintenanceWorkOrderJob](MaintenanceWorkOrderJob.md)s that belong or not to an order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:59](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L59)

___

### workOrderId

• **workOrderId**: `string`

Gets or sets search for [MaintenanceWorkOrderJob](MaintenanceWorkOrderJob.md)s linked to the [MaintenanceWorkOrder](MaintenanceWorkOrder.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts:61](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJobSearch.ts#L61)
