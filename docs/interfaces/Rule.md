[@fairfleet/geotab](../README.md) / Rule

# Interface: Rule

A rule is the definition of conditions that, when "violated", will generate an
 [ExceptionEvent](ExceptionEvent.md).
 The rule's logic is defined by it's tree of [Condition](Condition.md)
 (s).
 It's condition tree will be evaluated against data for device(s) that are members of the rule's assigned group(s) or the
 device(s)/driver(s) defined in the rule condition tree.
 The conditions will be evaluated independently against the assets in the selected groups.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`Rule`**

## Table of contents

### Properties

- [activeFrom](Rule.md#activefrom)
- [activeTo](Rule.md#activeto)
- [baseType](Rule.md#basetype)
- [color](Rule.md#color)
- [comment](Rule.md#comment)
- [condition](Rule.md#condition)
- [deletedDateTime](Rule.md#deleteddatetime)
- [groups](Rule.md#groups)
- [id](Rule.md#id)
- [monitors](Rule.md#monitors)
- [name](Rule.md#name)
- [reason](Rule.md#reason)
- [state](Rule.md#state)
- [version](Rule.md#version)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets start date of the Rule's notification activity period.

**`Remarks`**

The events with earlier date than this date will not be reported through the notification engine.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Rule.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/Rule.ts#L28)

___

### activeTo

• **activeTo**: `Date`

Gets or sets end date of the Rule's notification activity period.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Rule.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/Rule.ts#L30)

___

### baseType

• **baseType**: [`ExceptionRuleBaseType`](../README.md#exceptionrulebasetype)

Gets or sets the [ExceptionRuleBaseType](../README.md#exceptionrulebasetype) of the rule; either Custom, Stock or ZoneStop.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Rule.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/Rule.ts#L32)

___

### color

• **color**: [`Color`](Color.md)

Gets or sets the [Color](Color.md) associated with this rule.
 Used when rendering [ExceptionEvent](ExceptionEvent.md)(s) related to this rule. Color is defined by the parameters "Red", "Green" and "Blue".

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Rule.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/Rule.ts#L37)

___

### comment

• **comment**: `string`

Gets or sets free text field where any user information can be stored and referenced for this entity.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Rule.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/Rule.ts#L39)

___

### condition

• **condition**: [`Condition`](Condition.md)

Gets or sets the hierarchical tree of [Condition](Condition.md)(s) defining
 the logic of a rule. A rule should have one or more conditions in it's tree.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Rule.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/Rule.ts#L44)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Rule.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/Rule.ts#L48)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets a list of [Group](Group.md)(s) assigned to the rule. Device in these groups
 will have the rule evaluated against their data.

**`Remarks`**

Device conditions will override devices in the assigned groups.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Rule.ts:55](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/Rule.ts#L55)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Rule.ts:57](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/Rule.ts#L57)

___

### monitors

• **monitors**: `unknown`[]

Gets or sets the RuleMonitor(s).

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Rule.ts:59](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/Rule.ts#L59)

___

### name

• **name**: `string`

Gets or sets the name of this entity which identifies it and is used when displaying this entity.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Rule.ts:61](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/Rule.ts#L61)

___

### reason

• **reason**: [`ExceptionRuleReason`](ExceptionRuleReason.md)

Gets or sets the [ExceptionRuleReason](ExceptionRuleReason.md) of the exception rule.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Rule.ts:63](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/Rule.ts#L63)

___

### state

• **state**: [`ExceptionRuleState`](ExceptionRuleState.md)

Gets or sets the [ExceptionRuleState](ExceptionRuleState.md) of the exception rule.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Rule.ts:65](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/Rule.ts#L65)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
