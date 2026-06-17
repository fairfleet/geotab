[@fairfleet/geotab](../README.md) / EventTypeSearch

# Interface: EventTypeSearch

The object used to specify the arguments when searching for [EventType](EventType.md), (AKA MaintenanceType).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EventTypeSearch`**

## Table of contents

### Properties

- [createdBy](EventTypeSearch.md#createdby)
- [customSource](EventTypeSearch.md#customsource)
- [defectSearch](EventTypeSearch.md#defectsearch)
- [id](EventTypeSearch.md#id)
- [ids](EventTypeSearch.md#ids)
- [includeArchived](EventTypeSearch.md#includearchived)
- [includeDeleted](EventTypeSearch.md#includedeleted)
- [labels](EventTypeSearch.md#labels)
- [name](EventTypeSearch.md#name)
- [sources](EventTypeSearch.md#sources)
- [version](EventTypeSearch.md#version)
- [withDefect](EventTypeSearch.md#withdefect)

## Properties

### createdBy

• **createdBy**: [`UserSearch`](UserSearch.md)

Gets or sets the created by user to search by.
 Available [UserSearch](UserSearch.md) options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EventTypeSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventTypeSearch.ts#L16)

___

### customSource

• **customSource**: `string`

Gets or sets the source description to search by. Wildcard can be
 used by prepending/appending "%" to string. Example "%SourceDescription%"

#### Defined in

[src/types/Checkmate/ObjectModel/EventTypeSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventTypeSearch.ts#L21)

___

### defectSearch

• **defectSearch**: [`DefectSearch`](DefectSearch.md)

Gets or sets the defect to search by.
 Available EventTypeSearch.DefectSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EventTypeSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventTypeSearch.ts#L27)

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

Gets or sets search for maintenance types with these unique Id(s).

#### Defined in

[src/types/Checkmate/ObjectModel/EventTypeSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventTypeSearch.ts#L29)

___

### includeArchived

• **includeArchived**: `boolean`

Gets or sets a value indicating whether to include archived event types in the search.

#### Defined in

[src/types/Checkmate/ObjectModel/EventTypeSearch.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventTypeSearch.ts#L31)

___

### includeDeleted

• **includeDeleted**: `boolean`

Gets or sets a value indicating whether search includes records that have the dtDeleted column set

#### Defined in

[src/types/Checkmate/ObjectModel/EventTypeSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventTypeSearch.ts#L33)

___

### labels

• **labels**: `string`[]

Gets or sets search for maintenance types with these labels.

#### Defined in

[src/types/Checkmate/ObjectModel/EventTypeSearch.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventTypeSearch.ts#L35)

___

### name

• **name**: `string`

Gets or sets the name contained to search by. Wildcard can be
 used by prepending/appending "%" to string. Example "%Name%"

#### Defined in

[src/types/Checkmate/ObjectModel/EventTypeSearch.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventTypeSearch.ts#L40)

___

### sources

• **sources**: `string`[]

Gets or sets the sources to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/EventTypeSearch.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventTypeSearch.ts#L42)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### withDefect

• **withDefect**: `boolean`

Gets or sets search for maintenance types with or without defect.

#### Defined in

[src/types/Checkmate/ObjectModel/EventTypeSearch.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventTypeSearch.ts#L44)
