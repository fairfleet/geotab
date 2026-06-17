[@fairfleet/geotab](../README.md) / EntityUploadRequest

# Interface: EntityUploadRequest

Represents a request to upload an entity with versioning information.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EntityUploadRequest`**

## Table of contents

### Properties

- [additionalInfo](EntityUploadRequest.md#additionalinfo)
- [currentVersion](EntityUploadRequest.md#currentversion)
- [entityName](EntityUploadRequest.md#entityname)
- [fromDate](EntityUploadRequest.md#fromdate)
- [fromVersion](EntityUploadRequest.md#fromversion)
- [id](EntityUploadRequest.md#id)
- [requestedDateTime](EntityUploadRequest.md#requesteddatetime)
- [status](EntityUploadRequest.md#status)
- [toDate](EntityUploadRequest.md#todate)
- [toVersion](EntityUploadRequest.md#toversion)

## Properties

### additionalInfo

• **additionalInfo**: [`EntityUploadRequestAdditionalInfo`](EntityUploadRequestAdditionalInfo.md)

Gets or sets the [EntityUploadRequestAdditionalInfo](EntityUploadRequestAdditionalInfo.md).

#### Defined in

[src/types/Checkmate/ObjectModel/EntityUploadRequest.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityUploadRequest.ts#L12)

___

### currentVersion

• **currentVersion**: `number`

Gets or sets the current version of the entity.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityUploadRequest.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityUploadRequest.ts#L14)

___

### entityName

• **entityName**: `string`

Gets or sets the name of the entity.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityUploadRequest.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityUploadRequest.ts#L16)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the date from which the entity is being uploaded.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityUploadRequest.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityUploadRequest.ts#L18)

___

### fromVersion

• **fromVersion**: `number`

Gets or sets the From version from which the entity is being uploaded.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityUploadRequest.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityUploadRequest.ts#L20)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### requestedDateTime

• **requestedDateTime**: `Date`

Gets or sets the date and time of the request.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityUploadRequest.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityUploadRequest.ts#L22)

___

### status

• **status**: [`EntityUploadRequestStatus`](../README.md#entityuploadrequeststatus)

Gets or sets the status of the entity upload request.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityUploadRequest.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityUploadRequest.ts#L24)

___

### toDate

• **toDate**: `Date`

Gets or sets the date to which the entity is being uploaded.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityUploadRequest.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityUploadRequest.ts#L26)

___

### toVersion

• **toVersion**: `number`

Gets or sets the To version to which the entity is being uploaded.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityUploadRequest.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityUploadRequest.ts#L28)
