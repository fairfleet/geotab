[@fairfleet/geotab](../README.md) / BackfillStatusSearch

# Interface: BackfillStatusSearch

The object used to specify the arguments when searching for a [BackfillStatus](BackfillStatus.md) entry.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`BackfillStatusSearch`**

## Table of contents

### Properties

- [backfillType](BackfillStatusSearch.md#backfilltype)
- [deviceSearch](BackfillStatusSearch.md#devicesearch)
- [fromDate](BackfillStatusSearch.md#fromdate)
- [id](BackfillStatusSearch.md#id)
- [isProcessingComplete](BackfillStatusSearch.md#isprocessingcomplete)
- [isProcessingRequired](BackfillStatusSearch.md#isprocessingrequired)
- [toDate](BackfillStatusSearch.md#todate)
- [version](BackfillStatusSearch.md#version)

## Properties

### backfillType

• **backfillType**: `string`

Gets or sets to the backfill type, which is used to search for Snapshot Processing.

#### Defined in

src/types/Checkmate/ObjectModel/Processing/BackfillStatusSearch.ts:11

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the device search criteria for the BackfillStatus entry with this [DeviceSearch](DeviceSearch.md) Id. Available DeviceSearch options are:.
 <list><item><description>Id</description><description>Groups</description></item></list>

#### Defined in

src/types/Checkmate/ObjectModel/Processing/BackfillStatusSearch.ts:16

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for Snapshot Processing recorded on or after this date.

#### Defined in

src/types/Checkmate/ObjectModel/Processing/BackfillStatusSearch.ts:18

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isProcessingComplete

• **isProcessingComplete**: `boolean`

Gets or sets the IsProcessingComplete flag, which is used to search for Snapshot Processing that is completed.

#### Defined in

src/types/Checkmate/ObjectModel/Processing/BackfillStatusSearch.ts:20

___

### isProcessingRequired

• **isProcessingRequired**: `boolean`

Gets or sets the IsProcessingRequired flag, which is used to search for records that need processing.

#### Defined in

src/types/Checkmate/ObjectModel/Processing/BackfillStatusSearch.ts:22

___

### toDate

• **toDate**: `Date`

Gets or sets the to date, which is used to search for Snapshot Processing recorded on or before this date.

#### Defined in

src/types/Checkmate/ObjectModel/Processing/BackfillStatusSearch.ts:24

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
