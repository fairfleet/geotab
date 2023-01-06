[@fairfleet/geotab](../README.md) / RecipientSearch

# Interface: RecipientSearch

<para />
 The object used to specify the
 arguments when searching for [Recipient](Recipient.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`RecipientSearch`**

## Table of contents

### Properties

- [id](RecipientSearch.md#id)
- [propertySelector](RecipientSearch.md#propertyselector)
- [recipientType](RecipientSearch.md#recipienttype)
- [version](RecipientSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### recipientType

• **recipientType**: [`RecipientType`](../README.md#recipienttype)

Gets or sets search for [Recipient](Recipient.md) of this
 [RecipientType](../README.md#recipienttype).

#### Defined in

[src/types/Checkmate/ObjectModel/RecipientSearch.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/RecipientSearch.ts#L20)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
