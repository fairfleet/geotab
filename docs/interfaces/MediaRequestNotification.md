[@fairfleet/geotab](../README.md) / MediaRequestNotification

# Interface: MediaRequestNotification

Represents a notification for a media request sent to a recipient.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`MediaRequestNotification`**

## Table of contents

### Properties

- [deleted](MediaRequestNotification.md#deleted)
- [id](MediaRequestNotification.md#id)
- [mediaRequestId](MediaRequestNotification.md#mediarequestid)
- [recipientId](MediaRequestNotification.md#recipientid)
- [version](MediaRequestNotification.md#version)

## Properties

### deleted

• **deleted**: `Date`

Gets or sets the timestamp when the notification was sent to the notification sender service.

#### Defined in

[src/types/Checkmate/ObjectModel/MediaRequestNotification.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MediaRequestNotification.ts#L10)

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

[src/types/Checkmate/ObjectModel/MediaRequestNotification.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MediaRequestNotification.ts#L12)

___

### recipientId

• **recipientId**: `string`

Gets or sets the recipient id.

#### Defined in

[src/types/Checkmate/ObjectModel/MediaRequestNotification.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MediaRequestNotification.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the [MediaRequestNotification](MediaRequestNotification.md) search criteria.

#### Overrides

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/MediaRequestNotification.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MediaRequestNotification.ts#L16)
