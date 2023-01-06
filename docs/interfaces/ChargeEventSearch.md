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
- [propertySelector](ChargeEventSearch.md#propertyselector)
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

[src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts#L17)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for ChargeEvent(s) recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts#L19)

___

### id

• **id**: `string`

Gets or sets the id, which is used to search for a Event record. Id cannot be used with any other search properties.

#### Overrides

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts#L21)

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

Gets or sets the to date, which is used to search for ChargeEvent(s) recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Charging/ChargeEventSearch.ts#L23)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
