[@fairfleet/geotab](../README.md) / HosRulesetConfigParameters

# Interface: HosRulesetConfigParameters

The configuration parameters of
 [HosRulesetConfig](HosRulesetConfig.md).

## Table of contents

### Properties

- [adverseDoesNotExtendWorkday](HosRulesetConfigParameters.md#adversedoesnotextendworkday)
- [bigDayBonus](HosRulesetConfigParameters.md#bigdaybonus)
- [bigDayIgnoresCycleReset](HosRulesetConfigParameters.md#bigdayignorescyclereset)
- [bigDayMaxPerCycle](HosRulesetConfigParameters.md#bigdaymaxpercycle)
- [customStartOfDay](HosRulesetConfigParameters.md#customstartofday)
- [cycle](HosRulesetConfigParameters.md#cycle)
- [daily](HosRulesetConfigParameters.md#daily)
- [exempt](HosRulesetConfigParameters.md#exempt)
- [labsEnabled](HosRulesetConfigParameters.md#labsenabled)
- [logRetentionDays](HosRulesetConfigParameters.md#logretentiondays)
- [oilwell](HosRulesetConfigParameters.md#oilwell)
- [resetPreviousCycle](HosRulesetConfigParameters.md#resetpreviouscycle)
- [rest](HosRulesetConfigParameters.md#rest)
- [splitType](HosRulesetConfigParameters.md#splittype)
- [workRestConfig](HosRulesetConfigParameters.md#workrestconfig)
- [workday](HosRulesetConfigParameters.md#workday)

## Properties

### adverseDoesNotExtendWorkday

• **adverseDoesNotExtendWorkday**: `boolean`

Gets or sets a value indicating whether adverse driving extend workday.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:11](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L11)

___

### bigDayBonus

• **bigDayBonus**: `number`

Gets or sets the big day bonus.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:13](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L13)

___

### bigDayIgnoresCycleReset

• **bigDayIgnoresCycleReset**: `boolean`

Gets or sets a value indicating whether a big day ignores a cycle reset.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L15)

___

### bigDayMaxPerCycle

• **bigDayMaxPerCycle**: `number`

Gets or sets the maximum big day exemptions that can be applied per cycle.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L17)

___

### customStartOfDay

• **customStartOfDay**: `boolean`

Gets or sets a value indicating whether a ruleset can have a custom start of day set.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L19)

___

### cycle

• **cycle**: `unknown`

Gets or sets the HosRulesetCycleConfig.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L21)

___

### daily

• **daily**: `unknown`

Gets or sets the HosRulesetDailyConfig.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L23)

___

### exempt

• **exempt**: `boolean`

Gets or sets a value indicating whether exempt or not.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:25](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L25)

___

### labsEnabled

• **labsEnabled**: `boolean`

Gets or sets a value indicating whether labs are enabled or not.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:27](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L27)

___

### logRetentionDays

• **logRetentionDays**: `number`

Gets or sets the days of log retention.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:29](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L29)

___

### oilwell

• **oilwell**: `boolean`

Gets or sets a value indicating whether there is an oil well exemption or not.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:31](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L31)

___

### resetPreviousCycle

• **resetPreviousCycle**: `boolean`

Gets or sets a value indicating whether a reset previous cycle is true.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:33](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L33)

___

### rest

• **rest**: `unknown`

Gets or sets the HosRulesetRestConfig.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:35](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L35)

___

### splitType

• **splitType**: `string`

Gets or sets the split type.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:37](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L37)

___

### workRestConfig

• **workRestConfig**: `unknown`[]

Gets or sets the EwdWorkRestConfig for WWD rulesets.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:41](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L41)

___

### workday

• **workday**: `unknown`

Gets or sets the HosRulesetWorkdayConfig.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts:39](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigParameters.ts#L39)
