[@fairfleet/geotab](../README.md) / DeviceRegistrationState

# Interface: DeviceRegistrationState

A particular instance of an [DeviceRegistrationState](DeviceRegistrationState.md).

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DeviceRegistrationState`**

## Table of contents

### Properties

- [actualState](DeviceRegistrationState.md#actualstate)
- [createdDate](DeviceRegistrationState.md#createddate)
- [deviceId](DeviceRegistrationState.md#deviceid)
- [exceptionMessage](DeviceRegistrationState.md#exceptionmessage)
- [exceptionType](DeviceRegistrationState.md#exceptiontype)
- [hardwareId](DeviceRegistrationState.md#hardwareid)
- [id](DeviceRegistrationState.md#id)
- [intendedState](DeviceRegistrationState.md#intendedstate)
- [isCurrent](DeviceRegistrationState.md#iscurrent)
- [jurisdiction](DeviceRegistrationState.md#jurisdiction)

## Properties

### actualState

• **actualState**: [`RegistrationStatus`](../README.md#registrationstatus)

Gets or sets the actual registration state.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts#L12)

___

### createdDate

• **createdDate**: `Date`

Gets or sets the record creation date time.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts#L14)

___

### deviceId

• **deviceId**: `string`

Gets or sets the device ID.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts#L16)

___

### exceptionMessage

• **exceptionMessage**: `string`

Gets or sets the exception message.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts#L18)

___

### exceptionType

• **exceptionType**: `string`

Gets or sets the exception type.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts#L20)

___

### hardwareId

• **hardwareId**: `number`

Gets or sets the hardware ID.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts#L22)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### intendedState

• **intendedState**: [`RegistrationStatus`](../README.md#registrationstatus)

Gets or sets the intended registration state.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts:24](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts#L24)

___

### isCurrent

• **isCurrent**: `boolean`

Gets or sets the flag indicating this record is the most recent, compared to historical records held in the table.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts:26](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts#L26)

___

### jurisdiction

• **jurisdiction**: [`Jurisdiction`](../README.md#jurisdiction)

Gets or sets the jurisdiction.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts:28](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState.ts#L28)
