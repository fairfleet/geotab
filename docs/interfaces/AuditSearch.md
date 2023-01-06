[@fairfleet/geotab](../README.md) / AuditSearch

# Interface: AuditSearch

The object used to specify the arguments when searching [Audit](Audit.md) entries.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`AuditSearch`**

## Table of contents

### Properties

- [fromDate](AuditSearch.md#fromdate)
- [id](AuditSearch.md#id)
- [keywords](AuditSearch.md#keywords)
- [name](AuditSearch.md#name)
- [propertySelector](AuditSearch.md#propertyselector)
- [toDate](AuditSearch.md#todate)
- [userName](AuditSearch.md#username)
- [version](AuditSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets search for audit entries that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/AuditSearch.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/AuditSearch.ts#L10)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### keywords

• **keywords**: `string`[]

Gets or sets search for entities that contain specific keywords in all wildcard string-searchable fields.

#### Defined in

[src/types/Checkmate/ObjectModel/AuditSearch.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/AuditSearch.ts#L12)

___

### name

• **name**: `string`

Gets or sets search for audit entries with this Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/AuditSearch.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/AuditSearch.ts#L14)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### toDate

• **toDate**: `Date`

Gets or sets search for audit entries that were recorded before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/AuditSearch.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/AuditSearch.ts#L16)

___

### userName

• **userName**: `string`

Gets or sets search for audit entries with this User Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/AuditSearch.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/AuditSearch.ts#L18)

___

### version

• **version**: `number`

Gets or sets the row version of the [Audit](Audit.md) search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/AuditSearch.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/AuditSearch.ts#L20)
