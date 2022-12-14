[@fairfleet/geotab](../README.md) / DeviceStatusInfoSearch

# Interface: DeviceStatusInfoSearch

The object used to specify the arguments when searching for [DeviceStatusInfo](DeviceStatusInfo.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DeviceStatusInfoSearch`**

## Table of contents

### Properties

- [closestAssetLimit](DeviceStatusInfoSearch.md#closestassetlimit)
- [deviceSearch](DeviceStatusInfoSearch.md#devicesearch)
- [deviceStatusFilterCondition](DeviceStatusInfoSearch.md#devicestatusfiltercondition)
- [diagnostics](DeviceStatusInfoSearch.md#diagnostics)
- [excludeExceptionEvents](DeviceStatusInfoSearch.md#excludeexceptionevents)
- [id](DeviceStatusInfoSearch.md#id)
- [isDeviceCommunicating](DeviceStatusInfoSearch.md#isdevicecommunicating)
- [isDriving](DeviceStatusInfoSearch.md#isdriving)
- [maxId](DeviceStatusInfoSearch.md#maxid)
- [maxSearchRadius](DeviceStatusInfoSearch.md#maxsearchradius)
- [position](DeviceStatusInfoSearch.md#position)
- [userSearch](DeviceStatusInfoSearch.md#usersearch)
- [version](DeviceStatusInfoSearch.md#version)

## Properties

### closestAssetLimit

• **closestAssetLimit**: `number`

Gets or sets the maximum number of Devices to search for when specifying a "Position".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L15)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [DeviceStatusInfo](DeviceStatusInfo.md)(s) from a device that matches the
 [DeviceSearch](DeviceSearch.md) Id or in the Groups specified. This includes archived and deleted devices.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L22)

___

### deviceStatusFilterCondition

• **deviceStatusFilterCondition**: [`DeviceStatusFilterCondition`](DeviceStatusFilterCondition.md)

Gets or sets devices based on current status, IsDriving and IsDeviceCommunicating.
 And/Or filtering.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:27](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L27)

___

### diagnostics

• **diagnostics**: [`Diagnostic`](Diagnostic.md)[]

Gets or sets a list of diagnostics when looking for the latest values for those diagnostics.
 Available Diagnostics options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:33](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L33)

___

### excludeExceptionEvents

• **excludeExceptionEvents**: `boolean`

Gets or sets a value indicating whether to exclude exception events. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:35](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L35)

___

### id

• **id**: `string`

Gets or sets [DeviceStatusInfo](DeviceStatusInfo.md)Id search criteria.

#### Overrides

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:37](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L37)

___

### isDeviceCommunicating

• **isDeviceCommunicating**: `boolean`

Gets or sets search for devices based on their current communicating status.
 A device is communicating:
 - When the vehicle is driving and has communicated within the past 10 minutes.
 - When the vehicle is not driving and has communicated within the past 24 hours.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:44](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L44)

___

### isDriving

• **isDriving**: `boolean`

Gets or sets a 'single' search filter for devices that are 'driving'.
 Cannot be driving if not communicating.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:49](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L49)

___

### maxId

• **maxId**: `string`

Gets or sets the maximum Id of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:51](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L51)

___

### maxSearchRadius

• **maxSearchRadius**: `number`

Gets or sets the maximum search radius centre at Position when looking for nearest Devices in kilometers.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:53](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L53)

___

### position

• **position**: [`Coordinate`](Coordinate.md)

Gets or sets search for Status Info for Devices in the vicinity of the provided
 [Coordinate](Coordinate.md). Starting from this position, an outward search for
 Devices will continue until the number of devices found matches the number defined in the "ClosestAssetLimit"
 property.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:60](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L60)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for Device Status Info associated with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:66](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L66)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
