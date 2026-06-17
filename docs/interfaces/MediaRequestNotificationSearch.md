[@fairfleet/geotab](../README.md) / MediaRequestNotificationSearch

# Interface: MediaRequestNotificationSearch

The object used to specify the arguments when searching for [MediaRequestNotification](MediaRequestNotification.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`MediaRequestNotificationSearch`**

## Table of contents

### Properties

- [id](MediaRequestNotificationSearch.md#id)
- [includeDismissed](MediaRequestNotificationSearch.md#includedismissed)
- [mediaRequestId](MediaRequestNotificationSearch.md#mediarequestid)
- [recipientId](MediaRequestNotificationSearch.md#recipientid)
- [version](MediaRequestNotificationSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeDismissed

• **includeDismissed**: `boolean`

Gets or sets whether to include notifications that have been sent to the notification sender service.

#### Defined in

[src/types/Checkmate/ObjectModel/MediaRequestNotificationSearch.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MediaRequestNotificationSearch.ts#L10)

___

### mediaRequestId

• **mediaRequestId**: `string`

Gets or sets search for media request notification by media request id.

#### Defined in

[src/types/Checkmate/ObjectModel/MediaRequestNotificationSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MediaRequestNotificationSearch.ts#L12)

___

### recipientId

• **recipientId**: `string`

Gets or sets search for media request notification by recipient id.

#### Defined in

[src/types/Checkmate/ObjectModel/MediaRequestNotificationSearch.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MediaRequestNotificationSearch.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
