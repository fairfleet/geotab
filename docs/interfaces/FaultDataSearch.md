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
- [enrichDataFromAuthorizedVendors](FaultDataSearch.md#enrichdatafromauthorizedvendors)
- [excludeDismissed](FaultDataSearch.md#excludedismissed)
- [fromDate](FaultDataSearch.md#fromdate)
- [groupFilterCondition](FaultDataSearch.md#groupfiltercondition)
- [groups](FaultDataSearch.md#groups)
- [id](FaultDataSearch.md#id)
- [ids](FaultDataSearch.md#ids)
- [includeDetails](FaultDataSearch.md#includedetails)
- [inclusiveSearch](FaultDataSearch.md#inclusivesearch)
- [onlyLast](FaultDataSearch.md#onlylast)
- [severityCodes](FaultDataSearch.md#severitycodes)
- [state](FaultDataSearch.md#state)
- [toDate](FaultDataSearch.md#todate)
- [useDiagnosticDataStorage](FaultDataSearch.md#usediagnosticdatastorage)
- [version](FaultDataSearch.md#version)

## Properties

### controllerSearch

• **controllerSearch**: [`ControllerSearch`](ControllerSearch.md)

Gets or sets the search options which are used to search for fault data for a controller
 FaultDataSearch.ControllerSearch
 by Id. Available ControllerSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L25)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [FaultData](FaultData.md)(s) from a device that matches the
 [DeviceSearch](DeviceSearch.md) Id or in the Groups specified. This includes archived and deleted devices.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>DeviceIds</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L32)

___

### diagnosticSearch

• **diagnosticSearch**: [`DiagnosticSearch`](DiagnosticSearch.md)

Gets or sets search for FaultData recorded for the diagnostic code using the
 [DiagnosticSearch](DiagnosticSearch.md) Id.
 Available DiagnosticSearch options are:.
 <list><item><description>Id</description></item><item><description>Code</description></item><item><description>Name</description></item><item><description>SourceSearch.Name</description></item><item><description>SourceSearch.Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L39)

___

### enrichDataFromAuthorizedVendors

• **enrichDataFromAuthorizedVendors**: `boolean`

Gets or sets a value indicating whether the data should be completed with information form authorized vendors.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L41)

___

### excludeDismissed

• **excludeDismissed**: `boolean`

Gets or sets a value indicating whether exclude Dismissed faults.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L43)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date. The FaultData logs are searched for events which were recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L45)

___

### groupFilterCondition

• **groupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets for fault data group list search.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L47)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets the groups which should be searched.
 [GroupSearch](GroupSearch.md)(s).
 Available GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L54)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### ids

• **ids**: `string`[]

Gets or sets search for FaultData with these unique Id(s).

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L56)

___

### includeDetails

• **includeDetails**: `boolean`

Gets or sets a value indicating whether entities details information should be included.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L58)

___

### inclusiveSearch

• **inclusiveSearch**: `boolean`

Gets or sets inclusive search flag.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:60](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L60)

___

### onlyLast

• **onlyLast**: `boolean`

Gets or sets a value indicating whether only the last fault data record should be retrieved.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:62](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L62)

___

### severityCodes

• **severityCodes**: `string`[]

Gets or sets a value indicating the severity codes to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:64](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L64)

___

### state

• **state**: [`FaultState`](../README.md#faultstate)

Gets or sets the to state of the fault. The Fault data logs are searched for events which are under the this state.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:66](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L66)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date. The Fault data logs are searched for events which were recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:68](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L68)

___

### useDiagnosticDataStorage

• **useDiagnosticDataStorage**: `boolean`

Gets or sets a value indicating whether to use DiagnosticData storage for fault data queries.
 When true, retrieves fault data from diagnosticdata* tables instead of emfaultdata.
 The legacy diagnostic ID is mapped to the new DiagnosticData diagnostic ID based on source type,
 and results are filtered to match the specific fault using the diagnostic's keys.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts:75](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/FaultDataSearch.ts#L75)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
