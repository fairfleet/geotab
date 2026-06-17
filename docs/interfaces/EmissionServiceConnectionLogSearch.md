[@fairfleet/geotab](../README.md) / EmissionServiceConnectionLogSearch

# Interface: EmissionServiceConnectionLogSearch

Search class for [EmissionServiceConnectionLog](EmissionServiceConnectionLog.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EmissionServiceConnectionLogSearch`**

## Table of contents

### Properties

- [fromDate](EmissionServiceConnectionLogSearch.md#fromdate)
- [id](EmissionServiceConnectionLogSearch.md#id)
- [successOnly](EmissionServiceConnectionLogSearch.md#successonly)
- [toDate](EmissionServiceConnectionLogSearch.md#todate)
- [version](EmissionServiceConnectionLogSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets search for all [EmissionServiceConnectionLog](EmissionServiceConnectionLog.md)s recorded from this date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionServiceConnectionLogSearch.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionServiceConnectionLogSearch.ts#L10)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### successOnly

• **successOnly**: `boolean`

Gets or sets search for all [EmissionServiceConnectionLog](EmissionServiceConnectionLog.md)s with success status only.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionServiceConnectionLogSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionServiceConnectionLogSearch.ts#L12)

___

### toDate

• **toDate**: `Date`

Gets or sets search for all [EmissionServiceConnectionLog](EmissionServiceConnectionLog.md)s recorded to this date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionServiceConnectionLogSearch.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionServiceConnectionLogSearch.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
