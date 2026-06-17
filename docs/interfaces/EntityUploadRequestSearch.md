[@fairfleet/geotab](../README.md) / EntityUploadRequestSearch

# Interface: EntityUploadRequestSearch

The object used to specify the arguments when searching for [EntityUploadRequest](EntityUploadRequest.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EntityUploadRequestSearch`**

## Table of contents

### Properties

- [entityName](EntityUploadRequestSearch.md#entityname)
- [id](EntityUploadRequestSearch.md#id)
- [isBackFill](EntityUploadRequestSearch.md#isbackfill)
- [status](EntityUploadRequestSearch.md#status)
- [version](EntityUploadRequestSearch.md#version)

## Properties

### entityName

• **entityName**: `string`

Gets or sets a value indicating whether to search for [EntityUploadRequest](EntityUploadRequest.md) with this EntityName.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityUploadRequestSearch.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityUploadRequestSearch.ts#L10)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isBackFill

• **isBackFill**: `boolean`

Gets or sets a value indicating whether to search by isBackFill, which the condition is, it has a ToDate Or ToVersion less than long.MaxValue.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityUploadRequestSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityUploadRequestSearch.ts#L12)

___

### status

• **status**: `number`

Gets or sets a value indicating whether to search the [EntityUploadRequest](EntityUploadRequest.md) objects by the [EntityUploadRequestStatus](../README.md#entityuploadrequeststatus).

#### Defined in

[src/types/Checkmate/ObjectModel/EntityUploadRequestSearch.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityUploadRequestSearch.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
