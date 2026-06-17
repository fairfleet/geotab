[@fairfleet/geotab](../README.md) / MaintenanceWorkOrder

# Interface: MaintenanceWorkOrder

Maintenance Work Order for a particular device.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`MaintenanceWorkOrder`**

## Table of contents

### Properties

- [assignedTo](MaintenanceWorkOrder.md#assignedto)
- [completedDateTime](MaintenanceWorkOrder.md#completeddatetime)
- [costCurrency](MaintenanceWorkOrder.md#costcurrency)
- [costCurrencyConverted](MaintenanceWorkOrder.md#costcurrencyconverted)
- [currencyConversionFailed](MaintenanceWorkOrder.md#currencyconversionfailed)
- [dateTime](MaintenanceWorkOrder.md#datetime)
- [deletedDateTime](MaintenanceWorkOrder.md#deleteddatetime)
- [device](MaintenanceWorkOrder.md#device)
- [dueOnDate](MaintenanceWorkOrder.md#dueondate)
- [engineHoursReading](MaintenanceWorkOrder.md#enginehoursreading)
- [engineHoursReadingInHours](MaintenanceWorkOrder.md#enginehoursreadinginhours)
- [id](MaintenanceWorkOrder.md#id)
- [laborCost](MaintenanceWorkOrder.md#laborcost)
- [laborCostConverted](MaintenanceWorkOrder.md#laborcostconverted)
- [mediaFiles](MaintenanceWorkOrder.md#mediafiles)
- [name](MaintenanceWorkOrder.md#name)
- [notes](MaintenanceWorkOrder.md#notes)
- [odometerReading](MaintenanceWorkOrder.md#odometerreading)
- [odometerReadingDisplay](MaintenanceWorkOrder.md#odometerreadingdisplay)
- [openedByUser](MaintenanceWorkOrder.md#openedbyuser)
- [partsCost](MaintenanceWorkOrder.md#partscost)
- [partsCostConverted](MaintenanceWorkOrder.md#partscostconverted)
- [priorityCode](MaintenanceWorkOrder.md#prioritycode)
- [priorityCodeDisplay](MaintenanceWorkOrder.md#prioritycodedisplay)
- [reference](MaintenanceWorkOrder.md#reference)
- [repairClass](MaintenanceWorkOrder.md#repairclass)
- [repairClassDisplay](MaintenanceWorkOrder.md#repairclassdisplay)
- [repairReason](MaintenanceWorkOrder.md#repairreason)
- [repairReasonDisplay](MaintenanceWorkOrder.md#repairreasondisplay)
- [shippingCost](MaintenanceWorkOrder.md#shippingcost)
- [shippingCostConverted](MaintenanceWorkOrder.md#shippingcostconverted)
- [statusCode](MaintenanceWorkOrder.md#statuscode)
- [statusCodeDisplay](MaintenanceWorkOrder.md#statuscodedisplay)
- [taxCost](MaintenanceWorkOrder.md#taxcost)
- [taxCostConverted](MaintenanceWorkOrder.md#taxcostconverted)
- [timeOpen](MaintenanceWorkOrder.md#timeopen)
- [totalCost](MaintenanceWorkOrder.md#totalcost)
- [totalCostConverted](MaintenanceWorkOrder.md#totalcostconverted)
- [updatedDate](MaintenanceWorkOrder.md#updateddate)
- [version](MaintenanceWorkOrder.md#version)
- [zone](MaintenanceWorkOrder.md#zone)

## Properties

### assignedTo

• **assignedTo**: [`User`](User.md)

Gets or sets the [User](User.md) assigned to the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L14)

___

### completedDateTime

• **completedDateTime**: `Date`

Gets or sets the date the work order was completed by the user. Should be later than MaintenanceWorkOrder.DateTime.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L16)

___

### costCurrency

• **costCurrency**: `string`

Gets or sets the currency cost for the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L18)

___

### costCurrencyConverted

• **costCurrencyConverted**: `string`

Gets or sets the currency cost from user setting for the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L20)

___

### currencyConversionFailed

• **currencyConversionFailed**: `boolean`

Gets or sets a value indicating whether the currency conversion failed

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L22)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date the work order was open by the user. Must be earlier than MaintenanceWorkOrder.CompletedDateTime.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L24)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L28)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the device of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L30)

___

### dueOnDate

• **dueOnDate**: `Date`

Gets or sets the date the work order is due.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L32)

___

### engineHoursReading

• **engineHoursReading**: `string`

Gets or sets the current engine hours reading of the MaintenanceWorkOrder.Device.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L34)

___

### engineHoursReadingInHours

• **engineHoursReadingInHours**: `number`

Gets the current engine hours of the MaintenanceWorkOrder.Device rounded to the nearest whole hour.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L36)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### laborCost

• **laborCost**: `number`

Gets or sets the labor cost of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L38)

___

### laborCostConverted

• **laborCostConverted**: `number`

Gets or sets the labor cost converted of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L40)

___

### mediaFiles

• **mediaFiles**: [`MediaFile`](MediaFile.md)[]

Gets or sets the list of [MediaFile](MediaFile.md) for a event.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L42)

___

### name

• **name**: `string`

Gets or sets the name of this entity which identifies it and is used when displaying this entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### notes

• **notes**: `string`

Gets or sets the notes of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L44)

___

### odometerReading

• **odometerReading**: `number`

Gets or sets the current odometer reading of the MaintenanceWorkOrder.Device.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L46)

___

### odometerReadingDisplay

• **odometerReadingDisplay**: `number`

Gets or sets the current odometer reading of the MaintenanceWorkOrder.Device.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L48)

___

### openedByUser

• **openedByUser**: [`User`](User.md)

Gets or sets the [User](User.md) that opened the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L50)

___

### partsCost

• **partsCost**: `number`

Gets or sets the parts cost of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L52)

___

### partsCostConverted

• **partsCostConverted**: `number`

Gets or sets the parts cost converted of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L54)

___

### priorityCode

• **priorityCode**: `number`

Gets or sets the priority of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L56)

___

### priorityCodeDisplay

• **priorityCodeDisplay**: `number`

Gets or sets the priority of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L58)

___

### reference

• **reference**: `string`

Gets or sets the reference of the order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:60](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L60)

___

### repairClass

• **repairClass**: `number`

Gets or sets the "Repair Class of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:62](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L62)

___

### repairClassDisplay

• **repairClassDisplay**: `number`

Gets or sets the "Repair Class of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:64](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L64)

___

### repairReason

• **repairReason**: `number`

Gets or sets the Reason For Repair of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:66](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L66)

___

### repairReasonDisplay

• **repairReasonDisplay**: `number`

Gets or sets the Reason For Repair of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:68](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L68)

___

### shippingCost

• **shippingCost**: `number`

Gets or sets the shipping cost of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:70](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L70)

___

### shippingCostConverted

• **shippingCostConverted**: `number`

Gets or sets the shipping cost converted of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:72](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L72)

___

### statusCode

• **statusCode**: `number`

Gets or sets the status of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:74](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L74)

___

### statusCodeDisplay

• **statusCodeDisplay**: `number`

Gets or sets the status of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:76](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L76)

___

### taxCost

• **taxCost**: `number`

Gets or sets the tax cost of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:78](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L78)

___

### taxCostConverted

• **taxCostConverted**: `number`

Gets or sets the tax cost converted of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:80](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L80)

___

### timeOpen

• **timeOpen**: `string`

Gets or sets the period during which the work order was open.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:82](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L82)

___

### totalCost

• **totalCost**: `number`

Gets or sets the total cost of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:84](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L84)

___

### totalCostConverted

• **totalCostConverted**: `number`

Gets or sets the total cost converted of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:86](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L86)

___

### updatedDate

• **updatedDate**: `Date`

Gets or sets the update date of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:88](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L88)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)

___

### zone

• **zone**: [`Zone`](Zone.md)

Gets or sets the zone of repair site of the work order.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts:90](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrder.ts#L90)
