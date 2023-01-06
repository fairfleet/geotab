[@fairfleet/geotab](../README.md) / StatusData

# Interface: StatusData

A record that represents an engine status record from the
 engine system of the specific [Device](Device.md).

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`StatusData`**

## Table of contents

### Properties

- [controller](StatusData.md#controller)
- [data](StatusData.md#data)
- [dateTime](StatusData.md#datetime)
- [device](StatusData.md#device)
- [diagnostic](StatusData.md#diagnostic)
- [id](StatusData.md#id)
- [isLastActive](StatusData.md#islastactive)
- [version](StatusData.md#version)

## Properties

### controller

• **controller**: [`Controller`](Controller.md)

Gets or sets the [Controller](Controller.md) for the [Device](Device.md) specified.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/StatusData.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/StatusData.ts#L16)

___

### data

• **data**: `number`

Gets or sets the recorded value of the diagnostic parameter.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/StatusData.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/StatusData.ts#L18)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time of the logged event.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/StatusData.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/StatusData.ts#L20)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the StatusData for the [Device](Device.md) specified.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/StatusData.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/StatusData.ts#L22)

___

### diagnostic

• **diagnostic**: [`Diagnostic`](Diagnostic.md)

Gets or sets the [Diagnostic](Diagnostic.md) for the [Device](Device.md) specified.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/StatusData.ts:24](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/StatusData.ts#L24)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### isLastActive

• **isLastActive**: `boolean`

Gets or sets a value indicating whether this instance is the last active record in the vehicle's active period. Possible values are:.
 <list type="bullet"><item><description>false: The record is within the active period and not the last active record</description></item><item><description>true: The record is within the active period and is the last active record</description></item><item><description>null: The record is not within the active period or the diagnostic does not observe active state (ex. Accelerometer)</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/StatusData.ts:29](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Engine/StatusData.ts#L29)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
