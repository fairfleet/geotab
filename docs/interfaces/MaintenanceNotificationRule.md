[@fairfleet/geotab](../README.md) / MaintenanceNotificationRule

# Interface: MaintenanceNotificationRule

An upcoming event related to ab [EventOccurrence](EventOccurrence.md).

**`Deprecated`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`MaintenanceNotificationRule`**

## Table of contents

### Properties

- [daysDueTrigger](MaintenanceNotificationRule.md#daysduetrigger)
- [engineHoursTrigger](MaintenanceNotificationRule.md#enginehourstrigger)
- [eventRule](MaintenanceNotificationRule.md#eventrule)
- [id](MaintenanceNotificationRule.md#id)
- [odometerTrigger](MaintenanceNotificationRule.md#odometertrigger)
- [recipient](MaintenanceNotificationRule.md#recipient)

## Properties

### daysDueTrigger

• **daysDueTrigger**: `string`

Gets or sets the number of days before the maintenance rule becomes overdue to trigger the notification

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationRule.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/MaintenanceNotificationRule.ts#L16)

___

### engineHoursTrigger

• **engineHoursTrigger**: `string`

Gets or sets the amount of engine hours before the maintenance rule becomes overdue to trigger the notification

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationRule.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/MaintenanceNotificationRule.ts#L18)

___

### eventRule

• **eventRule**: [`EventRule`](EventRule.md)

Gets or sets the maintenance event rule MaintenanceNotificationRule.EventRule for this notification rule.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationRule.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/MaintenanceNotificationRule.ts#L20)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### odometerTrigger

• **odometerTrigger**: `number`

Gets or sets the number of kilometers before the maintenance rule becomes overdue to trigger the notification

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationRule.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/MaintenanceNotificationRule.ts#L22)

___

### recipient

• **recipient**: [`Recipient`](Recipient.md)

Gets or sets the recipient MaintenanceNotificationRule.Recipient of the notification.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationRule.ts:24](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/MaintenanceNotificationRule.ts#L24)
