[@fairfleet/geotab](../README.md) / ElectrificationAggregation

# Interface: ElectrificationAggregation

Aggregated energy data for a vehicle.

## Table of contents

### Properties

- [canUseBev](ElectrificationAggregation.md#canusebev)
- [canUsePhev](ElectrificationAggregation.md#canusephev)
- [daysEvaluated](ElectrificationAggregation.md#daysevaluated)
- [estimatedPhevGasSavingsPercent](ElectrificationAggregation.md#estimatedphevgassavingspercent)

## Properties

### canUseBev

• **canUseBev**: `boolean`

Gets or sets a value indicating whether the vehicle can be replaced with a BEV or not.

#### Defined in

[src/types/Checkmate/ObjectModel/ElectrificationAggregation.ts:8](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ElectrificationAggregation.ts#L8)

___

### canUsePhev

• **canUsePhev**: `boolean`

Gets or sets a value indicating whether the vehicle can be replaced with a PHEV or not.

#### Defined in

[src/types/Checkmate/ObjectModel/ElectrificationAggregation.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ElectrificationAggregation.ts#L10)

___

### daysEvaluated

• **daysEvaluated**: `number`

Gets or sets the number of days evaluated for the calculation of data.

#### Defined in

[src/types/Checkmate/ObjectModel/ElectrificationAggregation.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ElectrificationAggregation.ts#L12)

___

### estimatedPhevGasSavingsPercent

• **estimatedPhevGasSavingsPercent**: `number`

Gets or sets the amount of fuel saved if the vehicle was switched to PHEV for this month expressed as a
 percentage.

#### Defined in

[src/types/Checkmate/ObjectModel/ElectrificationAggregation.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ElectrificationAggregation.ts#L17)
