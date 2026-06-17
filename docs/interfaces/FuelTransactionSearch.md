[@fairfleet/geotab](../README.md) / FuelTransactionSearch

# Interface: FuelTransactionSearch

The object used to specify the arguments when searching for a [FuelTransaction](FuelTransaction.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`FuelTransactionSearch`**

## Table of contents

### Properties

- [assignmentStatus](FuelTransactionSearch.md#assignmentstatus)
- [assignmentType](FuelTransactionSearch.md#assignmenttype)
- [deviceSearch](FuelTransactionSearch.md#devicesearch)
- [driverName](FuelTransactionSearch.md#drivername)
- [excludeNonFuel](FuelTransactionSearch.md#excludenonfuel)
- [externalReference](FuelTransactionSearch.md#externalreference)
- [fromDate](FuelTransactionSearch.md#fromdate)
- [id](FuelTransactionSearch.md#id)
- [includeDeleted](FuelTransactionSearch.md#includedeleted)
- [includeSourceData](FuelTransactionSearch.md#includesourcedata)
- [maxCost](FuelTransactionSearch.md#maxcost)
- [maxVersion](FuelTransactionSearch.md#maxversion)
- [minCost](FuelTransactionSearch.md#mincost)
- [productTypes](FuelTransactionSearch.md#producttypes)
- [provider](FuelTransactionSearch.md#provider)
- [toDate](FuelTransactionSearch.md#todate)
- [userSearch](FuelTransactionSearch.md#usersearch)
- [vehicleIdentificationNumber](FuelTransactionSearch.md#vehicleidentificationnumber)
- [version](FuelTransactionSearch.md#version)

## Properties

### assignmentStatus

• **assignmentStatus**: [`FuelTransactionAssignmentStatus`](../README.md#fueltransactionassignmentstatus)

Gets or sets search for FuelTransactions that are currently assigned or currently not assigned based on the
 assignment setting.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L18)

___

### assignmentType

• **assignmentType**: [`FuelTransactionAssignmentType`](../README.md#fueltransactionassignmenttype)

Gets or sets the assignment type used to filter fuel transactions.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L20)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for FuelTransactions for this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L26)

___

### driverName

• **driverName**: `string`

Gets or sets the DriverName.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L28)

___

### excludeNonFuel

• **excludeNonFuel**: `boolean`

Gets or sets a value indicating whether to exclude non-fuel based transactions.
 Non-Fuel product types include non-fuel, diesel exhaust fluid, electric and unknown when volume is 0.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L33)

___

### externalReference

• **externalReference**: `string`

Gets or sets search for Fuel Transactions with this External Reference. Wildcard can be used by prepending/appending "%" to string. Example "%reference%".

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L35)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for FuelTransactions that occur on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L37)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeDeleted

• **includeDeleted**: `boolean`

Gets or sets a value indicating whether search includes records that have the dtDeleted column set

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L39)

___

### includeSourceData

• **includeSourceData**: `boolean`

Gets or sets a value indicating whether to include source data with transaction. Source data can be a large string, therefore, optionally exclude it from results.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L41)

___

### maxCost

• **maxCost**: `number`

Gets or sets the maximum cost to filter fuel transactions by.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L43)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum version for which FuelTransactions should be searched.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L45)

___

### minCost

• **minCost**: `number`

Gets or sets the minimum cost to filter fuel transactions by.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L47)

___

### productTypes

• **productTypes**: `string`[]

Gets or sets the product types used to filter fuel transactions.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L49)

___

### provider

• **provider**: [`FuelTransactionProvider`](../README.md#fueltransactionprovider)

Gets or sets search by the [FuelTransactionProvider](../README.md#fueltransactionprovider).

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L51)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date, which is used to search for FuelTransactions that occur on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:53](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L53)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for FuelTransactions for this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:59](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L59)

___

### vehicleIdentificationNumber

• **vehicleIdentificationNumber**: `string`

Gets or sets the VehicleIdentificationNumber.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:61](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L61)

___

### version

• **version**: `number`

Gets or sets the row version of the [FuelTransaction](FuelTransaction.md) search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:63](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L63)
