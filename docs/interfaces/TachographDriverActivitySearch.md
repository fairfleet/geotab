[@fairfleet/geotab](../README.md) / TachographDriverActivitySearch

# Interface: TachographDriverActivitySearch

The object used to specify the arguments when searching for [TachographDriverActivity](TachographDriverActivity.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`TachographDriverActivitySearch`**

## Table of contents

### Properties

- [extrapolate](TachographDriverActivitySearch.md#extrapolate)
- [fromDate](TachographDriverActivitySearch.md#fromdate)
- [id](TachographDriverActivitySearch.md#id)
- [toDate](TachographDriverActivitySearch.md#todate)
- [type](TachographDriverActivitySearch.md#type)
- [userSearch](TachographDriverActivitySearch.md#usersearch)
- [version](TachographDriverActivitySearch.md#version)

## Properties

### extrapolate

• **extrapolate**: `boolean`

Gets or sets a value indicating whether if we want to use or not extrapolation in the telemetry.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivitySearch.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivitySearch.ts#L11)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the initial date range (i.e. 2022-04-01T00:00:00.000Z).

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivitySearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivitySearch.ts#L13)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### toDate

• **toDate**: `Date`

Gets or sets the final date range (i.e. 2022-04-03T00:00:00.000Z).

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivitySearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivitySearch.ts#L15)

___

### type

• **type**: `string`

Gets or sets the telemetry (file, stream, combine).

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivitySearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivitySearch.ts#L17)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets filter by the [UserSearch](UserSearch.md) options.
 Providing a user ID will search for any driver activity assigned to that user.
 Available UserSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivitySearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivitySearch.ts#L24)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
