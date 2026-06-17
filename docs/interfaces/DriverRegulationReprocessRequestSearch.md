[@fairfleet/geotab](../README.md) / DriverRegulationReprocessRequestSearch

# Interface: DriverRegulationReprocessRequestSearch

The object used to specify the arguments when searching for a [DriverRegulationReprocessRequest](DriverRegulationReprocessRequest.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DriverRegulationReprocessRequestSearch`**

## Table of contents

### Properties

- [id](DriverRegulationReprocessRequestSearch.md#id)
- [isEmpty](DriverRegulationReprocessRequestSearch.md#isempty)
- [status](DriverRegulationReprocessRequestSearch.md#status)
- [userSearch](DriverRegulationReprocessRequestSearch.md#usersearch)
- [version](DriverRegulationReprocessRequestSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isEmpty

• **isEmpty**: `boolean`

Gets a value indicating whether any search criteria have been specified.

#### Defined in

[src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequestSearch.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequestSearch.ts#L11)

___

### status

• **status**: `string`

Gets or sets the status to search by.
 See [DriverRegulationReprocessRequestStatus](../README.md#driverregulationreprocessrequeststatus) for valid values.

#### Defined in

[src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequestSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequestSearch.ts#L16)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for DriverRegulationReprocessRequests with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:
 <list type="bullet"><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequestSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequestSearch.ts#L22)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
