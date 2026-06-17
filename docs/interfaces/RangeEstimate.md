[@fairfleet/geotab](../README.md) / RangeEstimate

# Interface: RangeEstimate

The distance a BEV or PHEV can travel on a full charge. The range estimate is based on historical energy consumption, distance traveled, and battery capacity.

## Table of contents

### Properties

- [detectionDate](RangeEstimate.md#detectiondate)
- [device](RangeEstimate.md#device)
- [rangeEstimateLowerBoundKm](RangeEstimate.md#rangeestimatelowerboundkm)
- [rangeEstimateMeanKm](RangeEstimate.md#rangeestimatemeankm)
- [rangeEstimateUpperBoundKm](RangeEstimate.md#rangeestimateupperboundkm)
- [rangeEstimationMethod](RangeEstimate.md#rangeestimationmethod)
- [vin](RangeEstimate.md#vin)

## Properties

### detectionDate

• **detectionDate**: `Date`

Gets or sets the date and time (UTC, ISO 8601 format) when the [RangeEstimate](RangeEstimate.md) was calculated.

#### Defined in

[src/types/Checkmate/ObjectModel/RangeEstimate.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/RangeEstimate.ts#L10)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with the [RangeEstimate](RangeEstimate.md).

#### Defined in

[src/types/Checkmate/ObjectModel/RangeEstimate.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/RangeEstimate.ts#L12)

___

### rangeEstimateLowerBoundKm

• **rangeEstimateLowerBoundKm**: `number`

Gets or sets the lower bound range estimate (for 90% confidence interval), measured in kilometers.
 <para />
 This means there is a 90% probability that the vehicle’s range is between RangeEstimateLowerBoundKm and RangeEstimateUpperBoundKm.

#### Defined in

[src/types/Checkmate/ObjectModel/RangeEstimate.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/RangeEstimate.ts#L18)

___

### rangeEstimateMeanKm

• **rangeEstimateMeanKm**: `number`

Gets or sets the mean range estimate, measured in kilometers.

#### Defined in

[src/types/Checkmate/ObjectModel/RangeEstimate.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/RangeEstimate.ts#L20)

___

### rangeEstimateUpperBoundKm

• **rangeEstimateUpperBoundKm**: `number`

Gets or sets the upper bound range estimate (for 90% confidence interval), measured in kilometers.
 <para />
 This means that there is a 90% probability that the vehicle’s range is between RangeEstimateLowerBoundKm and RangeEstimateUpperBoundKm.

#### Defined in

[src/types/Checkmate/ObjectModel/RangeEstimate.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/RangeEstimate.ts#L26)

___

### rangeEstimationMethod

• **rangeEstimationMethod**: `string`

Gets or sets the estimation method used to calculate the range estimates.
 <para />
 If the method is BatteryEstimation, the calculation is based on the energy readings coming in and out of the battery.
 If the method is SoCEstimation, the calculation is based on the detected state-of-charge deltas at the beginning and end of trips.

#### Defined in

[src/types/Checkmate/ObjectModel/RangeEstimate.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/RangeEstimate.ts#L33)

___

### vin

• **vin**: `string`

Gets or sets the vehicle identification number (VIN). Must be 17 characters.

#### Defined in

[src/types/Checkmate/ObjectModel/RangeEstimate.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/RangeEstimate.ts#L35)
