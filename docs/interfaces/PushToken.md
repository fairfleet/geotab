[@fairfleet/geotab](../README.md) / PushToken

# Interface: PushToken

Represents a relationship between a user and a mobile push notification token. Push tokens are used as a virtual address to send push notifications to that user through third-party services.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`PushToken`**

## Table of contents

### Properties

- [appId](PushToken.md#appid)
- [dateTimeRemoved](PushToken.md#datetimeremoved)
- [dateTimeSubmitted](PushToken.md#datetimesubmitted)
- [dateTimeUpdated](PushToken.md#datetimeupdated)
- [id](PushToken.md#id)
- [platform](PushToken.md#platform)
- [service](PushToken.md#service)
- [token](PushToken.md#token)
- [user](PushToken.md#user)

## Properties

### appId

• **appId**: `string`

Gets or sets the ID of the app the token is sourced from. E.g. com.geotab.mygeotab for the MyGeotab app.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts#L13)

___

### dateTimeRemoved

• **dateTimeRemoved**: `Date`

Gets or sets the timestamp of when the token was removed/invalidated.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts#L15)

___

### dateTimeSubmitted

• **dateTimeSubmitted**: `Date`

Gets or sets the timestamp of when the token was created.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts#L17)

___

### dateTimeUpdated

• **dateTimeUpdated**: `Date`

Gets or sets the timestamp of when the token was last updated.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts#L19)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### platform

• **platform**: [`PushNotificationPlatform`](../README.md#pushnotificationplatform)

Gets or sets the [PushNotificationPlatform](../README.md#pushnotificationplatform) the token is sourced from.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts#L21)

___

### service

• **service**: [`PushNotificationService`](../README.md#pushnotificationservice)

Gets or sets the [PushNotificationService](../README.md#pushnotificationservice) the token is associated with.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts#L23)

___

### token

• **token**: `string`

Gets or sets the value of the notification service's token.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts#L25)

___

### user

• **user**: [`User`](User.md)

Gets or sets the PushToken.User the token is associated with.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushToken.ts#L27)
