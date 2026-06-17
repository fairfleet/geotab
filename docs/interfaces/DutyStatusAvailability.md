[@fairfleet/geotab](../README.md) / DutyStatusAvailability

# Interface: DutyStatusAvailability

Driver Availability for Hours of Service regulations.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DutyStatusAvailability`**

## Table of contents

### Properties

- [availabilities](DutyStatusAvailability.md#availabilities)
- [cycle](DutyStatusAvailability.md#cycle)
- [cycleAvailabilities](DutyStatusAvailability.md#cycleavailabilities)
- [cycleDriving](DutyStatusAvailability.md#cycledriving)
- [cycleRest](DutyStatusAvailability.md#cyclerest)
- [driver](DutyStatusAvailability.md#driver)
- [driving](DutyStatusAvailability.md#driving)
- [drivingBreakDuration](DutyStatusAvailability.md#drivingbreakduration)
- [duty](DutyStatusAvailability.md#duty)
- [dutySinceCycleRest](DutyStatusAvailability.md#dutysincecyclerest)
- [id](DutyStatusAvailability.md#id)
- [is16HourExemptionAvailable](DutyStatusAvailability.md#is16hourexemptionavailable)
- [isAdverseDrivingApplied](DutyStatusAvailability.md#isadversedrivingapplied)
- [isAdverseDrivingExemptionAvailable](DutyStatusAvailability.md#isadversedrivingexemptionavailable)
- [isOffDutyDeferralExemptionAvailable](DutyStatusAvailability.md#isoffdutydeferralexemptionavailable)
- [isRailroadExemptionAvailable](DutyStatusAvailability.md#israilroadexemptionavailable)
- [recap](DutyStatusAvailability.md#recap)
- [rest](DutyStatusAvailability.md#rest)
- [workday](DutyStatusAvailability.md#workday)

## Properties

### availabilities

• **availabilities**: `unknown`[]

Gets a list of DutyStatusAvailabilityDuration(s) for a driver.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L11)

___

### cycle

• **cycle**: `string`

Gets or sets the duration of cycle duty hours left.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L13)

___

### cycleAvailabilities

• **cycleAvailabilities**: `unknown`[]

Gets or sets cycle available to the driver in the future.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L15)

___

### cycleDriving

• **cycleDriving**: `string`

Gets or sets the duration of cycle driving hours left.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L17)

___

### cycleRest

• **cycleRest**: `string`

Gets or sets the duration left before cycle rest must be taken.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L19)

___

### driver

• **driver**: [`User`](User.md)

Gets or sets the [User](User.md) associated with the duty status availability.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L21)

___

### driving

• **driving**: `string`

Gets or sets the duration left for driving.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L23)

___

### drivingBreakDuration

• **drivingBreakDuration**: `string`

Gets or sets the duration of the driving break (USA only)

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L25)

___

### duty

• **duty**: `string`

Gets or sets the duration of total on-duty time left in a day.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L27)

___

### dutySinceCycleRest

• **dutySinceCycleRest**: `string`

Gets or sets the duty hours left since Cycle Rest.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L29)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### is16HourExemptionAvailable

• **is16HourExemptionAvailable**: `boolean`

Gets or sets if 16 hour exemption is available.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L31)

___

### isAdverseDrivingApplied

• **isAdverseDrivingApplied**: `boolean`

Gets or sets if adverse driving exemption is applied.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L33)

___

### isAdverseDrivingExemptionAvailable

• **isAdverseDrivingExemptionAvailable**: `boolean`

Gets or sets if adverse driving exemption is available.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L35)

___

### isOffDutyDeferralExemptionAvailable

• **isOffDutyDeferralExemptionAvailable**: `boolean`

Gets or sets if off-duty deferral exemption is available.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L37)

___

### isRailroadExemptionAvailable

• **isRailroadExemptionAvailable**: `boolean`

Gets or sets if railroad exemption is available.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L39)

___

### recap

• **recap**: `unknown`[]

Gets or sets chronological array representing each day's On-duty time since beginning of cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L41)

___

### rest

• **rest**: `string`

Gets or sets the duration left before rest break must be taken.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L43)

___

### workday

• **workday**: `string`

Gets or sets the duration of workday left in a day. Workday is a consecutive window that begins with first on-duty.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L45)
