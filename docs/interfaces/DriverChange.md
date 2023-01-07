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
 Note: When adding a DriverChange through API, the DateTime must NOT be in the future.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChange.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverChange.ts#L18)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) that had the driver change.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChange.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverChange.ts#L20)

___

### driver

• **driver**: [`Driver`](Driver.md)

Gets or sets the [Driver](Driver.md) associated with the change.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChange.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverChange.ts#L22)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### type

• **type**: [`DriverChangeType`](../README.md#driverchangetype)

Gets or sets the [DriverChangeType](../README.md#driverchangetype).

#### Defined in

[src/types/Checkmate/ObjectModel/DriverChange.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverChange.ts#L24)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
