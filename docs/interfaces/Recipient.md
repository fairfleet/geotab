[@fairfleet/geotab](../README.md) / Recipient

# Interface: Recipient

The recipient for a specific notification. A recipient is linked to
 [Rule](Rule.md)(s) via a
 [DistributionList](DistributionList.md).
 When a [Rule](Rule.md) is violated the
 [DistributionList](DistributionList.md) linked recipient receives a notification.
 The type of recipient is defined by it's [RecipientType](../README.md#recipienttype).
 Not all properties of this object will have a value at the same time they are dependent on the
 [RecipientType](../README.md#recipienttype).
 Recipient is represented by the string "NoRecipientId" where there is no recipient.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Recipient`**

## Table of contents

### Properties

- [address](Recipient.md#address)
- [dataModeType](Recipient.md#datamodetype)
- [group](Recipient.md#group)
- [id](Recipient.md#id)
- [mediaTriggerSettings](Recipient.md#mediatriggersettings)
- [notificationBinaryFile](Recipient.md#notificationbinaryfile)
- [recipientType](Recipient.md#recipienttype)
- [severity](Recipient.md#severity)
- [tripType](Recipient.md#triptype)
- [user](Recipient.md#user)

## Properties

### address

• **address**: `string`

Gets or sets the email address used when sending notifications via Email.

#### Defined in

[src/types/Checkmate/ObjectModel/Recipient.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Recipient.ts#L27)

___

### dataModeType

• **dataModeType**: [`DataModeType`](DataModeType.md)

Gets or sets the [DataModeType](DataModeType.md) to assign the related device to.

#### Defined in

[src/types/Checkmate/ObjectModel/Recipient.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Recipient.ts#L29)

___

### group

• **group**: [`Group`](Group.md)

Gets or sets the [Group](Group.md) to assign the related device to.

#### Defined in

[src/types/Checkmate/ObjectModel/Recipient.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Recipient.ts#L31)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### mediaTriggerSettings

• **mediaTriggerSettings**: [`MediaTriggerSettings`](MediaTriggerSettings.md)

Gets or sets the [MediaTriggerSettings](MediaTriggerSettings.md) to use for interacting with the media service.

#### Defined in

[src/types/Checkmate/ObjectModel/Recipient.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Recipient.ts#L33)

___

### notificationBinaryFile

• **notificationBinaryFile**: [`NotificationBinaryFile`](NotificationBinaryFile.md)

Gets or sets the NotificationBinaryFile to notify with.

#### Defined in

[src/types/Checkmate/ObjectModel/Recipient.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Recipient.ts#L35)

___

### recipientType

• **recipientType**: [`RecipientType`](../README.md#recipienttype)

Gets or sets the [RecipientType](../README.md#recipienttype) (type of notification message) this instance refers to.

#### Defined in

[src/types/Checkmate/ObjectModel/Recipient.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Recipient.ts#L37)

___

### severity

• **severity**: `number`

Gets or sets the severity level for CreateWorkRequest recipients.

#### Defined in

[src/types/Checkmate/ObjectModel/Recipient.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Recipient.ts#L39)

___

### tripType

• **tripType**: [`TripType`](../README.md#triptype)

Gets or sets the [TripType](../README.md#triptype) to assign the related device to.

#### Defined in

[src/types/Checkmate/ObjectModel/Recipient.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Recipient.ts#L41)

___

### user

• **user**: [`User`](User.md)

Gets or sets the [User](User.md) to receive notification.

#### Defined in

[src/types/Checkmate/ObjectModel/Recipient.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Recipient.ts#L43)
