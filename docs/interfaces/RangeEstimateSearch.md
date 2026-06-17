[@fairfleet/geotab](../README.md) / RangeEstimateSearch

# Interface: RangeEstimateSearch

The object used to specify the arguments when searching for a [RangeEstimate](RangeEstimate.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`RangeEstimateSearch`**

## Table of contents

### Properties

- [deviceSearch](RangeEstimateSearch.md#devicesearch)
- [fromDate](RangeEstimateSearch.md#fromdate)
- [id](RangeEstimateSearch.md#id)
- [toDate](RangeEstimateSearch.md#todate)
- [version](RangeEstimateSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options.
 Providing a device ID will search for any RangeEstimate(s) that are assigned to that Device.
 Providing deviceIds will search for any RangeEstimate(s) that are assigned to these Devices.
 Providing the Groups will search for RangeEstimate(s) for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>DeviceIds</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/RangeEstimateSearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/RangeEstimateSearch.ts#L18)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for RangeEstimate(s) calculated on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/RangeEstimateSearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/RangeEstimateSearch.ts#L20)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date, which is used to search for RangeEstimate(s) calculated on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/RangeEstimateSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/RangeEstimateSearch.ts#L22)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
