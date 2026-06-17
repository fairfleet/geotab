[@fairfleet/geotab](../README.md) / ChargeEvent

# Interface: ChargeEvent

A ChargeEvent summarizes important details about EV charging: where vehicles have been charging, when vehicles have been charging, and how much energy they have consumed.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`ChargeEvent`**

## Table of contents

### Properties

- [chargeIsEstimated](ChargeEvent.md#chargeisestimated)
- [chargeType](ChargeEvent.md#chargetype)
- [chargingStartedOdometerKm](ChargeEvent.md#chargingstartedodometerkm)
- [deletedDateTime](ChargeEvent.md#deleteddatetime)
- [device](ChargeEvent.md#device)
- [duration](ChargeEvent.md#duration)
- [electricDistanceSinceLastChargeKm](ChargeEvent.md#electricdistancesincelastchargekm)
- [endStateOfCharge](ChargeEvent.md#endstateofcharge)
- [energyConsumedKwh](ChargeEvent.md#energyconsumedkwh)
- [energyUsedSinceLastChargeKwh](ChargeEvent.md#energyusedsincelastchargekwh)
- [id](ChargeEvent.md#id)
- [location](ChargeEvent.md#location)
- [maxACVoltage](ChargeEvent.md#maxacvoltage)
- [measuredBatteryEnergyInKwh](ChargeEvent.md#measuredbatteryenergyinkwh)
- [measuredBatteryEnergyOutKwh](ChargeEvent.md#measuredbatteryenergyoutkwh)
- [measuredOnBoardChargerEnergyInKwh](ChargeEvent.md#measuredonboardchargerenergyinkwh)
- [measuredOnBoardChargerEnergyOutKwh](ChargeEvent.md#measuredonboardchargerenergyoutkwh)
- [peakPowerKw](ChargeEvent.md#peakpowerkw)
- [startStateOfCharge](ChargeEvent.md#startstateofcharge)
- [startTime](ChargeEvent.md#starttime)
- [tripStop](ChargeEvent.md#tripstop)
- [version](ChargeEvent.md#version)

## Properties

### chargeIsEstimated

• **chargeIsEstimated**: `boolean`

Gets or sets a value indicating whether EnergyConsumedKwh and PeakPowerKw have been measured directly, or estimated based on other available data.
 <para />
 Geotab aims to provide high accuracy data on all EV makes and models. However, when a primary (preferred) raw data signal is not available, we may have to estimate EnergyConsumedKwh based on secondary (non-preferred) raw data signals. For these vehicles, chargeIsEstimated will be true.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L16)

___

### chargeType

• **chargeType**: [`ChargeType`](../README.md#chargetype)

Gets or sets the ChargeEvent.ChargeType provided by the external power source. Possible types are AC (Alternating Current), DC (Direct Current),
 or Unknown if the signal received from the charger does not match AC or DC.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L21)

___

### chargingStartedOdometerKm

• **chargingStartedOdometerKm**: `number`

Gets or sets the odometer reading at [ChargeEvent](ChargeEvent.md) start, measured in kilometers.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L23)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L27)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with the [ChargeEvent](ChargeEvent.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L29)

___

### duration

• **duration**: `string`

Gets or sets the length of time the vehicle was charging, formatted as follows: “d.hh:mm:ss.fffffff”, where "d" represents days and “fffffff” represents fractional seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L31)

___

### electricDistanceSinceLastChargeKm

• **electricDistanceSinceLastChargeKm**: `number`

Gets or sets the distance traveled since the previous [ChargeEvent](ChargeEvent.md) in Kilometers.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L33)

___

### endStateOfCharge

• **endStateOfCharge**: `number`

Gets or sets the battery charge % (state of charge) at the end of the associated [ChargeEvent](ChargeEvent.md). [0-100]

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L35)

___

### energyConsumedKwh

• **energyConsumedKwh**: `number`

Gets or sets the total energy going into the vehicle (at the charge station interface) during the [ChargeEvent](ChargeEvent.md), in kWh. This may be different from the energy added to the vehicle battery due to losses incurred by other internal vehicle components, such as on-board chargers.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L37)

___

### energyUsedSinceLastChargeKwh

• **energyUsedSinceLastChargeKwh**: `number`

Gets or sets the amount of energy drawn from the battery since the last [ChargeEvent](ChargeEvent.md) in Kilowatt-hours.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L39)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### location

• **location**: `unknown`

Gets or sets the [Coordinate](Coordinate.md) where the [ChargeEvent](ChargeEvent.md) occurred.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L41)

___

### maxACVoltage

• **maxACVoltage**: `number`

Gets or sets the maximum AC Voltage reported during the [ChargeEvent](ChargeEvent.md), measured in Volts.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L43)

___

### measuredBatteryEnergyInKwh

• **measuredBatteryEnergyInKwh**: `number`

Gets or sets the amount of energy added to the vehicle battery during charging in Kilowatt-hours.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L45)

___

### measuredBatteryEnergyOutKwh

• **measuredBatteryEnergyOutKwh**: `number`

Gets or sets the amount of energy that left the vehicle battery during charging in Kilowatt-hours.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L47)

___

### measuredOnBoardChargerEnergyInKwh

• **measuredOnBoardChargerEnergyInKwh**: `number`

Gets or sets the amount of energy that passed into the on-board charger in Kilowatt-hours.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L49)

___

### measuredOnBoardChargerEnergyOutKwh

• **measuredOnBoardChargerEnergyOutKwh**: `number`

Gets or sets the amount of energy that passed out of the on-board charger in Kilowatt-hours.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L51)

___

### peakPowerKw

• **peakPowerKw**: `number`

Gets or sets the peak power used during the [ChargeEvent](ChargeEvent.md), measured in Kilowatts.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:53](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L53)

___

### startStateOfCharge

• **startStateOfCharge**: `number`

Gets or sets the battery charge % (state of charge) at the start of the associated [ChargeEvent](ChargeEvent.md). [0-100]

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:55](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L55)

___

### startTime

• **startTime**: `Date`

Gets or sets the UTC date and time when the [ChargeEvent](ChargeEvent.md) started, following the ISO 8601 standard.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:57](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L57)

___

### tripStop

• **tripStop**: `Date`

Gets or sets the UTC date and time of the EV’s trip stop where the [ChargeEvent](ChargeEvent.md) took place, following the ISO 8601 standard. Charging happens during a trip stop.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:59](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L59)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
