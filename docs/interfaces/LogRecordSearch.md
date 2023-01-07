[@fairfleet/geotab](../README.md) / LogRecordSearch

# Interface: LogRecordSearch

The object used to specify the arguments when searching for
 [LogRecord](LogRecord.md)(s).
 When searching for log records the system will return all records that match the
 search criteria and interpolate the value at the provided from/to dates when there is no record that
 corresponds to the date. Interpolated records are dynamically created when the request is made and
 can be identified as not having the ID property populated. Records with an ID are stored in the
 database.
 This search has been designed to work efficiently with these combinations of parameters:<list><item><description>Id</description></item><item><description>DeviceSearch + FromDate and/or ToDate</description></item></list>

## Hierarchy

- [`Search`](Search.md)

  ↳ **`LogRecordSearch`**

## Table of contents

### Properties

- [deviceSearch](LogRecordSearch.md#devicesearch)
- [fromDate](LogRecordSearch.md#fromdate)
- [id](LogRecordSearch.md#id)
- [observeActiveState](LogRecordSearch.md#observeactivestate)
- [toDate](LogRecordSearch.md#todate)
- [version](LogRecordSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for LogRecords for this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordSearch.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecordSearch.ts#L24)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for LogRecords at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordSearch.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecordSearch.ts#L26)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### observeActiveState

• **observeActiveState**: `boolean`

Gets or sets a value indicating whether [observe active state].

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordSearch.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecordSearch.ts#L28)

___

### toDate

• **toDate**: `Date`

Gets or sets search for LogRecords at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/LogRecordSearch.ts:30](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/LogRecordSearch.ts#L30)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
