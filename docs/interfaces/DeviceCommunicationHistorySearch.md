[@fairfleet/geotab](../README.md) / DeviceCommunicationHistorySearch

# Interface: DeviceCommunicationHistorySearch

The object used to specify the arguments when searching for [DeviceCommunicationHistory](DeviceCommunicationHistory.md) record(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DeviceCommunicationHistorySearch`**

## Table of contents

### Properties

- [deviceSearch](DeviceCommunicationHistorySearch.md#devicesearch)
- [fromDate](DeviceCommunicationHistorySearch.md#fromdate)
- [id](DeviceCommunicationHistorySearch.md#id)
- [maxVersion](DeviceCommunicationHistorySearch.md#maxversion)
- [toDate](DeviceCommunicationHistorySearch.md#todate)
- [version](DeviceCommunicationHistorySearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options.
 Providing a device ID will search for any DeviceCommunicationHistory for that Device.
 Providing deviceIds will search for any DeviceCommunicationHistory for that Devices.
 Providing the Groups will search for DeviceCommunicationHistory for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>DeviceIds</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationHistorySearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationHistorySearch.ts#L18)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for device communication history entries that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationHistorySearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationHistorySearch.ts#L20)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum version of the
 [DeviceCommunicationHistory](DeviceCommunicationHistory.md) search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationHistorySearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationHistorySearch.ts#L25)

___

### toDate

• **toDate**: `Date`

Gets or sets search for device communication history entries that were at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationHistorySearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationHistorySearch.ts#L27)

___

### version

• **version**: `number`

Gets or sets the row version of the [DeviceCommunicationHistory](DeviceCommunicationHistory.md) search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceCommunicationHistorySearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceCommunicationHistorySearch.ts#L29)
