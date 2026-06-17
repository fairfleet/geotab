[@fairfleet/geotab](../README.md) / DiagnosticLookupTableSearch

# Interface: DiagnosticLookupTableSearch

The object used to specify the arguments when searching for [DiagnosticLookupTable](DiagnosticLookupTable.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DiagnosticLookupTableSearch`**

## Table of contents

### Properties

- [id](DiagnosticLookupTableSearch.md#id)
- [ids](DiagnosticLookupTableSearch.md#ids)
- [name](DiagnosticLookupTableSearch.md#name)
- [version](DiagnosticLookupTableSearch.md#version)

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

Gets or sets search for DiagnosticLookupTables with these unique Id(s) (table names).

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticLookupTableSearch.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticLookupTableSearch.ts#L10)

___

### name

• **name**: `string`

Gets or sets search for DiagnosticLookupTables with this Name.
 Wildcard search is supported.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticLookupTableSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticLookupTableSearch.ts#L15)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
