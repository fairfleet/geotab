[@fairfleet/geotab](../README.md) / EnergySnapshotRecord

# Interface: EnergySnapshotRecord

Log of energy consumed

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`EnergySnapshotRecord`**

## Table of contents

### Properties

- [batteryLevel](EnergySnapshotRecord.md#batterylevel)
- [dateTime](EnergySnapshotRecord.md#datetime)
- [deletedDateTime](EnergySnapshotRecord.md#deleteddatetime)
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
- [sourceBatteryEnergyInAcChargingKwh](EnergySnapshotRecord.md#sourcebatteryenergyinacchargingkwh)
- [sourceBatteryEnergyInDcChargingKwh](EnergySnapshotRecord.md#sourcebatteryenergyindcchargingkwh)
- [sourceBatteryEnergyOutAcChargingKwh](EnergySnapshotRecord.md#sourcebatteryenergyoutacchargingkwh)
- [sourceBatteryEnergyOutDcChargingKwh](EnergySnapshotRecord.md#sourcebatteryenergyoutdcchargingkwh)
- [sourceDrivingEnergyInKwh](EnergySnapshotRecord.md#sourcedrivingenergyinkwh)
- [sourceDrivingEnergyOutKwh](EnergySnapshotRecord.md#sourcedrivingenergyoutkwh)
- [sourceIdlingEnergyInKwh](EnergySnapshotRecord.md#sourceidlingenergyinkwh)
- [sourceIdlingEnergyOutKwh](EnergySnapshotRecord.md#sourceidlingenergyoutkwh)
- [sourceOnBoardChargerEnergyOutAcChargingKwh](EnergySnapshotRecord.md#sourceonboardchargerenergyoutacchargingkwh)
- [sourceOnboardChargerEnergyInAcChargingKwh](EnergySnapshotRecord.md#sourceonboardchargerenergyinacchargingkwh)
- [version](EnergySnapshotRecord.md#version)

## Properties

### batteryLevel

• **batteryLevel**: `number`

Gets or sets the battery level in percentage. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L11)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the UTC date and time of the snapshot.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L13)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L17)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the StatusData for the [Device](Device.md) specified.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L19)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isWaitingForData

• **isWaitingForData**: `boolean`

Gets or sets a value indicating whether the current record is waiting for data

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L21)

___

### lifetimeBatteryEnergyInAcChargingKwh

• **lifetimeBatteryEnergyInAcChargingKwh**: `number`

Gets or sets the amount of driving energy in, AC charging (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L23)

___

### lifetimeBatteryEnergyInDcChargingKwh

• **lifetimeBatteryEnergyInDcChargingKwh**: `number`

Gets or sets the amount of driving energy in, DC charging (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L25)

___

### lifetimeBatteryEnergyOutAcChargingKwh

• **lifetimeBatteryEnergyOutAcChargingKwh**: `number`

Gets or sets the amount of driving energy out, AC charging (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L27)

___

### lifetimeBatteryEnergyOutDcChargingKwh

• **lifetimeBatteryEnergyOutDcChargingKwh**: `number`

Gets or sets the amount of driving energy out, DC charging (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L29)

___

### lifetimeDrivingEnergyInKwh

• **lifetimeDrivingEnergyInKwh**: `number`

Gets or sets the amount of driving energy in (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L31)

___

### lifetimeDrivingEnergyOutKwh

• **lifetimeDrivingEnergyOutKwh**: `number`

Gets or sets the amount of driving energy out (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L33)

___

### lifetimeFuelOrEnergyDistanceDrivenKm

• **lifetimeFuelOrEnergyDistanceDrivenKm**: `number`

Gets or sets the Distance Driven in Km when Fuel or Energy was used.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L35)

___

### lifetimeIdlingEnergyInKwh

• **lifetimeIdlingEnergyInKwh**: `number`

Gets or sets the amount of idling energy in (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L37)

___

### lifetimeIdlingEnergyOutKwh

• **lifetimeIdlingEnergyOutKwh**: `number`

Gets or sets the amount of idling energy out (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L39)

___

### lifetimeOnBoardChargerEnergyOutAcChargingKwh

• **lifetimeOnBoardChargerEnergyOutAcChargingKwh**: `number`

Gets or sets the onboard charger energy out, AC charging (kwh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L43)

___

### lifetimeOnboardChargerEnergyInAcChargingKwh

• **lifetimeOnboardChargerEnergyInAcChargingKwh**: `number`

Gets or sets the onboard charger energy in, AC charging (kwh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L41)

___

### lifetimeTripEnergyInKwh

• **lifetimeTripEnergyInKwh**: `number`

Gets or sets the amount of trip energy in (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L45)

___

### lifetimeTripEnergyOutkwh

• **lifetimeTripEnergyOutkwh**: `number`

Gets or sets the amount of trip energy out (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L47)

___

### logReason

• **logReason**: `string`

Gets or sets the reason for logging the snapshot.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L49)

___

### maxElectricVehicleBatteryPowerW

• **maxElectricVehicleBatteryPowerW**: `number`

Gets or sets the max electric vehicle battery power (watts). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L51)

___

### maxOnboardChargerAcInputPowerW

• **maxOnboardChargerAcInputPowerW**: `number`

Gets or sets the max onboard charger AC input power (watts). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:53](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L53)

___

### maxOnboardChargerAcInputVoltageV

• **maxOnboardChargerAcInputVoltageV**: `number`

Gets or sets the max onboard charger voltage (volts). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:55](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L55)

___

### maxOnboardChargerDcOutputPowerW

• **maxOnboardChargerDcOutputPowerW**: `number`

Gets or sets the max onboard charger DC output power (watts). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:57](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L57)

___

### sourceBatteryEnergyInAcChargingKwh

• **sourceBatteryEnergyInAcChargingKwh**: `number`

Gets or sets the amount of battery energy in, AC charging (kWh), from source status data. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:59](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L59)

___

### sourceBatteryEnergyInDcChargingKwh

• **sourceBatteryEnergyInDcChargingKwh**: `number`

Gets or sets the amount of driving energy in, DC charging (kWh), from source status data. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:61](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L61)

___

### sourceBatteryEnergyOutAcChargingKwh

• **sourceBatteryEnergyOutAcChargingKwh**: `number`

Gets or sets the amount of battery energy out, AC charging (kWh), from source status data. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:63](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L63)

___

### sourceBatteryEnergyOutDcChargingKwh

• **sourceBatteryEnergyOutDcChargingKwh**: `number`

Gets or sets the amount of driving energy out, DC charging (kWh), from source status data. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:65](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L65)

___

### sourceDrivingEnergyInKwh

• **sourceDrivingEnergyInKwh**: `number`

Gets or sets the amount of driving energy in (kWh) from source status data. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:67](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L67)

___

### sourceDrivingEnergyOutKwh

• **sourceDrivingEnergyOutKwh**: `number`

Gets or sets the amount of driving energy out (kWh) from source status data. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:69](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L69)

___

### sourceIdlingEnergyInKwh

• **sourceIdlingEnergyInKwh**: `number`

Gets or sets the amount of idling energy in (kWh) from source status data. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:71](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L71)

___

### sourceIdlingEnergyOutKwh

• **sourceIdlingEnergyOutKwh**: `number`

Gets or sets the amount of idling energy out (kWh) from source status data. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:73](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L73)

___

### sourceOnBoardChargerEnergyOutAcChargingKwh

• **sourceOnBoardChargerEnergyOutAcChargingKwh**: `number`

Gets or sets the onboard charger energy out, AC charging (kwh), from source status data. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:77](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L77)

___

### sourceOnboardChargerEnergyInAcChargingKwh

• **sourceOnboardChargerEnergyInAcChargingKwh**: `number`

Gets or sets the onboard charger energy in, AC charging (kwh), from source status data. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts:75](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Energy/EnergySnapshotRecord.ts#L75)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
