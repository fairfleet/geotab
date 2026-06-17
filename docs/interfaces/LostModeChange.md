[@fairfleet/geotab](../README.md) / LostModeChange

# Interface: LostModeChange

Represents a [LostModeChange](LostModeChange.md) event for a device, tracking when Lost Mode was activated and deactivated.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`LostModeChange`**

## Table of contents

### Properties

- [activeFrom](LostModeChange.md#activefrom)
- [activeTo](LostModeChange.md#activeto)
- [device](LostModeChange.md#device)
- [endReason](LostModeChange.md#endreason)
- [id](LostModeChange.md#id)
- [version](LostModeChange.md#version)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets the DateTime when Lost Mode was activated.

#### Defined in

[src/types/Checkmate/ObjectModel/LostModeChange.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LostModeChange.ts#L11)

___

### activeTo

• **activeTo**: `Date`

Gets or sets the DateTime when Lost Mode was deactivated.

#### Defined in

[src/types/Checkmate/ObjectModel/LostModeChange.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LostModeChange.ts#L13)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the LostModeChange.Device associated with this Lost Mode change.

#### Defined in

[src/types/Checkmate/ObjectModel/LostModeChange.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LostModeChange.ts#L15)

___

### endReason

• **endReason**: `string`

Gets or sets the reason why Lost Mode was ended.

#### Defined in

[src/types/Checkmate/ObjectModel/LostModeChange.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LostModeChange.ts#L17)

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
