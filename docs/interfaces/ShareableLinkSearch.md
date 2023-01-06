[@fairfleet/geotab](../README.md) / ShareableLinkSearch

# Interface: ShareableLinkSearch

The object used to specify the arguments when searching for
 [ShareableLink](ShareableLink.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ShareableLinkSearch`**

## Table of contents

### Properties

- [deviceSearch](ShareableLinkSearch.md#devicesearch)
- [id](ShareableLinkSearch.md#id)
- [propertySelector](ShareableLinkSearch.md#propertyselector)
- [userSearch](ShareableLinkSearch.md#usersearch)
- [validBefore](ShareableLinkSearch.md#validbefore)
- [version](ShareableLinkSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for ShipmentLogs for this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/ShareableLinkSearch.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ShareableLinkSearch.ts#L21)

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

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for ShipmentLogs with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/ShareableLinkSearch.ts:27](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ShareableLinkSearch.ts#L27)

___

### validBefore

• **validBefore**: `Date`

Gets or sets search for shareable link that is valid before this date time.

#### Defined in

[src/types/Checkmate/ObjectModel/ShareableLinkSearch.ts:29](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ShareableLinkSearch.ts#L29)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
