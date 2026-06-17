[@fairfleet/geotab](../README.md) / MaintenanceWorkOrderJob

# Interface: MaintenanceWorkOrderJob

Maintenance Work Order Job for a particular device.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`MaintenanceWorkOrderJob`**

## Table of contents

### Properties

- [costCurrency](MaintenanceWorkOrderJob.md#costcurrency)
- [costCurrencyConverted](MaintenanceWorkOrderJob.md#costcurrencyconverted)
- [currencyConversionFailed](MaintenanceWorkOrderJob.md#currencyconversionfailed)
- [dateCompleted](MaintenanceWorkOrderJob.md#datecompleted)
- [dateTime](MaintenanceWorkOrderJob.md#datetime)
- [deletedDateTime](MaintenanceWorkOrderJob.md#deleteddatetime)
- [description](MaintenanceWorkOrderJob.md#description)
- [device](MaintenanceWorkOrderJob.md#device)
- [engineHoursReading](MaintenanceWorkOrderJob.md#enginehoursreading)
- [engineHoursReadingInHours](MaintenanceWorkOrderJob.md#enginehoursreadinginhours)
- [eventDescription](MaintenanceWorkOrderJob.md#eventdescription)
- [hours](MaintenanceWorkOrderJob.md#hours)
- [id](MaintenanceWorkOrderJob.md#id)
- [isClosed](MaintenanceWorkOrderJob.md#isclosed)
- [laborCosts](MaintenanceWorkOrderJob.md#laborcosts)
- [laborCostsConverted](MaintenanceWorkOrderJob.md#laborcostsconverted)
- [maintenanceType](MaintenanceWorkOrderJob.md#maintenancetype)
- [mediaFiles](MaintenanceWorkOrderJob.md#mediafiles)
- [metadata](MaintenanceWorkOrderJob.md#metadata)
- [name](MaintenanceWorkOrderJob.md#name)
- [notes](MaintenanceWorkOrderJob.md#notes)
- [odometerReading](MaintenanceWorkOrderJob.md#odometerreading)
- [odometerReadingDisplay](MaintenanceWorkOrderJob.md#odometerreadingdisplay)
- [partsCost](MaintenanceWorkOrderJob.md#partscost)
- [partsCostConverted](MaintenanceWorkOrderJob.md#partscostconverted)
- [reference](MaintenanceWorkOrderJob.md#reference)
- [schedule](MaintenanceWorkOrderJob.md#schedule)
- [serviceWorkAccomplishedCode](MaintenanceWorkOrderJob.md#serviceworkaccomplishedcode)
- [severityCode](MaintenanceWorkOrderJob.md#severitycode)
- [severityCodeDisplay](MaintenanceWorkOrderJob.md#severitycodedisplay)
- [shippingCosts](MaintenanceWorkOrderJob.md#shippingcosts)
- [shippingCostsConverted](MaintenanceWorkOrderJob.md#shippingcostsconverted)
- [startDate](MaintenanceWorkOrderJob.md#startdate)
- [statusCode](MaintenanceWorkOrderJob.md#statuscode)
- [statusCodeDisplay](MaintenanceWorkOrderJob.md#statuscodedisplay)
- [taxCosts](MaintenanceWorkOrderJob.md#taxcosts)
- [taxCostsConverted](MaintenanceWorkOrderJob.md#taxcostsconverted)
- [totalCosts](MaintenanceWorkOrderJob.md#totalcosts)
- [totalCostsConverted](MaintenanceWorkOrderJob.md#totalcostsconverted)
- [triggeredDate](MaintenanceWorkOrderJob.md#triggereddate)
- [updateDate](MaintenanceWorkOrderJob.md#updatedate)
- [version](MaintenanceWorkOrderJob.md#version)
- [vmrsSystemCode](MaintenanceWorkOrderJob.md#vmrssystemcode)
- [workOrder](MaintenanceWorkOrderJob.md#workorder)

## Properties

### costCurrency

• **costCurrency**: `string`

Gets or sets the currency of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L16)

___

### costCurrencyConverted

• **costCurrencyConverted**: [`Currency`](../README.md#currency)

Gets or sets the currency in which costs will be displayed.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L18)

___

### currencyConversionFailed

• **currencyConversionFailed**: `boolean`

Gets or sets a value indicating whether the currency conversion failed

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L20)

___

### dateCompleted

• **dateCompleted**: `Date`

Gets or sets the date completed of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L22)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date the work job was created.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L24)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L28)

___

### description

• **description**: `string`

Gets or sets the description of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L30)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the MaintenanceWorkOrderJob.Device related to the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L32)

___

### engineHoursReading

• **engineHoursReading**: `string`

Gets or sets the current engine hours reading of the MaintenanceWorkOrderJob.Device.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L34)

___

### engineHoursReadingInHours

• **engineHoursReadingInHours**: `number`

Gets the current engine hours of the MaintenanceWorkOrderJob.Device rounded to the nearest whole hour.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L36)

___

### eventDescription

• **eventDescription**: `string`

Gets or sets the event description.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L38)

___

### hours

• **hours**: `number`

Gets or sets the hours spent on the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L40)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isClosed

• **isClosed**: `boolean`

Gets or sets a value indicating whether the work job is closed.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L42)

___

### laborCosts

• **laborCosts**: `number`

Gets or sets the labor costs of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L44)

___

### laborCostsConverted

• **laborCostsConverted**: `number`

Gets or sets the labor costs converted of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L46)

___

### maintenanceType

• **maintenanceType**: [`EventType`](EventType.md)

Gets or sets the [EventType](EventType.md) of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L48)

___

### mediaFiles

• **mediaFiles**: [`MediaFile`](MediaFile.md)[]

Gets or sets the list of [MediaFile](MediaFile.md) for a event.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L50)

___

### metadata

• **metadata**: `Object`

Gets or sets the metadata of the work job.

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L52)

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

Gets or sets the notes for the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L54)

___

### odometerReading

• **odometerReading**: `number`

Gets or sets the current odometer reading of the MaintenanceWorkOrderJob.Device.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L56)

___

### odometerReadingDisplay

• **odometerReadingDisplay**: `number`

Gets or sets the current odometer reading of the MaintenanceWorkOrderJob.Device.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L58)

___

### partsCost

• **partsCost**: `number`

Gets or sets the parts costs of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:60](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L60)

___

### partsCostConverted

• **partsCostConverted**: `number`

Gets or sets the parts costs converted of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:62](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L62)

___

### reference

• **reference**: `string`

Gets or sets the reference of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:64](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L64)

___

### schedule

• **schedule**: [`MaintenanceSchedule`](MaintenanceSchedule.md)

Gets or sets the [MaintenanceSchedule](MaintenanceSchedule.md) related to the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:66](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L66)

___

### serviceWorkAccomplishedCode

• **serviceWorkAccomplishedCode**: `number`

Gets or sets the service work accomplished code for the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:68](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L68)

___

### severityCode

• **severityCode**: `number`

Gets or sets the severity of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:70](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L70)

___

### severityCodeDisplay

• **severityCodeDisplay**: `number`

Gets or sets the severity of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:72](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L72)

___

### shippingCosts

• **shippingCosts**: `number`

Gets or sets the shipping cost of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:74](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L74)

___

### shippingCostsConverted

• **shippingCostsConverted**: `number`

Gets or sets the shipping cost converted of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:76](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L76)

___

### startDate

• **startDate**: `Date`

Gets or sets the start date and time of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:78](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L78)

___

### statusCode

• **statusCode**: `number`

Gets or sets the status of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:80](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L80)

___

### statusCodeDisplay

• **statusCodeDisplay**: `number`

Gets or sets the status of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:82](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L82)

___

### taxCosts

• **taxCosts**: `number`

Gets or sets the tax costs of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:84](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L84)

___

### taxCostsConverted

• **taxCostsConverted**: `number`

Gets or sets the tax costs of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:86](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L86)

___

### totalCosts

• **totalCosts**: `number`

Gets or sets the total costs of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:88](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L88)

___

### totalCostsConverted

• **totalCostsConverted**: `number`

Gets or sets the total costs of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:90](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L90)

___

### triggeredDate

• **triggeredDate**: `Date`

Gets or sets the triggered date the work job is due.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:92](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L92)

___

### updateDate

• **updateDate**: `Date`

Gets or sets the date the job was updated.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:94](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L94)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)

___

### vmrsSystemCode

• **vmrsSystemCode**: `number`

Gets or sets the VMRS (Vehicle Maintenance Reporting Standards) system code of the work job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:96](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L96)

___

### workOrder

• **workOrder**: [`MaintenanceWorkOrder`](MaintenanceWorkOrder.md)

Gets or sets the related work order job.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts:98](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkOrderJob.ts#L98)
