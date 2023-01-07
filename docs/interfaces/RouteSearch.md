[@fairfleet/geotab](../README.md) / RouteSearch

# Interface: RouteSearch

The object used to specify the arguments when searching for [Route](Route.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`RouteSearch`**

## Table of contents

### Properties

- [deviceSearch](RouteSearch.md#devicesearch)
- [fromDate](RouteSearch.md#fromdate)
- [groups](RouteSearch.md#groups)
- [id](RouteSearch.md#id)
- [includeRouteStatus](RouteSearch.md#includeroutestatus)
- [maxVersion](RouteSearch.md#maxversion)
- [minVersion](RouteSearch.md#minversion)
- [name](RouteSearch.md#name)
- [routeType](RouteSearch.md#routetype)
- [serviceGroups](RouteSearch.md#servicegroups)
- [toDate](RouteSearch.md#todate)
- [version](RouteSearch.md#version)
- [zoneSearch](RouteSearch.md#zonesearch)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any Routes that are assigned to that Device.
 Providing the Groups will search for Routes for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

**`Remarks`**

Only [RouteType](../README.md#routetype) "Plan" have a Device assigned.

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/RouteSearch.ts#L22)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for Routes that were active at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/RouteSearch.ts#L24)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for ONLY Route Completion (RouteSearch.RouteType.Service) routes that are members of these [GroupSearch](GroupSearch.md)(s).
 Available GroupSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:30](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/RouteSearch.ts#L30)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeRouteStatus

• **includeRouteStatus**: `boolean`

Gets or sets status for the routes.
 The default value is [false].

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:35](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/RouteSearch.ts#L35)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets maximum version of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:37](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/RouteSearch.ts#L37)

___

### minVersion

• **minVersion**: `number`

Gets or sets minimum version of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:39](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/RouteSearch.ts#L39)

___

### name

• **name**: `string`

Gets or sets search for Routes with this Name. Wildcard can be used by prepending/appending "%" to string. Example
 "%comments%".

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:44](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/RouteSearch.ts#L44)

___

### routeType

• **routeType**: [`RouteType`](../README.md#routetype)

Gets or sets search for Routes with this [RouteType](../README.md#routetype).

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:46](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/RouteSearch.ts#L46)

___

### serviceGroups

• **serviceGroups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for ONLY Route Completion (RouteSearch.RouteType.Service) routes that are members of these [GroupSearch](GroupSearch.md)(s) in the Service Group hierarchy.
 Available GroupSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:52](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/RouteSearch.ts#L52)

___

### toDate

• **toDate**: `Date`

Gets or sets search for Routes that were active at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:54](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/RouteSearch.ts#L54)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### zoneSearch

• **zoneSearch**: [`ZoneSearch`](ZoneSearch.md)

Gets or sets filter by the [ZoneSearch](ZoneSearch.md) options. Providing a zone ID will
 search for any Routes that are assigned to that Device.
 Providing the Groups will search for Routes for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:62](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/RouteSearch.ts#L62)
