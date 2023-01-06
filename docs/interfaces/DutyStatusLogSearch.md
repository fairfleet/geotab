[@fairfleet/geotab](../README.md) / DutyStatusLogSearch

# Interface: DutyStatusLogSearch

The object used to specify the arguments when searching for [DutyStatusLog](DutyStatusLog.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DutyStatusLogSearch`**

## Table of contents

### Properties

- [deviceSearch](DutyStatusLogSearch.md#devicesearch)
- [fromDate](DutyStatusLogSearch.md#fromdate)
- [id](DutyStatusLogSearch.md#id)
- [includeBoundaryLogs](DutyStatusLogSearch.md#includeboundarylogs)
- [includeCompliance](DutyStatusLogSearch.md#includecompliance)
- [includeLocations](DutyStatusLogSearch.md#includelocations)
- [includeModifications](DutyStatusLogSearch.md#includemodifications)
- [malfunction](DutyStatusLogSearch.md#malfunction)
- [maxVersion](DutyStatusLogSearch.md#maxversion)
- [minVersion](DutyStatusLogSearch.md#minversion)
- [origin](DutyStatusLogSearch.md#origin)
- [propertySelector](DutyStatusLogSearch.md#propertyselector)
- [statuses](DutyStatusLogSearch.md#statuses)
- [toDate](DutyStatusLogSearch.md#todate)
- [userSearch](DutyStatusLogSearch.md#usersearch)
- [version](DutyStatusLogSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any DutyStatusLogs that are assigned to that Device.
 Providing the Groups will search for DutyStatusLogs for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

**`Remarks`**

UserSearch is always applied first if both DeviceSearch and UserSearch are provided.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:25](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L25)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for DutyStatusLogs that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:27](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L27)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### includeBoundaryLogs

• **includeBoundaryLogs**: `boolean`

Gets or sets search for DutyStatusLogs and include boundary logs outside the from and to dates
 (for example, the log immediately preceding the from date).

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:32](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L32)

___

### includeCompliance

• **includeCompliance**: `boolean`

Gets or sets search for DutyStatusLogs and include compliance properties (e.g. Odometer, EngineHours).

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:34](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L34)

___

### includeLocations

• **includeLocations**: `boolean`

Gets or sets whether to populate locations for DutyStatusLogs. This can be expensive.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:36](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L36)

___

### includeModifications

• **includeModifications**: `boolean`

Gets or sets include modification history of the [DutyStatusLog](DutyStatusLog.md) results.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:38](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L38)

___

### malfunction

• **malfunction**: [`DutyStatusMalfunctionTypes`](../README.md#dutystatusmalfunctiontypes)[]

Gets or sets search for DutyStatusLogs based on [DutyStatusMalfunctionTypes](../README.md#dutystatusmalfunctiontypes).

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:40](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L40)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets search for [DutyStatusLog](DutyStatusLog.md)s with a maximum of this version.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:42](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L42)

___

### minVersion

• **minVersion**: `number`

Gets or sets search for [DutyStatusLog](DutyStatusLog.md)s with a minimum of this version.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:44](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L44)

___

### origin

• **origin**: [`DutyStatusOrigin`](../README.md#dutystatusorigin)[]

Gets or sets search for DutyStatusLogs based on [DutyStatusOrigin](../README.md#dutystatusorigin).

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:46](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L46)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### statuses

• **statuses**: [`DutyStatusLogType`](../README.md#dutystatuslogtype)[]

Gets or sets search for DutyStatusLogs with the provided [DutyStatusLogType](../README.md#dutystatuslogtype)s.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:48](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L48)

___

### toDate

• **toDate**: `Date`

Gets or sets search for DutyStatusLogs that were recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:50](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L50)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for DutyStatusLogs with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item><item><description>GroupSearch</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:56](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L56)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
