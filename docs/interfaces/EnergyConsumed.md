[@fairfleet/geotab](../README.md) / EnergyConsumed

# Interface: EnergyConsumed

Log of energy consumed

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`EnergyConsumed`**

## Table of contents

### Properties

- [dateTime](EnergyConsumed.md#datetime)
- [device](EnergyConsumed.md#device)
- [id](EnergyConsumed.md#id)
- [totalEnergyIn](EnergyConsumed.md#totalenergyin)
- [totalEnergyOut](EnergyConsumed.md#totalenergyout)
- [version](EnergyConsumed.md#version)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the UTC date and time of the event.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergyConsumed.ts:11](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergyConsumed.ts#L11)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the StatusData for the [Device](Device.md) specified.

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergyConsumed.ts:13](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergyConsumed.ts#L13)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### totalEnergyIn

• **totalEnergyIn**: `number`

Gets or sets the ammount of total energy out (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergyConsumed.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergyConsumed.ts#L15)

___

### totalEnergyOut

• **totalEnergyOut**: `number`

Gets or sets the ammount of total energy in (kWh). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Energy/EnergyConsumed.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Energy/EnergyConsumed.ts#L17)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
