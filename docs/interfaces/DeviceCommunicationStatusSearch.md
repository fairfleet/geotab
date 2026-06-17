[@fairfleet/geotab](../README.md) / DeviceCommunicationStatusSearch

# Interface: DeviceCommunicationStatusSearch

DeviceCommunicationStatusSearch that implements IEntity for DeviceCommunicationStatusSearch objects.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DeviceCommunicationStatusSearch`**

## Table of contents

### Properties

- [deviceCommunicationStatusStates](DeviceCommunicationStatusSearch.md#devicecommunicationstatusstates)
- [deviceSearch](DeviceCommunicationStatusSearch.md#devicesearch)
- [id](DeviceCommunicationStatusSearch.md#id)
- [isActive](DeviceCommunicationStatusSearch.md#isactive)
- [isCommunicating](DeviceCommunicationStatusSearch.md#iscommunicating)
- [version](DeviceCommunicationStatusSearch.md#version)

## Properties

### deviceCommunicationStatusStates

• **deviceCommunicationStatusStates**: [`DeviceCommunicationStatusState`](../README.md#devicecommunicationstatusstate)[]

Gets or sets the DeviceCommunicationStatusStates list, which is used to search device based on status.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationStatusSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationStatusSearch.ts#L12)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the device search criteria for the [DeviceCommunicationStatus](DeviceCommunicationStatus.md) entry with this DeviceCommunicationStatusSearch.DeviceSearch.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>DeviceIds</description></item><item><description>Groups</description></item><item><description>GroupFilterCondition</description></item><item><description>FromDate</description></item><item><description>DeviceTypes</description></item><item><description>IsCommunicating</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationStatusSearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationStatusSearch.ts#L18)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isActive

• **isActive**: `boolean`

Gets or sets the DeviceCommunicationStatuses which are active or inactive.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationStatusSearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationStatusSearch.ts#L20)

___

### isCommunicating

• **isCommunicating**: `boolean`

Gets or sets the IsCommunicating flag, which is used to search device whether they are communicating or not.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationStatusSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationStatusSearch.ts#L22)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
