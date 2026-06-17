[@fairfleet/geotab](../README.md) / EmissionVehicleCycleSearch

# Interface: EmissionVehicleCycleSearch

Search class for [EmissionVehicleCycle](EmissionVehicleCycle.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EmissionVehicleCycleSearch`**

## Table of contents

### Properties

- [allMessagesReceived](EmissionVehicleCycleSearch.md#allmessagesreceived)
- [cycleId](EmissionVehicleCycleSearch.md#cycleid)
- [deliveredReportsOnly](EmissionVehicleCycleSearch.md#deliveredreportsonly)
- [deviceSearch](EmissionVehicleCycleSearch.md#devicesearch)
- [fatalError](EmissionVehicleCycleSearch.md#fatalerror)
- [fromDate](EmissionVehicleCycleSearch.md#fromdate)
- [fromSubmittedDate](EmissionVehicleCycleSearch.md#fromsubmitteddate)
- [hasFatalError](EmissionVehicleCycleSearch.md#hasfatalerror)
- [id](EmissionVehicleCycleSearch.md#id)
- [protocol](EmissionVehicleCycleSearch.md#protocol)
- [toDate](EmissionVehicleCycleSearch.md#todate)
- [toSubmittedDate](EmissionVehicleCycleSearch.md#tosubmitteddate)
- [undeliveredReportsOnly](EmissionVehicleCycleSearch.md#undeliveredreportsonly)
- [version](EmissionVehicleCycleSearch.md#version)

## Properties

### allMessagesReceived

• **allMessagesReceived**: `boolean`

Gets or sets a value indicating whether to search for all [EmissionVehicleCycle](EmissionVehicleCycle.md)s with all messages received.
 If true, only returns [EmissionVehicleCycle](EmissionVehicleCycle.md)s for which all messages have been received; otherwise, returns all [EmissionVehicleCycle](EmissionVehicleCycle.md)s.
 Default is false.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts#L15)

___

### cycleId

• **cycleId**: `number`

Gets or sets search for all [EmissionVehicleCycle](EmissionVehicleCycle.md)s with the given cycle ID.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts#L17)

___

### deliveredReportsOnly

• **deliveredReportsOnly**: `boolean`

Gets or sets a value indicating whether to search for [EmissionVehicleCycle](EmissionVehicleCycle.md)s with delivered reports only.
 If true, returns [EmissionVehicleCycle](EmissionVehicleCycle.md)s with delivered reports only; otherwise, return all [EmissionVehicleCycle](EmissionVehicleCycle.md)s.
 Default is false.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts#L23)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the EmissionVehicleCycleSearch.DeviceSearch to filter the [EmissionVehicleCycleSearch](EmissionVehicleCycleSearch.md) result.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>DeviceIds</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts#L29)

___

### fatalError

• **fatalError**: `number`

Gets or sets search for all [EmissionVehicleCycle](EmissionVehicleCycle.md)s with a specific fatal error.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts#L31)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for all [EmissionVehicleCycle](EmissionVehicleCycle.md)s with reports captured from this date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts#L33)

___

### fromSubmittedDate

• **fromSubmittedDate**: `Date`

Gets or sets search for all [EmissionVehicleCycle](EmissionVehicleCycle.md)s with reports submitted from this date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts#L35)

___

### hasFatalError

• **hasFatalError**: `boolean`

Gets or sets a value to search for all [EmissionVehicleCycle](EmissionVehicleCycle.md)s with/without any fatal error.
 If true, only returns [EmissionVehicleCycle](EmissionVehicleCycle.md)s with fatal error;
 If false, only returns [EmissionVehicleCycle](EmissionVehicleCycle.md)s with no fatal error;
 If unset, return all [EmissionVehicleCycle](EmissionVehicleCycle.md)s matching other search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts#L42)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### protocol

• **protocol**: `string`

Gets or sets search for all [EmissionVehicleCycle](EmissionVehicleCycle.md)s with the given protocol.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts#L44)

___

### toDate

• **toDate**: `Date`

Gets or sets search for all [EmissionVehicleCycle](EmissionVehicleCycle.md)s with reports captured to this date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts#L46)

___

### toSubmittedDate

• **toSubmittedDate**: `Date`

Gets or sets search for all [EmissionVehicleCycle](EmissionVehicleCycle.md)s with reports submitted to this date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts#L48)

___

### undeliveredReportsOnly

• **undeliveredReportsOnly**: `boolean`

Gets or sets a value indicating whether to search for [EmissionVehicleCycle](EmissionVehicleCycle.md)s with undelivered reports only.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleCycleSearch.ts#L50)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
