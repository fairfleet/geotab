[@fairfleet/geotab](../README.md) / FillUp

# Interface: FillUp

An event representing adding fuel to a vehicle.

## Table of contents

### Properties

- [derivedVolume](FillUp.md#derivedvolume)
- [deviationFactor](FillUp.md#deviationfactor)
- [fuelTransactions](FillUp.md#fueltransactions)
- [tankCapacity](FillUp.md#tankcapacity)
- [tankLevelExtrema](FillUp.md#tanklevelextrema)
- [totalFuelUsed](FillUp.md#totalfuelused)

## Properties

### derivedVolume

• **derivedVolume**: `number`

Gets or sets the volume derived from fuel tank capacity.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L12)

___

### deviationFactor

• **deviationFactor**: `number`

Gets or sets the difference in fuel out vs fuel in.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L14)

___

### fuelTransactions

• **fuelTransactions**: [`FuelTransaction`](FuelTransaction.md)[]

Gets or sets the raw fuel transaction.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L16)

___

### tankCapacity

• **tankCapacity**: [`FuelTankCapacity`](FuelTankCapacity.md)

Gets or sets the fuel tank capacity.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L18)

___

### tankLevelExtrema

• **tankLevelExtrema**: [`FillUpExtrema`](FillUpExtrema.md)

Gets or sets the fuel tank level change.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L20)

___

### totalFuelUsed

• **totalFuelUsed**: `number`

Gets or sets the total fuel used up to this point in time.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L22)
