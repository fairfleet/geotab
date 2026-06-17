[@fairfleet/geotab](../README.md) / DriverRegulation

# Interface: DriverRegulation

Detailed information for Hours of Service regulation for a driver.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DriverRegulation`**

## Table of contents

### Properties

- [availability](DriverRegulation.md#availability)
- [currentDutyStatus](DriverRegulation.md#currentdutystatus)
- [cycleSummaries](DriverRegulation.md#cyclesummaries)
- [daySummaries](DriverRegulation.md#daysummaries)
- [discreteAvailability](DriverRegulation.md#discreteavailability)
- [driver](DriverRegulation.md#driver)
- [ewdAvailability](DriverRegulation.md#ewdavailability)
- [id](DriverRegulation.md#id)
- [nextHosEventDate](DriverRegulation.md#nexthoseventdate)
- [offDutyNeeded](DriverRegulation.md#offdutyneeded)
- [restBreakNeeded](DriverRegulation.md#restbreakneeded)
- [rulesetsThatCannotChange](DriverRegulation.md#rulesetsthatcannotchange)
- [violations](DriverRegulation.md#violations)
- [workdaySummaries](DriverRegulation.md#workdaysummaries)

## Properties

### availability

• **availability**: [`DutyStatusAvailability`](DutyStatusAvailability.md)

Gets or sets the [DutyStatusAvailability](DutyStatusAvailability.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L16)

___

### currentDutyStatus

• **currentDutyStatus**: [`DutyStatusLogType`](../README.md#dutystatuslogtype)

Gets or sets the latest duty status log type [DutyStatusLogType](../README.md#dutystatuslogtype) affecting availability or violations.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L18)

___

### cycleSummaries

• **cycleSummaries**: `unknown`[]

Gets or sets the cycle summaries.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L20)

___

### daySummaries

• **daySummaries**: `unknown`[]

Gets or sets the day summaries.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L22)

___

### discreteAvailability

• **discreteAvailability**: [`DiscreteAvailabilitySnapshot`](DiscreteAvailabilitySnapshot.md)

Gets or sets the discrete availability values for each violation type.
 Unlike DriverRegulation.Availability which contains aggregated values, this contains raw individual availability values.
 Only populated when getDiscreteAvailability is requested from HosEngine.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L28)

___

### driver

• **driver**: [`User`](User.md)

Gets or sets the DriverRegulation.Driver.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L30)

___

### ewdAvailability

• **ewdAvailability**: `unknown`[]

Gets or sets the DriverRegulation.EwdAvailability.

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L37)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### nextHosEventDate

• **nextHosEventDate**: `Date`

Gets or sets the next Hos event date.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L39)

___

### offDutyNeeded

• **offDutyNeeded**: `string`

Gets or sets when off duty is needed.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L41)

___

### restBreakNeeded

• **restBreakNeeded**: `string`

Gets or sets when rest break is needed.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L43)

___

### rulesetsThatCannotChange

• **rulesetsThatCannotChange**: [`UserHosRuleSet`](UserHosRuleSet.md)[]

Gets or sets rulesets that cannot be changed currently.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L45)

___

### violations

• **violations**: [`DutyStatusViolation`](DutyStatusViolation.md)[]

Gets or sets the [DutyStatusViolation](DutyStatusViolation.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L47)

___

### workdaySummaries

• **workdaySummaries**: `unknown`[]

Gets or sets the workday summaries.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L49)
