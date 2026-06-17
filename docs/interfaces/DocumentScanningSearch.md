[@fairfleet/geotab](../README.md) / DocumentScanningSearch

# Interface: DocumentScanningSearch

Search criteria for [DocumentScanning](DocumentScanning.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DocumentScanningSearch`**

## Table of contents

### Properties

- [entityId](DocumentScanningSearch.md#entityid)
- [entityType](DocumentScanningSearch.md#entitytype)
- [id](DocumentScanningSearch.md#id)
- [state](DocumentScanningSearch.md#state)
- [version](DocumentScanningSearch.md#version)

## Properties

### entityId

• **entityId**: `string`

Gets or sets the entity ID to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DocumentScanningSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DocumentScanningSearch.ts#L12)

___

### entityType

• **entityType**: ``"WorkOrder"``

Gets or sets the entity type to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DocumentScanningSearch.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DocumentScanningSearch.ts#L14)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### state

• **state**: [`DocScanningState`](../README.md#docscanningstate)

Gets or sets the document scanning state to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DocumentScanningSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DocumentScanningSearch.ts#L16)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
