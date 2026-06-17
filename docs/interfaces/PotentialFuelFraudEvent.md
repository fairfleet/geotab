[@fairfleet/geotab](../README.md) / PotentialFuelFraudEvent

# Interface: PotentialFuelFraudEvent

An event representing potential fuel fraud for a vehicle.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`PotentialFuelFraudEvent`**

## Table of contents

### Properties

- [dateTime](PotentialFuelFraudEvent.md#datetime)
- [deletedDateTime](PotentialFuelFraudEvent.md#deleteddatetime)
- [device](PotentialFuelFraudEvent.md#device)
- [deviceMatchType](PotentialFuelFraudEvent.md#devicematchtype)
- [deviceNearestMatchDateTime](PotentialFuelFraudEvent.md#devicenearestmatchdatetime)
- [deviceNearestMatchLocation](PotentialFuelFraudEvent.md#devicenearestmatchlocation)
- [deviceNearestMatchType](PotentialFuelFraudEvent.md#devicenearestmatchtype)
- [distanceFromVehicleKm](PotentialFuelFraudEvent.md#distancefromvehiclekm)
- [fuelTransactionId](PotentialFuelFraudEvent.md#fueltransactionid)
- [id](PotentialFuelFraudEvent.md#id)
- [isFuelTypeMismatch](PotentialFuelFraudEvent.md#isfueltypemismatch)
- [tankFillPercentage](PotentialFuelFraudEvent.md#tankfillpercentage)
- [timeFromFillUpHours](PotentialFuelFraudEvent.md#timefromfilluphours)
- [version](PotentialFuelFraudEvent.md#version)

## Properties

### dateTime

• **dateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts#L13)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts#L17)

___

### device

• **device**: [`Device`](Device.md)

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts#L21)

___

### deviceMatchType

• **deviceMatchType**: `number`

Gets or sets The values determining if the fraud record is related to match by asset
 or match by driver fuel transaction. Default [0].
 Unknown = 0,
 Asset = 1,
 Driver = 2.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts#L29)

___

### deviceNearestMatchDateTime

• **deviceNearestMatchDateTime**: `Date`

Gets or sets the PotentialFuelFraudEvent.DateTime corresponding to the nearest match device location at the time of the event.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts#L31)

___

### deviceNearestMatchLocation

• **deviceNearestMatchLocation**: `unknown`

Gets or sets the [Coordinate](Coordinate.md) of the nearest match device location at the time of the event.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts#L33)

___

### deviceNearestMatchType

• **deviceNearestMatchType**: `number`

Gets or sets the value indicating how the vehicle's estimated location was determined
 at the time of the fuel transaction. Default [0]. Values: 0=None, 1=TripStop,
 2=InterpolatedTripDrivingGps, 3=ClosestTripStopWithinThreshold, 4=ClosestGpsWithinThreshold.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts#L39)

___

### distanceFromVehicleKm

• **distanceFromVehicleKm**: `number`

Gets or sets the distance in kilometers from the associated vehicle. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts#L41)

___

### fuelTransactionId

• **fuelTransactionId**: `string`

Gets or sets the Id for the related fuel transaction.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts#L43)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isFuelTypeMismatch

• **isFuelTypeMismatch**: `boolean`

Gets or sets a value indicating whether a fuel type mismatch was found
 between the [FuelTransactionProductType](../README.md#fueltransactionproducttype) and the vehicles fuel type group. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts#L48)

___

### tankFillPercentage

• **tankFillPercentage**: `number`

Gets or sets the percentage of the tank filled. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts#L50)

___

### timeFromFillUpHours

• **timeFromFillUpHours**: `number`

Gets or sets the time, in hours, between when the fuel transaction occurred and the associated [FillUp](FillUp.md). Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/PotentialFuelFraud/PotentialFuelFraudEvent.ts#L52)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
