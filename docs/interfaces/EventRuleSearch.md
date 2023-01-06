[@fairfleet/geotab](../README.md) / EventRuleSearch

# Interface: EventRuleSearch

The object used to specify the
 arguments when searching for [EventRule](EventRule.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EventRuleSearch`**

## Table of contents

### Properties

- [days](EventRuleSearch.md#days)
- [engineHours](EventRuleSearch.md#enginehours)
- [eventTypeId](EventRuleSearch.md#eventtypeid)
- [eventTypeIds](EventRuleSearch.md#eventtypeids)
- [groupFilterCondition](EventRuleSearch.md#groupfiltercondition)
- [groups](EventRuleSearch.md#groups)
- [id](EventRuleSearch.md#id)
- [includeGroups](EventRuleSearch.md#includegroups)
- [kilometers](EventRuleSearch.md#kilometers)
- [months](EventRuleSearch.md#months)
- [name](EventRuleSearch.md#name)
- [nonRepeating](EventRuleSearch.md#nonrepeating)
- [propertySelector](EventRuleSearch.md#propertyselector)
- [repeats](EventRuleSearch.md#repeats)
- [version](EventRuleSearch.md#version)

## Properties

### days

• **days**: `boolean`

Gets or sets a value indicating whether to filter for EventRules that have the days recurrence field populated.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRuleSearch.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventRuleSearch.ts#L18)

___

### engineHours

• **engineHours**: `boolean`

Gets or sets a value indicating whether to filter for EventRules that are set to not generate recurring events.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRuleSearch.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventRuleSearch.ts#L20)

___

### eventTypeId

• **eventTypeId**: `string`

Gets or sets a value indicating whether to filter for EventRules by the event type id.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRuleSearch.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventRuleSearch.ts#L22)

___

### eventTypeIds

• **eventTypeIds**: `string`[]

Gets or sets a value indicating a list of [EventType](../README.md#eventtype) Id-s to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRuleSearch.ts:24](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventRuleSearch.ts#L24)

___

### groupFilterCondition

• **groupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets the groups to find the event rules belonging to parents or children of the groups using and/or relationship.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRuleSearch.ts:26](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventRuleSearch.ts#L26)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Event Rules that are members of these [GroupSearch](GroupSearch.md)(s) one of
 it's children or one of it's parents.
 Available GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EventRuleSearch.ts:33](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventRuleSearch.ts#L33)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### includeGroups

• **includeGroups**: [`IncludeGroups`](../README.md#includegroups)

Gets or sets a value indicating how to filter on Group.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRuleSearch.ts:35](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventRuleSearch.ts#L35)

___

### kilometers

• **kilometers**: `boolean`

Gets or sets a value indicating whether to filter for EventRules that have the kilometers recurrence field populated.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRuleSearch.ts:37](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventRuleSearch.ts#L37)

___

### months

• **months**: `boolean`

Gets or sets a value indicating whether to filter for EventRules that have the months recurrence field populated.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRuleSearch.ts:39](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventRuleSearch.ts#L39)

___

### name

• **name**: `string`

Gets or sets search for all [EventRule](EventRule.md) matching this Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/EventRuleSearch.ts:41](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventRuleSearch.ts#L41)

___

### nonRepeating

• **nonRepeating**: `boolean`

Gets or sets a value indicating whether to filter for EventRules that have the datetime one-off field populated.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRuleSearch.ts:43](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventRuleSearch.ts#L43)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### repeats

• **repeats**: `boolean`

Gets or sets a value indicating whether to filter for EventRules that are set to generate recurring events.

#### Defined in

[src/types/Checkmate/ObjectModel/EventRuleSearch.ts:45](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventRuleSearch.ts#L45)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
