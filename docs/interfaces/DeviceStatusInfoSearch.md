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
- [excludeExceptionEvents](DeviceStatusInfoSearch.md#excludeexceptionevents)
- [id](DeviceStatusInfoSearch.md#id)
- [maxId](DeviceStatusInfoSearch.md#maxid)
- [maxSearchRadius](DeviceStatusInfoSearch.md#maxsearchradius)
- [position](DeviceStatusInfoSearch.md#position)
- [propertySelector](DeviceStatusInfoSearch.md#propertyselector)
- [userSearch](DeviceStatusInfoSearch.md#usersearch)
- [version](DeviceStatusInfoSearch.md#version)

## Properties

### closestAssetLimit

• **closestAssetLimit**: `number`

Gets or sets the maximum number of Devices to search for when specifying a "Position".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:13](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L13)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [DeviceStatusInfo](DeviceStatusInfo.md)(s) from a device that matches the
 [DeviceSearch](DeviceSearch.md) Id or in the Groups specified. This includes archived and deleted devices.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L20)

___

### excludeExceptionEvents

• **excludeExceptionEvents**: `boolean`

Gets or sets a value indicating whether to exclude exception events. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L22)

___

### id

• **id**: `string`

Gets or sets [DeviceStatusInfo](DeviceStatusInfo.md)Id search criteria.

#### Overrides

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:24](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L24)

___

### maxId

• **maxId**: `string`

Gets or sets the maximum Id of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:26](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L26)

___

### maxSearchRadius

• **maxSearchRadius**: `number`

Gets or sets the maximum search radius centre at Position when looking for nearest Devices in kilometers.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:28](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L28)

___

### position

• **position**: [`Coordinate`](Coordinate.md)

Gets or sets search for Status Info for Devices in the vicinity of the provided
 [Coordinate](Coordinate.md). Starting from this position, an outward search for
 Devices will continue until the number of devices found matches the number defined in the "ClosestAssetLimit"
 property.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:35](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L35)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for Device Status Info associated with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts:41](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceStatusInfoSearch.ts#L41)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
