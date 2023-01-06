[@fairfleet/geotab](../README.md) / EntityLinkRuleSearch

# Interface: EntityLinkRuleSearch

The object used to specify the arguments when searching for a [EntityLinkRule](EntityLinkRule.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EntityLinkRuleSearch`**

## Table of contents

### Properties

- [destinationGroups](EntityLinkRuleSearch.md#destinationgroups)
- [entityLinkTypes](EntityLinkRuleSearch.md#entitylinktypes)
- [id](EntityLinkRuleSearch.md#id)
- [isBidirectionalSearch](EntityLinkRuleSearch.md#isbidirectionalsearch)
- [linkDate](EntityLinkRuleSearch.md#linkdate)
- [onlyActiveRules](EntityLinkRuleSearch.md#onlyactiverules)
- [propertySelector](EntityLinkRuleSearch.md#propertyselector)
- [sourceGroups](EntityLinkRuleSearch.md#sourcegroups)
- [validFrom](EntityLinkRuleSearch.md#validfrom)
- [validTo](EntityLinkRuleSearch.md#validto)
- [version](EntityLinkRuleSearch.md#version)

## Properties

### destinationGroups

• **destinationGroups**: [`Group`](Group.md)[]

Gets or sets the collection of destination groups to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts#L12)

___

### entityLinkTypes

• **entityLinkTypes**: [`EntityLinkType`](../README.md#entitylinktype)[]

Gets or sets the entity link type to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts#L14)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### isBidirectionalSearch

• **isBidirectionalSearch**: `boolean`

Gets or sets a value indicating rules from source to destination are unioned with rules from destination to source.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts#L16)

___

### linkDate

• **linkDate**: `Date`

Gets or sets the link date, which is used to search for records that reside within the range.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts#L18)

___

### onlyActiveRules

• **onlyActiveRules**: `boolean`

Gets or sets a value indicating only active rules are to be searched.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts#L20)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### sourceGroups

• **sourceGroups**: [`Group`](Group.md)[]

Gets or sets the collection of source groups to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts#L22)

___

### validFrom

• **validFrom**: `Date`

Gets or sets the from date, which is used to search for records recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts:24](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts#L24)

___

### validTo

• **validTo**: `Date`

Gets or sets the to date, which is used to search for records recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts:26](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRuleSearch.ts#L26)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
