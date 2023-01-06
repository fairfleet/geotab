[@fairfleet/geotab](../README.md) / DeviceFlags

# Interface: DeviceFlags

The plan a device is on.

## Table of contents

### Properties

- [activeFeatures](DeviceFlags.md#activefeatures)
- [isActiveTrackingAllowed](DeviceFlags.md#isactivetrackingallowed)
- [isEngineAllowed](DeviceFlags.md#isengineallowed)
- [isGarminAllowed](DeviceFlags.md#isgarminallowed)
- [isHOSAllowed](DeviceFlags.md#ishosallowed)
- [isIridiumAllowed](DeviceFlags.md#isiridiumallowed)
- [isOdometerAllowed](DeviceFlags.md#isodometerallowed)
- [isTripDetailAllowed](DeviceFlags.md#istripdetailallowed)
- [isUIAllowed](DeviceFlags.md#isuiallowed)
- [isVINAllowed](DeviceFlags.md#isvinallowed)
- [ratePlans](DeviceFlags.md#rateplans)

## Properties

### activeFeatures

• **activeFeatures**: [`VehicleFeatureCategory`](../README.md#vehiclefeaturecategory)[]

Gets a list of features currently active on the device.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L10)

___

### isActiveTrackingAllowed

• **isActiveTrackingAllowed**: `boolean`

Gets a value indicating whether the device has access to the active tracking
 functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L15)

___

### isEngineAllowed

• **isEngineAllowed**: `boolean`

Gets a value indicating whether a Boolean indicating if the device has access to engine functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L17)

___

### isGarminAllowed

• **isGarminAllowed**: `boolean`

Gets a value indicating whether the device has access to Garmin functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L19)

___

### isHOSAllowed

• **isHOSAllowed**: `boolean`

Gets a value indicating whether the device has access to HOS functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L21)

___

### isIridiumAllowed

• **isIridiumAllowed**: `boolean`

Gets a value indicating whether the device has access to Iridium functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L23)

___

### isOdometerAllowed

• **isOdometerAllowed**: `boolean`

Gets a value indicating whether the device has access to odometer functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:25](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L25)

___

### isTripDetailAllowed

• **isTripDetailAllowed**: `boolean`

Gets a value indicating whether the device has access to trip detail functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:27](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L27)

___

### isUIAllowed

• **isUIAllowed**: `boolean`

Gets a value indicating whether the device can be viewed in MyGeotab.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:29](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L29)

___

### isVINAllowed

• **isVINAllowed**: `boolean`

Gets a value indicating whether the device has access to VIN functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:31](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L31)

___

### ratePlans

• **ratePlans**: `string`[]

Gets the rate plans. Has been replaced by ActiveFeatures. Kept around for legacy serializers. See case 143314.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:33](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L33)
