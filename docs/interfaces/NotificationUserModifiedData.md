[@fairfleet/geotab](../README.md) / NotificationUserModifiedData

# Interface: NotificationUserModifiedData

A class for notifying of changes to a [User](User.md) by an administrator [User](User.md). Provides information
 about who was changed, who did the changes, what type of changes happened, and any values that were changed if applicable.

**`Remarks`**

Matching [NotificationType](../README.md#notificationtype) is NotificationType.UserModified.
 Notifications of this type are only delivered to SystemNotice subscribers who have valid Group scope and [SecurityIdentifier](../README.md#securityidentifier).

## Hierarchy

- [`NotificationData`](../README.md#notificationdata)

  ↳ **`NotificationUserModifiedData`**

## Table of contents

### Properties

- [id](NotificationUserModifiedData.md#id)
- [modificationAction](NotificationUserModifiedData.md#modificationaction)
- [userModifiedInfo](NotificationUserModifiedData.md#usermodifiedinfo)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

NotificationData.id

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### modificationAction

• **modificationAction**: [`UserModification`](../README.md#usermodification)

Gets the type of [UserModification](../README.md#usermodification) that occurred.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationUserModifiedData.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationUserModifiedData.ts#L17)

___

### userModifiedInfo

• **userModifiedInfo**: `unknown`

Gets additional info about the NotificationUserModifiedData.ModificationAction stored in a data class.

**`Remarks`**

This info is JSON-serialized and stored in the "sInfo" column of the NotificationData table.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationUserModifiedData.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationUserModifiedData.ts#L23)
