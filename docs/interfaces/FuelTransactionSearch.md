[@fairfleet/geotab](../README.md) / FuelTransactionSearch

# Interface: FuelTransactionSearch

The object used to specify the arguments when searching for a [FuelTransaction](FuelTransaction.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`FuelTransactionSearch`**

## Table of contents

### Properties

- [deviceSearch](FuelTransactionSearch.md#devicesearch)
- [driverName](FuelTransactionSearch.md#drivername)
- [externalReference](FuelTransactionSearch.md#externalreference)
- [fromDate](FuelTransactionSearch.md#fromdate)
- [id](FuelTransactionSearch.md#id)
- [includeSourceData](FuelTransactionSearch.md#includesourcedata)
- [maxVersion](FuelTransactionSearch.md#maxversion)
- [propertySelector](FuelTransactionSearch.md#propertyselector)
- [provider](FuelTransactionSearch.md#provider)
- [toDate](FuelTransactionSearch.md#todate)
- [userSearch](FuelTransactionSearch.md#usersearch)
- [vehicleIdentificationNumber](FuelTransactionSearch.md#vehicleidentificationnumber)
- [version](FuelTransactionSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for FuelTransactions for this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L17)

___

### driverName

• **driverName**: `string`

Gets or sets the DriverName.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L19)

___

### externalReference

• **externalReference**: `string`

Gets or sets search for Fuel Transactions with this External Reference. Wildcard can be used by prepending/appending "%" to string. Example "%reference%".

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L21)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for FuelTransactions that occur on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L23)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### includeSourceData

• **includeSourceData**: `boolean`

Gets or sets a value indicating whether to include source data with transaction. Source data can be a large string, therefore, optionally exclude it from results.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:25](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L25)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum version for which FuelTransactions should be searched.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:27](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L27)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### provider

• **provider**: [`FuelTransactionProvider`](../README.md#fueltransactionprovider)

Gets or sets search by the [FuelTransactionProvider](../README.md#fueltransactionprovider).

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:29](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L29)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date, which is used to search for FuelTransactions that occur on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:31](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L31)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for FuelTransactions for this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:37](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L37)

___

### vehicleIdentificationNumber

• **vehicleIdentificationNumber**: `string`

Gets or sets the VehicleIdentificationNumber.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts:39](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Fuel/FuelTransactionSearch.ts#L39)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
