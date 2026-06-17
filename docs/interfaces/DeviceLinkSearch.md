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
- [linkType](DeviceLinkSearch.md#linktype)
- [maxVersion](DeviceLinkSearch.md#maxversion)
- [sourceDeviceSearch](DeviceLinkSearch.md#sourcedevicesearch)
- [version](DeviceLinkSearch.md#version)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets search for DeviceLink that was active at this date or after.
 Set to UTC now to search for only currently active DeviceLink.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts#L15)

___

### activeTo

• **activeTo**: `Date`

Gets or sets search for DeviceLink that was active at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts#L17)

___

### destinationDeviceSearch

• **destinationDeviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets destination device search for DeviceLink attached to this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts#L23)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### linkType

• **linkType**: [`DeviceLinkType`](../README.md#devicelinktype)

Gets or sets link type for the DeviceLink search

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts#L25)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum row version of the DeviceLink search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts#L27)

___

### sourceDeviceSearch

• **sourceDeviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets source device search for DeviceLink attached to this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts#L33)

___

### version

• **version**: `number`

Gets or sets the row version of the DeviceLink search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceLinkSearch.ts#L35)
