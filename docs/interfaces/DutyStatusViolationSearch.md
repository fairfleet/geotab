[@fairfleet/geotab](../README.md) / DutyStatusViolationSearch

# Interface: DutyStatusViolationSearch

The object used to specify the arguments when searching for
 [DutyStatusViolation](DutyStatusViolation.md)(s).
 This search has been designed to work efficiently with these combinations of parameters:<list><item><description>UserSearch + FromDate and/or ToDate</description></item></list>

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DutyStatusViolationSearch`**

## Table of contents

### Properties

- [fromDate](DutyStatusViolationSearch.md#fromdate)
- [id](DutyStatusViolationSearch.md#id)
- [includeDeleted](DutyStatusViolationSearch.md#includedeleted)
- [toDate](DutyStatusViolationSearch.md#todate)
- [type](DutyStatusViolationSearch.md#type)
- [userSearch](DutyStatusViolationSearch.md#usersearch)
- [version](DutyStatusViolationSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets search for duty status violations that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts#L16)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Overrides

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts#L18)

___

### includeDeleted

• **includeDeleted**: `boolean`

Gets or sets a value indicating whether to include deleted duty status violations in the search results.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts#L20)

___

### toDate

• **toDate**: `Date`

Gets or sets search for duty status violations that were recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts#L22)

___

### type

• **type**: [`DutyStatusViolationType`](../README.md#dutystatusviolationtype)

Gets or sets the [DutyStatusViolationType](../README.md#dutystatusviolationtype) of the duty status violation.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts#L24)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for duty status violations with this [UserSearch](UserSearch.md).
 Available UserSearch options are:.
 <list><item><description>Id</description></item><item><description>CompanyGroups</description></item><item><description>DriverGroups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts#L30)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
