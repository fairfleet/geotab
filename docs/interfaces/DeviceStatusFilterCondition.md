[@fairfleet/geotab](../README.md) / DeviceStatusFilterCondition

# Interface: DeviceStatusFilterCondition

Device Status And/Or Filter object

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DeviceStatusFilterCondition`**

## Table of contents

### Properties

- [deviceStatusFilterConditions](DeviceStatusFilterCondition.md#devicestatusfilterconditions)
- [id](DeviceStatusFilterCondition.md#id)
- [isDeviceCommunicating](DeviceStatusFilterCondition.md#isdevicecommunicating)
- [isDriving](DeviceStatusFilterCondition.md#isdriving)
- [isSatelliteCommunication](DeviceStatusFilterCondition.md#issatellitecommunication)
- [relation](DeviceStatusFilterCondition.md#relation)
- [version](DeviceStatusFilterCondition.md#version)

## Properties

### deviceStatusFilterConditions

• **deviceStatusFilterConditions**: [`DeviceStatusFilterCondition`](DeviceStatusFilterCondition.md)[]

Gets or sets the filter conditions

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusFilterCondition.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusFilterCondition.ts#L11)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isDeviceCommunicating

• **isDeviceCommunicating**: `boolean`

Gets or sets search for devices based on their current communicating status.
 A device is communicating:
 - When the vehicle is driving and has communicated within the past 10 minutes.
 - When the vehicle is not driving and has communicated within the past 24 hours.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusFilterCondition.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusFilterCondition.ts#L18)

___

### isDriving

• **isDriving**: `boolean`

Gets or sets the filter indicating if device is driving
 Can only be driving if IsCommunicating is true

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusFilterCondition.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusFilterCondition.ts#L23)

___

### isSatelliteCommunication

• **isSatelliteCommunication**: `boolean`

Gets or sets search for devices communicating over satellite.
 Note: This is currently only supported in "GetLastKnownPositionsAsync"

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusFilterCondition.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusFilterCondition.ts#L28)

___

### relation

• **relation**: [`SearchRelation`](../README.md#searchrelation)

Gets or sets And/Or for device status filter

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusFilterCondition.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusFilterCondition.ts#L30)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
