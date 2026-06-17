[@fairfleet/geotab](../README.md) / MaintenanceWorkOrderSearch

# Interface: MaintenanceWorkOrderSearch

The object used to specify the arguments when searching for [MaintenanceWorkOrder](MaintenanceWorkOrder.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`MaintenanceWorkOrderSearch`**

## Table of contents

### Properties

- [createdDatePeriod](MaintenanceWorkOrderSearch.md#createddateperiod)
- [deviceSearch](MaintenanceWorkOrderSearch.md#devicesearch)
- [fromDateCreated](MaintenanceWorkOrderSearch.md#fromdatecreated)
- [fromUpdatedDate](MaintenanceWorkOrderSearch.md#fromupdateddate)
- [id](MaintenanceWorkOrderSearch.md#id)
- [includeDeleted](MaintenanceWorkOrderSearch.md#includedeleted)
- [includeDraft](MaintenanceWorkOrderSearch.md#includedraft)
- [priorities](MaintenanceWorkOrderSearch.md#priorities)
- [reference](MaintenanceWorkOrderSearch.md#reference)
- [references](MaintenanceWorkOrderSearch.md#references)
- [statuses](MaintenanceWorkOrderSearch.md#statuses)
- [toDateCreated](MaintenanceWorkOrderSearch.md#todatecreated)
- [version](MaintenanceWorkOrderSearch.md#version)

## Properties

### createdDatePeriod

• **createdDatePeriod**: [`ReportPeriod`](../README.md#reportperiod)

Gets or sets the period for created date filtering.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts#L12)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [MaintenanceWorkOrder](MaintenanceWorkOrder.md)s matching this
 [DeviceSearch](DeviceSearch.md).
 Providing a device ID will search for any MaintenanceWorkOrder that are assigned to that Device.
 Providing the DeviceIds will search for MaintenanceWorkOrder that are assigned to those Devices.
 Providing the Groups will search for MaintenanceWorkOrder for that have Devices in that group.
 Providing the Name will search for MaintenanceWorkOrder that have Devices with that name.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>DeviceIds</description></item><item><description>Groups</description></item><item><description>Name</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts#L23)

___

### fromDateCreated

• **fromDateCreated**: `Date`

Gets or sets search for [MaintenanceWorkOrder](MaintenanceWorkOrder.md)s created at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts#L25)

___

### fromUpdatedDate

• **fromUpdatedDate**: `Date`

Gets or sets search for [MaintenanceWorkOrder](MaintenanceWorkOrder.md)s updated at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts#L27)

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

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts#L29)

___

### includeDraft

• **includeDraft**: `boolean`

Gets or sets a value indicating whether to include work orders with Draft status in search results.
 Draft work orders are excluded by default. Set to true to include them.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts#L34)

___

### priorities

• **priorities**: `string`[]

Gets or sets the list of priorities to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts#L36)

___

### reference

• **reference**: `string`

Gets or sets search for [MaintenanceWorkOrder](MaintenanceWorkOrder.md)s reference.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts#L38)

___

### references

• **references**: `string`[]

Gets or sets search for [MaintenanceWorkOrder](MaintenanceWorkOrder.md)s references.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts#L40)

___

### statuses

• **statuses**: `number`[]

Gets or sets the list of statuses to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts#L42)

___

### toDateCreated

• **toDateCreated**: `Date`

Gets or sets search for [MaintenanceWorkOrder](MaintenanceWorkOrder.md)s created at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderSearch.ts#L44)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
