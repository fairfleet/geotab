[@fairfleet/geotab](../README.md) / FuelUsed

# Interface: FuelUsed

An event representing fuel used for a vehicle.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`FuelUsed`**

  ↳↳ [`FuelAndEnergyUsed`](FuelAndEnergyUsed.md)

## Table of contents

### Properties

- [confidence](FuelUsed.md#confidence)
- [dateTime](FuelUsed.md#datetime)
- [deletedDateTime](FuelUsed.md#deleteddatetime)
- [device](FuelUsed.md#device)
- [id](FuelUsed.md#id)
- [totalFuelUsed](FuelUsed.md#totalfuelused)
- [totalIdlingFuelUsedL](FuelUsed.md#totalidlingfuelusedl)
- [version](FuelUsed.md#version)

## Properties

### confidence

• **confidence**: [`FuelUpEventConfidences`](../README.md#fuelupeventconfidences)

Gets or sets the [FuelUpEventConfidences](../README.md#fuelupeventconfidences) associated with the fuel used record.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L12)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the UTC date and time of the entity.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L14)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L18)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with the entity.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L20)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### totalFuelUsed

• **totalFuelUsed**: `number`

Gets or sets the volume of fuel used in Liters. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L22)

___

### totalIdlingFuelUsedL

• **totalIdlingFuelUsedL**: `number`

Gets or sets the volume of idling fuel used in Liters. Default [null].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L24)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
