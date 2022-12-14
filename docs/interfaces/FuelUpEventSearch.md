[@fairfleet/geotab](../README.md) / FuelUpEventSearch

# Interface: FuelUpEventSearch

The object used to specify the arguments when searching for a [FuelUpEvent](FuelUpEvent.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`FuelUpEventSearch`**

  ↳↳ [`FillUpSearch`](FillUpSearch.md)

## Table of contents

### Properties

- [deviceSearch](FuelUpEventSearch.md#devicesearch)
- [fromDate](FuelUpEventSearch.md#fromdate)
- [id](FuelUpEventSearch.md#id)
- [toDate](FuelUpEventSearch.md#todate)
- [version](FuelUpEventSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the device search criteria for the FuelUpEvent with this [DeviceSearch](DeviceSearch.md) Id. Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUpEventSearch.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelUpEventSearch.ts#L14)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for FuelUpEvent(s) recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUpEventSearch.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelUpEventSearch.ts#L16)

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

Gets or sets the to date, which is used to search for FuelUpEvent(s) recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUpEventSearch.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelUpEventSearch.ts#L18)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
