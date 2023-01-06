[@fairfleet/geotab](../README.md) / DeviceReplacementInfoSearch

# Interface: DeviceReplacementInfoSearch

The object used to specify the arguments when searching for a [DeviceReplacementInfo](DeviceReplacementInfo.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DeviceReplacementInfoSearch`**

## Table of contents

### Properties

- [deviceSearch](DeviceReplacementInfoSearch.md#devicesearch)
- [id](DeviceReplacementInfoSearch.md#id)
- [propertySelector](DeviceReplacementInfoSearch.md#propertyselector)
- [status](DeviceReplacementInfoSearch.md#status)
- [version](DeviceReplacementInfoSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options.
 Available DeviceSearch options are:
 <list><item><description>SerialNumber</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceReplacement/DeviceReplacementInfoSearch.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceReplacement/DeviceReplacementInfoSearch.ts#L16)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### status

• **status**: [`ReplacementStatus`](ReplacementStatus.md)

Gets or sets search for Device Replacement Info with the provided status.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceReplacement/DeviceReplacementInfoSearch.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DeviceReplacement/DeviceReplacementInfoSearch.ts#L18)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
