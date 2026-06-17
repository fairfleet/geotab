[@fairfleet/geotab](../README.md) / DiagnosticValueStatusSearch

# Interface: DiagnosticValueStatusSearch

The object used to specify the arguments when searching for [DiagnosticValueStatus](DiagnosticValueStatus.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DiagnosticValueStatusSearch`**

## Table of contents

### Properties

- [deviceSearch](DiagnosticValueStatusSearch.md#devicesearch)
- [diagnosticSearch](DiagnosticValueStatusSearch.md#diagnosticsearch)
- [id](DiagnosticValueStatusSearch.md#id)
- [isOn](DiagnosticValueStatusSearch.md#ison)
- [latestLimit](DiagnosticValueStatusSearch.md#latestlimit)
- [latestValues](DiagnosticValueStatusSearch.md#latestvalues)
- [version](DiagnosticValueStatusSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any [DiagnosticValueStatus](DiagnosticValueStatus.md) that are related to that Device.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatusSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatusSearch.ts#L17)

___

### diagnosticSearch

• **diagnosticSearch**: [`DiagnosticSearch`](DiagnosticSearch.md)

Gets or sets filter by the DiagnosticValueStatusSearch.DiagnosticSearch options. Providing a device ID will
 search for any [DiagnosticValueStatus](DiagnosticValueStatus.md) that are related to that diagnostic.
 Available DeviceSearch options are:
 <list><item><description>Ids</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatusSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatusSearch.ts#L24)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isOn

• **isOn**: `boolean`

Gets or sets search for [DiagnosticValueStatus](DiagnosticValueStatus.md) that are ON or OFF.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatusSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatusSearch.ts#L26)

___

### latestLimit

• **latestLimit**: `number`

Gets or sets search limit for the latest [DiagnosticValueStatus](DiagnosticValueStatus.md) by diagnostic and device that are ON or OFF.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatusSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatusSearch.ts#L28)

___

### latestValues

• **latestValues**: `boolean`

Gets or sets search for the latest [DiagnosticValueStatus](DiagnosticValueStatus.md) by diagnostic and device that are ON or OFF.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatusSearch.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatusSearch.ts#L30)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
