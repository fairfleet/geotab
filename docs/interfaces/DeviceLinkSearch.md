[@fairfleet/geotab](../README.md) / DeviceLinkSearch

# Interface: DeviceLinkSearch

The object used to specify the arguments when searching for [DeviceLink](DeviceLink.md) record(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DeviceLinkSearch`**

## Table of contents

### Properties

- [activeFrom](DeviceLinkSearch.md#activefrom)
- [activeTo](DeviceLinkSearch.md#activeto)
- [destinationDeviceSearch](DeviceLinkSearch.md#destinationdevicesearch)
- [id](DeviceLinkSearch.md#id)
- [maxVersion](DeviceLinkSearch.md#maxversion)
- [propertySelector](DeviceLinkSearch.md#propertyselector)
- [sourceDeviceSearch](DeviceLinkSearch.md#sourcedevicesearch)
- [version](DeviceLinkSearch.md#version)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets search for DeviceLink that was active at this date or after.
 Set to UTC now to search for only currently active DeviceLink.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts#L14)

___

### activeTo

• **activeTo**: `Date`

Gets or sets search for DeviceLink that was active at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts#L16)

___

### destinationDeviceSearch

• **destinationDeviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets destination device search for DeviceLink attached to this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts#L22)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum row version of the DeviceLink search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts:24](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts#L24)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### sourceDeviceSearch

• **sourceDeviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets source device search for DeviceLink attached to this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts:30](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts#L30)

___

### version

• **version**: `number`

Gets or sets the row version of the DeviceLink search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts:32](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts#L32)
