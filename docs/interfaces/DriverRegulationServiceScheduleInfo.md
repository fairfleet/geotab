[@fairfleet/geotab](../README.md) / DriverRegulationServiceScheduleInfo

# Interface: DriverRegulationServiceScheduleInfo

Represents the information about the driver regulation service schedule.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DriverRegulationServiceScheduleInfo`**

## Table of contents

### Properties

- [backfillCompleted](DriverRegulationServiceScheduleInfo.md#backfillcompleted)
- [calculatedUpToDateTime](DriverRegulationServiceScheduleInfo.md#calculateduptodatetime)
- [driver](DriverRegulationServiceScheduleInfo.md#driver)
- [id](DriverRegulationServiceScheduleInfo.md#id)
- [nextValidationDateTime](DriverRegulationServiceScheduleInfo.md#nextvalidationdatetime)

## Properties

### backfillCompleted

• **backfillCompleted**: `boolean`

Gets or sets a value indicating whether the initial 180-day backfill has been completed for this user.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulationServiceScheduleInfo.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulationServiceScheduleInfo.ts#L11)

___

### calculatedUpToDateTime

• **calculatedUpToDateTime**: `Date`

Gets or sets the date and time of the calculated up to.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulationServiceScheduleInfo.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulationServiceScheduleInfo.ts#L13)

___

### driver

• **driver**: [`User`](User.md)

Gets or sets the [User](User.md) associated with the duty status violation.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulationServiceScheduleInfo.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulationServiceScheduleInfo.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### nextValidationDateTime

• **nextValidationDateTime**: `Date`

Gets or sets the date and time of the next validation.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulationServiceScheduleInfo.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulationServiceScheduleInfo.ts#L17)
