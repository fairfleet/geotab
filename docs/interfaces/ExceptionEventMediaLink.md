[@fairfleet/geotab](../README.md) / ExceptionEventMediaLink

# Interface: ExceptionEventMediaLink

The link between a media request and the associated exception event.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`ExceptionEventMediaLink`**

## Table of contents

### Properties

- [exceptionEvent](ExceptionEventMediaLink.md#exceptionevent)
- [exceptionEventId](ExceptionEventMediaLink.md#exceptioneventid)
- [id](ExceptionEventMediaLink.md#id)
- [mediaRequestId](ExceptionEventMediaLink.md#mediarequestid)
- [mediaStatus](ExceptionEventMediaLink.md#mediastatus)
- [mediaType](ExceptionEventMediaLink.md#mediatype)
- [startTime](ExceptionEventMediaLink.md#starttime)
- [version](ExceptionEventMediaLink.md#version)

## Properties

### exceptionEvent

• **exceptionEvent**: [`ExceptionEvent`](ExceptionEvent.md)

Gets or sets the associated ExceptionEventMediaLink.ExceptionEvent that this [ExceptionEventMediaLink](ExceptionEventMediaLink.md) is based on.

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLink.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLink.ts#L13)

___

### exceptionEventId

• **exceptionEventId**: `string`

Gets or sets the exception event id.

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLink.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLink.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### mediaRequestId

• **mediaRequestId**: `string`

Gets or sets the media request id.

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLink.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLink.ts#L17)

___

### mediaStatus

• **mediaStatus**: [`MediaLinkStatus`](../README.md#medialinkstatus)

Gets or sets the status of the [ExceptionEventMediaLink](ExceptionEventMediaLink.md) .

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLink.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLink.ts#L19)

___

### mediaType

• **mediaType**: [`MediaContentType`](../README.md#mediacontenttype)

Gets or sets the [MediaContentType](../README.md#mediacontenttype).

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLink.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLink.ts#L21)

___

### startTime

• **startTime**: `Date`

Gets or sets the start time.

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLink.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLink.ts#L23)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
