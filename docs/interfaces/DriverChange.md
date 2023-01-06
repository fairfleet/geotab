[@fairfleet/geotab](../README.md) / DriverChange

# Interface: DriverChange

Information about timing of a [Driver](Driver.md) change.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`DriverChange`**

## Table of contents

### Properties

- [dateTime](DriverChange.md#datetime)
- [device](DriverChange.md#device)
- [driver](DriverChange.md#driver)
- [id](DriverChange.md#id)
- [type](DriverChange.md#type)
- [version](DriverChange.md#version)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time of the driver change.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChange.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverChange.ts#L15)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) that had the driver change.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChange.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverChange.ts#L17)

___

### driver

• **driver**: [`Driver`](Driver.md)

Gets or sets the [Driver](Driver.md) associated with the change.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChange.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverChange.ts#L19)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### type

• **type**: [`DriverChangeType`](../README.md#driverchangetype)

Gets or sets the [DriverChangeType](../README.md#driverchangetype).

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChange.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverChange.ts#L21)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
