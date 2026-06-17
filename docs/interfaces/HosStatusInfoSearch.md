[@fairfleet/geotab](../README.md) / HosStatusInfoSearch

# Interface: HosStatusInfoSearch

The object used to specify the arguments when searching for [HosStatusInfo](HosStatusInfo.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`HosStatusInfoSearch`**

## Table of contents

### Properties

- [dutyStatusLogSearch](HosStatusInfoSearch.md#dutystatuslogsearch)
- [id](HosStatusInfoSearch.md#id)
- [userHosRuleSetSearch](HosStatusInfoSearch.md#userhosrulesetsearch)
- [userSearch](HosStatusInfoSearch.md#usersearch)
- [version](HosStatusInfoSearch.md#version)

## Properties

### dutyStatusLogSearch

• **dutyStatusLogSearch**: [`DutyStatusLogSearch`](DutyStatusLogSearch.md)

Gets or sets search for [HosStatusInfo](HosStatusInfo.md) with the provided HosStatusInfoSearch.DutyStatusLogSearch.
 Available DutyStatusLogSearch options are:
 <list><item><description>Statuses</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/HosStatusInfoSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HosStatusInfoSearch.ts#L17)

___

### id

• **id**: `string`

Gets or sets the HosStatusInfoSearch.Id.
 This is not supported on [HosStatusInfoSearch](HosStatusInfoSearch.md).

#### Overrides

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/HosStatusInfoSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HosStatusInfoSearch.ts#L22)

___

### userHosRuleSetSearch

• **userHosRuleSetSearch**: [`UserHosRuleSetSearch`](UserHosRuleSetSearch.md)

Gets or sets search for [HosStatusInfo](HosStatusInfo.md) with the provided HosStatusInfoSearch.UserHosRuleSetSearch.
 Available UserHosRuleSetSearch options are:
 <list><item><description>RuleSets</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/HosStatusInfoSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HosStatusInfoSearch.ts#L28)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for [HosStatusInfo](HosStatusInfo.md) objects with this HosStatusInfoSearch.UserSearch.
 Available UserSearch options are:
 <list><item><description>Id</description></item><item><description>CompanyGroups</description></item><item><description>Keywords</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/HosStatusInfoSearch.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HosStatusInfoSearch.ts#L34)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
