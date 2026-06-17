[@fairfleet/geotab](../README.md) / MaintenanceSchedule

# Interface: MaintenanceSchedule

The rule describing an event.

## Table of contents

### Properties

- [active](MaintenanceSchedule.md#active)
- [assetCount](MaintenanceSchedule.md#assetcount)
- [comment](MaintenanceSchedule.md#comment)
- [dateTime](MaintenanceSchedule.md#datetime)
- [dayOfMonth](MaintenanceSchedule.md#dayofmonth)
- [dayOfWeek](MaintenanceSchedule.md#dayofweek)
- [dayOfWeekName](MaintenanceSchedule.md#dayofweekname)
- [days](MaintenanceSchedule.md#days)
- [deletedDateTime](MaintenanceSchedule.md#deleteddatetime)
- [engineHours](MaintenanceSchedule.md#enginehours)
- [eventDate](MaintenanceSchedule.md#eventdate)
- [eventType](MaintenanceSchedule.md#eventtype)
- [groups](MaintenanceSchedule.md#groups)
- [id](MaintenanceSchedule.md#id)
- [kilometers](MaintenanceSchedule.md#kilometers)
- [maintenanceType](MaintenanceSchedule.md#maintenancetype)
- [months](MaintenanceSchedule.md#months)
- [name](MaintenanceSchedule.md#name)
- [notificationTemplate](MaintenanceSchedule.md#notificationtemplate)
- [repeats](MaintenanceSchedule.md#repeats)
- [repeatsDisplay](MaintenanceSchedule.md#repeatsdisplay)
- [weeks](MaintenanceSchedule.md#weeks)
- [workRequestCount](MaintenanceSchedule.md#workrequestcount)

## Properties

### active

• **active**: `boolean`

Gets or sets a value indicating whether the event rule is active or not.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L12)

___

### assetCount

• **assetCount**: `number`

Gets or sets the number of assets associated with this event rule.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L14)

___

### comment

• **comment**: `string`

Gets or sets free text field where any user information can be stored and referenced for this entity.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L16)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the MaintenanceSchedule.DateTime of the event.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L18)

___

### dayOfMonth

• **dayOfMonth**: `number`

Gets or sets the day of month.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L20)

___

### dayOfWeek

• **dayOfWeek**: `number`

Gets or sets the day of week.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L22)

___

### dayOfWeekName

• **dayOfWeekName**: `string`

Gets or sets the day of week name.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L24)

___

### days

• **days**: `number`

Gets or sets the days.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L26)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L30)

___

### engineHours

• **engineHours**: `string`

Gets or sets the engine hours.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L32)

___

### eventDate

• **eventDate**: `Date`

Gets or sets the event date.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L34)

___

### eventType

• **eventType**: [`EventType`](EventType.md)

Gets or sets the type of the event.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L36)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets a list of [Group](Group.md)(s) assigned to the event rule.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L38)

___

### id

• **id**: `string`

Gets or sets Gets or sets the unique identifier for this entity. See Id.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L40)

___

### kilometers

• **kilometers**: `number`

Gets or sets the kilometers.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L42)

___

### maintenanceType

• **maintenanceType**: [`EventType`](EventType.md)

Gets or sets the maintenance type.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L44)

___

### months

• **months**: `number`

Gets or sets the months.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L46)

___

### name

• **name**: `string`

Gets or sets the name of this entity which identifies it and is used when displaying this entity.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L48)

___

### notificationTemplate

• **notificationTemplate**: [`NotificationBinaryFile`](NotificationBinaryFile.md)

Gets or sets the notification template [NotificationBinaryFile](NotificationBinaryFile.md) for the event.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L50)

___

### repeats

• **repeats**: `boolean`

Gets or sets a value indicating whether the schedule repeats.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L52)

___

### repeatsDisplay

• **repeatsDisplay**: `boolean`

Gets or sets another value indicating whether the schedule repeats but this will be translated.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L54)

___

### weeks

• **weeks**: `number`

Gets or sets the weeks.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L56)

___

### workRequestCount

• **workRequestCount**: `number`

Gets or sets the number of work requests associated with this schedule.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MaintenanceSchedule.ts#L58)
