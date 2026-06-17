[@fairfleet/geotab](../README.md) / FuelAndEnergyUsed

# Interface: FuelAndEnergyUsed

An event representing fuel and energy used for a vehicle.

## Hierarchy

- [`FuelUsed`](FuelUsed.md)

  ↳ **`FuelAndEnergyUsed`**

## Table of contents

### Properties

- [confidence](FuelAndEnergyUsed.md#confidence)
- [dateTime](FuelAndEnergyUsed.md#datetime)
- [deletedDateTime](FuelAndEnergyUsed.md#deleteddatetime)
- [device](FuelAndEnergyUsed.md#device)
- [id](FuelAndEnergyUsed.md#id)
- [totalEnergyUsedKwh](FuelAndEnergyUsed.md#totalenergyusedkwh)
- [totalFuelUsed](FuelAndEnergyUsed.md#totalfuelused)
- [totalIdlingEnergyUsedKwh](FuelAndEnergyUsed.md#totalidlingenergyusedkwh)
- [totalIdlingFuelUsedL](FuelAndEnergyUsed.md#totalidlingfuelusedl)
- [version](FuelAndEnergyUsed.md#version)

## Properties

### confidence

• **confidence**: [`FuelUpEventConfidences`](../README.md#fuelupeventconfidences)

Gets or sets the [FuelUpEventConfidences](../README.md#fuelupeventconfidences) associated with the fuel used record.

#### Inherited from

[FuelUsed](FuelUsed.md).[confidence](FuelUsed.md#confidence)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L12)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the UTC date and time of the entity.

#### Inherited from

[FuelUsed](FuelUsed.md).[dateTime](FuelUsed.md#datetime)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L14)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Inherited from

[FuelUsed](FuelUsed.md).[deletedDateTime](FuelUsed.md#deleteddatetime)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L18)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with the entity.

#### Inherited from

[FuelUsed](FuelUsed.md).[device](FuelUsed.md#device)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L20)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[FuelUsed](FuelUsed.md).[id](FuelUsed.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### totalEnergyUsedKwh

• **totalEnergyUsedKwh**: `number`

Gets or sets the amount of energy used in Kwh. Default [null].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelAndEnergyUsed.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelAndEnergyUsed.ts#L10)

___

### totalFuelUsed

• **totalFuelUsed**: `number`

Gets or sets the volume of fuel used in Liters. Default [null].

#### Overrides

[FuelUsed](FuelUsed.md).[totalFuelUsed](FuelUsed.md#totalfuelused)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelAndEnergyUsed.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelAndEnergyUsed.ts#L12)

___

### totalIdlingEnergyUsedKwh

• **totalIdlingEnergyUsedKwh**: `number`

Gets or sets the amount of idling energy used in Kwh. Default [null].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelAndEnergyUsed.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelAndEnergyUsed.ts#L14)

___

### totalIdlingFuelUsedL

• **totalIdlingFuelUsedL**: `number`

Gets or sets the volume of idling fuel used in Liters. Default [null].

#### Inherited from

[FuelUsed](FuelUsed.md).[totalIdlingFuelUsedL](FuelUsed.md#totalidlingfuelusedl)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L24)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[FuelUsed](FuelUsed.md).[version](FuelUsed.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
