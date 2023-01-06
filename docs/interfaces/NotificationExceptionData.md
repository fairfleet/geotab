[@fairfleet/geotab](../README.md) / NotificationExceptionData

# Interface: NotificationExceptionData

The notification data pertaining to Exception Rules.

## Hierarchy

- [`NotificationData`](../README.md#notificationdata)

  ↳ **`NotificationExceptionData`**

## Table of contents

### Properties

- [exceptionEvent](NotificationExceptionData.md#exceptionevent)
- [id](NotificationExceptionData.md#id)
- [info](NotificationExceptionData.md#info)
- [type](NotificationExceptionData.md#type)

## Properties

### exceptionEvent

• **exceptionEvent**: [`ExceptionEvent`](ExceptionEvent.md)

Gets or sets the exception event that holds the data for this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationExceptionData.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationExceptionData.ts#L12)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

NotificationData.id

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### info

• **info**: `string`

Gets or sets the information for the notification exception data.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationExceptionData.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationExceptionData.ts#L14)

___

### type

• **type**: [`NotificationType`](../README.md#notificationtype)

Gets or sets the [NotificationType](../README.md#notificationtype) of the notification.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationExceptionData.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationExceptionData.ts#L16)
