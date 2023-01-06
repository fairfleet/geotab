[@fairfleet/geotab](../README.md) / FeedVersionTrackingData

# Interface: FeedVersionTrackingData

Represents the most recent records inserted into each table. This is used to ensure that the feed
 pulls the newest data possible without missing data.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`FeedVersionTrackingData`**

## Table of contents

### Properties

- [dateTime](FeedVersionTrackingData.md#datetime)
- [id](FeedVersionTrackingData.md#id)
- [tableName](FeedVersionTrackingData.md#tablename)
- [trackedRowVersion](FeedVersionTrackingData.md#trackedrowversion)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets specify when this log was taken.

#### Defined in

[src/types/Checkmate/ObjectModel/FeedVersionTrackingData.ts:13](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/FeedVersionTrackingData.ts#L13)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### tableName

• **tableName**: `string`

Gets or sets specify the table name that this record belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/FeedVersionTrackingData.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/FeedVersionTrackingData.ts#L15)

___

### trackedRowVersion

• **trackedRowVersion**: `number`

Gets or sets specify the latest row version for this table.

#### Defined in

[src/types/Checkmate/ObjectModel/FeedVersionTrackingData.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/FeedVersionTrackingData.ts#L17)
