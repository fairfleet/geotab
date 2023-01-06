[@fairfleet/geotab](../README.md) / AddInDataSearch

# Interface: AddInDataSearch

The object used to specify the arguments when searching for [AddInData](AddInData.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`AddInDataSearch`**

## Table of contents

### Properties

- [addInId](AddInDataSearch.md#addinid)
- [groups](AddInDataSearch.md#groups)
- [id](AddInDataSearch.md#id)
- [propertySelector](AddInDataSearch.md#propertyselector)
- [selectClause](AddInDataSearch.md#selectclause)
- [version](AddInDataSearch.md#version)
- [whereClause](AddInDataSearch.md#whereclause)

## Properties

### addInId

• **addInId**: `string`

Gets or sets the add-in identifier.

#### Defined in

[src/types/Checkmate/ObjectModel/AddInDataSearch.ts:11](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/AddInDataSearch.ts#L11)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Devices that are a member of these [GroupSearch](GroupSearch.md)(s).
 Available
 GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/AddInDataSearch.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/AddInDataSearch.ts#L18)

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

### selectClause

• **selectClause**: `string`

Gets or sets the select clause which decides which properties of the stored objects are returned.

#### Defined in

[src/types/Checkmate/ObjectModel/AddInDataSearch.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/AddInDataSearch.ts#L20)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)

___

### whereClause

• **whereClause**: `string`

Gets or sets the where clause which filters the data that is returned.

#### Defined in

[src/types/Checkmate/ObjectModel/AddInDataSearch.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/AddInDataSearch.ts#L22)
