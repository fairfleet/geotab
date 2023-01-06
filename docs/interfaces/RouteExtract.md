[@fairfleet/geotab](../README.md) / RouteExtract

# Interface: RouteExtract

A [Device](Device.md) and date pair that represents the last time a particular
 [RouteExtract](RouteExtract.md) has been executed for a specific vehicle.

**`Deprecated`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`RouteExtract`**

## Table of contents

### Properties

- [device](RouteExtract.md#device)
- [id](RouteExtract.md#id)
- [lastExtractDateTime](RouteExtract.md#lastextractdatetime)

## Properties

### device

• **device**: [`Device`](Device.md)

Gets or sets the vehicle object to which the last date of the extract applies.

#### Defined in

[src/types/Checkmate/ObjectModel/RouteExtract.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/RouteExtract.ts#L16)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### lastExtractDateTime

• **lastExtractDateTime**: `Date`

Gets or sets the date when the extract has been completed for this vehicle.

#### Defined in

[src/types/Checkmate/ObjectModel/RouteExtract.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/RouteExtract.ts#L18)
