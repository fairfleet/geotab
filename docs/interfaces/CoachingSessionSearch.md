[@fairfleet/geotab](../README.md) / CoachingSessionSearch

# Interface: CoachingSessionSearch

The object used to specify the arguments when searching for [CoachingSession](CoachingSession.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`CoachingSessionSearch`**

## Table of contents

### Properties

- [fromDate](CoachingSessionSearch.md#fromdate)
- [id](CoachingSessionSearch.md#id)
- [ruleSearch](CoachingSessionSearch.md#rulesearch)
- [states](CoachingSessionSearch.md#states)
- [toDate](CoachingSessionSearch.md#todate)
- [userSearch](CoachingSessionSearch.md#usersearch)
- [version](CoachingSessionSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets the start date for the coaching session search.

#### Defined in

[src/types/Checkmate/ObjectModel/CoachingSessionSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CoachingSessionSearch.ts#L16)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### ruleSearch

• **ruleSearch**: [`RuleSearch`](RuleSearch.md)

Gets or sets filter by the [RuleSearch](RuleSearch.md) options. Providing a Rule ID
 will search for any Coaching Sessions recorded for that Rule.
 Available RuleSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/CoachingSessionSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CoachingSessionSearch.ts#L23)

___

### states

• **states**: `string`[]

Gets or sets a case-insensitive filter by multiple names of the [CoachingSessionState](CoachingSessionState.md).
 Possible values: "New", "Active", "Completed".
 When multiple states are specified, the search returns sessions matching any of the specified states (OR logic).

#### Defined in

[src/types/Checkmate/ObjectModel/CoachingSessionSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CoachingSessionSearch.ts#L29)

___

### toDate

• **toDate**: `Date`

Gets or sets the end date for the coaching session search.

#### Defined in

[src/types/Checkmate/ObjectModel/CoachingSessionSearch.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CoachingSessionSearch.ts#L31)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets the filter by the [UserSearch](UserSearch.md) options. Providing a User ID will search
 for any Coaching Sessions recorded for that User.
 Providing Groups will search Coaching Sessions recorded for Users that are members of the provided GroupSearch(s) or
 their children.
 Available UserSearch options are:
 <list><item><description>Id</description></item><item><description>DriverGroups</description></item><item><description>DriverGroupFilterCondition</description></item><item><description>CompanyGroups</description></item><item><description>UserGroupFilterCondition</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/CoachingSessionSearch.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CoachingSessionSearch.ts#L40)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
