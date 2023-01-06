[@fairfleet/geotab](../README.md) / EnergySnapshotRecord

# Interface: EnergySnapshotRecord

Log of energy consumed

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EnergySnapshotRecord`**

## Table of contents

### Properties

- [batteryLevel](EnergySnapshotRecord.md#batterylevel)
- [dateTime](EnergySnapshotRecord.md#datetime)
- [device](EnergySnapshotRecord.md#device)
- [id](EnergySnapshotRecord.md#id)
- [isWaitingForData](EnergySnapshotRecord.md#iswaitingfordata)
- [lifetimeBatteryEnergyInAcChargingKwh](EnergySnapshotRecord.md#lifetimebatteryenergyinacchargingkwh)
- [lifetimeBatteryEnergyInDcChargingKwh](EnergySnapshotRecord.md#lifetimebatteryenergyindcchargingkwh)
- [lifetimeBatteryEnergyOutAcChargingKwh](EnergySnapshotRecord.md#lifetimebatteryenergyoutacchargingkwh)
- [lifetimeBatteryEnergyOutDcChargingKwh](EnergySnapshotRecord.md#lifetimebatteryenergyoutdcchargingkwh)
- [lifetimeDrivingEnergyInKwh](EnergySnapshotRecord.md#lifetimedrivingenergyinkwh)
- [lifetimeDrivingEnergyOutKwh](EnergySnapshotRecord.md#lifetimedrivingenergyoutkwh)
- [lifetimeFuelOrEnergyDistanceDrivenKm](EnergySnapshotRecord.md#lifetimefuelorenergydistancedrivenkm)
- [lifetimeIdlingEnergyInKwh](EnergySnapshotRecord.md#lifetimeidlingenergyinkwh)
- [lifetimeIdlingEnergyOutKwh](EnergySnapshotRecord.md#lifetimeidlingenergyoutkwh)
- [lifetimeOnBoardChargerEnergyOutAcChargingKwh](EnergySnapshotRecord.md#lifetimeonboardchargerenergyoutacchargingkwh)
- [lifetimeOnboardChargerEnergyInAcChargingKwh](EnergySnapshotRecord.md#lifetimeonboardchargerenergyinacchargingkwh)
- [lifetimeTripEnergyInKwh](EnergySnapshotRecord.md#lifetimetripenergyinkwh)
- [lifetimeTripEnergyOutkwh](EnergySnapshotRecord.md#lifetimetripenergyoutkwh)
- [logReason](EnergySnapshotRecord.md#logreason)
- [maxElectricVehicleBatteryPowerW](EnergySnapshotRecord.md#maxelectricvehiclebatterypowerw)
- [maxOnboardChargerAcInputPowerW](EnergySnapshotRecord.md#maxonboardchargeracinputpowerw)
- [maxOnboardChargerAcInputVoltageV](EnergySnapshotRecord.md#maxonboardchargeracinputvoltagev)
- [maxOnboardChargerDcOutputPowerW](EnergySnapshotRecord.md#maxonboardchargerdcoutputpowerw)

## Properties

### batteryLevel

• **batteryLevel**: `number`

Gets or sets the batter level in percentage. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:11](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L11)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the UTC date and time of the snapshot.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:13](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L13)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the StatusData for the [Device](Device.md) specified.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### isWaitingForData

• **isWaitingForData**: `boolean`

Gets or sets a value indicating whether the current record is waiting for data

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L17)

___

### lifetimeBatteryEnergyInAcChargingKwh

• **lifetimeBatteryEnergyInAcChargingKwh**: `number`

Gets or sets the ammount of driving energy in AC charging (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L19)

___

### lifetimeBatteryEnergyInDcChargingKwh

• **lifetimeBatteryEnergyInDcChargingKwh**: `number`

Gets or sets the ammount of driving energy in DC charging (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L21)

___

### lifetimeBatteryEnergyOutAcChargingKwh

• **lifetimeBatteryEnergyOutAcChargingKwh**: `number`

Gets or sets the ammount of driving energy out AC charging (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L23)

___

### lifetimeBatteryEnergyOutDcChargingKwh

• **lifetimeBatteryEnergyOutDcChargingKwh**: `number`

Gets or sets the ammount of driving energy out DC charging (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:25](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L25)

___

### lifetimeDrivingEnergyInKwh

• **lifetimeDrivingEnergyInKwh**: `number`

Gets or sets the amount of driving energy out (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:27](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L27)

___

### lifetimeDrivingEnergyOutKwh

• **lifetimeDrivingEnergyOutKwh**: `number`

Gets or sets the amount of driving energy out (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:29](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L29)

___

### lifetimeFuelOrEnergyDistanceDrivenKm

• **lifetimeFuelOrEnergyDistanceDrivenKm**: `number`

Gets or sets the Distance Driven in Km when Fuel or Energy was used.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:31](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L31)

___

### lifetimeIdlingEnergyInKwh

• **lifetimeIdlingEnergyInKwh**: `number`

Gets or sets the ammount of idling energy in (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:33](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L33)

___

### lifetimeIdlingEnergyOutKwh

• **lifetimeIdlingEnergyOutKwh**: `number`

Gets or sets the amount of idling energy out (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:35](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L35)

___

### lifetimeOnBoardChargerEnergyOutAcChargingKwh

• **lifetimeOnBoardChargerEnergyOutAcChargingKwh**: `number`

Gets or sets the onboard charger energy in DC charging (kwh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:39](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L39)

___

### lifetimeOnboardChargerEnergyInAcChargingKwh

• **lifetimeOnboardChargerEnergyInAcChargingKwh**: `number`

Gets or sets the onboard charger energy in AC charging (kwh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:37](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L37)

___

### lifetimeTripEnergyInKwh

• **lifetimeTripEnergyInKwh**: `number`

Gets or sets the amount of trip energy in (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:41](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L41)

___

### lifetimeTripEnergyOutkwh

• **lifetimeTripEnergyOutkwh**: `number`

Gets or sets the amount of trip energy out (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:43](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L43)

___

### logReason

• **logReason**: `string`

Gets or sets the reason for logging the snapshot.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:45](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L45)

___

### maxElectricVehicleBatteryPowerW

• **maxElectricVehicleBatteryPowerW**: `number`

Gets or sets the max electric vehicle battery power (watts). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:47](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L47)

___

### maxOnboardChargerAcInputPowerW

• **maxOnboardChargerAcInputPowerW**: `number`

Gets or sets the max onboard charger AC input power (watts). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:49](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L49)

___

### maxOnboardChargerAcInputVoltageV

• **maxOnboardChargerAcInputVoltageV**: `number`

Gets or sets the max onboard charger voltage (volts). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:51](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L51)

___

### maxOnboardChargerDcOutputPowerW

• **maxOnboardChargerDcOutputPowerW**: `number`

Gets or sets the max onboard charger DC output power (watts). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:53](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L53)
