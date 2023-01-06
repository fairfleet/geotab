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
- [propertySelector](DutyStatusViolationSearch.md#propertyselector)
- [toDate](DutyStatusViolationSearch.md#todate)
- [userSearch](DutyStatusViolationSearch.md#usersearch)
- [version](DutyStatusViolationSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets search for duty status violations that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts#L15)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Overrides

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts#L17)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### toDate

• **toDate**: `Date`

Gets or sets search for duty status violations that were recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts#L19)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for duty status violations with this [UserSearch](UserSearch.md).
 Available UserSearch options are:.
 <list><item><description>Id</description></item><item><description>CompanyGroups</description></item><item><description>DriverGroups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts:25](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DutyStatusViolationSearch.ts#L25)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
