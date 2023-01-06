[@fairfleet/geotab](../README.md) / WorkHoliday

# Interface: WorkHoliday

Day that is specified as not being a regular working day.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`WorkHoliday`**

## Table of contents

### Properties

- [date](WorkHoliday.md#date)
- [holidayGroup](WorkHoliday.md#holidaygroup)
- [id](WorkHoliday.md#id)
- [name](WorkHoliday.md#name)

## Properties

### date

• **date**: [`DateTimeWithTimeZone`](DateTimeWithTimeZone.md)

Gets or sets the midnight of the work holiday.

#### Defined in

[src/types/Checkmate/ObjectModel/WorkHoliday.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/WorkHoliday.ts#L12)

___

### holidayGroup

• **holidayGroup**: [`WorkTimeHolidayGroupId`](WorkTimeHolidayGroupId.md)

Gets or sets the holiday group for this holiday day. See
 [WorkTimeHolidayGroupId](WorkTimeHolidayGroupId.md).

#### Defined in

[src/types/Checkmate/ObjectModel/WorkHoliday.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/WorkHoliday.ts#L17)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)
