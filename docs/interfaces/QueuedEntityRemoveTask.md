[@fairfleet/geotab](../README.md) / QueuedEntityRemoveTask

# Interface: QueuedEntityRemoveTask

Represents an Entity that has been queued to be deleted

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`QueuedEntityRemoveTask`**

## Table of contents

### Properties

- [dateCompleted](QueuedEntityRemoveTask.md#datecompleted)
- [dateSubmitted](QueuedEntityRemoveTask.md#datesubmitted)
- [entityReferenceId](QueuedEntityRemoveTask.md#entityreferenceid)
- [entityType](QueuedEntityRemoveTask.md#entitytype)
- [id](QueuedEntityRemoveTask.md#id)
- [numberOfEntitiesDeleted](QueuedEntityRemoveTask.md#numberofentitiesdeleted)
- [remainingNumberToDelete](QueuedEntityRemoveTask.md#remainingnumbertodelete)
- [status](QueuedEntityRemoveTask.md#status)
- [userId](QueuedEntityRemoveTask.md#userid)

## Properties

### dateCompleted

• **dateCompleted**: `Date`

Gets or sets the date the entity deletion request was completed.

#### Defined in

[src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts#L12)

___

### dateSubmitted

• **dateSubmitted**: `Date`

Gets or sets the date the entity deletion request was submitted by a User.

#### Defined in

[src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts#L14)

___

### entityReferenceId

• **entityReferenceId**: `string`

Gets or sets the Id to reference the Entity that is queued for deletion.

#### Defined in

[src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts#L16)

___

### entityType

• **entityType**: [`QueuedEntityRemoveTaskType`](../README.md#queuedentityremovetasktype)

Gets or sets the type of Entity that has been queued for deletion.

#### Defined in

[src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts#L18)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### numberOfEntitiesDeleted

• **numberOfEntitiesDeleted**: `number`

Gets or sets number of associated entities that have been deleted by this entity deletion request.

#### Defined in

[src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts#L20)

___

### remainingNumberToDelete

• **remainingNumberToDelete**: `number`

Gets or sets number of associated entities remaining with this entity deletion request.

#### Defined in

[src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts#L22)

___

### status

• **status**: [`QueuedEntityRemoveTaskStatus`](../README.md#queuedentityremovetaskstatus)

Gets or sets the current status of the entity deletion request.

#### Defined in

[src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts#L24)

___

### userId

• **userId**: `string`

Gets or sets a value indicating the user who submitted the deletion request.

#### Defined in

[src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/QueuedEntityRemoveTask.ts#L26)
