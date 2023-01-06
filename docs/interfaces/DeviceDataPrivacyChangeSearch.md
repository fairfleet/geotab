[@fairfleet/geotab](../README.md) / DeviceDataPrivacyChangeSearch

# Interface: DeviceDataPrivacyChangeSearch

The object used to specify the arguments when searching for [DeviceDataPrivacyChange](DeviceDataPrivacyChange.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DeviceDataPrivacyChangeSearch`**

## Table of contents

### Properties

- [deviceSearch](DeviceDataPrivacyChangeSearch.md#devicesearch)
- [fromDate](DeviceDataPrivacyChangeSearch.md#fromdate)
- [id](DeviceDataPrivacyChangeSearch.md#id)
- [includeFromDateOverlap](DeviceDataPrivacyChangeSearch.md#includefromdateoverlap)
- [propertySelector](DeviceDataPrivacyChangeSearch.md#propertyselector)
- [toDate](DeviceDataPrivacyChangeSearch.md#todate)
- [version](DeviceDataPrivacyChangeSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [DeviceDataPrivacyChange](DeviceDataPrivacyChange.md)s with this DeviceDataPrivacyChangeSearch.DeviceSearch Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceDataPrivacyChangeSearch.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceDataPrivacyChangeSearch.ts#L17)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for [DeviceDataPrivacyChange](DeviceDataPrivacyChange.md)s recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceDataPrivacyChangeSearch.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceDataPrivacyChangeSearch.ts#L19)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### includeFromDateOverlap

• **includeFromDateOverlap**: `boolean`

Gets or sets a value indicating whether gets or sets a value to include the first [DeviceDataPrivacyChange](DeviceDataPrivacyChange.md) before the DeviceDataPrivacyChangeSearch.FromDate. If DeviceDataPrivacyChangeSearch.FromDate is <c>null</c> this has no effect.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceDataPrivacyChangeSearch.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceDataPrivacyChangeSearch.ts#L21)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### toDate

• **toDate**: `Date`

Gets or sets search for [DeviceDataPrivacyChange](DeviceDataPrivacyChange.md)s recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceDataPrivacyChangeSearch.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceDataPrivacyChangeSearch.ts#L23)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
