[@fairfleet/geotab](../README.md) / NotificationMaintenanceReminderData

# Interface: NotificationMaintenanceReminderData

The notification data pertaining to Maintenance Reminders.

## Hierarchy

- [`NotificationData`](../README.md#notificationdata)

  ↳ **`NotificationMaintenanceReminderData`**

## Table of contents

### Properties

- [device](NotificationMaintenanceReminderData.md#device)
- [eventRule](NotificationMaintenanceReminderData.md#eventrule)
- [id](NotificationMaintenanceReminderData.md#id)
- [info](NotificationMaintenanceReminderData.md#info)
- [remainingDays](NotificationMaintenanceReminderData.md#remainingdays)
- [remainingDistance](NotificationMaintenanceReminderData.md#remainingdistance)
- [remainingEngineHours](NotificationMaintenanceReminderData.md#remainingenginehours)
- [type](NotificationMaintenanceReminderData.md#type)

## Properties

### device

• **device**: [`Device`](Device.md)

Gets or sets the device serial nubmer for this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts:13](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts#L13)

___

### eventRule

• **eventRule**: [`EventRule`](EventRule.md)

Gets or sets the maintenance reminder that holds the data for this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts#L15)

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

Gets or sets the information for the notification maintenance reminder data.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts#L17)

___

### remainingDays

• **remainingDays**: `string`

Gets or sets the event rule that holds the data for this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts#L19)

___

### remainingDistance

• **remainingDistance**: `number`

Gets or sets the event rule that holds the data for this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts#L21)

___

### remainingEngineHours

• **remainingEngineHours**: `string`

Gets or sets the event rule that holds the data for this notification.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts#L23)

___

### type

• **type**: [`NotificationType`](../README.md#notificationtype)

Gets or sets the [NotificationType](../README.md#notificationtype) of the notification.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts:25](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationMaintenanceReminderData.ts#L25)
