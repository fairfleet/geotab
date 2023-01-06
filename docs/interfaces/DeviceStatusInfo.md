[@fairfleet/geotab](../README.md) / DeviceStatusInfo

# Interface: DeviceStatusInfo

Represents the current state of a vehicle by providing information such as the vehicle bearing location and speed, active exception events and whether the device is currently communicating.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`DeviceStatusInfo`**

## Table of contents

### Properties

- [bearing](DeviceStatusInfo.md#bearing)
- [currentStateDuration](DeviceStatusInfo.md#currentstateduration)
- [dateTime](DeviceStatusInfo.md#datetime)
- [device](DeviceStatusInfo.md#device)
- [driver](DeviceStatusInfo.md#driver)
- [exceptionEvents](DeviceStatusInfo.md#exceptionevents)
- [groups](DeviceStatusInfo.md#groups)
- [id](DeviceStatusInfo.md#id)
- [isDeviceCommunicating](DeviceStatusInfo.md#isdevicecommunicating)
- [isDriving](DeviceStatusInfo.md#isdriving)
- [isHistoricLastDriver](DeviceStatusInfo.md#ishistoriclastdriver)
- [latitude](DeviceStatusInfo.md#latitude)
- [longitude](DeviceStatusInfo.md#longitude)
- [speed](DeviceStatusInfo.md#speed)
- [version](DeviceStatusInfo.md#version)

## Properties

### bearing

• **bearing**: `number`

Gets or sets the bearing (heading) in integer degrees.

**`Remarks`**

Valued between 0 and 359 inclusive. 0 represents North, 90 represents East, and so on. -1 represents unknown bearing.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L18)

___

### currentStateDuration

• **currentStateDuration**: `string`

Gets or sets the duration between the last Trip state change (i.e. driving or stop), and the most recent date of location information.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L20)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the most recent DeviceStatusInfo.DateTime of the latest piece of status, gps or fault data.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L22)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) this DeviceStatusInfo belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:24](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L24)

___

### driver

• **driver**: [`Driver`](Driver.md)

Gets or sets the [Driver](Driver.md) associated to the current [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:26](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L26)

___

### exceptionEvents

• **exceptionEvents**: [`ExceptionEvent`](ExceptionEvent.md)[]

Gets or sets the [ExceptionEvent](ExceptionEvent.md)(s) that are currently active.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:28](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L28)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets the [Group](Group.md)(s) that the [Device](Device.md) currently belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:30](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L30)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### isDeviceCommunicating

• **isDeviceCommunicating**: `boolean`

Gets or sets a value indicating whether the [Device](Device.md) is communicating.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:32](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L32)

___

### isDriving

• **isDriving**: `boolean`

Gets or sets a value indicating whether the current [Device](Device.md) state. If set true, is driving. Otherwise, it is stopped.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:34](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L34)

___

### isHistoricLastDriver

• **isHistoricLastDriver**: `boolean`

Gets or sets a value indicating whether the [Device](Device.md) has been assigned to "UnknownDriver" and the last [Trip](Trip.md)[Driver](Driver.md) is returned.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:36](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L36)

___

### latitude

• **latitude**: `number`

Gets or sets the current latitude of the [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:38](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L38)

___

### longitude

• **longitude**: `number`

Gets or sets the current longitude of the [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:40](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L40)

___

### speed

• **speed**: `number`

Gets or sets the current vehicle speed.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:42](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L42)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
