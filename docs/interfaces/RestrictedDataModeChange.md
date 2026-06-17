[@fairfleet/geotab](../README.md) / RestrictedDataModeChange

# Interface: RestrictedDataModeChange

Indicates when a RestrictedDataModeChange.DataModeType was changed.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`RestrictedDataModeChange`**

## Table of contents

### Properties

- [dataModeType](RestrictedDataModeChange.md#datamodetype)
- [dateTime](RestrictedDataModeChange.md#datetime)
- [device](RestrictedDataModeChange.md#device)
- [id](RestrictedDataModeChange.md#id)
- [version](RestrictedDataModeChange.md#version)

## Properties

### dataModeType

• **dataModeType**: [`DataModeType`](DataModeType.md)

Gets or sets the type of the trip.

#### Defined in

[src/types/Checkmate/ObjectModel/RestrictedDataModeChange.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/RestrictedDataModeChange.ts#L12)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date time.

#### Defined in

[src/types/Checkmate/ObjectModel/RestrictedDataModeChange.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/RestrictedDataModeChange.ts#L14)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the device.

#### Defined in

[src/types/Checkmate/ObjectModel/RestrictedDataModeChange.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/RestrictedDataModeChange.ts#L16)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
