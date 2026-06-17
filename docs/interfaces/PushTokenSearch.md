[@fairfleet/geotab](../README.md) / PushTokenSearch

# Interface: PushTokenSearch

The object used to specify the arguments when searching for [PushToken](PushToken.md)s.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`PushTokenSearch`**

## Table of contents

### Properties

- [appId](PushTokenSearch.md#appid)
- [fromDateTimeUpdated](PushTokenSearch.md#fromdatetimeupdated)
- [id](PushTokenSearch.md#id)
- [platform](PushTokenSearch.md#platform)
- [service](PushTokenSearch.md#service)
- [toDateTimeUpdated](PushTokenSearch.md#todatetimeupdated)
- [token](PushTokenSearch.md#token)
- [userSearch](PushTokenSearch.md#usersearch)
- [version](PushTokenSearch.md#version)

## Properties

### appId

• **appId**: `string`

Gets or sets the ID of the app the token belongs to. E.g. com.geotab.mygeotab for the MyGeotab app.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts#L13)

___

### fromDateTimeUpdated

• **fromDateTimeUpdated**: `Date`

Gets or sets search for push tokens that were updated at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts#L15)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### platform

• **platform**: [`PushNotificationPlatform`](../README.md#pushnotificationplatform)

Gets or sets the [PushNotificationPlatform](../README.md#pushnotificationplatform) the token is sourced from.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts#L17)

___

### service

• **service**: [`PushNotificationService`](../README.md#pushnotificationservice)

Gets or sets the [PushNotificationService](../README.md#pushnotificationservice) the token is associated with.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts#L19)

___

### toDateTimeUpdated

• **toDateTimeUpdated**: `Date`

Gets or sets search for push tokens that were updated at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts#L21)

___

### token

• **token**: `string`

Gets or sets the value of the notification service's token.

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts#L23)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for PushTokens with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/PushNotifications/PushTokenSearch.ts#L29)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
