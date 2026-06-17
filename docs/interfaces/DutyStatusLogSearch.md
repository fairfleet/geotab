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
- [onlyDriverDiagnosticsMalfunctions](DutyStatusLogSearch.md#onlydriverdiagnosticsmalfunctions)
- [origin](DutyStatusLogSearch.md#origin)
- [states](DutyStatusLogSearch.md#states)
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

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L26)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for DutyStatusLogs that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L28)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeBoundaryLogs

• **includeBoundaryLogs**: `boolean`

Gets or sets search for DutyStatusLogs and include boundary logs outside the from and to dates
 (for example, the log immediately preceding the from date).

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L33)

___

### includeCompliance

• **includeCompliance**: `boolean`

Gets or sets search for DutyStatusLogs and include compliance properties (e.g. Odometer, EngineHours).

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L35)

___

### includeLocations

• **includeLocations**: `boolean`

Gets or sets whether to populate locations for DutyStatusLogs. This can be expensive.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L37)

___

### includeModifications

• **includeModifications**: `boolean`

Gets or sets include modification history of the [DutyStatusLog](DutyStatusLog.md) results.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L39)

___

### malfunction

• **malfunction**: [`DutyStatusMalfunctionTypes`](../README.md#dutystatusmalfunctiontypes)[]

Gets or sets search for DutyStatusLogs based on [DutyStatusMalfunctionTypes](../README.md#dutystatusmalfunctiontypes).

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L41)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets search for [DutyStatusLog](DutyStatusLog.md)s with a maximum of this version.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L43)

___

### minVersion

• **minVersion**: `number`

Gets or sets search for [DutyStatusLog](DutyStatusLog.md)s with a minimum of this version.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L45)

___

### onlyDriverDiagnosticsMalfunctions

• **onlyDriverDiagnosticsMalfunctions**: `boolean`

Gets or sets search for DutyStatusLogs for only the driver's malfunction/diagnostic logs.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L47)

___

### origin

• **origin**: [`DutyStatusOrigin`](../README.md#dutystatusorigin)[]

Gets or sets search for DutyStatusLogs based on [DutyStatusOrigin](../README.md#dutystatusorigin).

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L49)

___

### states

• **states**: [`DutyStatusState`](../README.md#dutystatusstate)[]

Gets or sets search for DutyStatusLogs with the provided [DutyStatusState](../README.md#dutystatusstate)s.
 By default, only DutyStatusState.Active logs are returned.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L54)

___

### statuses

• **statuses**: [`DutyStatusLogType`](../README.md#dutystatuslogtype)[]

Gets or sets search for DutyStatusLogs with the provided [DutyStatusLogType](../README.md#dutystatuslogtype)s.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L56)

___

### toDate

• **toDate**: `Date`

Gets or sets search for DutyStatusLogs that were recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L58)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for DutyStatusLogs with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item><item><description>GroupSearch</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts:64](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusLogSearch.ts#L64)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
