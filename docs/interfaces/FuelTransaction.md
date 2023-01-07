[@fairfleet/geotab](../README.md) / FuelTransaction

# Interface: FuelTransaction

Information from a fuel card provider representing a fuel transaction. Fuel card information will be matched to a
 FuelTransaction.Device by one of these fields: vehicleIdentificationNumber, serialNumber, licencePlate or comments.

## Hierarchy

- [`FuelEvent`](FuelEvent.md)

  ↳ **`FuelTransaction`**

## Table of contents

### Properties

- [cardNumber](FuelTransaction.md#cardnumber)
- [comments](FuelTransaction.md#comments)
- [confidence](FuelTransaction.md#confidence)
- [cost](FuelTransaction.md#cost)
- [currencyCode](FuelTransaction.md#currencycode)
- [dateTime](FuelTransaction.md#datetime)
- [description](FuelTransaction.md#description)
- [device](FuelTransaction.md#device)
- [driver](FuelTransaction.md#driver)
- [driverName](FuelTransaction.md#drivername)
- [externalReference](FuelTransaction.md#externalreference)
- [id](FuelTransaction.md#id)
- [licencePlate](FuelTransaction.md#licenceplate)
- [location](FuelTransaction.md#location)
- [odometer](FuelTransaction.md#odometer)
- [productType](FuelTransaction.md#producttype)
- [provider](FuelTransaction.md#provider)
- [providerProductDescription](FuelTransaction.md#providerproductdescription)
- [serialNumber](FuelTransaction.md#serialnumber)
- [siteName](FuelTransaction.md#sitename)
- [sourceData](FuelTransaction.md#sourcedata)
- [vehicleIdentificationNumber](FuelTransaction.md#vehicleidentificationnumber)
- [version](FuelTransaction.md#version)
- [volume](FuelTransaction.md#volume)

## Properties

### cardNumber

• **cardNumber**: `string`

Gets or sets the masked or partial purchasing card number.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L16)

___

### comments

• **comments**: `string`

Gets or sets the free text field where any user information can be stored and referenced for this entity. This can be used to associate the transaction with a FuelTransaction.Device. Maximum length [1024] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L18)

___

### confidence

• **confidence**: [`FuelUpEventConfidences`](../README.md#fuelupeventconfidences)

Gets or sets the confidence associated with the Fuel record.

#### Inherited from

[FuelEvent](FuelEvent.md).[confidence](FuelEvent.md#confidence)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L12)

___

### cost

• **cost**: `number`

Gets or sets the cost of the fuel transaction. Default [0].

#### Inherited from

[FuelEvent](FuelEvent.md).[cost](FuelEvent.md#cost)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L14)

___

### currencyCode

• **currencyCode**: `string`

Gets or sets the three digit ISO 427 currency code (http://www.xe.com/iso4217.php). Default ["USD"].

#### Inherited from

[FuelEvent](FuelEvent.md).[currencyCode](FuelEvent.md#currencycode)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L16)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the UTC date and time of the transaction.

#### Inherited from

[FuelEvent](FuelEvent.md).[dateTime](FuelEvent.md#datetime)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L18)

___

### description

• **description**: `string`

Gets or sets the vehicle description of the vehicle. This can be used to associate the transaction with a FuelTransaction.Device. Maximum length [255] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L20)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) the transaction belongs to. Default [null].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L22)

___

### driver

• **driver**: [`Driver`](Driver.md)

Gets or sets the [Driver](Driver.md) the transaction belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L24)

___

### driverName

• **driverName**: `string`

Gets or sets the fuel card holder name. This can be used to associate the transaction with a FuelTransaction.Driver. Maximum length [255] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L26)

___

### externalReference

• **externalReference**: `string`

Gets or sets the external reference to the transaction. Typically this is an external identifier. Maximum length [255] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L28)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[FuelEvent](FuelEvent.md).[id](FuelEvent.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### licencePlate

• **licencePlate**: `string`

Gets or sets the licence plate of the vehicle of the vehicle. This can be used to associate the transaction with a FuelTransaction.Device. Maximum length [255] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:30](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L30)

___

### location

• **location**: `unknown`

Gets or sets the [Coordinate](Coordinate.md) of the transaction retailer. Default [0,0].

#### Inherited from

[FuelEvent](FuelEvent.md).[location](FuelEvent.md#location)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L20)

___

### odometer

• **odometer**: `number`

Gets or sets the driver recorded odometer reading in km. Default [0].

#### Inherited from

[FuelEvent](FuelEvent.md).[odometer](FuelEvent.md#odometer)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L22)

___

### productType

• **productType**: [`FuelTransactionProductType`](../README.md#fueltransactionproducttype)

Gets or sets the [FuelTransactionProductType](../README.md#fueltransactionproducttype) of this transaction. Default [Unknown].

#### Inherited from

[FuelEvent](FuelEvent.md).[productType](FuelEvent.md#producttype)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L24)

___

### provider

• **provider**: [`FuelTransactionProvider`](../README.md#fueltransactionprovider)

Gets or sets the [FuelTransactionProvider](../README.md#fueltransactionprovider) of this transaction. Default [Unknown].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:32](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L32)

___

### providerProductDescription

• **providerProductDescription**: `string`

Gets or sets the Product Description given by the Provider.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:34](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L34)

___

### serialNumber

• **serialNumber**: `string`

Gets or sets the serial number of the device. This can be used to associate the transaction with a FuelTransaction.Device. Maximum length [255] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:36](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L36)

___

### siteName

• **siteName**: `string`

Gets or sets the site/merchant name where the transaction took place.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:38](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L38)

___

### sourceData

• **sourceData**: `string`

Gets or sets the JSON string representing the source data. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:40](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L40)

___

### vehicleIdentificationNumber

• **vehicleIdentificationNumber**: `string`

Gets or sets the vehicle identification number (VIN) of the vehicle. This is used to associate the transaction with a FuelTransaction.Device. Maximum length [255] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts:42](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelTransaction.ts#L42)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[FuelEvent](FuelEvent.md).[version](FuelEvent.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)

___

### volume

• **volume**: `number`

Gets or sets the volume of fuel purchased in Liters. Default [0].

#### Inherited from

[FuelEvent](FuelEvent.md).[volume](FuelEvent.md#volume)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelEvent.ts#L26)
