[@fairfleet/geotab](../README.md) / FillUpSearch

# Interface: FillUpSearch

The object used to specify the arguments when searching for [FillUp](FillUp.md).
 This search has been designed to work efficiently with these parameters:<list><item><description>Id</description></item><item><description>DeviceSearch + FromDate and/or ToDate</description></item></list>

## Hierarchy

- [`Search`](Search.md)

  ↳ **`FillUpSearch`**

## Table of contents

### Properties

- [deviceSearch](FillUpSearch.md#devicesearch)
- [fromDate](FillUpSearch.md#fromdate)
- [id](FillUpSearch.md#id)
- [includeDeleted](FillUpSearch.md#includedeleted)
- [includeEngineFillUpsOnly](FillUpSearch.md#includeenginefillupsonly)
- [includeFuelTransactionData](FillUpSearch.md#includefueltransactiondata)
- [maxVersion](FillUpSearch.md#maxversion)
- [toDate](FillUpSearch.md#todate)
- [version](FillUpSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the device search criteria for the FuelUpEvent with this [DeviceSearch](DeviceSearch.md) Id. Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts#L17)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date, which is used to search for FuelUpEvent(s) recorded on or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts#L19)

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

Gets or sets a value indicating whether search includes records that have the dtDeleted column set

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts#L21)

___

### includeEngineFillUpsOnly

• **includeEngineFillUpsOnly**: `boolean`

Gets or sets a value indicating whether to include only engine-based fill-up records.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts#L23)

___

### includeFuelTransactionData

• **includeFuelTransactionData**: `boolean`

Gets or sets a value indicating whether all Fuel Transaction data should be populated. Only Id will be included by default.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts#L25)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets search for [FillUp](FillUp.md)s with a maximum of this version.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts#L27)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date, which is used to search for FuelUpEvent(s) recorded on or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts#L29)

___

### version

• **version**: `number`

Gets or sets the row version of the [FillUp](FillUp.md) search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Fuel/FillUpSearch.ts#L31)
