[@fairfleet/geotab](../README.md) / ReprocessRequestSearch

# Interface: ReprocessRequestSearch

The object used to specify the arguments when searching for a [ReprocessRequest](ReprocessRequest.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ReprocessRequestSearch`**

## Table of contents

### Properties

- [fromDate](ReprocessRequestSearch.md#fromdate)
- [id](ReprocessRequestSearch.md#id)
- [isEmpty](ReprocessRequestSearch.md#isempty)
- [status](ReprocessRequestSearch.md#status)
- [toDate](ReprocessRequestSearch.md#todate)
- [version](ReprocessRequestSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets the FromDate of the [ReprocessRequest](ReprocessRequest.md) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequestSearch.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequestSearch.ts#L11)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isEmpty

• **isEmpty**: `boolean`

Gets a value indicating whether any search criteria have been specified.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequestSearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequestSearch.ts#L13)

___

### status

• **status**: [`ReprocessRequestStatus`](../README.md#reprocessrequeststatus)

Gets or sets the [ReprocessRequestStatus](../README.md#reprocessrequeststatus) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequestSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequestSearch.ts#L15)

___

### toDate

• **toDate**: `Date`

Gets or sets the ToDate of the [ReprocessRequest](ReprocessRequest.md) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequestSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequestSearch.ts#L17)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
