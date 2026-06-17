[@fairfleet/geotab](../README.md) / ZoneTypeSearch

# Interface: ZoneTypeSearch

The object used to specify the arguments when searching for
 [ZoneType](ZoneType.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ZoneTypeSearch`**

## Table of contents

### Properties

- [id](ZoneTypeSearch.md#id)
- [includeBuiltInObject](ZoneTypeSearch.md#includebuiltinobject)
- [isBuiltIn](ZoneTypeSearch.md#isbuiltin)
- [keywords](ZoneTypeSearch.md#keywords)
- [name](ZoneTypeSearch.md#name)
- [version](ZoneTypeSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeBuiltInObject

• **includeBuiltInObject**: `boolean`

Gets or sets a value indicating whether to include the full built-in object or only the known name ID.

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneTypeSearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ZoneTypeSearch.ts#L13)

___

### isBuiltIn

• **isBuiltIn**: `boolean`

Gets or sets search zone types that are or are not built in.

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneTypeSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ZoneTypeSearch.ts#L15)

___

### keywords

• **keywords**: `string`[]

Gets or sets search zone types that contain specific keywords in name and comment fields.

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneTypeSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ZoneTypeSearch.ts#L17)

___

### name

• **name**: `string`

Gets or sets name of ZoneType to search for. Wildcard can be used by prepending/appending "%" to string.
 Example "%comments%".

#### Defined in

[src/types/Checkmate/ObjectModel/ZoneTypeSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ZoneTypeSearch.ts#L22)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
