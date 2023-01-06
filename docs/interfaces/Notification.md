[@fairfleet/geotab](../README.md) / Notification

# Interface: Notification

This class represents a notification that has to be send to a recipient.

**`Deprecated`**

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`Notification`**

## Table of contents

### Properties

- [dateTime](Notification.md#datetime)
- [dateTimeEnd](Notification.md#datetimeend)
- [id](Notification.md#id)
- [notificationApplicationExceptionData](Notification.md#notificationapplicationexceptiondata)
- [notificationData](Notification.md#notificationdata)
- [notificationExceptionData](Notification.md#notificationexceptiondata)
- [notificationExceptionForUsersData](Notification.md#notificationexceptionforusersdata)
- [notificationForAdminUsers](Notification.md#notificationforadminusers)
- [notificationInfoData](Notification.md#notificationinfodata)
- [notificationMaintenanceReminderData](Notification.md#notificationmaintenancereminderdata)
- [notificationMessageData](Notification.md#notificationmessagedata)
- [notificationNewsData](Notification.md#notificationnewsdata)
- [notificationUserModifiedData](Notification.md#notificationusermodifieddata)
- [recipient](Notification.md#recipient)
- [version](Notification.md#version)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets gets the date.

#### Defined in

[src/types/Checkmate/ObjectModel/Notification.ts:25](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Notification.ts#L25)

___

### dateTimeEnd

• **dateTimeEnd**: `Date`

Gets or sets the timestamp indication until when this notification was processed (viewed, delivered).

#### Defined in

[src/types/Checkmate/ObjectModel/Notification.ts:27](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Notification.ts#L27)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### notificationApplicationExceptionData

• **notificationApplicationExceptionData**: [`NotificationApplicationExceptionData`](NotificationApplicationExceptionData.md)

Gets or sets the [NotificationApplicationExceptionData](NotificationApplicationExceptionData.md) data that provides
 the data for this notification.

**`Remarks`**

Deprecated: Please send all exceptions directly to Error Reporting rather than using
 Notification.NotificationApplicationExceptionData

#### Defined in

[src/types/Checkmate/ObjectModel/Notification.ts:35](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Notification.ts#L35)

___

### notificationData

• **notificationData**: [`Entity`](Entity.md)

Gets or sets the notification data.

#### Defined in

[src/types/Checkmate/ObjectModel/Notification.ts:37](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Notification.ts#L37)

___

### notificationExceptionData

• **notificationExceptionData**: [`NotificationExceptionData`](NotificationExceptionData.md)

Gets or sets the [NotificationExceptionData](NotificationExceptionData.md) data that provides the data
 for this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/Notification.ts:42](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Notification.ts#L42)

___

### notificationExceptionForUsersData

• **notificationExceptionForUsersData**: [`NotificationExceptionForUsersData`](NotificationExceptionForUsersData.md)

Gets or sets the Notification.NotificationExceptionForUsersData data that provides
 the data for this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/Notification.ts:47](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Notification.ts#L47)

___

### notificationForAdminUsers

• **notificationForAdminUsers**: [`NotificationForAdminUsersData`](NotificationForAdminUsersData.md)

Gets or sets the [NotificationForAdminUsersData](NotificationForAdminUsersData.md) data that provides the data for this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/Notification.ts:49](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Notification.ts#L49)

___

### notificationInfoData

• **notificationInfoData**: [`NotificationInfoData`](NotificationInfoData.md)

Gets or sets the [NotificationInfoData](NotificationInfoData.md) data that provides the data for
 this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/Notification.ts:54](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Notification.ts#L54)

___

### notificationMaintenanceReminderData

• **notificationMaintenanceReminderData**: [`NotificationMaintenanceReminderData`](NotificationMaintenanceReminderData.md)

Gets or sets the Notification.NotificationMaintenanceReminderData data that provides the data for this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/Notification.ts:56](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Notification.ts#L56)

___

### notificationMessageData

• **notificationMessageData**: [`NotificationMessageData`](NotificationMessageData.md)

Gets or sets the Notification.NotificationNewsData data that provides the data for this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/Notification.ts:58](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Notification.ts#L58)

___

### notificationNewsData

• **notificationNewsData**: [`NotificationNewsData`](NotificationNewsData.md)

Gets or sets the Notification.NotificationNewsData data that provides the data for this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/Notification.ts:60](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Notification.ts#L60)

___

### notificationUserModifiedData

• **notificationUserModifiedData**: [`NotificationUserModifiedData`](NotificationUserModifiedData.md)

Gets or sets the Notification.NotificationUserModifiedData data that provides the data for this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/Notification.ts:62](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Notification.ts#L62)

___

### recipient

• **recipient**: [`Recipient`](Recipient.md)

Gets or sets the recipient this notification belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/Notification.ts:64](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Notification.ts#L64)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
