[@fairfleet/geotab](../README.md) / MimeTaskSearch

# Interface: MimeTaskSearch

The object used to specify the arguments when searching for [MimeTask](MimeTask.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`MimeTaskSearch`**

## Table of contents

### Properties

- [fromDate](MimeTaskSearch.md#fromdate)
- [id](MimeTaskSearch.md#id)
- [isComplete](MimeTaskSearch.md#iscomplete)
- [mimeTaskType](MimeTaskSearch.md#mimetasktype)
- [toDate](MimeTaskSearch.md#todate)
- [version](MimeTaskSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets search for mime tasks that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/MimeTaskSearch.ts:11](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/MimeTaskSearch.ts#L11)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isComplete

• **isComplete**: `boolean`

Gets or sets a value indicating whether the task is completed.

#### Defined in

[src/types/Checkmate/ObjectModel/MimeTaskSearch.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/MimeTaskSearch.ts#L13)

___

### mimeTaskType

• **mimeTaskType**: [`MimeTaskType`](MimeTaskType.md)

Gets or sets search for mime tasks of a specific type (application/mdf4, etc). See MimeTaskSearch.MimeTaskType.

#### Defined in

[src/types/Checkmate/ObjectModel/MimeTaskSearch.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/MimeTaskSearch.ts#L15)

___

### toDate

• **toDate**: `Date`

Gets or sets search for mime tasks that were recorded before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/MimeTaskSearch.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/MimeTaskSearch.ts#L17)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
