[@fairfleet/geotab](../README.md) / DutyStatusAvailability

# Interface: DutyStatusAvailability

Driver Availability for Hours of Service regulations.

## Table of contents

### Properties

- [availabilities](DutyStatusAvailability.md#availabilities)
- [cycle](DutyStatusAvailability.md#cycle)
- [cycleAvailabilities](DutyStatusAvailability.md#cycleavailabilities)
- [cycleRest](DutyStatusAvailability.md#cyclerest)
- [driver](DutyStatusAvailability.md#driver)
- [driving](DutyStatusAvailability.md#driving)
- [duty](DutyStatusAvailability.md#duty)
- [dutySinceCycleRest](DutyStatusAvailability.md#dutysincecyclerest)
- [id](DutyStatusAvailability.md#id)
- [is16HourExemptionAvailable](DutyStatusAvailability.md#is16hourexemptionavailable)
- [isAdverseDrivingExemptionAvailable](DutyStatusAvailability.md#isadversedrivingexemptionavailable)
- [isOffDutyDeferralExemptionAvailable](DutyStatusAvailability.md#isoffdutydeferralexemptionavailable)
- [recap](DutyStatusAvailability.md#recap)
- [rest](DutyStatusAvailability.md#rest)
- [workday](DutyStatusAvailability.md#workday)

## Properties

### availabilities

• **availabilities**: `unknown`[]

Gets a list of DutyStatusAvailabilityDuration(s) for a driver.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L12)

___

### cycle

• **cycle**: `string`

Gets or sets the duration of cycle hours left.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L14)

___

### cycleAvailabilities

• **cycleAvailabilities**: `unknown`[]

Gets or sets cycle available to the driver in the future.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L16)

___

### cycleRest

• **cycleRest**: `string`

Gets or sets the duration left before cycle rest must be taken.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L18)

___

### driver

• **driver**: [`User`](User.md)

Gets or sets the [User](User.md) associated with the duty status availability.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L20)

___

### driving

• **driving**: `string`

Gets or sets the duration left for driving.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L22)

___

### duty

• **duty**: `string`

Gets or sets the duration of total on-duty time left in a day.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:24](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L24)

___

### dutySinceCycleRest

• **dutySinceCycleRest**: `string`

Gets or sets the duty hours left since Cycle Rest.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:26](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L26)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:28](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L28)

___

### is16HourExemptionAvailable

• **is16HourExemptionAvailable**: `boolean`

Gets or sets if 16 hour exemption is available.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:30](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L30)

___

### isAdverseDrivingExemptionAvailable

• **isAdverseDrivingExemptionAvailable**: `boolean`

Gets or sets if adverse driving exemption is available.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:32](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L32)

___

### isOffDutyDeferralExemptionAvailable

• **isOffDutyDeferralExemptionAvailable**: `boolean`

Gets or sets if off-duty deferral exemption is available.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:34](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L34)

___

### recap

• **recap**: `unknown`[]

Gets or sets chronological array representing each day's On-duty time since beginning of cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:36](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L36)

___

### rest

• **rest**: `string`

Gets or sets the duration left before rest break must be taken.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:38](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L38)

___

### workday

• **workday**: `string`

Gets or sets the duration of workday left in a day. Workday is a consecutive window that begins with first on-duty.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts:40](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DutyStatusAvailability.ts#L40)
