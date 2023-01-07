[@fairfleet/geotab](../README.md) / RestrictedDataModeChange

# Interface: RestrictedDataModeChange

Indicates when a RestrictedDataModeChange.DataModeType was changed.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`RestrictedDataModeChange`**

## Table of contents

### Properties

- [dataModeType](RestrictedDataModeChange.md#datamodetype)
- [dateTime](RestrictedDataModeChange.md#datetime)
- [device](RestrictedDataModeChange.md#device)
- [id](RestrictedDataModeChange.md#id)

## Properties

### dataModeType

• **dataModeType**: [`DataModeType`](DataModeType.md)

Gets or sets the type of the trip.

#### Defined in

src/types/Checkmate/ObjectModel/RestrictedDataModeChange.ts:12

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date time.

#### Defined in

src/types/Checkmate/ObjectModel/RestrictedDataModeChange.ts:14

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the device.

#### Defined in

src/types/Checkmate/ObjectModel/RestrictedDataModeChange.ts:16

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)
