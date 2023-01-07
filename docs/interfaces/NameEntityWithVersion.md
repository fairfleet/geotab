[@fairfleet/geotab](../README.md) / NameEntityWithVersion

# Interface: NameEntityWithVersion

An entity with a name and a version.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`NameEntityWithVersion`**

  ↳↳ [`Audit`](Audit.md)

  ↳↳ [`Device`](Device.md)

  ↳↳ [`DeviceShare`](DeviceShare.md)

  ↳↳ [`Controller`](Controller.md)

  ↳↳ [`Diagnostic`](Diagnostic.md)

  ↳↳ [`DisplayMeasurementProfile`](DisplayMeasurementProfile.md)

  ↳↳ [`DisplayUnitOfMeasure`](DisplayUnitOfMeasure.md)

  ↳↳ [`Rule`](Rule.md)

  ↳↳ [`MediaFile`](MediaFile.md)

  ↳↳ [`Route`](Route.md)

  ↳↳ [`SecurityId`](SecurityId.md)

  ↳↳ [`ServiceState`](ServiceState.md)

  ↳↳ [`Trailer`](Trailer.md)

  ↳↳ [`User`](User.md)

  ↳↳ [`Zone`](Zone.md)

## Table of contents

### Properties

- [id](NameEntityWithVersion.md#id)
- [name](NameEntityWithVersion.md#name)
- [version](NameEntityWithVersion.md#version)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
