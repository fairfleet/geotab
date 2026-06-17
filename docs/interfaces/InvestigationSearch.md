[@fairfleet/geotab](../README.md) / InvestigationSearch

# Interface: InvestigationSearch

The object used to specify the arguments when searching for an [Investigation](Investigation.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`InvestigationSearch`**

## Table of contents

### Properties

- [description](InvestigationSearch.md#description)
- [fromDate](InvestigationSearch.md#fromdate)
- [fromDateCreated](InvestigationSearch.md#fromdatecreated)
- [id](InvestigationSearch.md#id)
- [keywords](InvestigationSearch.md#keywords)
- [name](InvestigationSearch.md#name)
- [toDate](InvestigationSearch.md#todate)
- [toDateCreated](InvestigationSearch.md#todatecreated)
- [version](InvestigationSearch.md#version)

## Properties

### description

• **description**: `string`

Gets or sets the description to search for.
 Supports wildcard searching using % and _ characters.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationSearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationSearch.ts#L13)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the start date for filtering investigations.
 Returns investigations where the investigation period overlaps or occurs between this and InvestigationSearch.ToDate.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationSearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationSearch.ts#L18)

___

### fromDateCreated

• **fromDateCreated**: `Date`

Gets or sets the start date for filtering investigations by creation date.
 Returns investigations created at this date or after.
 Must be specified together with InvestigationSearch.ToDateCreated.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationSearch.ts#L24)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### keywords

• **keywords**: `string`[]

Gets or sets the keywords to search for in the investigation name or description.
 Keywords support wildcard searching and can be negated using the minus (-) prefix.
 Multiple keywords are combined with AND logic.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationSearch.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationSearch.ts#L30)

___

### name

• **name**: `string`

Gets or sets the name to search for.
 Supports wildcard searching using % and _ characters.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationSearch.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationSearch.ts#L35)

___

### toDate

• **toDate**: `Date`

Gets or sets the end date for filtering investigations.
 Returns investigations where the investigation period overlaps or occurs between InvestigationSearch.FromDate and this.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationSearch.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationSearch.ts#L40)

___

### toDateCreated

• **toDateCreated**: `Date`

Gets or sets the end date for filtering investigations by creation date.
 Returns investigations created at this date or before.
 Must be specified together with InvestigationSearch.FromDateCreated.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationSearch.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationSearch.ts#L46)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
