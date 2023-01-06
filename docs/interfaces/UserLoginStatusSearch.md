[@fairfleet/geotab](../README.md) / UserLoginStatusSearch

# Interface: UserLoginStatusSearch

The object used to specify the
 arguments when searching for a [UserLoginStatus](UserLoginStatus.md).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`UserLoginStatusSearch`**

## Table of contents

### Properties

- [id](UserLoginStatusSearch.md#id)
- [onlyCurrentyLockedOut](UserLoginStatusSearch.md#onlycurrentylockedout)
- [propertySelector](UserLoginStatusSearch.md#propertyselector)
- [userSearch](UserLoginStatusSearch.md#usersearch)
- [version](UserLoginStatusSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### onlyCurrentyLockedOut

• **onlyCurrentyLockedOut**: `boolean`

Gets or sets a value indicating whether the users are locked at this moment.

#### Defined in

[src/types/Checkmate/ObjectModel/UserLoginStatusSearch.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/UserLoginStatusSearch.ts#L16)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for UserloginStatus with this [UserSearch](UserSearch.md) Id
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/UserLoginStatusSearch.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/UserLoginStatusSearch.ts#L22)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
