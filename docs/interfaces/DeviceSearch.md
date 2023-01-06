[@fairfleet/geotab](../README.md) / DeviceSearch

# Interface: DeviceSearch

The object used to specify the arguments when searching for a [Device](Device.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DeviceSearch`**

## Table of contents

### Properties

- [comment](DeviceSearch.md#comment)
- [customPropertySearch](DeviceSearch.md#custompropertysearch)
- [deviceIds](DeviceSearch.md#deviceids)
- [devicePlan](DeviceSearch.md#deviceplan)
- [devicePlanBillingInfo](DeviceSearch.md#deviceplanbillinginfo)
- [deviceReplacementInfoSearch](DeviceSearch.md#devicereplacementinfosearch)
- [deviceType](DeviceSearch.md#devicetype)
- [engineVehicleIdentificationNumber](DeviceSearch.md#enginevehicleidentificationnumber)
- [fromDate](DeviceSearch.md#fromdate)
- [groupFilterCondition](DeviceSearch.md#groupfiltercondition)
- [groups](DeviceSearch.md#groups)
- [hardwareId](DeviceSearch.md#hardwareid)
- [id](DeviceSearch.md#id)
- [includeDeviceReplacementInfo](DeviceSearch.md#includedevicereplacementinfo)
- [keywords](DeviceSearch.md#keywords)
- [licensePlate](DeviceSearch.md#licenseplate)
- [name](DeviceSearch.md#name)
- [propertySelector](DeviceSearch.md#propertyselector)
- [serialNumber](DeviceSearch.md#serialnumber)
- [toDate](DeviceSearch.md#todate)
- [vehicleIdentificationNumber](DeviceSearch.md#vehicleidentificationnumber)
- [version](DeviceSearch.md#version)

## Properties

### comment

• **comment**: `string`

Gets or sets search for Devices with comments matching this value. Wildcard can be used by
 prepending/appending "%" to string. Example "%comments%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L20)

___

### customPropertySearch

• **customPropertySearch**: [`CustomPropertySearch`](CustomPropertySearch.md)

Gets or sets search for Devices that contain certain [Property](Property.md) and/or PropertyValue`1 and/or belong to certain [PropertySet](PropertySet.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L22)

___

### deviceIds

• **deviceIds**: `string`[]

Gets or sets search for Devices with these unique Id(s). Not Supported
 for searching for devices, only for [DeviceStatusInfo](DeviceStatusInfo.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:27](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L27)

___

### devicePlan

• **devicePlan**: [`DevicePlan`](../README.md#deviceplan)

Gets or sets search for devices that have the DeviceSearch.DevicePlan speicified

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:29](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L29)

___

### devicePlanBillingInfo

• **devicePlanBillingInfo**: [`DevicePlanBillingInfo`](DevicePlanBillingInfo.md)

Gets or sets search for devices that have the DeviceSearch.DevicePlanBillingInfo speicified.
 Available DeviceSearch.DevicePlanBillingInfo options are:
 <list><item><description>DevicePlanName</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:35](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L35)

___

### deviceReplacementInfoSearch

• **deviceReplacementInfoSearch**: [`DeviceReplacementInfoSearch`](DeviceReplacementInfoSearch.md)

Gets or sets search for devices that contain [DeviceReplacementInfo](DeviceReplacementInfo.md) and filter them by DeviceSearch.DeviceReplacementInfoSearch
 Available DeviceSearch.DeviceReplacementInfoSearch options are:
 <list><item><description>DeviceReplacementStatus</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:41](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L41)

___

### deviceType

• **deviceType**: [`DeviceType`](../README.md#devicetype)

Gets or sets search for Devices of this [DeviceType](../README.md#devicetype).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:43](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L43)

___

### engineVehicleIdentificationNumber

• **engineVehicleIdentificationNumber**: `string`

Gets or sets search for a Device by Vehicle Identification Number (VIN) reported by the engine.
 This is the unique number assigned to the vehicle during manufacturing and reported through any
 non-legacy GO device.
 This differs from DeviceSearch.VehicleIdentificationNumber in that it is the last VIN reported from the
 Device, and will be updated whether it is classified as valid or invalid.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:51](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L51)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for Devices that were active at this date or after. Set to UTC now to search for
 only currently active (non-archived) devices.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:56](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L56)

___

### groupFilterCondition

• **groupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets for devices and asset types.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:58](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L58)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Devices that are a member of these [GroupSearch](GroupSearch.md)(s). Each GroupSearch is an object within the array.
 Available
 GroupSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:65](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L65)

___

### hardwareId

• **hardwareId**: `number`

Gets or sets search for a Device with this unique hardware ID.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:67](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L67)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### includeDeviceReplacementInfo

• **includeDeviceReplacementInfo**: `boolean`

Gets or sets search for devices that contain [DeviceReplacementInfo](DeviceReplacementInfo.md) and include this information to the result.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:69](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L69)

___

### keywords

• **keywords**: `string`[]

Gets or sets search for entities that contain specific keywords in all wildcard string-searchable fields.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:71](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L71)

___

### licensePlate

• **licensePlate**: `string`

Gets or sets search for Devices with a license plate matching this value. Wildcard can be used by
 prepending/appending "%" to string. Example "%LicensePlate%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:76](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L76)

___

### name

• **name**: `string`

Gets or sets search for Devices with this Name. Name is the primary description of the Device. Wildcard can be
 used by prepending/appending "%" to string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:81](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L81)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### serialNumber

• **serialNumber**: `string`

Gets or sets search for a Device by its unique serial number. Wildcard can be
 used by prepending/appending "%" to string. Example "%SerialNumber%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:86](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L86)

___

### toDate

• **toDate**: `Date`

Gets or sets search for Devices that were active at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:88](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L88)

___

### vehicleIdentificationNumber

• **vehicleIdentificationNumber**: `string`

Gets or sets search for a Device by Vehicle Identification Number (VIN). This is the unique number assigned
 to the vehicle during manufacturing.
 This differs from DeviceSearch.EngineVehicleIdentificationNumber in that it is the last VIN reported
 from the Device that was determined to be valid. Wildcard can be
 used by prepending/appending "%" to string. Example "%VehicleIdentificationNumber%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:96](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L96)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
