[@fairfleet/geotab](../README.md) / ControllerSearch

# Interface: ControllerSearch

The object used to specify the arguments when searching for [Controller](Controller.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ControllerSearch`**

## Table of contents

### Properties

- [id](ControllerSearch.md#id)
- [name](ControllerSearch.md#name)
- [sourceSearch](ControllerSearch.md#sourcesearch)
- [version](ControllerSearch.md#version)

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

Gets or sets search for Controllers with this Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts:11](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts#L11)

___

### sourceSearch

• **sourceSearch**: [`SourceSearch`](SourceSearch.md)

Gets or sets search for Controllers with this [SourceSearch](SourceSearch.md) Id.
 Available SourceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts#L17)

___

### version

• **version**: `number`

Gets or sets the row version of the [Controller](Controller.md) search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts#L19)
