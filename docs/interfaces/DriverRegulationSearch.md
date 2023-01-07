[@fairfleet/geotab](../README.md) / DriverRegulationSearch

# Interface: DriverRegulationSearch

The object used to specify the arguments when searching for
 [DriverRegulation](DriverRegulation.md) objects.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DriverRegulationSearch`**

## Table of contents

### Properties

- [fromDate](DriverRegulationSearch.md#fromdate)
- [id](DriverRegulationSearch.md#id)
- [toDate](DriverRegulationSearch.md#todate)
- [userSearch](DriverRegulationSearch.md#usersearch)
- [version](DriverRegulationSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets the date from which the availability is calculated.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulationSearch.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverRegulationSearch.ts#L14)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Overrides

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulationSearch.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverRegulationSearch.ts#L16)

___

### toDate

• **toDate**: `Date`

Gets or sets the date to which the availability is calculated.

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulationSearch.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverRegulationSearch.ts#L18)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for duty status availability objects with this [UserSearch](UserSearch.md).
 Available UserSearch options are:.
 <list><item><description>Id</description></item><item><description>GroupSearch</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulationSearch.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DriverRegulationSearch.ts#L24)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
