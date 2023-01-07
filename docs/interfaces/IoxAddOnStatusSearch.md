[@fairfleet/geotab](../README.md) / IoxAddOnStatusSearch

# Interface: IoxAddOnStatusSearch

The object used to specify the arguments when searching for [IoxAddOnStatus](IoxAddOnStatus.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`IoxAddOnStatusSearch`**

## Table of contents

### Properties

- [deviceConnectionStatus](IoxAddOnStatusSearch.md#deviceconnectionstatus)
- [deviceSearch](IoxAddOnStatusSearch.md#devicesearch)
- [fromDate](IoxAddOnStatusSearch.md#fromdate)
- [id](IoxAddOnStatusSearch.md#id)
- [toDate](IoxAddOnStatusSearch.md#todate)
- [version](IoxAddOnStatusSearch.md#version)

## Properties

### deviceConnectionStatus

• **deviceConnectionStatus**: `number`

Gets or sets the device connection status (Active = 0, Inactive = 4, Disconnected = 1).

#### Defined in

src/types/Checkmate/ObjectModel/IoxAddOnStatusSearch.ts:13

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for Iox Add-On Statusess that are or have been attached to this IoxAddOnStatusSearch.DeviceSearch Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

src/types/Checkmate/ObjectModel/IoxAddOnStatusSearch.ts:19

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for IoxAddOnStatus records that were logged at this date or after.

#### Defined in

src/types/Checkmate/ObjectModel/IoxAddOnStatusSearch.ts:21

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### toDate

• **toDate**: `Date`

Gets or sets search for IoxAddOnStatus records that were logged at this date or before.

#### Defined in

src/types/Checkmate/ObjectModel/IoxAddOnStatusSearch.ts:23

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
