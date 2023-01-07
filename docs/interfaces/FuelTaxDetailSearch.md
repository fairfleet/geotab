[@fairfleet/geotab](../README.md) / FuelTaxDetailSearch

# Interface: FuelTaxDetailSearch

The object used to specify the arguments when searching for [FuelTaxDetail](FuelTaxDetail.md) elements.
 This search has been designed to work efficiently with these parameters:<list><item><description>DeviceSearch</description></item><item><description>FromDate</description></item><item><description>ToDate</description></item></list>

## Hierarchy

- [`Search`](Search.md)

  ↳ **`FuelTaxDetailSearch`**

## Table of contents

### Properties

- [deviceSearch](FuelTaxDetailSearch.md#devicesearch)
- [fromDate](FuelTaxDetailSearch.md#fromdate)
- [id](FuelTaxDetailSearch.md#id)
- [includeBoundaries](FuelTaxDetailSearch.md#includeboundaries)
- [includeHourlyData](FuelTaxDetailSearch.md#includehourlydata)
- [maxVersion](FuelTaxDetailSearch.md#maxversion)
- [toDate](FuelTaxDetailSearch.md#todate)
- [version](FuelTaxDetailSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any fuel tax details that are assigned to that Device.
 Providing the Groups will search for fuel tax details for that have Devices in that group.
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts#L19)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the beginning of the time interval. The search will adjust it to the nearest hour on or before this time. For instance, 8:20 AM will become 8 AM.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts#L21)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeBoundaries

• **includeBoundaries**: `boolean`

Gets or sets a value indicating whether to include any parts of boundary details that fall outside the time interval.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts:23](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts#L23)

___

### includeHourlyData

• **includeHourlyData**: `boolean`

Gets or sets a value indicating whether to include hourly data.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts:25](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts#L25)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the max row version of the [FuelTaxDetail](FuelTaxDetail.md) search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts:27](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts#L27)

___

### toDate

• **toDate**: `Date`

Gets or sets the end of the time interval. The search will adjust it to the nearest hour on or after this time. For instance, 5:40 PM will become 6 PM.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts:29](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts#L29)

___

### version

• **version**: `number`

Gets or sets the row version of the [FuelTaxDetail](FuelTaxDetail.md) search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts:31](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/FuelTaxDetailSearch.ts#L31)
