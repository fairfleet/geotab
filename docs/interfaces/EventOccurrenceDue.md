[@fairfleet/geotab](../README.md) / EventOccurrenceDue

# Interface: EventOccurrenceDue

An upcoming event related to ab [EventOccurrence](EventOccurrence.md).

**`Deprecated`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EventOccurrenceDue`**

## Table of contents

### Properties

- [dueInDays](EventOccurrenceDue.md#dueindays)
- [dueInEngineHours](EventOccurrenceDue.md#dueinenginehours)
- [dueInOdometer](EventOccurrenceDue.md#dueinodometer)
- [dueOnDate](EventOccurrenceDue.md#dueondate)
- [eventDue](EventOccurrenceDue.md#eventdue)
- [id](EventOccurrenceDue.md#id)
- [isActiveSnooze](EventOccurrenceDue.md#isactivesnooze)
- [isSnoozed](EventOccurrenceDue.md#issnoozed)
- [overdueByDays](EventOccurrenceDue.md#overduebydays)
- [overdueByEngineHours](EventOccurrenceDue.md#overduebyenginehours)
- [overdueByOdometer](EventOccurrenceDue.md#overduebyodometer)
- [snoozeDuration](EventOccurrenceDue.md#snoozeduration)
- [snoozedDate](EventOccurrenceDue.md#snoozeddate)
- [snoozedDueOn](EventOccurrenceDue.md#snoozeddueon)

## Properties

### dueInDays

• **dueInDays**: `number`

Gets or sets the number of days the event is due in.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L15)

___

### dueInEngineHours

• **dueInEngineHours**: `string`

Gets or sets the engine hours the event is due.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L17)

___

### dueInOdometer

• **dueInOdometer**: `number`

Gets or sets the odometer the event is due.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L19)

___

### dueOnDate

• **dueOnDate**: `Date`

Gets or sets the date the event is due.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L21)

___

### eventDue

• **eventDue**: [`EventOccurrence`](EventOccurrence.md)

Gets or sets the event that is due or overdue.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:23](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L23)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Overrides

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:27](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L27)

___

### isActiveSnooze

• **isActiveSnooze**: `boolean`

Gets or sets if snoozed is currently active

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:29](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L29)

___

### isSnoozed

• **isSnoozed**: `boolean`

Gets or sets if snoozed has not been deactivated

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:31](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L31)

___

### overdueByDays

• **overdueByDays**: `number`

Gets or sets the number of days the event is overdue by.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:33](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L33)

___

### overdueByEngineHours

• **overdueByEngineHours**: `string`

Gets or sets the engine hours the event is overdue by.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:35](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L35)

___

### overdueByOdometer

• **overdueByOdometer**: `number`

Gets or sets the odometer the event is overdue by.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:37](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L37)

___

### snoozeDuration

• **snoozeDuration**: `number`

Gets or sets the snoozed duration

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:43](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L43)

___

### snoozedDate

• **snoozedDate**: `Date`

Gets or sets the date snoozed

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:39](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L39)

___

### snoozedDueOn

• **snoozedDueOn**: `Date`

Gets or sets the date the snoozed is due

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts:41](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceDue.ts#L41)
