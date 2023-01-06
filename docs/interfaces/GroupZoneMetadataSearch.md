[@fairfleet/geotab](../README.md) / GroupZoneMetadataSearch

# Interface: GroupZoneMetadataSearch

The object used to specify the arguments when searching for a [GroupZoneMetadata](GroupZoneMetadata.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`GroupZoneMetadataSearch`**

## Table of contents

### Properties

- [groups](GroupZoneMetadataSearch.md#groups)
- [id](GroupZoneMetadataSearch.md#id)
- [propertySelector](GroupZoneMetadataSearch.md#propertyselector)
- [version](GroupZoneMetadataSearch.md#version)
- [zoneSearch](GroupZoneMetadataSearch.md#zonesearch)

## Properties

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for group zone metadata that are members of these [GroupSearch](GroupSearch.md)(s) one of
 it's children or one of it's parents.
 Available GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/GroupZoneMetadataSearch.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/GroupZoneMetadataSearch.ts#L17)

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

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)

___

### zoneSearch

• **zoneSearch**: [`ZoneSearch`](ZoneSearch.md)

Gets or sets search for group zone metadata related to this [ZoneSearch](ZoneSearch.md) Id.

#### Defined in

[src/types/Checkmate/ObjectModel/GroupZoneMetadataSearch.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/GroupZoneMetadataSearch.ts#L19)
