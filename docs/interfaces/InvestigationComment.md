[@fairfleet/geotab](../README.md) / InvestigationComment

# Interface: InvestigationComment

Represents a user comment associated with an [Investigation](Investigation.md).

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`InvestigationComment`**

## Table of contents

### Properties

- [comment](InvestigationComment.md#comment)
- [createdDate](InvestigationComment.md#createddate)
- [id](InvestigationComment.md#id)
- [investigationId](InvestigationComment.md#investigationid)
- [user](InvestigationComment.md#user)

## Properties

### comment

• **comment**: `string`

Gets or sets the text body of the comment.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationComment.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationComment.ts#L11)

___

### createdDate

• **createdDate**: `Date`

Gets or sets the timestamp when the comment was created.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationComment.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationComment.ts#L13)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### investigationId

• **investigationId**: `string`

Gets or sets the ID of the [Investigation](Investigation.md) that this comment belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationComment.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationComment.ts#L15)

___

### user

• **user**: [`User`](User.md)

Gets or sets the [User](User.md) who created the comment.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationComment.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationComment.ts#L17)
