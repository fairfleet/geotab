[@fairfleet/geotab](../README.md) / InstallRecordSearch

# Interface: InstallRecordSearch

The object used to specify the arguments when searching [InstallRecord](InstallRecord.md) entries.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`InstallRecordSearch`**

## Table of contents

### Properties

- [deviceSearch](InstallRecordSearch.md#devicesearch)
- [fromDate](InstallRecordSearch.md#fromdate)
- [id](InstallRecordSearch.md#id)
- [installStatus](InstallRecordSearch.md#installstatus)
- [propertySelector](InstallRecordSearch.md#propertyselector)
- [toDate](InstallRecordSearch.md#todate)
- [version](InstallRecordSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets a Device Search to query for Install Records by device.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts#L12)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for Install Records that occurred at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts#L14)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### installStatus

• **installStatus**: [`InstallStatus`](../README.md#installstatus)

Gets or sets a value indicating which install status type records to search.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts#L16)

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

Gets or sets search for Install Records that occurred at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts#L18)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
