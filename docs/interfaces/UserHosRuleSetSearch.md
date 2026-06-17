[@fairfleet/geotab](../README.md) / UserHosRuleSetSearch

# Interface: UserHosRuleSetSearch

The object used to specify the arguments when searching for
 [HosRuleSet](../README.md#hosruleset) objects.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`UserHosRuleSetSearch`**

## Table of contents

### Properties

- [fromDate](UserHosRuleSetSearch.md#fromdate)
- [hosRulesetConfigSearch](UserHosRuleSetSearch.md#hosrulesetconfigsearch)
- [id](UserHosRuleSetSearch.md#id)
- [includeDeleted](UserHosRuleSetSearch.md#includedeleted)
- [maxVersion](UserHosRuleSetSearch.md#maxversion)
- [minVersion](UserHosRuleSetSearch.md#minversion)
- [toDate](UserHosRuleSetSearch.md#todate)
- [userSearch](UserHosRuleSetSearch.md#usersearch)
- [version](UserHosRuleSetSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets search for hos ruleset objects that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts#L15)

___

### hosRulesetConfigSearch

• **hosRulesetConfigSearch**: [`HosRulesetConfigSearch`](HosRulesetConfigSearch.md)

Gets or sets search for ruleset configs
 Available HosRulesetConfigSearch options are:
 <list><item><description>RuleSetIds</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts#L21)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeDeleted

• **includeDeleted**: `boolean`

Gets or sets a value indicating whether search includes records that have the dtDeleted column set

#### Defined in

[src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts#L23)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets
 Search for [UserHosRuleSet](UserHosRuleSet.md)s with a maximum of this version.

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts#L30)

___

### minVersion

• **minVersion**: `number`

Gets or sets
 Search for [UserHosRuleSet](UserHosRuleSet.md)s with a minimum of this version.

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts#L37)

___

### toDate

• **toDate**: `Date`

Gets or sets search for hos ruleset objects that were recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts#L39)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for hos ruleset objects with this [UserSearch](UserSearch.md).
 Available UserSearch options are:.
 <list><item><description>Id</description></item><item><description>GroupSearch</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts#L45)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
