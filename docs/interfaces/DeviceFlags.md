[@fairfleet/geotab](../README.md) / DeviceFlags

# Interface: DeviceFlags

The plan a device is on.

## Table of contents

### Properties

- [activeFeatures](DeviceFlags.md#activefeatures)
- [isActiveTrackingAllowed](DeviceFlags.md#isactivetrackingallowed)
- [isContinuousConnectAllowed](DeviceFlags.md#iscontinuousconnectallowed)
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

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L10)

___

### isActiveTrackingAllowed

• **isActiveTrackingAllowed**: `boolean`

Gets a value indicating whether the device has access to the active tracking
 functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L15)

___

### isContinuousConnectAllowed

• **isContinuousConnectAllowed**: `boolean`

Gets a value indicating whether the device has access to the continuous connect
 functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L20)

___

### isEngineAllowed

• **isEngineAllowed**: `boolean`

Gets a value indicating whether a Boolean indicating if the device has access to engine functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L22)

___

### isGarminAllowed

• **isGarminAllowed**: `boolean`

Gets a value indicating whether the device has access to Garmin functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L24)

___

### isHOSAllowed

• **isHOSAllowed**: `boolean`

Gets a value indicating whether the device has access to HOS functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L26)

___

### isIridiumAllowed

• **isIridiumAllowed**: `boolean`

Gets a value indicating whether the device has access to Iridium functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L28)

___

### isOdometerAllowed

• **isOdometerAllowed**: `boolean`

Gets a value indicating whether the device has access to odometer functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:30](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L30)

___

### isTripDetailAllowed

• **isTripDetailAllowed**: `boolean`

Gets a value indicating whether the device has access to trip detail functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:32](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L32)

___

### isUIAllowed

• **isUIAllowed**: `boolean`

Gets a value indicating whether the device can be viewed in MyGeotab.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:34](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L34)

___

### isVINAllowed

• **isVINAllowed**: `boolean`

Gets a value indicating whether the device has access to VIN functionality.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:36](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L36)

___

### ratePlans

• **ratePlans**: `string`[]

Gets the rate plans. Has been replaced by ActiveFeatures. Kept around for legacy serializers. See case 143314.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceFlags.ts:38](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceFlags.ts#L38)
