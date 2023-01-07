[@fairfleet/geotab](../README.md) / UserDeviceLinkSearch

# Interface: UserDeviceLinkSearch

The object used to specify the arguments when searching for [UserDeviceLink](UserDeviceLink.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`UserDeviceLinkSearch`**

## Table of contents

### Properties

- [afterToDate](UserDeviceLinkSearch.md#aftertodate)
- [deviceSearch](UserDeviceLinkSearch.md#devicesearch)
- [fromDate](UserDeviceLinkSearch.md#fromdate)
- [id](UserDeviceLinkSearch.md#id)
- [includeBoundaryLinks](UserDeviceLinkSearch.md#includeboundarylinks)
- [linkTypes](UserDeviceLinkSearch.md#linktypes)
- [toDate](UserDeviceLinkSearch.md#todate)
- [userSearch](UserDeviceLinkSearch.md#usersearch)
- [version](UserDeviceLinkSearch.md#version)

## Properties

### afterToDate

• **afterToDate**: `Date`

Gets or sets search for UserDeviceLink that were recorded with this ToDate or after.

#### Defined in

[src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts#L17)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for UserDeviceLinks for this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

**`Remarks`**

UserSearch is always applied first if both DeviceSearch and UserSearch are provided.

#### Defined in

[src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts:25](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts#L25)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for UserDeviceLink that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts:27](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts#L27)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeBoundaryLinks

• **includeBoundaryLinks**: `boolean`

Gets or sets a value indicating whether to include boundary links.

#### Defined in

[src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts:29](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts#L29)

___

### linkTypes

• **linkTypes**: [`EntityLinkType`](../README.md#entitylinktype)[]

Gets or sets search for UserDeviceLinks that match the specified [EntityLinkType](../README.md#entitylinktype)

#### Defined in

[src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts:31](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts#L31)

___

### toDate

• **toDate**: `Date`

Gets or sets search for UserDeviceLink that were recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts:33](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts#L33)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for UserDeviceLink with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts:39](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/UserDeviceLinkSearch.ts#L39)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
