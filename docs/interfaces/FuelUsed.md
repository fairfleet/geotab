[@fairfleet/geotab](../README.md) / FuelUsed

# Interface: FuelUsed

Log of fueling events.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`FuelUsed`**

## Table of contents

### Properties

- [confidence](FuelUsed.md#confidence)
- [dateTime](FuelUsed.md#datetime)
- [device](FuelUsed.md#device)
- [id](FuelUsed.md#id)
- [totalFuelUsed](FuelUsed.md#totalfuelused)
- [version](FuelUsed.md#version)

## Properties

### confidence

• **confidence**: [`FuelUpEventConfidences`](../README.md#fuelupeventconfidences)

Gets or sets the confidence associated with the FuelUsage record.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L12)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the UTC date and time of the transaction.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L14)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the StatusData for the [Device](Device.md) specified.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L16)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### totalFuelUsed

• **totalFuelUsed**: `number`

Gets or sets the volume of fuel purchased in Liters. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelUsed.ts#L18)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
