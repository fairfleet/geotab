[@fairfleet/geotab](../README.md) / DocumentScanning

# Interface: DocumentScanning

Document scanning related information for various entity types (e.g., Work Orders).
 Contains document scanning processing state, failure details, timestamps, and source information.
 This is a separate entity that relates to other entities by EntityId and EntityType.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`DocumentScanning`**

## Table of contents

### Properties

- [entityId](DocumentScanning.md#entityid)
- [entityType](DocumentScanning.md#entitytype)
- [failureDetails](DocumentScanning.md#failuredetails)
- [failureType](DocumentScanning.md#failuretype)
- [id](DocumentScanning.md#id)
- [jobId](DocumentScanning.md#jobid)
- [metadata](DocumentScanning.md#metadata)
- [processingCompletedAt](DocumentScanning.md#processingcompletedat)
- [processingStartedAt](DocumentScanning.md#processingstartedat)
- [sourceMediaFileId](DocumentScanning.md#sourcemediafileid)
- [state](DocumentScanning.md#state)
- [version](DocumentScanning.md#version)

## Properties

### entityId

• **entityId**: `string`

Gets or sets the ID of the associated entity (e.g., MaintenanceWorkOrder).

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts#L17)

___

### entityType

• **entityType**: ``"WorkOrder"``

Gets or sets the type of entity this document scanning is associated with.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts#L19)

___

### failureDetails

• **failureDetails**: `string`

Gets or sets the document scanning failure details.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts#L21)

___

### failureType

• **failureType**: [`DocScanningFailureType`](../README.md#docscanningfailuretype)

Gets or sets the type of document scanning failure if applicable.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts#L23)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### jobId

• **jobId**: `string`

Gets or sets the external job ID from document scanning service.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts#L25)

___

### metadata

• **metadata**: `string`

Gets or sets the metadata JSON for document scanning.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts#L27)

___

### processingCompletedAt

• **processingCompletedAt**: `Date`

Gets or sets the timestamp when document scanning processing completed.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts#L29)

___

### processingStartedAt

• **processingStartedAt**: `Date`

Gets or sets the timestamp when document scanning processing started.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts#L31)

___

### sourceMediaFileId

• **sourceMediaFileId**: `string`

Gets or sets the ID of the MediaFile that triggered document scanning.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts#L33)

___

### state

• **state**: [`DocScanningState`](../README.md#docscanningstate)

Gets or sets the document scanning processing state.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DocumentScanning.ts#L35)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
