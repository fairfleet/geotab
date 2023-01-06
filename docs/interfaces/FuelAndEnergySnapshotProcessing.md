[@fairfleet/geotab](../README.md) / FuelAndEnergySnapshotProcessing

# Interface: FuelAndEnergySnapshotProcessing

Log of energy consumed processing

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`FuelAndEnergySnapshotProcessing`**

## Table of contents

### Properties

- [backfillDate](FuelAndEnergySnapshotProcessing.md#backfilldate)
- [device](FuelAndEnergySnapshotProcessing.md#device)
- [earliestProcessedDate](FuelAndEnergySnapshotProcessing.md#earliestprocesseddate)
- [id](FuelAndEnergySnapshotProcessing.md#id)
- [isProcessingComplete](FuelAndEnergySnapshotProcessing.md#isprocessingcomplete)
- [snapshotType](FuelAndEnergySnapshotProcessing.md#snapshottype)

## Properties

### backfillDate

• **backfillDate**: `Date`

Gets or sets the UTC date and time of the upper limit date for processing.

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessing.ts:11](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessing.ts#L11)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessing.ts:13](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessing.ts#L13)

___

### earliestProcessedDate

• **earliestProcessedDate**: `Date`

Gets or sets the UTC date and time of the most recent processed date.

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessing.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessing.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### isProcessingComplete

• **isProcessingComplete**: `boolean`

Gets or sets a value indicating whether processing is completed.

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessing.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessing.ts#L17)

___

### snapshotType

• **snapshotType**: `string`

Gets or sets the type of snapshot that was processed.

#### Defined in

[src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessing.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessing.ts#L19)
