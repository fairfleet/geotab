[@fairfleet/geotab](../README.md) / DriverChangeSearch

# Interface: DriverChangeSearch

The object used to specify the arguments when searching for a [DriverChange](DriverChange.md).
 This search defaults to searching [DriverChange](DriverChange.md)(s) by [Driver](Driver.md) Id when no [DeviceSearch](DeviceSearch.md) is provided.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DriverChangeSearch`**

## Table of contents

### Properties

- [deviceSearch](DriverChangeSearch.md#devicesearch)
- [fromDate](DriverChangeSearch.md#fromdate)
- [id](DriverChangeSearch.md#id)
- [includeNextChanges](DriverChangeSearch.md#includenextchanges)
- [includeOverlappedChanges](DriverChangeSearch.md#includeoverlappedchanges)
- [maxVersion](DriverChangeSearch.md#maxversion)
- [toDate](DriverChangeSearch.md#todate)
- [type](DriverChangeSearch.md#type)
- [userSearch](DriverChangeSearch.md#usersearch)
- [version](DriverChangeSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any DriverChanges that are assigned to that Device.
 Providing the Groups will search for DriverChanges for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChangeSearch.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverChangeSearch.ts#L22)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for DriverChange records at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChangeSearch.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverChangeSearch.ts#L24)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeNextChanges

• **includeNextChanges**: `boolean`

Gets or sets a value indicating whether to include the next driver change after the to date or the most recent driver change (if dates are not provided).

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChangeSearch.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverChangeSearch.ts#L26)

___

### includeOverlappedChanges

• **includeOverlappedChanges**: `boolean`

Gets or sets a value indicating whether to include the last driver change before the from date or the most recent driver change (if dates are not provided).

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChangeSearch.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverChangeSearch.ts#L28)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets maximum version of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChangeSearch.ts:30](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverChangeSearch.ts#L30)

___

### toDate

• **toDate**: `Date`

Gets or sets search for DriverChange records at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChangeSearch.ts:32](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverChangeSearch.ts#L32)

___

### type

• **type**: [`DriverChangeType`](../README.md#driverchangetype)

Gets or sets a value indicating the [DriverChangeType](../README.md#driverchangetype) to search for exclusively.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChangeSearch.ts:34](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverChangeSearch.ts#L34)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for DriverChanges with this DriverChangeSearch.UserSearch Id or DriverGroups.
 Available UserSearch options are:.
 <list><item><description>Id</description></item><item><description>DriverGroups</description></item><item><description>DriverGroupFilterCondition</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChangeSearch.ts:40](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverChangeSearch.ts#L40)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
