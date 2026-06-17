[@fairfleet/geotab](../README.md) / SustainabilityGroupIdlingSummarySearch

# Interface: SustainabilityGroupIdlingSummarySearch

The object used to specify the arguments when searching for a [SustainabilityGroupIdlingSummary](SustainabilityGroupIdlingSummary.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`SustainabilityGroupIdlingSummarySearch`**

## Table of contents

### Properties

- [deviceSearch](SustainabilityGroupIdlingSummarySearch.md#devicesearch)
- [fromDate](SustainabilityGroupIdlingSummarySearch.md#fromdate)
- [id](SustainabilityGroupIdlingSummarySearch.md#id)
- [toDate](SustainabilityGroupIdlingSummarySearch.md#todate)
- [version](SustainabilityGroupIdlingSummarySearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options.
 Providing the Groups will search for [SustainabilityGroupIdlingSummarySearch](SustainabilityGroupIdlingSummarySearch.md) records for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Sustainability/SustainabilityGroupIdlingSummarySearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Sustainability/SustainabilityGroupIdlingSummarySearch.ts#L16)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for [SustainabilityGroupIdlingSummary](SustainabilityGroupIdlingSummary.md) records recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Sustainability/SustainabilityGroupIdlingSummarySearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Sustainability/SustainabilityGroupIdlingSummarySearch.ts#L18)

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

Gets or sets the to date, which is used to search for [SustainabilityGroupIdlingSummary](SustainabilityGroupIdlingSummary.md) records recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Sustainability/SustainabilityGroupIdlingSummarySearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Sustainability/SustainabilityGroupIdlingSummarySearch.ts#L20)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
