[@fairfleet/geotab](../README.md) / FaultDataSearch

# Interface: FaultDataSearch

The object used to specify the arguments when searching for a
 [FaultData](FaultData.md).
 This search has been designed to work efficiently with these combinations of parameters:<list><item><description>Id</description></item><item><description>DeviceSearch + DiagnosticSearch + FromDate and/or ToDate</description></item><item><description>GroupSearch + DiagnosticSearch + FromDate and/or ToDate</description></item></list>

## Hierarchy

- [`Search`](Search.md)

  ↳ **`FaultDataSearch`**

## Table of contents

### Properties

- [controllerSearch](FaultDataSearch.md#controllersearch)
- [deviceSearch](FaultDataSearch.md#devicesearch)
- [diagnosticSearch](FaultDataSearch.md#diagnosticsearch)
- [fromDate](FaultDataSearch.md#fromdate)
- [groupFilterCondition](FaultDataSearch.md#groupfiltercondition)
- [groups](FaultDataSearch.md#groups)
- [id](FaultDataSearch.md#id)
- [state](FaultDataSearch.md#state)
- [toDate](FaultDataSearch.md#todate)
- [version](FaultDataSearch.md#version)

## Properties

### controllerSearch

• **controllerSearch**: [`ControllerSearch`](ControllerSearch.md)

Gets or sets the search options which are used to search for fault data for a controller
 FaultDataSearch.ControllerSearch
 by Id. Available ControllerSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:25](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L25)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [FaultData](FaultData.md)(s) from a device that matches the
 [DeviceSearch](DeviceSearch.md) Id or in the Groups specified. This includes archived and deleted devices.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:32](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L32)

___

### diagnosticSearch

• **diagnosticSearch**: [`DiagnosticSearch`](DiagnosticSearch.md)

Gets or sets search for FaultData recorded for the diagnostic code using the
 [DiagnosticSearch](DiagnosticSearch.md) Id.
 Available DiagnosticSearch options are:.
 <list><item><description>Id</description></item><item><description>Code</description></item><item><description>Name</description></item><item><description>SourceSearch.Name</description></item><item><description>SourceSearch.Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:39](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L39)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date. The FaultData logs are searched for events which were recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:41](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L41)

___

### groupFilterCondition

• **groupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets for fault data group list search.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:43](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L43)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets the groups which should be searched.
 [GroupSearch](GroupSearch.md)(s).
 Available GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:50](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L50)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### state

• **state**: [`FaultState`](../README.md#faultstate)

Gets or sets the to state of the fault. The Fault data logs are searched for events which are under the this state.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:52](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L52)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date. The Fault data logs are searched for events which were recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:54](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L54)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
