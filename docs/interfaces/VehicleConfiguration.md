[@fairfleet/geotab](../README.md) / VehicleConfiguration

# Interface: VehicleConfiguration

VehicleConfiguration parameters entity.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`VehicleConfiguration`**

  ↳↳ [`WifiHotspot`](WifiHotspot.md)

## Table of contents

### Properties

- [device](VehicleConfiguration.md#device)
- [id](VehicleConfiguration.md#id)
- [version](VehicleConfiguration.md#version)

## Properties

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with this VehicleConfiguration.

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleConfiguration.ts:11](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/VehicleConfiguration.ts#L11)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
