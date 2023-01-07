[@fairfleet/geotab](../README.md) / StatusDataSearch

# Interface: StatusDataSearch

The object used to specify the arguments when searching for
 [StatusData](StatusData.md).
 When searching for status data including DeviceSearch and DiagnosticSearch
 the system will return all records that match the search criteria and interpolate the value at the
 provided from/to dates when there is no record that corresponds to the date. Interpolated records
 are dynamically created when the request is made and can be identified as not having the ID property
 populated. Records with an ID are stored in the database.
 This search has been designed to work efficiently with these combinations of parameters:<list><item><description>Id</description></item><item><description>DeviceSearch + DiagnosticSearch + FromDate and/or ToDate</description></item></list>

## Hierarchy

- [`Search`](Search.md)

  ↳ **`StatusDataSearch`**

## Table of contents

### Properties

- [deviceSearch](StatusDataSearch.md#devicesearch)
- [diagnosticSearch](StatusDataSearch.md#diagnosticsearch)
- [fromDate](StatusDataSearch.md#fromdate)
- [id](StatusDataSearch.md#id)
- [observeActiveState](StatusDataSearch.md#observeactivestate)
- [toDate](StatusDataSearch.md#todate)
- [version](StatusDataSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any StatusData recorded for that Device.
 Providing the Groups will search for StatusData recorded for Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Group</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/StatusDataSearch.ts:27](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/StatusDataSearch.ts#L27)

___

### diagnosticSearch

• **diagnosticSearch**: [`DiagnosticSearch`](DiagnosticSearch.md)

Gets or sets search for StatusData with this [DiagnosticSearch](DiagnosticSearch.md) Id.
 Available DiagnosticSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/StatusDataSearch.ts:33](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/StatusDataSearch.ts#L33)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for StatusData records that were logged at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/StatusDataSearch.ts:35](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/StatusDataSearch.ts#L35)

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

[src/types/Checkmate/ObjectModel/Engine/StatusDataSearch.ts:37](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/StatusDataSearch.ts#L37)

___

### toDate

• **toDate**: `Date`

Gets or sets search for StatusData records that were logged at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/StatusDataSearch.ts:39](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/StatusDataSearch.ts#L39)

___

### version

• **version**: `number`

Gets or sets the row version of the [StatusData](StatusData.md) search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/StatusDataSearch.ts:41](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/StatusDataSearch.ts#L41)
