[@fairfleet/geotab](../README.md) / UploadTransactionSearch

# Interface: UploadTransactionSearch

The object used to specify the arguments when searching for [UploadTransaction](UploadTransaction.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`UploadTransactionSearch`**

## Table of contents

### Properties

- [entityName](UploadTransactionSearch.md#entityname)
- [entityUploadRequestId](UploadTransactionSearch.md#entityuploadrequestid)
- [id](UploadTransactionSearch.md#id)
- [status](UploadTransactionSearch.md#status)
- [version](UploadTransactionSearch.md#version)

## Properties

### entityName

• **entityName**: `string`

Gets or sets a value indicating whether to search for [UploadTransaction](UploadTransaction.md) with this EntityName.

#### Defined in

[src/types/Checkmate/ObjectModel/UploadTransactionSearch.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UploadTransactionSearch.ts#L10)

___

### entityUploadRequestId

• **entityUploadRequestId**: `number`

Gets or sets a value indicating whether to search for [UploadTransaction](UploadTransaction.md) with this EntityUploadRequestId.

#### Defined in

[src/types/Checkmate/ObjectModel/UploadTransactionSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UploadTransactionSearch.ts#L12)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### status

• **status**: `number`

Gets or sets a value indicating whether to search the [UploadTransaction](UploadTransaction.md) objects by the [UploadTransactionStatus](../README.md#uploadtransactionstatus).

#### Defined in

[src/types/Checkmate/ObjectModel/UploadTransactionSearch.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UploadTransactionSearch.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
