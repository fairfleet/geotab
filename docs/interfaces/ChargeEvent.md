[@fairfleet/geotab](../README.md) / ChargeEvent

# Interface: ChargeEvent

Record of a charge event

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`ChargeEvent`**

## Table of contents

### Properties

- [chargeIsEstimated](ChargeEvent.md#chargeisestimated)
- [chargeType](ChargeEvent.md#chargetype)
- [chargingStartedOdometerKm](ChargeEvent.md#chargingstartedodometerkm)
- [device](ChargeEvent.md#device)
- [duration](ChargeEvent.md#duration)
- [electricDistanceSinceLastChargeKm](ChargeEvent.md#electricdistancesincelastchargekm)
- [endStateOfCharge](ChargeEvent.md#endstateofcharge)
- [energyConsumedKwh](ChargeEvent.md#energyconsumedkwh)
- [energyUsedSinceLastChargeKwh](ChargeEvent.md#energyusedsincelastchargekwh)
- [id](ChargeEvent.md#id)
- [location](ChargeEvent.md#location)
- [maxACVoltage](ChargeEvent.md#maxacvoltage)
- [peakPowerKw](ChargeEvent.md#peakpowerkw)
- [startStateOfCharge](ChargeEvent.md#startstateofcharge)
- [startTime](ChargeEvent.md#starttime)
- [tripStop](ChargeEvent.md#tripstop)
- [version](ChargeEvent.md#version)

## Properties

### chargeIsEstimated

• **chargeIsEstimated**: `boolean`

Gets or sets a value indicating whether the charge values were estimated.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L12)

___

### chargeType

• **chargeType**: [`ChargeType`](../README.md#chargetype)

Gets or sets the charging type provided by the external power source.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L14)

___

### chargingStartedOdometerKm

• **chargingStartedOdometerKm**: `number`

Gets or sets the odometer in km at charge start event.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L16)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the device which created the charge event.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L18)

___

### duration

• **duration**: `string`

Gets or sets the length of time the vehicle was charging in seconds.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L20)

___

### electricDistanceSinceLastChargeKm

• **electricDistanceSinceLastChargeKm**: `number`

Gets or sets the distance traveled since the previous charge event.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L22)

___

### endStateOfCharge

• **endStateOfCharge**: `number`

Gets or sets the ending state of charge for this charge event.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L24)

___

### energyConsumedKwh

• **energyConsumedKwh**: `number`

Gets or sets the energy consumed during the charge event.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L26)

___

### energyUsedSinceLastChargeKwh

• **energyUsedSinceLastChargeKwh**: `number`

Gets or sets the amount of energy drawn from the battery since the last charge event.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L28)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### location

• **location**: `unknown`

Gets or sets the location where the charge event occurred.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:30](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L30)

___

### maxACVoltage

• **maxACVoltage**: `number`

Gets or sets the maximum AC Voltage over the charge event.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:32](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L32)

___

### peakPowerKw

• **peakPowerKw**: `number`

Gets or sets the peak power used during the charge event.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:34](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L34)

___

### startStateOfCharge

• **startStateOfCharge**: `number`

Gets or sets the starting state of charge for this charge event.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:36](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L36)

___

### startTime

• **startTime**: `Date`

Gets or sets the time the charge event started.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:38](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L38)

___

### tripStop

• **tripStop**: `Date`

Gets or sets the time of the Trip.Stop from the trip this charge event occurred in.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts:40](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Charging/ChargeEvent.ts#L40)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
