[@fairfleet/geotab](../README.md) / DutyStatusAvailabilitySearch

# Interface: DutyStatusAvailabilitySearch

The object used to specify the arguments when searching for
 [DutyStatusAvailability](DutyStatusAvailability.md) objects.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DutyStatusAvailabilitySearch`**

## Table of contents

### Properties

- [fromDate](DutyStatusAvailabilitySearch.md#fromdate)
- [id](DutyStatusAvailabilitySearch.md#id)
- [propertySelector](DutyStatusAvailabilitySearch.md#propertyselector)
- [toDate](DutyStatusAvailabilitySearch.md#todate)
- [userSearch](DutyStatusAvailabilitySearch.md#usersearch)
- [version](DutyStatusAvailabilitySearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets the date from which the availability is calculated.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailabilitySearch.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DutyStatusAvailabilitySearch.ts#L14)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Overrides

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailabilitySearch.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DutyStatusAvailabilitySearch.ts#L16)

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

Gets or sets the date to which the availability is calculated.

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailabilitySearch.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DutyStatusAvailabilitySearch.ts#L18)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for duty status availability objects with this [UserSearch](UserSearch.md).
 Available UserSearch options are:.
 <list><item><description>Id</description></item><item><description>DriverGroups</description></item><item><description>DriverGroupFilterCondition</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DutyStatusAvailabilitySearch.ts:24](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DutyStatusAvailabilitySearch.ts#L24)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
