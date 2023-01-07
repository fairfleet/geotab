[@fairfleet/geotab](../README.md) / FillUpSearch

# Interface: FillUpSearch

The object used to specify the arguments when searching for a [FillUp](FillUp.md).

## Hierarchy

- [`FuelUpEventSearch`](FuelUpEventSearch.md)

  ↳ **`FillUpSearch`**

## Table of contents

### Properties

- [deviceSearch](FillUpSearch.md#devicesearch)
- [fromDate](FillUpSearch.md#fromdate)
- [id](FillUpSearch.md#id)
- [toDate](FillUpSearch.md#todate)
- [version](FillUpSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the device search criteria for the FuelUpEvent with this [DeviceSearch](DeviceSearch.md) Id. Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Inherited from

[FuelUpEventSearch](FuelUpEventSearch.md).[deviceSearch](FuelUpEventSearch.md#devicesearch)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUpEventSearch.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelUpEventSearch.ts#L14)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for FuelUpEvent(s) recorded on or after this date.

#### Inherited from

[FuelUpEventSearch](FuelUpEventSearch.md).[fromDate](FuelUpEventSearch.md#fromdate)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUpEventSearch.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelUpEventSearch.ts#L16)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[FuelUpEventSearch](FuelUpEventSearch.md).[id](FuelUpEventSearch.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date, which is used to search for FuelUpEvent(s) recorded on or before this date.

#### Inherited from

[FuelUpEventSearch](FuelUpEventSearch.md).[toDate](FuelUpEventSearch.md#todate)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FuelUpEventSearch.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Fuel/FuelUpEventSearch.ts#L18)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[FuelUpEventSearch](FuelUpEventSearch.md).[version](FuelUpEventSearch.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
