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
- [driver](DriverRegulation.md#driver)
- [ewdAvailability](DriverRegulation.md#ewdavailability)
- [id](DriverRegulation.md#id)
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

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L15)

___

### currentDutyStatus

• **currentDutyStatus**: [`DutyStatusLogType`](../README.md#dutystatuslogtype)

Gets or sets the latest duty status log type [DutyStatusLogType](../README.md#dutystatuslogtype) affecting availability or violations.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L17)

___

### cycleSummaries

• **cycleSummaries**: `unknown`[]

Gets or sets the cycle summaries.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L19)

___

### daySummaries

• **daySummaries**: `unknown`[]

Gets or sets the day summaries.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L21)

___

### driver

• **driver**: [`User`](User.md)

Gets or sets the DriverRegulation.Driver.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L23)

___

### ewdAvailability

• **ewdAvailability**: `unknown`[]

Gets or sets the DriverRegulation.EwdAvailability.

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:30](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L30)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### offDutyNeeded

• **offDutyNeeded**: `string`

Gets or sets when off duty is needed.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:32](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L32)

___

### restBreakNeeded

• **restBreakNeeded**: `string`

Gets or sets when rest break is needed.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:34](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L34)

___

### rulesetsThatCannotChange

• **rulesetsThatCannotChange**: [`UserHosRuleSet`](UserHosRuleSet.md)[]

Gets or sets rulesets that cannot be changed currently.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:36](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L36)

___

### violations

• **violations**: [`DutyStatusViolation`](DutyStatusViolation.md)[]

Gets or sets the [DutyStatusViolation](DutyStatusViolation.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:38](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L38)

___

### workdaySummaries

• **workdaySummaries**: `unknown`[]

Gets or sets the workday summaries.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulation.ts:40](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DriverRegulation.ts#L40)
