[@fairfleet/geotab](../README.md) / ReportStorageSearch

# Interface: ReportStorageSearch

The object used to specify the arguments when searching for [ReportStorage](ReportStorage.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ReportStorageSearch`**

## Table of contents

### Properties

- [descendingOrderByRowVersion](ReportStorageSearch.md#descendingorderbyrowversion)
- [id](ReportStorageSearch.md#id)
- [includeBinaryData](ReportStorageSearch.md#includebinarydata)
- [maxRowVersion](ReportStorageSearch.md#maxrowversion)
- [propertySelector](ReportStorageSearch.md#propertyselector)
- [version](ReportStorageSearch.md#version)

## Properties

### descendingOrderByRowVersion

• **descendingOrderByRowVersion**: `boolean`

Gets or sets a value indicating whether to retrieve the [ReportStorage](ReportStorage.md) objects by descending order.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorageSearch.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ReportStorageSearch.ts#L10)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### includeBinaryData

• **includeBinaryData**: `boolean`

Gets or sets a value indicating whether the binary data field of the report storage object should be set.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorageSearch.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ReportStorageSearch.ts#L12)

___

### maxRowVersion

• **maxRowVersion**: `number`

Gets or sets the max row version to retrieve a [ReportStorage](ReportStorage.md) object for.

#### Defined in

[src/types/Checkmate/ObjectModel/ReportStorageSearch.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ReportStorageSearch.ts#L14)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
