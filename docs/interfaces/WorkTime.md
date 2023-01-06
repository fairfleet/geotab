[@fairfleet/geotab](../README.md) / WorkTime

# Interface: WorkTime

The set of WorkTimeDetail(s)
 defining periods during the week that are considered as part of regular working hours. Work times that apply to all
 times are represented by "WorkTimeAllHoursId".

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`WorkTime`**

## Table of contents

### Properties

- [comment](WorkTime.md#comment)
- [details](WorkTime.md#details)
- [holidayGroup](WorkTime.md#holidaygroup)
- [id](WorkTime.md#id)
- [name](WorkTime.md#name)

## Properties

### comment

• **comment**: `string`

Gets or sets free text field where any user information can be stored and referenced for this entity. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/WorkTime.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/WorkTime.ts#L15)

___

### details

• **details**: `unknown`[]

Gets or sets the list of WorkTimeDetail(s).

#### Defined in

[src/types/Checkmate/ObjectModel/WorkTime.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/WorkTime.ts#L17)

___

### holidayGroup

• **holidayGroup**: [`WorkTimeHolidayGroupId`](WorkTimeHolidayGroupId.md)

Gets or sets the [WorkTimeHolidayGroupId](WorkTimeHolidayGroupId.md).

#### Defined in

[src/types/Checkmate/ObjectModel/WorkTime.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/WorkTime.ts#L19)

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

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity. Maximum length [50].

#### Overrides

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/WorkTime.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/WorkTime.ts#L21)
