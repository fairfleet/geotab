[@fairfleet/geotab](../README.md) / DebugDataSearch

# Interface: DebugDataSearch

The object used to specify the arguments when searching
 [DebugData](DebugData.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DebugDataSearch`**

## Table of contents

### Properties

- [debugReason](DebugDataSearch.md#debugreason)
- [deviceSearch](DebugDataSearch.md#devicesearch)
- [fromDate](DebugDataSearch.md#fromdate)
- [id](DebugDataSearch.md#id)
- [toDate](DebugDataSearch.md#todate)
- [version](DebugDataSearch.md#version)

## Properties

### debugReason

• **debugReason**: [`DebugReason`](../README.md#debugreason)

Gets or sets the search for DebugData records with DebugDataSearch.DebugReason.
 Note that it's ignored by the GetFeed Search function.

#### Defined in

[src/types/Checkmate/ObjectModel/DebugDataSearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DebugDataSearch.ts#L18)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the search for DebugData recorded for this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DebugDataSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DebugDataSearch.ts#L24)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the date after which DebugData was recorded.

#### Defined in

[src/types/Checkmate/ObjectModel/DebugDataSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DebugDataSearch.ts#L26)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### toDate

• **toDate**: `Date`

Gets or sets the date before which DebugData was recorded.

#### Defined in

[src/types/Checkmate/ObjectModel/DebugDataSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DebugDataSearch.ts#L28)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
