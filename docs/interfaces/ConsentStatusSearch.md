[@fairfleet/geotab](../README.md) / ConsentStatusSearch

# Interface: ConsentStatusSearch

The object used to specify the arguments when searching for [ConsentStatus](ConsentStatus.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ConsentStatusSearch`**

  ↳↳ [`ConsentStatusAuditSearch`](ConsentStatusAuditSearch.md)

## Table of contents

### Properties

- [id](ConsentStatusSearch.md#id)
- [optionSearch](ConsentStatusSearch.md#optionsearch)
- [productSearch](ConsentStatusSearch.md#productsearch)
- [userSearch](ConsentStatusSearch.md#usersearch)
- [version](ConsentStatusSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### optionSearch

• **optionSearch**: [`OptionSearch`](OptionSearch.md)

Gets or sets search with a ConsentStatusSearch.OptionSearch.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusSearch.ts#L15)

___

### productSearch

• **productSearch**: [`ProductSearch`](ProductSearch.md)

Gets or sets search based on the version of the Solution.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusSearch.ts#L17)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search with a [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusSearch.ts#L23)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
