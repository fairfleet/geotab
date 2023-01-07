[@fairfleet/geotab](../README.md) / GroupDeviceSearch

# Interface: GroupDeviceSearch

The object used to specify the arguments when searching for a [GroupDevice](GroupDevice.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`GroupDeviceSearch`**

## Table of contents

### Properties

- [deviceSearch](GroupDeviceSearch.md#devicesearch)
- [fromDate](GroupDeviceSearch.md#fromdate)
- [id](GroupDeviceSearch.md#id)
- [toDate](GroupDeviceSearch.md#todate)
- [version](GroupDeviceSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any group links that were ever active for that device.
 Providing the Groups will search for GroupDevice links (historical and current) for Devices currently in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/GroupDeviceSearch.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupDeviceSearch.ts#L17)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for GroupLinkedEntity`1 links from on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupDeviceSearch.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupDeviceSearch.ts#L19)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date, which is used to search for GroupLinkedEntity`1 links from on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupDeviceSearch.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupDeviceSearch.ts#L21)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
