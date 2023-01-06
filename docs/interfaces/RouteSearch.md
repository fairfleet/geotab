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
- [maxVersion](RouteSearch.md#maxversion)
- [minVersion](RouteSearch.md#minversion)
- [name](RouteSearch.md#name)
- [propertySelector](RouteSearch.md#propertyselector)
- [routeType](RouteSearch.md#routetype)
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

[src/types/Checkmate/ObjectModel/RouteSearch.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/RouteSearch.ts#L22)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for Routes that were active at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:24](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/RouteSearch.ts#L24)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for ONLY Route Completion (RouteSearch.RouteType.Service) routes that are members of these [GroupSearch](GroupSearch.md)(s) in the Service Group hierarchy.
 Available GroupSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:30](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/RouteSearch.ts#L30)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets maximum version of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:32](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/RouteSearch.ts#L32)

___

### minVersion

• **minVersion**: `number`

Gets or sets minimum version of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:34](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/RouteSearch.ts#L34)

___

### name

• **name**: `string`

Gets or sets search for Routes with this Name. Wildcard can be used by prepending/appending "%" to string. Example
 "%comments%".

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:39](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/RouteSearch.ts#L39)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### routeType

• **routeType**: [`RouteType`](../README.md#routetype)

Gets or sets search for Routes with this [RouteType](../README.md#routetype).

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:41](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/RouteSearch.ts#L41)

___

### toDate

• **toDate**: `Date`

Gets or sets search for Routes that were active at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:43](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/RouteSearch.ts#L43)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)

___

### zoneSearch

• **zoneSearch**: [`ZoneSearch`](ZoneSearch.md)

Gets or sets filter by the [ZoneSearch](ZoneSearch.md) options. Providing a zone ID will
 search for any Routes that are assigned to that Device.
 Providing the Groups will search for Routes for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/RouteSearch.ts:51](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/RouteSearch.ts#L51)
