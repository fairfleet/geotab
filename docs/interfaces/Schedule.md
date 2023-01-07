[@fairfleet/geotab](../README.md) / Schedule

# Interface: Schedule

The class representing a schedule.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Schedule`**

## Table of contents

### Properties

- [daysOfWeek](Schedule.md#daysofweek)
- [endDate](Schedule.md#enddate)
- [frequency](Schedule.md#frequency)
- [id](Schedule.md#id)
- [repeatCycle](Schedule.md#repeatcycle)
- [startDate](Schedule.md#startdate)

## Properties

### daysOfWeek

• **daysOfWeek**: `number`[]

Gets or sets the days which schedule repeats on.

#### Defined in

src/types/Checkmate/ObjectModel/Schedule.ts:11

___

### endDate

• **endDate**: `Date`

Gets or sets the end date for the schedule.

#### Defined in

src/types/Checkmate/ObjectModel/Schedule.ts:13

___

### frequency

• **frequency**: [`ScheduleFrequency`](../README.md#schedulefrequency)

Gets or sets the frequency of the schedule.

#### Defined in

src/types/Checkmate/ObjectModel/Schedule.ts:15

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### repeatCycle

• **repeatCycle**: `number`

Gets or sets the repeat cycle.

#### Defined in

src/types/Checkmate/ObjectModel/Schedule.ts:17

___

### startDate

• **startDate**: `Date`

Gets or sets the start date for the schedule.

#### Defined in

src/types/Checkmate/ObjectModel/Schedule.ts:19
