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
- [id](UserHosRuleSetSearch.md#id)
- [maxVersion](UserHosRuleSetSearch.md#maxversion)
- [minVersion](UserHosRuleSetSearch.md#minversion)
- [propertySelector](UserHosRuleSetSearch.md#propertyselector)
- [toDate](UserHosRuleSetSearch.md#todate)
- [userSearch](UserHosRuleSetSearch.md#usersearch)
- [version](UserHosRuleSetSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets search for hos ruleset objects that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts#L14)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets
 Search for [UserHosRuleSet](UserHosRuleSet.md)s with a maximum of this version.

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts#L21)

___

### minVersion

• **minVersion**: `number`

Gets or sets
 Search for [UserHosRuleSet](UserHosRuleSet.md)s with a minimum of this version.

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts:28](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts#L28)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### toDate

• **toDate**: `Date`

Gets or sets search for hos ruleset objects that were recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts:30](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts#L30)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for hos ruleset objects with this [UserSearch](UserSearch.md).
 Available UserSearch options are:.
 <list><item><description>Id</description></item><item><description>GroupSearch</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts:36](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/UserHosRuleSetSearch.ts#L36)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
