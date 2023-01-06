[@fairfleet/geotab](../README.md) / DeviceMasterFlagSearch

# Interface: DeviceMasterFlagSearch

The object used to specify the arguments when searching for [DeviceMasterFlag](DeviceMasterFlag.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DeviceMasterFlagSearch`**

## Table of contents

### Properties

- [devicePlanMasterFlag](DeviceMasterFlagSearch.md#deviceplanmasterflag)
- [deviceSearch](DeviceMasterFlagSearch.md#devicesearch)
- [fromDate](DeviceMasterFlagSearch.md#fromdate)
- [id](DeviceMasterFlagSearch.md#id)
- [includeFromDateOverlap](DeviceMasterFlagSearch.md#includefromdateoverlap)
- [propertySelector](DeviceMasterFlagSearch.md#propertyselector)
- [toDate](DeviceMasterFlagSearch.md#todate)
- [version](DeviceMasterFlagSearch.md#version)

## Properties

### devicePlanMasterFlag

• **devicePlanMasterFlag**: [`DevicePlanMasterFlag`](../README.md#deviceplanmasterflag)

Gets or sets search for [DeviceMasterFlag](DeviceMasterFlag.md)s with this DeviceMasterFlagSearch.DevicePlanMasterFlag.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceMasterFlagSearch.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceMasterFlagSearch.ts#L14)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [DeviceMasterFlag](DeviceMasterFlag.md)s with this DeviceMasterFlagSearch.DeviceSearch.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceMasterFlagSearch.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceMasterFlagSearch.ts#L16)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for [DeviceMasterFlag](DeviceMasterFlag.md)s recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceMasterFlagSearch.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceMasterFlagSearch.ts#L18)

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

Gets or sets a value indicating whether gets or sets a value to include the first [DeviceMasterFlag](DeviceMasterFlag.md) before the DeviceMasterFlagSearch.FromDate. If DeviceMasterFlagSearch.FromDate is <c>null</c> this has no effect.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceMasterFlagSearch.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceMasterFlagSearch.ts#L20)

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

Gets or sets search for [DeviceMasterFlag](DeviceMasterFlag.md)s recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceMasterFlagSearch.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceMasterFlagSearch.ts#L22)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
