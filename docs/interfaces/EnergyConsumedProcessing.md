[@fairfleet/geotab](../README.md) / EnergyConsumedProcessing

# Interface: EnergyConsumedProcessing

Log of energy consumed processing

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`EnergyConsumedProcessing`**

## Table of contents

### Properties

- [backfillDate](EnergyConsumedProcessing.md#backfilldate)
- [device](EnergyConsumedProcessing.md#device)
- [earliestProcessedDate](EnergyConsumedProcessing.md#earliestprocesseddate)
- [id](EnergyConsumedProcessing.md#id)
- [version](EnergyConsumedProcessing.md#version)

## Properties

### backfillDate

• **backfillDate**: `Date`

Gets or sets the UTC date and time of the upper limit date for processing.

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/EnergyConsumedProcessing.ts:11](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Processing/EnergyConsumedProcessing.ts#L11)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the StatusData for the [Device](Device.md) specified.

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/EnergyConsumedProcessing.ts:13](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Processing/EnergyConsumedProcessing.ts#L13)

___

### earliestProcessedDate

• **earliestProcessedDate**: `Date`

Gets or sets the UTC date and time of the most recent processed date.

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/EnergyConsumedProcessing.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Processing/EnergyConsumedProcessing.ts#L15)

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
