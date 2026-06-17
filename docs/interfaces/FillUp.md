[@fairfleet/geotab](../README.md) / FillUp

# Interface: FillUp

An event representing adding fuel to an asset. Many sources of data are evaluated to determine a fill-up.
 [FuelTransaction](FuelTransaction.md)s, [StatusData](StatusData.md) (fuel level percent, fuel level volume, fuel used, tank capacity, odometer), [LogRecord](LogRecord.md)s, [Trip](Trip.md)s are all used to calculate fill-up events.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`FillUp`**

## Table of contents

### Properties

- [confidence](FillUp.md#confidence)
- [cost](FillUp.md#cost)
- [currencyCode](FillUp.md#currencycode)
- [dateTime](FillUp.md#datetime)
- [deletedDateTime](FillUp.md#deleteddatetime)
- [derivedVolume](FillUp.md#derivedvolume)
- [deviationFactor](FillUp.md#deviationfactor)
- [device](FillUp.md#device)
- [distance](FillUp.md#distance)
- [driver](FillUp.md#driver)
- [fuelTransactions](FillUp.md#fueltransactions)
- [id](FillUp.md#id)
- [location](FillUp.md#location)
- [odometer](FillUp.md#odometer)
- [productType](FillUp.md#producttype)
- [tankCapacity](FillUp.md#tankcapacity)
- [tankLevelExtrema](FillUp.md#tanklevelextrema)
- [totalFuelUsed](FillUp.md#totalfuelused)
- [version](FillUp.md#version)
- [volume](FillUp.md#volume)

## Properties

### confidence

• **confidence**: [`FuelUpEventConfidences`](../README.md#fuelupeventconfidences)

Gets or sets the [FuelUpEventConfidences](../README.md#fuelupeventconfidences) associated with the Fuel record. Default [None].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L20)

___

### cost

• **cost**: `number`

Gets or sets the cost of the fuel transaction. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L22)

___

### currencyCode

• **currencyCode**: `string`

Gets or sets the three digit ISO 427 currency code (http://www.xe.com/iso4217.php). Default ["USD"].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L24)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the UTC date and time of the fuel event.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L26)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L30)

___

### derivedVolume

• **derivedVolume**: `number`

Gets or sets the volume in Liters derived from fuel tank capacity. Default [-1].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L32)

___

### deviationFactor

• **deviationFactor**: `number`

Gets or sets the difference in fuel out vs fuel in.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L34)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with the fuel used event.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L36)

___

### distance

• **distance**: `number`

Gets or sets the distance in meters traveled since the last fill-up.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L38)

___

### driver

• **driver**: [`Driver`](Driver.md)

Gets or sets the FillUp.Driver associated with the transaction.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L40)

___

### fuelTransactions

• **fuelTransactions**: [`FuelTransaction`](FuelTransaction.md)[]

Gets or sets the [FuelTransaction](FuelTransaction.md)s matched to this fill-up.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L42)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### location

• **location**: `unknown`

Gets or sets the [Coordinate](Coordinate.md) of the transaction retailer. Default [0,0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L44)

___

### odometer

• **odometer**: `number`

Gets or sets the odometer reading in meters. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L46)

___

### productType

• **productType**: [`FuelTransactionProductType`](../README.md#fueltransactionproducttype)

Gets or sets the [FuelTransactionProductType](../README.md#fueltransactionproducttype) of this transaction. Default [Unknown].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L48)

___

### tankCapacity

• **tankCapacity**: [`FuelTankCapacity`](FuelTankCapacity.md)

Gets or sets the [FuelTankCapacity](FuelTankCapacity.md) and how it was derived.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L50)

___

### tankLevelExtrema

• **tankLevelExtrema**: [`FillUpExtrema`](FillUpExtrema.md)

Gets or sets the [FillUpExtrema](FillUpExtrema.md) representing the fuel tank level change at the time of the fill-up.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L52)

___

### totalFuelUsed

• **totalFuelUsed**: `number`

Gets or sets the total fuel used in Liters up to this point in time. Default [-1].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L54)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)

___

### volume

• **volume**: `number`

Gets or sets the volume of fuel added in Liters. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUp.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUp.ts#L56)
