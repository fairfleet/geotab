[@fairfleet/geotab](../README.md) / DeviceRegistrationStateSearch

# Interface: DeviceRegistrationStateSearch

The object used to specify the arguments when searching for a [DeviceRegistrationState](DeviceRegistrationState.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DeviceRegistrationStateSearch`**

## Table of contents

### Properties

- [actualStates](DeviceRegistrationStateSearch.md#actualstates)
- [deviceIds](DeviceRegistrationStateSearch.md#deviceids)
- [hardwareIds](DeviceRegistrationStateSearch.md#hardwareids)
- [id](DeviceRegistrationStateSearch.md#id)
- [intendedStates](DeviceRegistrationStateSearch.md#intendedstates)
- [onlyCurrentState](DeviceRegistrationStateSearch.md#onlycurrentstate)
- [propertySelector](DeviceRegistrationStateSearch.md#propertyselector)
- [version](DeviceRegistrationStateSearch.md#version)

## Properties

### actualStates

• **actualStates**: [`RegistrationStatus`](../README.md#registrationstatus)[]

Gets or sets the actual registration states to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationStateSearch.ts:11](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationStateSearch.ts#L11)

___

### deviceIds

• **deviceIds**: `string`[]

Gets or sets the device ID's to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationStateSearch.ts:13](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationStateSearch.ts#L13)

___

### hardwareIds

• **hardwareIds**: `number`[]

Gets or sets the hardware ID's to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationStateSearch.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationStateSearch.ts#L15)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### intendedStates

• **intendedStates**: [`RegistrationStatus`](../README.md#registrationstatus)[]

Gets or sets the intended registration states to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationStateSearch.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationStateSearch.ts#L17)

___

### onlyCurrentState

• **onlyCurrentState**: `boolean`

Gets or sets a value indicating only current states are to be searched.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationStateSearch.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationStateSearch.ts#L19)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
