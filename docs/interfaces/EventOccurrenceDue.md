[@fairfleet/geotab](../README.md) / EventOccurrenceDue

# Interface: EventOccurrenceDue

An upcoming event related to ab [EventOccurrence](EventOccurrence.md).

**`Deprecated`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EventOccurrenceDue`**

## Table of contents

### Properties

- [createdDate](EventOccurrenceDue.md#createddate)
- [dueInDays](EventOccurrenceDue.md#dueindays)
- [dueInEngineHours](EventOccurrenceDue.md#dueinenginehours)
- [dueInOdometer](EventOccurrenceDue.md#dueinodometer)
- [dueOnDate](EventOccurrenceDue.md#dueondate)
- [eventDue](EventOccurrenceDue.md#eventdue)
- [guid](EventOccurrenceDue.md#guid)
- [id](EventOccurrenceDue.md#id)
- [isActiveSnooze](EventOccurrenceDue.md#isactivesnooze)
- [isSnoozed](EventOccurrenceDue.md#issnoozed)
- [overdueByDays](EventOccurrenceDue.md#overduebydays)
- [overdueByEngineHours](EventOccurrenceDue.md#overduebyenginehours)
- [overdueByOdometer](EventOccurrenceDue.md#overduebyodometer)
- [severity](EventOccurrenceDue.md#severity)
- [snoozeDuration](EventOccurrenceDue.md#snoozeduration)
- [snoozedDate](EventOccurrenceDue.md#snoozeddate)
- [snoozedDueOn](EventOccurrenceDue.md#snoozeddueon)
- [status](EventOccurrenceDue.md#status)

## Properties

### createdDate

• **createdDate**: `Date`

Gets or sets the created date of the maintenanceupcomingevents record.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L16)

___

### dueInDays

• **dueInDays**: `number`

Gets or sets the number of days the event is due in.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L18)

___

### dueInEngineHours

• **dueInEngineHours**: `string`

Gets or sets the engine hours the event is due.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L20)

___

### dueInOdometer

• **dueInOdometer**: `number`

Gets or sets the odometer the event is due.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L22)

___

### dueOnDate

• **dueOnDate**: `Date`

Gets or sets the date the event is due.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L24)

___

### eventDue

• **eventDue**: [`EventOccurrence`](EventOccurrence.md)

Gets or sets the event that is due or overdue.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L26)

___

### guid

• **guid**: `string`

Gets the records GUID.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L28)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Overrides

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L32)

___

### isActiveSnooze

• **isActiveSnooze**: `boolean`

Gets or sets if snoozed is currently active

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L34)

___

### isSnoozed

• **isSnoozed**: `boolean`

Gets or sets if snoozed has not been deactivated

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L36)

___

### overdueByDays

• **overdueByDays**: `number`

Gets or sets the number of days the event is overdue by.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L38)

___

### overdueByEngineHours

• **overdueByEngineHours**: `string`

Gets or sets the engine hours the event is overdue by.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L40)

___

### overdueByOdometer

• **overdueByOdometer**: `number`

Gets or sets the odometer the event is overdue by.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L42)

___

### severity

• **severity**: [`MaintenanceSeverity`](../README.md#maintenanceseverity)

Gets or sets the severity of the event.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L44)

___

### snoozeDuration

• **snoozeDuration**: `number`

Gets or sets the snoozed duration

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L50)

___

### snoozedDate

• **snoozedDate**: `Date`

Gets or sets the date snoozed

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L46)

___

### snoozedDueOn

• **snoozedDueOn**: `Date`

Gets or sets the date the snoozed is due

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L48)

___

### status

• **status**: `string`

Gets or sets the status of the event.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L52)
