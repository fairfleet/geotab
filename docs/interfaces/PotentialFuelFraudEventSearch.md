[@fairfleet/geotab](../README.md) / PotentialFuelFraudEventSearch

# Interface: PotentialFuelFraudEventSearch

The object used to specify the arguments when searching for
 [PotentialFuelFraudEvent](PotentialFuelFraudEvent.md)(s).
 This search has been designed to work efficiently with these combinations of parameters:<list><item><description>Id</description></item><item><description>FromDate and/or ToDate</description></item><item><description>List of [FuelTransaction](FuelTransaction.md) id's</description></item></list>

## Hierarchy

- [`Search`](Search.md)

  ↳ **`PotentialFuelFraudEventSearch`**

## Table of contents

### Properties

- [deviceMatchType](PotentialFuelFraudEventSearch.md#devicematchtype)
- [deviceSearch](PotentialFuelFraudEventSearch.md#devicesearch)
- [distanceFromVehicleKm](PotentialFuelFraudEventSearch.md#distancefromvehiclekm)
- [fromDate](PotentialFuelFraudEventSearch.md#fromdate)
- [fuelTransactionIds](PotentialFuelFraudEventSearch.md#fueltransactionids)
- [fuelTypeMismatch](PotentialFuelFraudEventSearch.md#fueltypemismatch)
- [id](PotentialFuelFraudEventSearch.md#id)
- [includeDeleted](PotentialFuelFraudEventSearch.md#includedeleted)
- [maxVersion](PotentialFuelFraudEventSearch.md#maxversion)
- [tankFillPercentage](PotentialFuelFraudEventSearch.md#tankfillpercentage)
- [timeFromFillUpInHours](PotentialFuelFraudEventSearch.md#timefromfillupinhours)
- [toDate](PotentialFuelFraudEventSearch.md#todate)
- [version](PotentialFuelFraudEventSearch.md#version)

## Properties

### deviceMatchType

• **deviceMatchType**: `number`

Gets or sets a value indicating the device match type. (1: Asset, 2: Driver)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts#L15)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options.
 Providing a device ID will search for any PotentialFuelFraudEvents that are assigned to that Device.
 Providing the Groups will search for PotentialFuelFraudEvents for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts#L23)

___

### distanceFromVehicleKm

• **distanceFromVehicleKm**: `unknown`

Gets or sets the search for a distance range in kilometers from the vehicle

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts#L25)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for [PotentialFuelFraudEvent](PotentialFuelFraudEvent.md) that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts#L27)

___

### fuelTransactionIds

• **fuelTransactionIds**: `string`[]

Gets or sets search for [PotentialFuelFraudEvent](PotentialFuelFraudEvent.md)s which are associated with these [FuelTransaction](FuelTransaction.md)Ids.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts#L29)

___

### fuelTypeMismatch

• **fuelTypeMismatch**: `boolean`

Gets or sets a value indicating whether the search includes records that have fuel type mismatch.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts#L31)

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

Gets or sets a value indicating whether search includes records that have dtDeleted column set

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts#L33)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum row version of the [PotentialFuelFraudEvent](PotentialFuelFraudEvent.md) search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts#L35)

___

### tankFillPercentage

• **tankFillPercentage**: `unknown`

Gets or sets the search for a tank fill percentage range

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts#L37)

___

### timeFromFillUpInHours

• **timeFromFillUpInHours**: `unknown`

Gets or sets the search for a time range in hours from fill-up event

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts#L39)

___

### toDate

• **toDate**: `Date`

Gets or sets search for [PotentialFuelFraudEvent](PotentialFuelFraudEvent.md) that were at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts#L41)

___

### version

• **version**: `number`

Gets or sets the row version of the [PotentialFuelFraudEvent](PotentialFuelFraudEvent.md) search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEventSearch.ts#L43)
