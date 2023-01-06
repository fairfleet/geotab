[@fairfleet/geotab](../README.md) / FuelUpEvent

# Interface: FuelUpEvent

An event representing adding fuel to a vehicle.

## Table of contents

### Properties

- [derivedVolume](FuelUpEvent.md#derivedvolume)
- [deviationFactor](FuelUpEvent.md#deviationfactor)
- [fuelTransactions](FuelUpEvent.md#fueltransactions)
- [tankCapacity](FuelUpEvent.md#tankcapacity)
- [tankLevelExtrema](FuelUpEvent.md#tanklevelextrema)
- [totalFuelUsed](FuelUpEvent.md#totalfuelused)

## Properties

### derivedVolume

• **derivedVolume**: `number`

Gets or sets the volume derived from fuel tank capacity.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUpEvent.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelUpEvent.ts#L12)

___

### deviationFactor

• **deviationFactor**: `number`

Gets or sets the difference in fuel out vs fuel in.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUpEvent.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelUpEvent.ts#L14)

___

### fuelTransactions

• **fuelTransactions**: [`FuelTransaction`](FuelTransaction.md)[]

Gets or sets the raw fuel transaction.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUpEvent.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelUpEvent.ts#L16)

___

### tankCapacity

• **tankCapacity**: [`FuelTankCapacity`](FuelTankCapacity.md)

Gets or sets the fuel tank capacity.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUpEvent.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelUpEvent.ts#L18)

___

### tankLevelExtrema

• **tankLevelExtrema**: [`FillUpExtrema`](FillUpExtrema.md)

Gets or sets the fuel tank level change.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUpEvent.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelUpEvent.ts#L20)

___

### totalFuelUsed

• **totalFuelUsed**: `number`

Gets or sets the total fuel used up to this point in time.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUpEvent.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelUpEvent.ts#L22)
