[@fairfleet/geotab](../README.md) / Device

# Interface: Device

A Device represents the physical tracking device installed in
 the vehicle. A device and vehicle is typically synonymous since the GO tracking device is
 installed in a vehicle. In the case where there is no device; this is represented by "NoDeviceId". The device
 types that are supported are:.
 <list><item><description>Go9</description></item><item><description>Go8</description></item><item><description>Go7</description></item><item><description>Go6</description></item><item><description>Go5</description></item><item><description>Go4v3</description></item><item><description>CustomDevice</description></item><item><description>A1</description></item><item><description>U1</description></item></list>

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`Device`**

## Table of contents

### Properties

- [activeFrom](Device.md#activefrom)
- [activeTo](Device.md#activeto)
- [comment](Device.md#comment)
- [customFeatures](Device.md#customfeatures)
- [customProperties](Device.md#customproperties)
- [deviceFlags](Device.md#deviceflags)
- [devicePlanBillingInfo](Device.md#deviceplanbillinginfo)
- [devicePlans](Device.md#deviceplans)
- [deviceReplacementInfo](Device.md#devicereplacementinfo)
- [deviceType](Device.md#devicetype)
- [groups](Device.md#groups)
- [hardwareId](Device.md#hardwareid)
- [id](Device.md#id)
- [ignoreDownloadsUntil](Device.md#ignoredownloadsuntil)
- [maxSecondsBetweenLogs](Device.md#maxsecondsbetweenlogs)
- [minSecondsBetweenLogs](Device.md#minsecondsbetweenlogs)
- [name](Device.md#name)
- [productId](Device.md#productid)
- [registerDeviceResultLite](Device.md#registerdeviceresultlite)
- [serialNumber](Device.md#serialnumber)
- [timeToDownload](Device.md#timetodownload)
- [timeZoneId](Device.md#timezoneid)
- [version](Device.md#version)
- [workTime](Device.md#worktime)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets the date the device is active from. Default [MinDate].

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:25](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L25)

___

### activeTo

• **activeTo**: `Date`

Gets or sets the date that the device is active to. Default [MaxDate].

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:27](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L27)

___

### comment

• **comment**: `string`

Gets or sets free text field where any user information can be stored and referenced for this entity.

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:29](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L29)

___

### customFeatures

• **customFeatures**: `Object`

Gets or sets a list of [DeviceCustomFeature](../README.md#devicecustomfeature)s for this [Device](Device.md) and their values.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AutoHos` | `boolean` |

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:31](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L31)

___

### customProperties

• **customProperties**: `unknown`[]

Gets or sets the set of dynamic, user created, custom properties.

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:33](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L33)

___

### deviceFlags

• **deviceFlags**: [`DeviceFlags`](DeviceFlags.md)

Gets or sets the device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:35](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L35)

___

### devicePlanBillingInfo

• **devicePlanBillingInfo**: [`DevicePlanBillingInfo`](DevicePlanBillingInfo.md)[]

Gets or sets the Device.DevicePlanBillingInfo that has been purchased for this device.

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:37](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L37)

___

### devicePlans

• **devicePlans**: [`DevicePlan`](../README.md#deviceplan)[]

Gets or sets the Geotab DevicePlan that has been purchased for this device.

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:39](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L39)

___

### deviceReplacementInfo

• **deviceReplacementInfo**: [`DeviceReplacementInfo`](DeviceReplacementInfo.md)

Gets or sets the device replacement information.

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:41](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L41)

___

### deviceType

• **deviceType**: [`DeviceType`](../README.md#devicetype)

Gets specifies the GO or Custom [DeviceType](../README.md#devicetype).

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:43](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L43)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets the list of [Group](Group.md)(s) the device belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:45](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L45)

___

### hardwareId

• **hardwareId**: `number`

Gets or sets the unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:47](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L47)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:49](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L49)

___

### ignoreDownloadsUntil

• **ignoreDownloadsUntil**: `Date`

Gets or sets The date that tells the system at what moment should it start checking the device status and warn if there is no new data. Used when a new device is just installed or the vehicle undergoes a lengthy service. Default [MinDate].

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:51](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L51)

___

### maxSecondsBetweenLogs

• **maxSecondsBetweenLogs**: `number`

Gets or sets the maximum allowed time between logs when the ignition is on in seconds.
 When the value is exceeded, data is considered to be missing. Default [200].

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:56](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L56)

___

### minSecondsBetweenLogs

• **minSecondsBetweenLogs**: `number`

Gets the minimum allowable value for Device.MaxSecondsBetweenLogs. Defaults to 0.0f.

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:58](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L58)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity. Maximum length [50].

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:60](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L60)

___

### productId

• **productId**: `number`

Gets or sets the product id. Each device is assigned a unique hardware product id.

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:62](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L62)

___

### registerDeviceResultLite

• **registerDeviceResultLite**: [`RegisterDeviceResultLite`](RegisterDeviceResultLite.md)

Gets or sets a value indicating the current registration status of the device to the Gateway.

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:64](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L64)

___

### serialNumber

• **serialNumber**: `string`

Gets or sets the Serial Number of the device. Maximum length [12].

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:66](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L66)

___

### timeToDownload

• **timeToDownload**: `string`

Gets or sets the expected time between downloads, i.e. how frequently the
 device is expected to produce new data. For passive devices this might range from 1 to a few
 days. For live devices this should be maximum 24h unless vehicles travel out of coverage
 frequently. This is used to check if the device is in good state.

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:73](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L73)

___

### timeZoneId

• **timeZoneId**: `string`

Gets or sets the IANA time zone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:75](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L75)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)

___

### workTime

• **workTime**: [`WorkTime`](WorkTime.md)

Gets or sets the [WorkTime](WorkTime.md) rules to apply to the device. Default [WorkTimeStandardHours].

#### Defined in

[src/types/Checkmate/ObjectModel/Device.ts:77](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Device.ts#L77)
