[@fairfleet/geotab](../README.md) / FeedResult

# Interface: FeedResult<TEntity\>

Describes a type that contains the feed data and a feed version.

## Type parameters

| Name |
| :------ |
| `TEntity` |

## Table of contents

### Properties

- [data](FeedResult.md#data)
- [toVersion](FeedResult.md#toversion)

## Properties

### data

• **data**: `TEntity`[]

The collection of entities returned by the feed.

#### Defined in

[src/types/FeedResult.ts:4](https://github.com/fairfleet/geotab/blob/b682f10/src/types/FeedResult.ts#L4)

___

### toVersion

• **toVersion**: `string`

The last version of the data returned by the feed call. If this parameter is passed
back into the feed call, then returned data will be the changes that occurred after
the last feed call was made. In this way the feed can return a continuous stream of
data.

#### Defined in

[src/types/FeedResult.ts:11](https://github.com/fairfleet/geotab/blob/b682f10/src/types/FeedResult.ts#L11)
