[@fairfleet/geotab](../README.md) / MimeTask

# Interface: MimeTask

<para />
 A task that has been created to facilitate additional processing of MimeContent[TextMessage](TextMessage.md)s.
 <para />

**`Deprecated`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`MimeTask`**

## Table of contents

### Properties

- [completed](MimeTask.md#completed)
- [dateTime](MimeTask.md#datetime)
- [id](MimeTask.md#id)
- [mimeTaskType](MimeTask.md#mimetasktype)
- [textMessageId](MimeTask.md#textmessageid)

## Properties

### completed

• **completed**: `Date`

Gets or sets the date and time the message was processed. Default [MaxDate].

#### Defined in

[src/types/Checkmate/ObjectModel/MimeTask.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/MimeTask.ts#L17)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time the task was created.

#### Defined in

[src/types/Checkmate/ObjectModel/MimeTask.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/MimeTask.ts#L19)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### mimeTaskType

• **mimeTaskType**: [`MimeTaskType`](MimeTaskType.md)

Gets or sets the MimeTaskType which deterimes which processing workflow is executed.

#### Defined in

[src/types/Checkmate/ObjectModel/MimeTask.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/MimeTask.ts#L21)

___

### textMessageId

• **textMessageId**: `string`

Gets or sets the TextMessage Id to be processed.

#### Defined in

[src/types/Checkmate/ObjectModel/MimeTask.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/MimeTask.ts#L23)
