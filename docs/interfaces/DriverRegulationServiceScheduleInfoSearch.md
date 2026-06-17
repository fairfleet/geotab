[@fairfleet/geotab](../README.md) / DriverRegulationServiceScheduleInfoSearch

# Interface: DriverRegulationServiceScheduleInfoSearch

The object used to specify the arguments when searching for
 [DriverRegulationServiceScheduleInfo](DriverRegulationServiceScheduleInfo.md)(s).
 This search has been designed to work efficiently with these combinations of parameters:<list><item><description>UserSearch</description></item></list>

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DriverRegulationServiceScheduleInfoSearch`**

## Table of contents

### Properties

- [id](DriverRegulationServiceScheduleInfoSearch.md#id)
- [userSearch](DriverRegulationServiceScheduleInfoSearch.md#usersearch)
- [version](DriverRegulationServiceScheduleInfoSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Overrides

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulationServiceScheduleInfoSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulationServiceScheduleInfoSearch.ts#L15)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for duty status violations with this [UserSearch](UserSearch.md).
 Available UserSearch options are:.
 <list><item><description>Id</description></item><item><description>CompanyGroups</description></item><item><description>DriverGroups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DriverRegulationServiceScheduleInfoSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DriverRegulationServiceScheduleInfoSearch.ts#L21)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
