[@fairfleet/geotab](../README.md) / EVStatusInfo

# Interface: EVStatusInfo

The EVStatusInfo entity provides insights about the current state of an electric vehicle.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`EVStatusInfo`**

## Table of contents

### Properties

- [dateTime](EVStatusInfo.md#datetime)
- [device](EVStatusInfo.md#device)
- [id](EVStatusInfo.md#id)
- [realTimeRangeRemainingLowerBoundKm](EVStatusInfo.md#realtimerangeremaininglowerboundkm)
- [realTimeRangeRemainingMeanKm](EVStatusInfo.md#realtimerangeremainingmeankm)
- [realTimeRangeRemainingUpperBoundKm](EVStatusInfo.md#realtimerangeremainingupperboundkm)
- [statusData](EVStatusInfo.md#statusdata)
- [timeToChargeTo100Percent](EVStatusInfo.md#timetochargeto100percent)
- [timeToChargeTo80Percent](EVStatusInfo.md#timetochargeto80percent)
- [timeToChargeTo90Percent](EVStatusInfo.md#timetochargeto90percent)
- [version](EVStatusInfo.md#version)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time (UTC, ISO 8601 format) when [EVStatusInfo](EVStatusInfo.md) was last updated.

#### Defined in

[src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts#L12)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with the EVStatusInfo.

#### Defined in

[src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts#L14)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.
 <para />
 Note: This property is not available in Beta.

#### Overrides

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts#L20)

___

### realTimeRangeRemainingLowerBoundKm

• **realTimeRangeRemainingLowerBoundKm**: `number`

Gets or sets the lower bound estimate for remaining EV range in kilometers (for 90% confidence interval).
 <para />
 This means there is a 90% probability that the vehicle’s remaining range is between RealTimeRangeRemainingLowerBoundKm and RealTimeRangeRemainingUpperBoundKm.

#### Defined in

[src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts#L26)

___

### realTimeRangeRemainingMeanKm

• **realTimeRangeRemainingMeanKm**: `number`

Gets or sets the estimated remaining range of the electric vehicle in kilometers.

#### Defined in

[src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts#L28)

___

### realTimeRangeRemainingUpperBoundKm

• **realTimeRangeRemainingUpperBoundKm**: `number`

Gets or sets the upper bound estimate for remaining EV range in kilometers (for 90% confidence interval).
 <para />
 This means there is a 90% probability that the vehicle’s remaining range is between RealTimeRangeRemainingLowerBoundKm and RealTimeRangeRemainingUpperBoundKm.

#### Defined in

[src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts#L34)

___

### statusData

• **statusData**: [`StatusData`](StatusData.md)[]

Gets or sets the related status data:
 <list><item><description>Electric vehicle charging state (0 = not charging, 1 = AC charging, 2 = DC charging)</description></item><item><description>Battery state of charge (%)</description></item><item><description>Electric vehicle battery power (Watts)</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts#L39)

___

### timeToChargeTo100Percent

• **timeToChargeTo100Percent**: `Date`

Gets or sets the estimated time (UTC, ISO 8601 format) when the EV battery will reach 100% charge.

#### Defined in

[src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts#L41)

___

### timeToChargeTo80Percent

• **timeToChargeTo80Percent**: `Date`

Gets or sets the estimated time (UTC, ISO 8601 format) when the EV battery will reach 80% charge.

#### Defined in

[src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts#L43)

___

### timeToChargeTo90Percent

• **timeToChargeTo90Percent**: `Date`

Gets or sets the estimated time (UTC, ISO 8601 format) when the EV battery will reach 90% charge.

#### Defined in

[src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts#L45)

___

### version

• **version**: `number`

Gets or sets the version of the entity.
 <para />
 Note: This property is not available in Beta.

#### Overrides

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EVStatus/EVStatusInfo.ts#L51)
