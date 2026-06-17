[@fairfleet/geotab](../README.md) / EVStatusInfoSearch

# Interface: EVStatusInfoSearch

The object used to specify the arguments when searching for a [EVStatusInfo](EVStatusInfo.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EVStatusInfoSearch`**

## Table of contents

### Properties

- [deviceSearch](EVStatusInfoSearch.md#devicesearch)
- [id](EVStatusInfoSearch.md#id)
- [version](EVStatusInfoSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options.
 Providing a device ID will search for any EVStatusInfo(s) that are assigned to that Device.
 Providing deviceIds will search for any EVStatusInfo(s) that are assigned to these Devices.
 Providing the Groups will search for EVStatusInfo(s) for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>DeviceIds</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfoSearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfoSearch.ts#L18)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.
 <para />
 Note: This property is not available in Beta.

#### Overrides

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfoSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfoSearch.ts#L24)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
