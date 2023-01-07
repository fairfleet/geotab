[@fairfleet/geotab](../README.md) / RuleSearch

# Interface: RuleSearch

The object used to specify the arguments when searching for a
 [Rule](Rule.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`RuleSearch`**

## Table of contents

### Properties

- [baseType](RuleSearch.md#basetype)
- [category](RuleSearch.md#category)
- [groupFilterCondition](RuleSearch.md#groupfiltercondition)
- [groups](RuleSearch.md#groups)
- [id](RuleSearch.md#id)
- [includeZoneStopRules](RuleSearch.md#includezonestoprules)
- [name](RuleSearch.md#name)
- [version](RuleSearch.md#version)
- [zoneTypes](RuleSearch.md#zonetypes)

## Properties

### baseType

• **baseType**: [`ExceptionRuleBaseType`](../README.md#exceptionrulebasetype)

Gets or sets search for Rules that are this
 [ExceptionRuleBaseType](../README.md#exceptionrulebasetype); either Custom, Stock, or ZoneStop.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts#L21)

___

### category

• **category**: [`ExceptionRuleCategory`](../README.md#exceptionrulecategory)

Gets or sets search for Rules that are in this
 [ExceptionRuleCategory](../README.md#exceptionrulecategory); either ApplicationExceptionRule, UserExceptionRules or ZoneStopExceptionRules.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts#L26)

___

### groupFilterCondition

• **groupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets the groups to find the rules belonging to parents or children of the groups using and/or relationship.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts#L28)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Rules that are members of these [GroupSearch](GroupSearch.md)(s) one of
 it's children or one of it's parents.
 Available GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts:35](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts#L35)

___

### id

• **id**: `string`

Gets or sets search for a [Rule](Rule.md) with this
 Id.

**`Remarks`**

Id cannot be used with any other search properties.

#### Overrides

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts:42](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts#L42)

___

### includeZoneStopRules

• **includeZoneStopRules**: `boolean`

Gets or sets include zone stop rules. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts:44](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts#L44)

___

### name

• **name**: `string`

Gets or sets search for Rules with this Name. Wildcard can be used by prepending/appending "%" to string. Example
 "%comments%".

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts:49](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts#L49)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### zoneTypes

• **zoneTypes**: [`ZoneType`](ZoneType.md)[]

Gets or sets the list of [ZoneType](ZoneType.md) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts:51](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/RuleSearch.ts#L51)
