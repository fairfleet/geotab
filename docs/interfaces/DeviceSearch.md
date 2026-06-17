[@fairfleet/geotab](../README.md) / DeviceSearch

# Interface: DeviceSearch

The object used to specify the arguments when searching for a [Device](Device.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DeviceSearch`**

## Table of contents

### Properties

- [billingLevelSearch](DeviceSearch.md#billinglevelsearch)
- [comment](DeviceSearch.md#comment)
- [customPropertySearch](DeviceSearch.md#custompropertysearch)
- [deviceCommunicationStatusSearch](DeviceSearch.md#devicecommunicationstatussearch)
- [deviceIds](DeviceSearch.md#deviceids)
- [devicePlan](DeviceSearch.md#deviceplan)
- [devicePlanBillingInfo](DeviceSearch.md#deviceplanbillinginfo)
- [deviceReplacementInfoSearch](DeviceSearch.md#devicereplacementinfosearch)
- [deviceType](DeviceSearch.md#devicetype)
- [deviceTypes](DeviceSearch.md#devicetypes)
- [engineVehicleIdentificationNumber](DeviceSearch.md#enginevehicleidentificationnumber)
- [excludeActiveCommunicationStatusReason](DeviceSearch.md#excludeactivecommunicationstatusreason)
- [excludeSecondaryDevices](DeviceSearch.md#excludesecondarydevices)
- [excludeUntrackedAssets](DeviceSearch.md#excludeuntrackedassets)
- [fromDate](DeviceSearch.md#fromdate)
- [groupFilterCondition](DeviceSearch.md#groupfiltercondition)
- [groups](DeviceSearch.md#groups)
- [hardwareId](DeviceSearch.md#hardwareid)
- [hideArchivedDevices](DeviceSearch.md#hidearchiveddevices)
- [id](DeviceSearch.md#id)
- [includeDeviceReplacementInfo](DeviceSearch.md#includedevicereplacementinfo)
- [isCommunicating](DeviceSearch.md#iscommunicating)
- [keywords](DeviceSearch.md#keywords)
- [licensePlate](DeviceSearch.md#licenseplate)
- [macAddress](DeviceSearch.md#macaddress)
- [name](DeviceSearch.md#name)
- [serialNumber](DeviceSearch.md#serialnumber)
- [serialNumbers](DeviceSearch.md#serialnumbers)
- [toDate](DeviceSearch.md#todate)
- [vehicleIdentificationNumber](DeviceSearch.md#vehicleidentificationnumber)
- [version](DeviceSearch.md#version)
- [vinInfoMake](DeviceSearch.md#vininfomake)
- [vinInfoModel](DeviceSearch.md#vininfomodel)
- [vinInfoYear](DeviceSearch.md#vininfoyear)

## Properties

### billingLevelSearch

• **billingLevelSearch**: [`BillingLevelSearch`](BillingLevelSearch.md)

Gets or sets filter for [Device](Device.md) with specific billing levels.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L19)

___

### comment

• **comment**: `string`

Gets or sets search for Devices with comments matching this value. Wildcard can be used by
 prepending/appending "%" to string. Example "%comments%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L24)

___

### customPropertySearch

• **customPropertySearch**: [`CustomPropertySearch`](CustomPropertySearch.md)

Gets or sets search for Devices that contain certain [Property](Property.md) and/or PropertyValue`1 and/or belong to certain [PropertySet](PropertySet.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L26)

___

### deviceCommunicationStatusSearch

• **deviceCommunicationStatusSearch**: [`DeviceCommunicationStatusSearch`](DeviceCommunicationStatusSearch.md)

Gets or sets search for devices that has [DeviceCommunicationStatus](DeviceCommunicationStatus.md) and filter them by DeviceSearch.DeviceCommunicationStatusSearch
 Available DeviceSearch.DeviceCommunicationStatusSearch options are:
 <list><item><description>[DeviceCommunicationStatusState](../README.md#devicecommunicationstatusstate)</description></item><item><description>IsCommunicating</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L32)

___

### deviceIds

• **deviceIds**: `string`[]

Gets or sets search for Devices with these unique Id(s). Not Supported
 for searching for devices, only for [DeviceStatusInfo](DeviceStatusInfo.md), [TachographDataFile](TachographDataFile.md), [FaultData](FaultData.md), [ChargeEvent](ChargeEvent.md)
 and AddInDeviceLink.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L38)

___

### devicePlan

• **devicePlan**: [`DevicePlan`](../README.md#deviceplan)

Gets or sets search for devices that have the DeviceSearch.DevicePlan speicified

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L40)

___

### devicePlanBillingInfo

• **devicePlanBillingInfo**: [`DevicePlanBillingInfo`](DevicePlanBillingInfo.md)

Gets or sets search for devices that have the DeviceSearch.DevicePlanBillingInfo speicified.
 Available DeviceSearch.DevicePlanBillingInfo options are:
 <list><item><description>DevicePlanName</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L46)

___

### deviceReplacementInfoSearch

• **deviceReplacementInfoSearch**: [`DeviceReplacementInfoSearch`](DeviceReplacementInfoSearch.md)

Gets or sets search for devices that contain [DeviceReplacementInfo](DeviceReplacementInfo.md) and filter them by DeviceSearch.DeviceReplacementInfoSearch
 Available DeviceSearch.DeviceReplacementInfoSearch options are:
 <list><item><description>DeviceReplacementStatus</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L52)

___

### deviceType

• **deviceType**: [`DeviceType`](../README.md#devicetype)

Gets or sets search for Devices of this [DeviceType](../README.md#devicetype).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L54)

___

### deviceTypes

• **deviceTypes**: [`DeviceType`](../README.md#devicetype)[]

Gets or sets search for Devices with these unique [DeviceType](../README.md#devicetype)(s).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L56)

___

### engineVehicleIdentificationNumber

• **engineVehicleIdentificationNumber**: `string`

Gets or sets search for a Device by Vehicle Identification Number (VIN) reported by the engine.
 This is the unique number assigned to the vehicle during manufacturing and reported through any
 non-legacy GO device.
 This differs from DeviceSearch.VehicleIdentificationNumber in that it is the last VIN reported from the
 Device, and will be updated whether it is classified as valid or invalid.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:64](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L64)

___

### excludeActiveCommunicationStatusReason

• **excludeActiveCommunicationStatusReason**: `boolean`

Gets or sets the boolean to filter out devices that currently have an active DeviceCommunicationStatus.
 When true it will not return any devices that have a DeviceCommunicationStatus.IsActive = true; when false it only return devices with an [DeviceCommunicationStatus](DeviceCommunicationStatus.md) != true. This property is mostly used with DeviceSearch.IsCommunicating to filter devices that are offline with an unknown reason

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:69](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L69)

___

### excludeSecondaryDevices

• **excludeSecondaryDevices**: `boolean`

Gets or sets the boolean to filter out secondary devices.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:71](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L71)

___

### excludeUntrackedAssets

• **excludeUntrackedAssets**: `boolean`

Gets or sets filter for UntrackedAsset.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:73](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L73)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for Devices that were active at this date or after. Set to UTC now to search for
 only currently active (non-archived) devices.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:78](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L78)

___

### groupFilterCondition

• **groupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets for devices and asset types.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:80](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L80)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Devices that are a member of these [GroupSearch](GroupSearch.md)(s). Each GroupSearch is an object within the array.
 Available
 GroupSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:87](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L87)

___

### hardwareId

• **hardwareId**: `number`

Gets or sets search for a Device with this unique hardware ID.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:89](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L89)

___

### hideArchivedDevices

• **hideArchivedDevices**: `boolean`

Gets or sets whether to hide archived devices based on today's date instead of the filter period start.
 When true, excludes devices archived as of today (ActiveTo is before tomorrow's midnight).
 When false or null, excludes devices archived before the filter period start (default behavior).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:95](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L95)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeDeviceReplacementInfo

• **includeDeviceReplacementInfo**: `boolean`

Gets or sets search for devices that contain [DeviceReplacementInfo](DeviceReplacementInfo.md) and include this information to the result.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:97](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L97)

___

### isCommunicating

• **isCommunicating**: `boolean`

Gets or sets filter for a device communication state. Note: This is will search the [DeviceStatusInfo](DeviceStatusInfo.md);
 where as DeviceSearch.DeviceCommunicationStatusSearch will search the [DeviceCommunicationStatus](DeviceCommunicationStatus.md).
 If device is not communicating it will be found in both criterias though the [DeviceStatusInfo](DeviceStatusInfo.md)
 is updated more frequently while the [DeviceCommunicationStatus](DeviceCommunicationStatus.md) contains reason why it not communicating.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:104](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L104)

___

### keywords

• **keywords**: `string`[]

Gets or sets search for entities that contain specific keywords in all wildcard string-searchable fields.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:106](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L106)

___

### licensePlate

• **licensePlate**: `string`

Gets or sets search for Devices with a license plate matching this value. Wildcard can be used by
 prepending/appending "%" to string. Example "%LicensePlate%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:111](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L111)

___

### macAddress

• **macAddress**: `string`

Gets or sets search for Devices with this MacAddress.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:113](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L113)

___

### name

• **name**: `string`

Gets or sets search for Devices with this Name. Name is the primary description of the Device. Wildcard can be
 used by prepending/appending "%" to string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:118](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L118)

___

### serialNumber

• **serialNumber**: `string`

Gets or sets search for a Device by its unique serial number. Wildcard can be
 used by prepending/appending "%" to string. Example "%SerialNumber%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:123](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L123)

___

### serialNumbers

• **serialNumbers**: `string`[]

Gets or sets search for multiple Devices by their unique serial numbers. Only supported
 for [DeviceSearch](DeviceSearch.md) and AddInDeviceLinkSearch

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:128](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L128)

___

### toDate

• **toDate**: `Date`

Gets or sets search for Devices that were active at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:130](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L130)

___

### vehicleIdentificationNumber

• **vehicleIdentificationNumber**: `string`

Gets or sets search for a Device by Vehicle Identification Number (VIN). This is the unique number assigned
 to the vehicle during manufacturing.
 This differs from DeviceSearch.EngineVehicleIdentificationNumber in that it is the last VIN reported
 from the Device that was determined to be valid. Wildcard can be
 used by prepending/appending "%" to string. Example "%VehicleIdentificationNumber%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:138](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L138)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### vinInfoMake

• **vinInfoMake**: `string`

Gets or sets search for a Device by VIN Info Make. This is the vehicle manufacturer
 information decoded from the VIN. Wildcard can be used by prepending/appending "%"
 to string. Example "%Make%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:144](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L144)

___

### vinInfoModel

• **vinInfoModel**: `string`

Gets or sets search for a Device by VIN Info Model. This is the vehicle model
 information decoded from the VIN. Wildcard can be used by prepending/appending "%"
 to string. Example "%Model%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:150](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L150)

___

### vinInfoYear

• **vinInfoYear**: `string`

Gets or sets search for a Device by VIN Info Year. This is the vehicle year
 information decoded from the VIN. Wildcard can be used by prepending/appending "%"
 to string. Example "%2022%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceSearch.ts:156](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceSearch.ts#L156)
