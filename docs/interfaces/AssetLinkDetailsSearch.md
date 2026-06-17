[@fairfleet/geotab](../README.md) / AssetLinkDetailsSearch

# Interface: AssetLinkDetailsSearch

The object used to specify the arguments when searching for [AssetLinkDetailsSearch](AssetLinkDetailsSearch.md) record(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`AssetLinkDetailsSearch`**

## Table of contents

### Properties

- [activeFrom](AssetLinkDetailsSearch.md#activefrom)
- [activeTo](AssetLinkDetailsSearch.md#activeto)
- [assetLinkId](AssetLinkDetailsSearch.md#assetlinkid)
- [deviceSearch](AssetLinkDetailsSearch.md#devicesearch)
- [id](AssetLinkDetailsSearch.md#id)
- [version](AssetLinkDetailsSearch.md#version)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets search for AssetLink that was active at this date or after.
 Set to UTC now to search for only currently active AssetLink.

#### Defined in

[src/types/Checkmate/ObjectModel/AssetLinkDetailsSearch.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AssetLinkDetailsSearch.ts#L14)

___

### activeTo

• **activeTo**: `Date`

Gets or sets search for AssetLink that was active at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/AssetLinkDetailsSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AssetLinkDetailsSearch.ts#L16)

___

### assetLinkId

• **assetLinkId**: `string`

Gets or sets the AssetLink identifier.

#### Defined in

[src/types/Checkmate/ObjectModel/AssetLinkDetailsSearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AssetLinkDetailsSearch.ts#L18)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets source device search for AssetLinkSearch attached to this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/AssetLinkDetailsSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AssetLinkDetailsSearch.ts#L24)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
