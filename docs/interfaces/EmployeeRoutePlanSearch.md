[@fairfleet/geotab](../README.md) / EmployeeRoutePlanSearch

# Interface: EmployeeRoutePlanSearch

The object used to specify the arguments when searching for
 [EmployeeRoutePlan](EmployeeRoutePlan.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EmployeeRoutePlanSearch`**

## Table of contents

### Properties

- [fromDate](EmployeeRoutePlanSearch.md#fromdate)
- [id](EmployeeRoutePlanSearch.md#id)
- [propertySelector](EmployeeRoutePlanSearch.md#propertyselector)
- [routeSearch](EmployeeRoutePlanSearch.md#routesearch)
- [toDate](EmployeeRoutePlanSearch.md#todate)
- [version](EmployeeRoutePlanSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets search for Employee Route Plan(s) recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/EmployeeRoutePlanSearch.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EmployeeRoutePlanSearch.ts#L16)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### routeSearch

• **routeSearch**: [`RouteSearch`](RouteSearch.md)

Gets or sets search for Employee Route Plans with this [RouteSearch](RouteSearch.md) Id.
 Available RouteSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmployeeRoutePlanSearch.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EmployeeRoutePlanSearch.ts#L22)

___

### toDate

• **toDate**: `Date`

Gets or sets search for Employee Route Plans recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/EmployeeRoutePlanSearch.ts:24](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EmployeeRoutePlanSearch.ts#L24)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
