[@fairfleet/geotab](../README.md) / EmissionVehicleCycleMessageSearch

# Interface: EmissionVehicleCycleMessageSearch

Search class for [EmissionVehicleCycleMessage](EmissionVehicleCycleMessage.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EmissionVehicleCycleMessageSearch`**

## Table of contents

### Properties

- [canFrameDateTime](EmissionVehicleCycleMessageSearch.md#canframedatetime)
- [canFrameId](EmissionVehicleCycleMessageSearch.md#canframeid)
- [emissionVehicleCycleSearch](EmissionVehicleCycleMessageSearch.md#emissionvehiclecyclesearch)
- [fromDeliveredDateTime](EmissionVehicleCycleMessageSearch.md#fromdelivereddatetime)
- [id](EmissionVehicleCycleMessageSearch.md#id)
- [interfaceAndIsTx](EmissionVehicleCycleMessageSearch.md#interfaceandistx)
- [sequenceNumber](EmissionVehicleCycleMessageSearch.md#sequencenumber)
- [taskId](EmissionVehicleCycleMessageSearch.md#taskid)
- [textMessageSearch](EmissionVehicleCycleMessageSearch.md#textmessagesearch)
- [toDeliveredDateTime](EmissionVehicleCycleMessageSearch.md#todelivereddatetime)
- [version](EmissionVehicleCycleMessageSearch.md#version)

## Properties

### canFrameDateTime

• **canFrameDateTime**: `Date`

Gets or sets search for all [EmissionVehicleCycleMessage](EmissionVehicleCycleMessage.md)s with the given Can Frame DateTime.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts#L12)

___

### canFrameId

• **canFrameId**: `number`

Gets or sets search for all [EmissionVehicleCycleMessage](EmissionVehicleCycleMessage.md)s with the given Can Frame Id.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts#L14)

___

### emissionVehicleCycleSearch

• **emissionVehicleCycleSearch**: [`EmissionVehicleCycleSearch`](EmissionVehicleCycleSearch.md)

Gets or sets a EmissionVehicleCycleMessageSearch.EmissionVehicleCycleSearch to filter the [EmissionVehicleCycleMessageSearch](EmissionVehicleCycleMessageSearch.md) result.
 Available EmissionVehicleCycleMessageSearch.EmissionVehicleCycleSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts#L20)

___

### fromDeliveredDateTime

• **fromDeliveredDateTime**: `Date`

Gets or sets search for all [EmissionVehicleCycleMessage](EmissionVehicleCycleMessage.md)s from the given delivered date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts#L22)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### interfaceAndIsTx

• **interfaceAndIsTx**: `number`

Gets or sets search for all [EmissionVehicleCycleMessage](EmissionVehicleCycleMessage.md)s with the given InterfaceAndIsTx value.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts#L24)

___

### sequenceNumber

• **sequenceNumber**: `number`

Gets or sets search for all [EmissionVehicleCycleMessage](EmissionVehicleCycleMessage.md)s with the given sequence number.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts#L26)

___

### taskId

• **taskId**: `number`

Gets or sets search for all [EmissionVehicleCycleMessage](EmissionVehicleCycleMessage.md)s with the given task ID.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts#L28)

___

### textMessageSearch

• **textMessageSearch**: [`TextMessageSearch`](TextMessageSearch.md)

Gets or sets a EmissionVehicleCycleMessageSearch.TextMessageSearch to filter the [EmissionVehicleCycleMessageSearch](EmissionVehicleCycleMessageSearch.md) result.
 Available EmissionVehicleCycleMessageSearch.TextMessageSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts#L34)

___

### toDeliveredDateTime

• **toDeliveredDateTime**: `Date`

Gets or sets search for all [EmissionVehicleCycleMessage](EmissionVehicleCycleMessage.md)s to the given delivered date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleMessageSearch.ts#L36)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
