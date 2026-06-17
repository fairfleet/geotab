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
- [installServices](InstallRecordSearch.md#installservices)
- [installStatus](InstallRecordSearch.md#installstatus)
- [keywords](InstallRecordSearch.md#keywords)
- [sourceId](InstallRecordSearch.md#sourceid)
- [toDate](InstallRecordSearch.md#todate)
- [version](InstallRecordSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets a Device Search to query for Install Records by device.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts#L13)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for Install Records that occurred at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts#L15)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### installServices

• **installServices**: [`InstallationType`](../README.md#installationtype)[]

Gets or sets a value indicating which installation service records to search.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts#L17)

___

### installStatus

• **installStatus**: [`InstallStatus`](../README.md#installstatus)

Gets or sets a value indicating which install status type records to search.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts#L19)

___

### keywords

• **keywords**: `string`[]

Gets or sets search for entities that contain specific keywords in all wildcard string-searchable fields.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts#L21)

___

### sourceId

• **sourceId**: `string`

Gets or sets search for a [InstallRecord](InstallRecord.md) using its source id.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts#L23)

___

### toDate

• **toDate**: `Date`

Gets or sets search for Install Records that occurred at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecordSearch.ts#L25)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
