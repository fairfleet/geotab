[@fairfleet/geotab](../README.md) / FuelSnapshotRecord

# Interface: FuelSnapshotRecord

Snapshot of Log of Fuel Usage

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`FuelSnapshotRecord`**

## Table of contents

### Properties

- [dateTime](FuelSnapshotRecord.md#datetime)
- [device](FuelSnapshotRecord.md#device)
- [fuelTankLevelPercentage](FuelSnapshotRecord.md#fueltanklevelpercentage)
- [fuelTankLevelVolumeL](FuelSnapshotRecord.md#fueltanklevelvolumel)
- [id](FuelSnapshotRecord.md#id)
- [isWaitingForData](FuelSnapshotRecord.md#iswaitingfordata)
- [lifetimeDrivingFuelUsedL](FuelSnapshotRecord.md#lifetimedrivingfuelusedl)
- [lifetimeFuelOrEnergyDistanceDrivenKm](FuelSnapshotRecord.md#lifetimefuelorenergydistancedrivenkm)
- [lifetimeIdlingFuelUsedL](FuelSnapshotRecord.md#lifetimeidlingfuelusedl)
- [lifetimePtoFuelUsedL](FuelSnapshotRecord.md#lifetimeptofuelusedl)
- [lifetimePtoOnTimeHours](FuelSnapshotRecord.md#lifetimeptoontimehours)
- [lifetimeTripFuelUsedL](FuelSnapshotRecord.md#lifetimetripfuelusedl)
- [logReason](FuelSnapshotRecord.md#logreason)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the UTC date and time of the event.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts:11](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts#L11)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the StatusData for the [Device](Device.md) specified.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts#L13)

___

### fuelTankLevelPercentage

• **fuelTankLevelPercentage**: `number`

Gets or sets the fuel tank level PERCENTAGE. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts#L15)

___

### fuelTankLevelVolumeL

• **fuelTankLevelVolumeL**: `number`

Gets or sets the fuel tank level by VOLUME in Liters. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts#L17)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isWaitingForData

• **isWaitingForData**: `boolean`

Gets or sets a value indicating whether the current record is waiting for data

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts#L19)

___

### lifetimeDrivingFuelUsedL

• **lifetimeDrivingFuelUsedL**: `number`

Gets or sets the amount of driving fuel used in Liters. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts#L21)

___

### lifetimeFuelOrEnergyDistanceDrivenKm

• **lifetimeFuelOrEnergyDistanceDrivenKm**: `number`

Gets or sets the Distance Driven in Km when Fuel or Energy was used.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts:23](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts#L23)

___

### lifetimeIdlingFuelUsedL

• **lifetimeIdlingFuelUsedL**: `number`

Gets or sets the amount of fuel used while idling in Liters. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts:25](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts#L25)

___

### lifetimePtoFuelUsedL

• **lifetimePtoFuelUsedL**: `number`

Gets or sets the amount of fuel used while PTO is engaged, in Liters. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts:27](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts#L27)

___

### lifetimePtoOnTimeHours

• **lifetimePtoOnTimeHours**: `number`

Gets or sets the amount of time passed. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts:29](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts#L29)

___

### lifetimeTripFuelUsedL

• **lifetimeTripFuelUsedL**: `number`

Gets or sets the amount of total trip fuel used in Liters. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts:31](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts#L31)

___

### logReason

• **logReason**: `string`

Gets or sets the reason for logging the snapshot.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts:33](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelSnapshotRecord.ts#L33)
