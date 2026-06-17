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
- [diagnostics](DeviceStatusInfo.md#diagnostics)
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
- [statusData](DeviceStatusInfo.md#statusdata)
- [version](DeviceStatusInfo.md#version)

## Properties

### bearing

• **bearing**: `number`

Gets or sets the bearing (heading) in integer degrees.

**`Remarks`**

Valued between 0 and 359 inclusive. 0 represents North, 90 represents East, and so on. -1 represents unknown bearing.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L19)

___

### currentStateDuration

• **currentStateDuration**: `string`

Gets or sets the duration between the last Trip state change (i.e. driving or stop), and the most recent date of location information.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L21)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the most recent DeviceStatusInfo.DateTime of the latest piece of status, gps or fault data.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L23)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) this DeviceStatusInfo belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L25)

___

### diagnostics

• **diagnostics**: `Object`

Gets or sets a dictionary for latest IDeviceStatusInfoDiagnostic(s) of current [Device](Device.md).

#### Index signature

▪ [key: `string`]: `unknown`

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L27)

___

### driver

• **driver**: [`Driver`](Driver.md)

Gets or sets the [Driver](Driver.md) associated to the current [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L29)

___

### exceptionEvents

• **exceptionEvents**: [`ExceptionEvent`](ExceptionEvent.md)[]

Gets or sets the [ExceptionEvent](ExceptionEvent.md)(s) that are currently active.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L31)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets the [Group](Group.md)(s) that the [Device](Device.md) currently belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L33)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Overrides

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L35)

___

### isDeviceCommunicating

• **isDeviceCommunicating**: `boolean`

Gets or sets a value indicating whether the [Device](Device.md) is communicating.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L37)

___

### isDriving

• **isDriving**: `boolean`

Gets or sets a value indicating whether the current [Device](Device.md) state. If set true, is driving. Otherwise, it is stopped.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L39)

___

### isHistoricLastDriver

• **isHistoricLastDriver**: `boolean`

Gets or sets a value indicating whether the [Device](Device.md) has been assigned to "UnknownDriver" and the last [Trip](Trip.md)[Driver](Driver.md) is returned.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L41)

___

### latitude

• **latitude**: `number`

Gets or sets the current latitude of the [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L43)

___

### longitude

• **longitude**: `number`

Gets or sets the current longitude of the [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L45)

___

### speed

• **speed**: `number`

Gets or sets the current vehicle speed.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L47)

___

### statusData

• **statusData**: [`StatusData`](StatusData.md)[]

Gets or sets a list of the latest DeviceStatusInfo.StatusData records for the current [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L49)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Overrides

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceStatusInfo.ts#L51)
