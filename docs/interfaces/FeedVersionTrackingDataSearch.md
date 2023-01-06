[@fairfleet/geotab](../README.md) / FeedVersionTrackingDataSearch

# Interface: FeedVersionTrackingDataSearch

The object used to specify the arguments when searching for
 [FeedVersionTrackingData](FeedVersionTrackingData.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`FeedVersionTrackingDataSearch`**

## Table of contents

### Properties

- [id](FeedVersionTrackingDataSearch.md#id)
- [propertySelector](FeedVersionTrackingDataSearch.md#propertyselector)
- [tableName](FeedVersionTrackingDataSearch.md#tablename)
- [version](FeedVersionTrackingDataSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Overrides

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/FeedVersionTrackingDataSearch.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/FeedVersionTrackingDataSearch.ts#L17)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### tableName

• **tableName**: `string`

Gets or sets search for the table name of the record.

#### Defined in

[src/types/Checkmate/ObjectModel/FeedVersionTrackingDataSearch.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/FeedVersionTrackingDataSearch.ts#L19)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
