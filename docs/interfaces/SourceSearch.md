[@fairfleet/geotab](../README.md) / SourceSearch

# Interface: SourceSearch

The object used to specify the
 arguments when searching for a [Source](Source.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`SourceSearch`**

## Table of contents

### Properties

- [id](SourceSearch.md#id)
- [ids](SourceSearch.md#ids)
- [name](SourceSearch.md#name)
- [version](SourceSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### ids

• **ids**: `string`[]

Gets or sets search for Source with these unique Id(s).
 Only supported for [FaultData](FaultData.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/SourceSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/SourceSearch.ts#L16)

___

### name

• **name**: `string`

Gets or sets the name of the
 [Source](Source.md) search
 criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/SourceSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/SourceSearch.ts#L22)

___

### version

• **version**: `number`

Gets or sets the row version of the
 [Source](Source.md) search
 criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/SourceSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/SourceSearch.ts#L28)
