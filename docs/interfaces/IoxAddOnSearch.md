[@fairfleet/geotab](../README.md) / IoxAddOnSearch

# Interface: IoxAddOnSearch

The object used to specify the arguments when searching for [IoxAddOn](IoxAddOn.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`IoxAddOnSearch`**

## Table of contents

### Properties

- [connectedOnly](IoxAddOnSearch.md#connectedonly)
- [deviceSearch](IoxAddOnSearch.md#devicesearch)
- [id](IoxAddOnSearch.md#id)
- [type](IoxAddOnSearch.md#type)
- [version](IoxAddOnSearch.md#version)

## Properties

### connectedOnly

• **connectedOnly**: `boolean`

Gets or sets if <c>true</c> only Iox Add-Ons that are currently connected to a device will be returned.

#### Defined in

[src/types/Checkmate/ObjectModel/IoxAddOnSearch.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/IoxAddOnSearch.ts#L13)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for Iox Add-Ons that are or have been attached to this IoxAddOnSearch.DeviceSearch Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/IoxAddOnSearch.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/IoxAddOnSearch.ts#L19)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### type

• **type**: `number`

Gets or sets search for Iox Add-Ons of a specific type (Garmin, GoTalk etc). See KnownIoxAddOnType.

#### Defined in

[src/types/Checkmate/ObjectModel/IoxAddOnSearch.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/IoxAddOnSearch.ts#L21)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
