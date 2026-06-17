[@fairfleet/geotab](../README.md) / SustainabilityMonthlySummarySearch

# Interface: SustainabilityMonthlySummarySearch

The object used to specify the arguments when searching for a [SustainabilityMonthlySummary](SustainabilityMonthlySummary.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`SustainabilityMonthlySummarySearch`**

## Table of contents

### Properties

- [deviceSearch](SustainabilityMonthlySummarySearch.md#devicesearch)
- [fromDate](SustainabilityMonthlySummarySearch.md#fromdate)
- [id](SustainabilityMonthlySummarySearch.md#id)
- [toDate](SustainabilityMonthlySummarySearch.md#todate)
- [version](SustainabilityMonthlySummarySearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options.
 Providing the Groups will search for [SustainabilityMonthlySummary](SustainabilityMonthlySummary.md) records for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Sustainability/SustainabilityMonthlySummarySearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Sustainability/SustainabilityMonthlySummarySearch.ts#L16)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for [SustainabilityMonthlySummary](SustainabilityMonthlySummary.md) records recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Sustainability/SustainabilityMonthlySummarySearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Sustainability/SustainabilityMonthlySummarySearch.ts#L18)

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

Gets or sets the to date, which is used to search for [SustainabilityMonthlySummary](SustainabilityMonthlySummary.md) records recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Sustainability/SustainabilityMonthlySummarySearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Sustainability/SustainabilityMonthlySummarySearch.ts#L20)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
