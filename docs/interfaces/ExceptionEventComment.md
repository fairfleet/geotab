[@fairfleet/geotab](../README.md) / ExceptionEventComment

# Interface: ExceptionEventComment

A class representing a user comment on an ExceptionEventComment.ExceptionEvent instance.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`ExceptionEventComment`**

## Table of contents

### Properties

- [dateTime](ExceptionEventComment.md#datetime)
- [exceptionEvent](ExceptionEventComment.md#exceptionevent)
- [id](ExceptionEventComment.md#id)
- [text](ExceptionEventComment.md#text)
- [user](ExceptionEventComment.md#user)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the time when the comment was created.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventComment.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventComment.ts#L12)

___

### exceptionEvent

• **exceptionEvent**: [`ExceptionEvent`](ExceptionEvent.md)

Gets or sets the ExceptionEventComment.ExceptionEvent that this comment is in relation to.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventComment.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventComment.ts#L14)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### text

• **text**: `string`

Gets or sets the text body of the comment.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventComment.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventComment.ts#L16)

___

### user

• **user**: [`User`](User.md)

Gets or sets the ExceptionEventComment.User who created the comment.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventComment.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventComment.ts#L18)
