[@fairfleet/geotab](../README.md) / CustomDataSearch

# Interface: CustomDataSearch

The object used to specify the arguments when searching for [CustomData](CustomData.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`CustomDataSearch`**

## Table of contents

### Properties

- [deviceSearch](CustomDataSearch.md#devicesearch)
- [fromDate](CustomDataSearch.md#fromdate)
- [id](CustomDataSearch.md#id)
- [maxId](CustomDataSearch.md#maxid)
- [minId](CustomDataSearch.md#minid)
- [toDate](CustomDataSearch.md#todate)
- [version](CustomDataSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for CustomData recorded for this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/CustomDataSearch.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/CustomDataSearch.ts#L15)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for CustomData that was recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomDataSearch.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/CustomDataSearch.ts#L17)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### maxId

• **maxId**: `string`

Gets or sets the maximum Id of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomDataSearch.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/CustomDataSearch.ts#L19)

___

### minId

• **minId**: `string`

Gets or sets the minimum Id of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomDataSearch.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/CustomDataSearch.ts#L21)

___

### toDate

• **toDate**: `Date`

Gets or sets search for CustomData that was recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/CustomDataSearch.ts:23](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/CustomDataSearch.ts#L23)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
