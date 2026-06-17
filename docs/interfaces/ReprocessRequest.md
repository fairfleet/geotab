[@fairfleet/geotab](../README.md) / ReprocessRequest

# Interface: ReprocessRequest

Represents a request to reprocess data for one or more devices.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`ReprocessRequest`**

## Table of contents

### Properties

- [dateTime](ReprocessRequest.md#datetime)
- [deviceFilterIds](ReprocessRequest.md#devicefilterids)
- [deviceFilterType](ReprocessRequest.md#devicefiltertype)
- [deviceSearchFilter](ReprocessRequest.md#devicesearchfilter)
- [fromDate](ReprocessRequest.md#fromdate)
- [id](ReprocessRequest.md#id)
- [requestedBy](ReprocessRequest.md#requestedby)
- [ruleIds](ReprocessRequest.md#ruleids)
- [status](ReprocessRequest.md#status)
- [statusText](ReprocessRequest.md#statustext)

## Properties

### dateTime

• **dateTime**: `Date`

Gets the DateTime. Required by IDateTimeProvider.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts#L13)

___

### deviceFilterIds

• **deviceFilterIds**: `string`[]

Gets or sets the list of Ids that represent a filter that can be resolved to a list of Devices. How
 these Ids are resolved depends on the [FilterType](../README.md#filtertype).

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts#L18)

___

### deviceFilterType

• **deviceFilterType**: [`FilterType`](../README.md#filtertype)

Gets or sets a value indicating the type of filter used to identify the Devices that this
 [ReprocessRequest](ReprocessRequest.md) applies to.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts#L23)

___

### deviceSearchFilter

• **deviceSearchFilter**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the logical groups filter that can be resolved to a list of Devices.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts#L25)

___

### fromDate

• **fromDate**: `Date`

Gets or sets a value indicating the cutoff date for reprocssing.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts#L27)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### requestedBy

• **requestedBy**: `string`

Gets or sets a value indicating the user who requested the reprocess.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts#L29)

___

### ruleIds

• **ruleIds**: `string`[]

Gets or sets the list of Rule Ids to re-evaluate. If left blank, rules will not be re-evaluated, and
 existing exceptions will not be modified.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts#L34)

___

### status

• **status**: [`ReprocessRequestStatus`](../README.md#reprocessrequeststatus)

Gets or sets a value describes the current status of the Reprocess Request as a whole.

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts#L36)

___

### statusText

• **statusText**: `string`

Gets or sets additional information regarding the current status of the [ReprocessRequest](ReprocessRequest.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Reprocessing/ReprocessRequest.ts#L38)
