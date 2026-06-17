[@fairfleet/geotab](../README.md) / ChargeEventSearch

# Interface: ChargeEventSearch

The object used to specify the arguments when searching for a [ChargeEvent](ChargeEvent.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ChargeEventSearch`**

## Table of contents

### Properties

- [deviceSearch](ChargeEventSearch.md#devicesearch)
- [fromDate](ChargeEventSearch.md#fromdate)
- [id](ChargeEventSearch.md#id)
- [includeDeleted](ChargeEventSearch.md#includedeleted)
- [maxVersion](ChargeEventSearch.md#maxversion)
- [toDate](ChargeEventSearch.md#todate)
- [version](ChargeEventSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any ChargeEvents that are assigned to that Device.
 Providing the Groups will search for ChargeEvents for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts#L17)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for ChargeEvent(s) recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts#L19)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeDeleted

• **includeDeleted**: `boolean`

Gets or sets a value indicating whether search includes records that have dtDeleted column set

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts#L21)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum row version of the
 [ChargeEvent](ChargeEvent.md) search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts#L26)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date, which is used to search for ChargeEvent(s) recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts#L28)

___

### version

• **version**: `number`

Gets or sets the row version of the [ChargeEvent](ChargeEvent.md)
 search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts#L33)
