[@fairfleet/geotab](../README.md) / FuelEvent

# Interface: FuelEvent

Log of fueling events.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`FuelEvent`**

  ↳↳ [`FuelTransaction`](FuelTransaction.md)

## Table of contents

### Properties

- [confidence](FuelEvent.md#confidence)
- [cost](FuelEvent.md#cost)
- [currencyCode](FuelEvent.md#currencycode)
- [dateTime](FuelEvent.md#datetime)
- [id](FuelEvent.md#id)
- [location](FuelEvent.md#location)
- [odometer](FuelEvent.md#odometer)
- [productType](FuelEvent.md#producttype)
- [version](FuelEvent.md#version)
- [volume](FuelEvent.md#volume)

## Properties

### confidence

• **confidence**: [`FuelUpEventConfidences`](../README.md#fuelupeventconfidences)

Gets or sets the confidence associated with the Fuel record.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L12)

___

### cost

• **cost**: `number`

Gets or sets the cost of the fuel transaction. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L14)

___

### currencyCode

• **currencyCode**: `string`

Gets or sets the three digit ISO 427 currency code (http://www.xe.com/iso4217.php). Default ["USD"].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L16)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the UTC date and time of the transaction.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L18)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### location

• **location**: `unknown`

Gets or sets the [Coordinate](Coordinate.md) of the transaction retailer. Default [0,0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L20)

___

### odometer

• **odometer**: `number`

Gets or sets the driver recorded odometer reading in km. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L22)

___

### productType

• **productType**: [`FuelTransactionProductType`](../README.md#fueltransactionproducttype)

Gets or sets the [FuelTransactionProductType](../README.md#fueltransactionproducttype) of this transaction. Default [Unknown].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L24)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)

___

### volume

• **volume**: `number`

Gets or sets the volume of fuel purchased in Liters. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L26)
