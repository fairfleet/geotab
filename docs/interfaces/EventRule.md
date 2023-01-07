[@fairfleet/geotab](../README.md) / EventRule

# Interface: EventRule

The rule describing an event.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`EventRule`**

## Table of contents

### Properties

- [assetCount](EventRule.md#assetcount)
- [comment](EventRule.md#comment)
- [dateTime](EventRule.md#datetime)
- [dayOfMonth](EventRule.md#dayofmonth)
- [dayOfWeek](EventRule.md#dayofweek)
- [dayOfWeekName](EventRule.md#dayofweekname)
- [days](EventRule.md#days)
- [engineHours](EventRule.md#enginehours)
- [eventDate](EventRule.md#eventdate)
- [eventType](EventRule.md#eventtype)
- [groups](EventRule.md#groups)
- [id](EventRule.md#id)
- [kilometers](EventRule.md#kilometers)
- [months](EventRule.md#months)
- [name](EventRule.md#name)
- [notificationTemplate](EventRule.md#notificationtemplate)
- [weeks](EventRule.md#weeks)

## Properties

### assetCount

• **assetCount**: `number`

Gets or sets the number of assets associated with this event rule.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L13)

___

### comment

• **comment**: `string`

Gets or sets free text field where any user information can be stored and referenced for this entity.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L15)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the EventRule.DateTime of the event.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L17)

___

### dayOfMonth

• **dayOfMonth**: `number`

Gets or sets the day of month.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L19)

___

### dayOfWeek

• **dayOfWeek**: `number`

Gets or sets the day of week.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L21)

___

### dayOfWeekName

• **dayOfWeekName**: `string`

Gets or sets the day of week name.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:23](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L23)

___

### days

• **days**: `number`

Gets or sets the days.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:25](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L25)

___

### engineHours

• **engineHours**: `string`

Gets or sets the engine hours.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:27](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L27)

___

### eventDate

• **eventDate**: `Date`

Gets or sets the event date.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:29](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L29)

___

### eventType

• **eventType**: [`EventType`](EventType.md)

Gets or sets the type of the event.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:31](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L31)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets a list of [Group](Group.md)(s) assigned to the event rule.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:33](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L33)

___

### id

• **id**: `string`

Gets or sets gets the unique identifier for this entity. See Id.

#### Overrides

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:35](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L35)

___

### kilometers

• **kilometers**: `number`

Gets or sets the kilometers.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:37](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L37)

___

### months

• **months**: `number`

Gets or sets the months.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:39](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L39)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Overrides

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:41](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L41)

___

### notificationTemplate

• **notificationTemplate**: [`NotificationBinaryFile`](NotificationBinaryFile.md)

Gets or sets the notification template [NotificationBinaryFile](NotificationBinaryFile.md) for the event.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:43](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L43)

___

### weeks

• **weeks**: `number`

Gets or sets the weeks.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRule.ts:45](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventRule.ts#L45)
