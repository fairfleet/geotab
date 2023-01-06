[@fairfleet/geotab](../README.md) / ZoneSearch

# Interface: ZoneSearch

The object used to specify the arguments when searching for [Zone](Zone.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ZoneSearch`**

## Table of contents

### Properties

- [externalReference](ZoneSearch.md#externalreference)
- [fromDate](ZoneSearch.md#fromdate)
- [groupFilterCondition](ZoneSearch.md#groupfiltercondition)
- [groups](ZoneSearch.md#groups)
- [id](ZoneSearch.md#id)
- [includeGroups](ZoneSearch.md#includegroups)
- [keywords](ZoneSearch.md#keywords)
- [minimumRadiusInMeters](ZoneSearch.md#minimumradiusinmeters)
- [name](ZoneSearch.md#name)
- [propertySelector](ZoneSearch.md#propertyselector)
- [searchArea](ZoneSearch.md#searcharea)
- [toDate](ZoneSearch.md#todate)
- [version](ZoneSearch.md#version)
- [viewport](ZoneSearch.md#viewport)
- [zoneTypes](ZoneSearch.md#zonetypes)

## Properties

### externalReference

• **externalReference**: `string`

Gets or sets search for Zones with this External Reference. Wildcard can be used by prepending/appending "%"
 to string. Example "%reference%".

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneSearch.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ZoneSearch.ts#L21)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for Zones that were active at this date or after. Set to UTC now to search for only currently active (non-archived) zones.

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneSearch.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ZoneSearch.ts#L23)

___

### groupFilterCondition

• **groupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets the zones that belong to groups that are combined with the and/or relation.

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneSearch.ts:25](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ZoneSearch.ts#L25)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Zones that are members of these [GroupSearch](GroupSearch.md)(s) one of
 it's children or
 one of it's parents. Available GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneSearch.ts:32](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ZoneSearch.ts#L32)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### includeGroups

• **includeGroups**: [`IncludeGroups`](../README.md#includegroups)

Gets or sets include zones that are in the in this hierarchy of the
 [GroupSearch](GroupSearch.md)(s) provided.
 If no [GroupSearch](GroupSearch.md)(s) are provided the user's data scope groups
 will be used.
 Default: [IncludeGroups](../README.md#includegroups).ParentAndChild.

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneSearch.ts:40](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ZoneSearch.ts#L40)

___

### keywords

• **keywords**: `string`[]

Gets or sets search for entities that contain specific keywords in all wildcard string-searchable fields.

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneSearch.ts:42](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ZoneSearch.ts#L42)

___

### minimumRadiusInMeters

• **minimumRadiusInMeters**: `number`

Gets or sets exclude Zones whose radius is smaller than this size (meters).

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneSearch.ts:44](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ZoneSearch.ts#L44)

___

### name

• **name**: `string`

Gets or sets search for Zones with this Name. Wildcard can be used by prepending/appending "%" to string.
 Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneSearch.ts:49](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ZoneSearch.ts#L49)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### searchArea

• **searchArea**: [`BoundingBox`](BoundingBox.md)

Gets or sets the [BoundingBox](BoundingBox.md) search for Zones in this area extent, the zones being retrieved must be located in this area.
 Typically used for retrieving Zones in the extents of a bounding box.
 The SearchArea object should contain the minimum and maximum latitude and longitude representing the search area.

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneSearch.ts:55](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ZoneSearch.ts#L55)

___

### toDate

• **toDate**: `Date`

Gets or sets search for Zones that were active at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneSearch.ts:57](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ZoneSearch.ts#L57)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)

___

### viewport

• **viewport**: [`RectangleF`](RectangleF.md)

Gets or sets search for Zones in this area extent, the zones being retrieved must be located in this area.
 Typically used for retrieving Zones in the extents of a Map Viewport.
 The viewport object should contain the top left coordinate of the viewport (x,y) and the width, height.
 An example of the JSON structure of this object is: { "x":-106.72608947754628, "y":55.862873349922104,
 "width":41.04492187500384, "height":-28.66703166908511 }.

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneSearch.ts:65](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ZoneSearch.ts#L65)

___

### zoneTypes

• **zoneTypes**: [`ZoneTypeSearch`](ZoneTypeSearch.md)[]

Gets or sets search for Zones that are of type [ZoneTypeSearch](ZoneTypeSearch.md)(s). Available ZoneTypeSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneSearch.ts:70](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ZoneSearch.ts#L70)
