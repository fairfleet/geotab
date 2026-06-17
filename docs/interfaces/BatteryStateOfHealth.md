[@fairfleet/geotab](../README.md) / BatteryStateOfHealth

# Interface: BatteryStateOfHealth

This entity allows you to track high voltage battery degradation over the lifetime of your BEVs and PHEVs. We use historical driving and charging data to estimate usable battery capacity.

## Table of contents

### Properties

- [currentBatteryCapacityLowerBoundKwh](BatteryStateOfHealth.md#currentbatterycapacitylowerboundkwh)
- [currentBatteryCapacityMeanKwh](BatteryStateOfHealth.md#currentbatterycapacitymeankwh)
- [currentBatteryCapacityUpperBoundKwh](BatteryStateOfHealth.md#currentbatterycapacityupperboundkwh)
- [detectionDate](BatteryStateOfHealth.md#detectiondate)
- [device](BatteryStateOfHealth.md#device)
- [originalBatteryCapacityLowerBoundKwh](BatteryStateOfHealth.md#originalbatterycapacitylowerboundkwh)
- [originalBatteryCapacityMeanKwh](BatteryStateOfHealth.md#originalbatterycapacitymeankwh)
- [originalBatteryCapacityUpperBoundKwh](BatteryStateOfHealth.md#originalbatterycapacityupperboundkwh)
- [stateOfHealthLowerBound](BatteryStateOfHealth.md#stateofhealthlowerbound)
- [stateOfHealthMean](BatteryStateOfHealth.md#stateofhealthmean)
- [stateOfHealthUpperBound](BatteryStateOfHealth.md#stateofhealthupperbound)
- [vin](BatteryStateOfHealth.md#vin)

## Properties

### currentBatteryCapacityLowerBoundKwh

• **currentBatteryCapacityLowerBoundKwh**: `number`

Gets or sets the lower bound of the vehicle's usable battery capacity on the detection date, measured in kWh.
 <para />
 This means that there is a 90% probability that the true usable battery capacity is between CurrentBatteryCapacityLowerBoundKwh and CurrentBatteryCapacityUpperBoundKwh.

#### Defined in

[src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts#L14)

___

### currentBatteryCapacityMeanKwh

• **currentBatteryCapacityMeanKwh**: `number`

Gets or sets the usable battery capacity on the detection date, measured in kWh.
 <para />
 The mean value is our best guess at the vehicle's true usable battery capacity.

#### Defined in

[src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts#L20)

___

### currentBatteryCapacityUpperBoundKwh

• **currentBatteryCapacityUpperBoundKwh**: `number`

Gets or sets the upper bound of the vehicle's usable battery capacity on the detection date, measured in kWh.
 <para />
 This means that there is a 90% probability that the true usable battery capacity is between CurrentBatteryCapacityLowerBoundKwh and CurrentBatteryCapacityUpperBoundKwh.

#### Defined in

[src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts#L26)

___

### detectionDate

• **detectionDate**: `Date`

Gets or sets the date and time (UTC, ISO 8601 format) when the [BatteryStateOfHealth](BatteryStateOfHealth.md) was calculated.

#### Defined in

[src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts#L28)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with the [BatteryStateOfHealth](BatteryStateOfHealth.md).

#### Defined in

[src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts#L30)

___

### originalBatteryCapacityLowerBoundKwh

• **originalBatteryCapacityLowerBoundKwh**: `number`

Gets or sets the lower bound of the vehicle's usable battery capacity when the vehicle was new, measured in kWh.
 <para />
 This means that there is a 90% probability that the true usable battery capacity is between OriginalBatteryCapacityLowerBoundKwh and OriginalBatteryCapacityUpperBoundKwh.
 The original capacity is calculated based on data collected from other vehicles of the same make, model, year and trim. This value may be updated as we gather more information on this particular trim.

#### Defined in

[src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts#L37)

___

### originalBatteryCapacityMeanKwh

• **originalBatteryCapacityMeanKwh**: `number`

Gets or sets the mean original battery capacity value, measured in kWh.
 <para />
 The mean value is our best guess at the true original battery capacity when the vehicle was new.
 The original capacity is calculated based on data collected from other vehicles of the same make, model, year and trim. This value may be updated as we gather more information on this particular trim.

#### Defined in

[src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts#L44)

___

### originalBatteryCapacityUpperBoundKwh

• **originalBatteryCapacityUpperBoundKwh**: `number`

Gets or sets the upper bound of the vehicle's usable battery capacity when the vehicle was new, measured in kWh.
 <para />
 This means that there is a 90% probability that the true usable battery capacity is between OriginalBatteryCapacityLowerBoundKwh and OriginalBatteryCapacityUpperBoundKwh.
 The original capacity is calculated based on data collected from other vehicles of the same make, model, year and trim. This value may be updated as we gather more information on this particular trim.

#### Defined in

[src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts#L51)

___

### stateOfHealthLowerBound

• **stateOfHealthLowerBound**: `number`

Gets or sets the state of health's lower bound value.
 <para />
 state of health = current battery capacity / original battery capacity
 There is a 90% probability that the true usable battery capacity is between StateOfHealthLowerBound and StateOfHealthUpperBound.

#### Defined in

[src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts#L58)

___

### stateOfHealthMean

• **stateOfHealthMean**: `number`

Gets or sets the mean state of health value.
 <para />
 The mean value is our best guess at the true battery State of Health. It is calculated via the following formula:
 state of health = current battery capacity / original battery capacity

#### Defined in

[src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts:65](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts#L65)

___

### stateOfHealthUpperBound

• **stateOfHealthUpperBound**: `number`

Gets or sets the state of health's upper bound value.
 <para />
 state of health = current battery capacity / original battery capacity
 There is a 90% probability that the true usable battery capacity is between StateOfHealthLowerBound and StateOfHealthUpperBound.

#### Defined in

[src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts:72](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts#L72)

___

### vin

• **vin**: `string`

Gets or sets the vehicle identification number (VIN). Must be 17 characters.

#### Defined in

[src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts:74](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/BatteryStateOfHealth.ts#L74)
