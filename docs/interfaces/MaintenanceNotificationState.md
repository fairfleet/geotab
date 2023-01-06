[@fairfleet/geotab](../README.md) / MaintenanceNotificationState

# Interface: MaintenanceNotificationState

An upcoming event related to ab [EventOccurrence](EventOccurrence.md).

**`Deprecated`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`MaintenanceNotificationState`**

## Table of contents

### Properties

- [data](MaintenanceNotificationState.md#data)
- [dateNotified](MaintenanceNotificationState.md#datenotified)
- [daysDue](MaintenanceNotificationState.md#daysdue)
- [device](MaintenanceNotificationState.md#device)
- [engineHoursDue](MaintenanceNotificationState.md#enginehoursdue)
- [id](MaintenanceNotificationState.md#id)
- [notificationRule](MaintenanceNotificationState.md#notificationrule)
- [odometerDue](MaintenanceNotificationState.md#odometerdue)

## Properties

### data

• **data**: [`NotificationMaintenanceReminderData`](NotificationMaintenanceReminderData.md)

Gets or sets the notification data attached to this state

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts#L17)

___

### dateNotified

• **dateNotified**: `Date`

Gets or sets the date on which the notification was last issued.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts#L19)

___

### daysDue

• **daysDue**: `string`

Gets or sets the due days at the time the notification was last issued.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts#L21)

___

### device

• **device**: [`Device`](Device.md)

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts:25](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts#L25)

___

### engineHoursDue

• **engineHoursDue**: `string`

Gets or sets the due engine hours at the time the notification was last issued.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts:27](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts#L27)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### notificationRule

• **notificationRule**: [`MaintenanceNotificationRule`](MaintenanceNotificationRule.md)

Gets or sets the associated MaintenanceNotificaitonRule [MaintenanceNotificationRule](MaintenanceNotificationRule.md).

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts:29](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts#L29)

___

### odometerDue

• **odometerDue**: `number`

Gets or sets the due kilometers at the time the notification was last issued.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts:31](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/MaintenanceNotificationState.ts#L31)
