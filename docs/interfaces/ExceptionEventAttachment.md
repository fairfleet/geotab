[@fairfleet/geotab](../README.md) / ExceptionEventAttachment

# Interface: ExceptionEventAttachment

An uploaded [MediaFile](MediaFile.md) associated with an ExceptionEventAttachment.ExceptionEvent instance.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`ExceptionEventAttachment`**

## Table of contents

### Properties

- [dateTime](ExceptionEventAttachment.md#datetime)
- [exceptionEvent](ExceptionEventAttachment.md#exceptionevent)
- [id](ExceptionEventAttachment.md#id)
- [mediaFileAttachment](ExceptionEventAttachment.md#mediafileattachment)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the DateTime of the last time there was a change to the [ExceptionEventAttachment](ExceptionEventAttachment.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachment.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachment.ts#L12)

___

### exceptionEvent

• **exceptionEvent**: [`ExceptionEvent`](ExceptionEvent.md)

Gets or sets the ExceptionEventAttachment.ExceptionEvent that this [ExceptionEventAttachment](ExceptionEventAttachment.md) is based on.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachment.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachment.ts#L14)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### mediaFileAttachment

• **mediaFileAttachment**: [`MediaFile`](MediaFile.md)

Gets or sets the [MediaFile](MediaFile.md) attachment associated with the ExceptionEventAttachment.ExceptionEvent instance.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachment.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachment.ts#L16)
