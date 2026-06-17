[@fairfleet/geotab](../README.md) / ControllerSearch

# Interface: ControllerSearch

The object used to specify the arguments when searching for [Controller](Controller.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ControllerSearch`**

## Table of contents

### Properties

- [code](ControllerSearch.md#code)
- [id](ControllerSearch.md#id)
- [ids](ControllerSearch.md#ids)
- [name](ControllerSearch.md#name)
- [sourceSearch](ControllerSearch.md#sourcesearch)
- [version](ControllerSearch.md#version)

## Properties

### code

• **code**: `number`

Gets or sets search for a Controller by the code number.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts#L11)

___

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

Gets or sets search for Controllers with these unique Id(s).

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts#L13)

___

### name

• **name**: `string`

Gets or sets search for Controllers with this Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts#L15)

___

### sourceSearch

• **sourceSearch**: [`SourceSearch`](SourceSearch.md)

Gets or sets search for Controllers with this [SourceSearch](SourceSearch.md) Id.
 Available SourceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts#L21)

___

### version

• **version**: `number`

Gets or sets the row version of the [Controller](Controller.md) search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/ControllerSearch.ts#L23)
