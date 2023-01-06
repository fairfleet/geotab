[@fairfleet/geotab](../README.md) / WidgetSearch

# Interface: WidgetSearch

The object used to specify the
 arguments when searching for a [Widget](Widget.md).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`WidgetSearch`**

## Table of contents

### Properties

- [id](WidgetSearch.md#id)
- [name](WidgetSearch.md#name)
- [propertySelector](WidgetSearch.md#propertyselector)
- [version](WidgetSearch.md#version)
- [widgetIds](WidgetSearch.md#widgetids)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### name

• **name**: `string`

Gets or sets search for Widget with this Name. Wildcard can be used by prepending/appending "%" to
 string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/WidgetSearch.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/WidgetSearch.ts#L18)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)

___

### widgetIds

• **widgetIds**: `string`[]

Gets or sets search for Widgets by the list of widgetIds. Available WidgetSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/WidgetSearch.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/WidgetSearch.ts#L23)
