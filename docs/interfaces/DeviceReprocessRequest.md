[@fairfleet/geotab](../README.md) / DeviceReprocessRequest

# Interface: DeviceReprocessRequest

Represents a request to reprocess data for a specific device.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DeviceReprocessRequest`**

## Table of contents

### Properties

- [createdDate](DeviceReprocessRequest.md#createddate)
- [dateTime](DeviceReprocessRequest.md#datetime)
- [device](DeviceReprocessRequest.md#device)
- [fromDate](DeviceReprocessRequest.md#fromdate)
- [id](DeviceReprocessRequest.md#id)
- [isComplete](DeviceReprocessRequest.md#iscomplete)
- [isCompleteReprocess](DeviceReprocessRequest.md#iscompletereprocess)
- [reprocessRequestId](DeviceReprocessRequest.md#reprocessrequestid)
- [ruleIds](DeviceReprocessRequest.md#ruleids)
- [status](DeviceReprocessRequest.md#status)
- [statusText](DeviceReprocessRequest.md#statustext)
- [updatedDate](DeviceReprocessRequest.md#updateddate)

## Properties

### createdDate

• **createdDate**: `Date`

Gets or sets a value indicating the date the reprocssing request was created.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts#L12)

___

### dateTime

• **dateTime**: `Date`

Gets the FromDate. Required by IDateTimeProvider. See DeviceReprocessRequest.FromDate.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts#L14)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the device for which data will be reprocessed.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts#L16)

___

### fromDate

• **fromDate**: `Date`

Gets or sets a value indicating the cutoff date for reprocssing.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts#L18)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isComplete

• **isComplete**: `boolean`

Gets a value indicating whether this request is in a terminal state.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts#L20)

___

### isCompleteReprocess

• **isCompleteReprocess**: `boolean`

Gets a value indicating whether all data will be reprocessed. If   then all data will
 be reprocessed. If   then only rules will be re-evaluated.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts#L25)

___

### reprocessRequestId

• **reprocessRequestId**: `string`

Gets or sets the Id that uniquely identifies the parent [ReprocessRequest](ReprocessRequest.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts#L27)

___

### ruleIds

• **ruleIds**: `string`[]

Gets or sets the list of Rule Ids to re-evaluate. If left blank, rules will not be re-evaluated, and
 existing exceptions will not be modified.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts#L32)

___

### status

• **status**: [`ReprocessRequestStatus`](../README.md#reprocessrequeststatus)

Gets or sets a value representing the current status of the [DeviceReprocessRequest](DeviceReprocessRequest.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts#L34)

___

### statusText

• **statusText**: `string`

Gets or sets additional information regarding the current status of the
 [DeviceReprocessRequest](DeviceReprocessRequest.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts#L39)

___

### updatedDate

• **updatedDate**: `Date`

Gets or sets a value indicating the date the reprocssing request was updated.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest.ts#L41)
