[@fairfleet/geotab](../README.md) / ServiceStateSearch

# Interface: ServiceStateSearch

The object used to specify the arguments when searching for a [ServiceState](ServiceState.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ServiceStateSearch`**

## Table of contents

### Properties

- [id](ServiceStateSearch.md#id)
- [name](ServiceStateSearch.md#name)
- [version](ServiceStateSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### name

• **name**: `string`

Gets or sets search for ServiceState with this Name. Name is unique for each ServiceState. Wildcard can not be used.

#### Defined in

[src/types/Checkmate/ObjectModel/ServiceStateSearch.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ServiceStateSearch.ts#L10)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
