[@fairfleet/geotab](../README.md) / UserSupportSearch

# Interface: UserSupportSearch

The object used to specify the
 arguments when searching for a [UserSupport](UserSupport.md).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`UserSupportSearch`**

## Table of contents

### Properties

- [id](UserSupportSearch.md#id)
- [propertySelector](UserSupportSearch.md#propertyselector)
- [type](UserSupportSearch.md#type)
- [userSearch](UserSupportSearch.md#usersearch)
- [version](UserSupportSearch.md#version)

## Properties

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

### type

• **type**: [`UserSupportType`](../README.md#usersupporttype)

Gets or sets search for UserSupport with this [UserSupportType](../README.md#usersupporttype) Id

#### Defined in

[src/types/Checkmate/ObjectModel/UserSupportSearch.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSupportSearch.ts#L17)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for UserSupport with this [UserSearch](UserSearch.md) Id
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/UserSupportSearch.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSupportSearch.ts#L23)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
