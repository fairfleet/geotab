[@fairfleet/geotab](../README.md) / QueuedEntityRemoveTaskSearch

# Interface: QueuedEntityRemoveTaskSearch

The object used to specify the arguments when searching for a [QueuedEntityRemoveTask](QueuedEntityRemoveTask.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`QueuedEntityRemoveTaskSearch`**

## Table of contents

### Properties

- [entityReferenceId](QueuedEntityRemoveTaskSearch.md#entityreferenceid)
- [entityType](QueuedEntityRemoveTaskSearch.md#entitytype)
- [fromDate](QueuedEntityRemoveTaskSearch.md#fromdate)
- [id](QueuedEntityRemoveTaskSearch.md#id)
- [status](QueuedEntityRemoveTaskSearch.md#status)
- [toDate](QueuedEntityRemoveTaskSearch.md#todate)
- [version](QueuedEntityRemoveTaskSearch.md#version)

## Properties

### entityReferenceId

• **entityReferenceId**: `string`

Gets or sets the EntityReferenceId as a string of the [QueuedEntityRemoveTask](QueuedEntityRemoveTask.md) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/QueuedEntityRemoveTaskSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/QueuedEntityRemoveTaskSearch.ts#L12)

___

### entityType

• **entityType**: [`QueuedEntityRemoveTaskType`](../README.md#queuedentityremovetasktype)

Gets or sets the Entity Type of the [QueuedEntityRemoveTask](QueuedEntityRemoveTask.md) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/QueuedEntityRemoveTaskSearch.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/QueuedEntityRemoveTaskSearch.ts#L14)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the FromDate of the [QueuedEntityRemoveTask](QueuedEntityRemoveTask.md) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/QueuedEntityRemoveTaskSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/QueuedEntityRemoveTaskSearch.ts#L16)

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

• **status**: [`QueuedEntityRemoveTaskStatus`](../README.md#queuedentityremovetaskstatus)

Gets or sets the Status of the [QueuedEntityRemoveTaskStatus](../README.md#queuedentityremovetaskstatus) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/QueuedEntityRemoveTaskSearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/QueuedEntityRemoveTaskSearch.ts#L18)

___

### toDate

• **toDate**: `Date`

Gets or sets the ToDate of the [QueuedEntityRemoveTask](QueuedEntityRemoveTask.md) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/QueuedEntityRemoveTaskSearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/QueuedEntityRemoveTaskSearch.ts#L20)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
