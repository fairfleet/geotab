[@fairfleet/geotab](../README.md) / BackfillStatus

# Interface: BackfillStatus

Log of energy consumed processing

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`BackfillStatus`**

## Table of contents

### Properties

- [backfillDate](BackfillStatus.md#backfilldate)
- [backfillType](BackfillStatus.md#backfilltype)
- [device](BackfillStatus.md#device)
- [earliestProcessedDate](BackfillStatus.md#earliestprocesseddate)
- [id](BackfillStatus.md#id)
- [isProcessingComplete](BackfillStatus.md#isprocessingcomplete)

## Properties

### backfillDate

• **backfillDate**: `Date`

Gets or sets the UTC date and time of the upper limit date for processing.

#### Defined in

src/types/Checkmate/ObjectModel/Processing/BackfillStatus.ts:11

___

### backfillType

• **backfillType**: `string`

Gets or sets the type of snapshot that was processed.

#### Defined in

src/types/Checkmate/ObjectModel/Processing/BackfillStatus.ts:13

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md).

#### Defined in

src/types/Checkmate/ObjectModel/Processing/BackfillStatus.ts:15

___

### earliestProcessedDate

• **earliestProcessedDate**: `Date`

Gets or sets the UTC date and time of the most recent processed date.

#### Defined in

src/types/Checkmate/ObjectModel/Processing/BackfillStatus.ts:17

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isProcessingComplete

• **isProcessingComplete**: `boolean`

Gets or sets a value indicating whether processing is completed.

#### Defined in

src/types/Checkmate/ObjectModel/Processing/BackfillStatus.ts:19
