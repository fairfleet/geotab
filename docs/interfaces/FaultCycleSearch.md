[@fairfleet/geotab](../README.md) / FaultCycleSearch

# Interface: FaultCycleSearch

The object used to specify the arguments when searching for [FaultCycle](FaultCycle.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`FaultCycleSearch`**

## Table of contents

### Properties

- [controllerSearch](FaultCycleSearch.md#controllersearch)
- [dateInCycle](FaultCycleSearch.md#dateincycle)
- [deviceSearch](FaultCycleSearch.md#devicesearch)
- [diagnosticSearch](FaultCycleSearch.md#diagnosticsearch)
- [failureModeSearch](FaultCycleSearch.md#failuremodesearch)
- [id](FaultCycleSearch.md#id)
- [isValid](FaultCycleSearch.md#isvalid)
- [sourceSearch](FaultCycleSearch.md#sourcesearch)
- [version](FaultCycleSearch.md#version)

## Properties

### controllerSearch

• **controllerSearch**: [`ControllerSearch`](ControllerSearch.md)

Gets or sets search for [FaultCycle](FaultCycle.md)(s) that matches the FaultCycleSearch.ControllerSearch.
 Available ControllerSearch options are:
 <list><item><description>Code</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycleSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycleSearch.ts#L23)

___

### dateInCycle

• **dateInCycle**: `Date`

Gets or sets the date between FaultCycle.CycleStart and FaultCycle.CycleEnd in the[FaultCycle](FaultCycle.md).

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycleSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycleSearch.ts#L25)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [FaultCycle](FaultCycle.md)(s) that matches the FaultCycleSearch.DeviceSearch.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycleSearch.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycleSearch.ts#L31)

___

### diagnosticSearch

• **diagnosticSearch**: [`DiagnosticSearch`](DiagnosticSearch.md)

Gets or sets search for [FaultCycle](FaultCycle.md)(s) that matches the [DiagnosticSearch](DiagnosticSearch.md).
 Available DiagnosticSearch options are:.
 <list><item><description>Code</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycleSearch.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycleSearch.ts#L37)

___

### failureModeSearch

• **failureModeSearch**: [`FailureModeSearch`](FailureModeSearch.md)

Gets or sets search for [FaultCycle](FaultCycle.md)(s) that matches the FaultCycleSearch.FailureModeSearch.
 Available FailureModeSearch options are:
 <list><item><description>Code (Including the search for nulls)</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycleSearch.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycleSearch.ts#L43)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isValid

• **isValid**: `boolean`

Gets or sets the [FaultCycle](FaultCycle.md) cycle is valid.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycleSearch.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycleSearch.ts#L45)

___

### sourceSearch

• **sourceSearch**: [`SourceSearch`](SourceSearch.md)

Gets or sets search for [FaultCycle](FaultCycle.md)(s) that matches the Source using [SourceSearch](SourceSearch.md) object.
 Available SourceSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/FaultCycleSearch.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultCycleSearch.ts#L51)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
