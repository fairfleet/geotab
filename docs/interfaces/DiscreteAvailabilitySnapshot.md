[@fairfleet/geotab](../README.md) / DiscreteAvailabilitySnapshot

# Interface: DiscreteAvailabilitySnapshot

Represents a snapshot of discrete HOS availability values for a driver at a specific point in time.

**`Deprecated`**

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`DiscreteAvailabilitySnapshot`**

## Table of contents

### Properties

- [cycle](DiscreteAvailabilitySnapshot.md#cycle)
- [cycleDriving](DiscreteAvailabilitySnapshot.md#cycledriving)
- [cycleRest](DiscreteAvailabilitySnapshot.md#cyclerest)
- [dailyDriving](DiscreteAvailabilitySnapshot.md#dailydriving)
- [dailyDuty](DiscreteAvailabilitySnapshot.md#dailyduty)
- [dailyOff](DiscreteAvailabilitySnapshot.md#dailyoff)
- [dailyRest](DiscreteAvailabilitySnapshot.md#dailyrest)
- [dateTime](DiscreteAvailabilitySnapshot.md#datetime)
- [deletedDateTime](DiscreteAvailabilitySnapshot.md#deleteddatetime)
- [driving](DiscreteAvailabilitySnapshot.md#driving)
- [duty](DiscreteAvailabilitySnapshot.md#duty)
- [id](DiscreteAvailabilitySnapshot.md#id)
- [is16HourExemptionAvailable](DiscreteAvailabilitySnapshot.md#is16hourexemptionavailable)
- [isAdverseDrivingApplied](DiscreteAvailabilitySnapshot.md#isadversedrivingapplied)
- [isAdverseDrivingExemptionAvailable](DiscreteAvailabilitySnapshot.md#isadversedrivingexemptionavailable)
- [isExemptionReducedRestAvailable](DiscreteAvailabilitySnapshot.md#isexemptionreducedrestavailable)
- [isOffDutyDeferralExemptionAvailable](DiscreteAvailabilitySnapshot.md#isoffdutydeferralexemptionavailable)
- [isRailroadExemptionAvailable](DiscreteAvailabilitySnapshot.md#israilroadexemptionavailable)
- [isSplittingWorkday](DiscreteAvailabilitySnapshot.md#issplittingworkday)
- [rest](DiscreteAvailabilitySnapshot.md#rest)
- [user](DiscreteAvailabilitySnapshot.md#user)
- [version](DiscreteAvailabilitySnapshot.md#version)
- [workday](DiscreteAvailabilitySnapshot.md#workday)

## Properties

### cycle

• **cycle**: `number`

Gets or sets the cycle availability duration.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L15)

___

### cycleDriving

• **cycleDriving**: `number`

Gets or sets the cycle driving availability duration.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L17)

___

### cycleRest

• **cycleRest**: `number`

Gets or sets the cycle rest availability duration.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L19)

___

### dailyDriving

• **dailyDriving**: `number`

Gets or sets the daily driving availability duration.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L21)

___

### dailyDuty

• **dailyDuty**: `number`

Gets or sets the daily duty availability duration.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L23)

___

### dailyOff

• **dailyOff**: `number`

Gets or sets the daily off-duty availability duration.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L25)

___

### dailyRest

• **dailyRest**: `number`

Gets or sets the daily rest availability duration.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L27)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the timestamp when this availability was calculated.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L29)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L33)

___

### driving

• **driving**: `number`

Gets or sets the driving availability duration.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L35)

___

### duty

• **duty**: `number`

Gets or sets the duty availability duration.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L37)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### is16HourExemptionAvailable

• **is16HourExemptionAvailable**: `boolean`

Gets or sets a value indicating whether the 16-hour exemption is available.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L39)

___

### isAdverseDrivingApplied

• **isAdverseDrivingApplied**: `boolean`

Gets or sets a value indicating whether the adverse driving exemption has been applied.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L41)

___

### isAdverseDrivingExemptionAvailable

• **isAdverseDrivingExemptionAvailable**: `boolean`

Gets or sets a value indicating whether the adverse driving exemption is available.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L43)

___

### isExemptionReducedRestAvailable

• **isExemptionReducedRestAvailable**: `boolean`

Gets or sets a value indicating whether the exemption reduced rest is available.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L45)

___

### isOffDutyDeferralExemptionAvailable

• **isOffDutyDeferralExemptionAvailable**: `boolean`

Gets or sets a value indicating whether the off-duty deferral exemption is available.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L47)

___

### isRailroadExemptionAvailable

• **isRailroadExemptionAvailable**: `boolean`

Gets or sets a value indicating whether the railroad exemption is available.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L49)

___

### isSplittingWorkday

• **isSplittingWorkday**: `boolean`

Gets or sets a value indicating whether the workday is being split.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L51)

___

### rest

• **rest**: `number`

Gets or sets the rest availability duration.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:53](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L53)

___

### user

• **user**: [`User`](User.md)

Gets or sets the [User](User.md) (driver) for whom this availability was calculated.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:55](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L55)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)

___

### workday

• **workday**: `number`

Gets or sets the workday availability duration.

#### Defined in

[src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts:57](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DiscreteAvailabilitySnapshot.ts#L57)
