[@fairfleet/geotab](../README.md) / UserDeviceLink

# Interface: UserDeviceLink

**`Deprecated`**

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`UserDeviceLink`**

## Table of contents

### Properties

- [device](UserDeviceLink.md#device)
- [driver](UserDeviceLink.md#driver)
- [entityLinkType](UserDeviceLink.md#entitylinktype)
- [fromDate](UserDeviceLink.md#fromdate)
- [id](UserDeviceLink.md#id)
- [toDate](UserDeviceLink.md#todate)
- [version](UserDeviceLink.md#version)

## Properties

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with this user device link.

#### Defined in

[src/types/Checkmate/ObjectModel/UserDeviceLink.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/UserDeviceLink.ts#L15)

___

### driver

• **driver**: [`User`](User.md)

Gets or sets the [User](User.md) who created the user device linkage.

#### Defined in

[src/types/Checkmate/ObjectModel/UserDeviceLink.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/UserDeviceLink.ts#L17)

___

### entityLinkType

• **entityLinkType**: [`EntityLinkType`](../README.md#entitylinktype)

Gets or sets the link type

#### Defined in

[src/types/Checkmate/ObjectModel/UserDeviceLink.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/UserDeviceLink.ts#L19)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the date when the link was added.

#### Defined in

[src/types/Checkmate/ObjectModel/UserDeviceLink.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/UserDeviceLink.ts#L21)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### toDate

• **toDate**: `Date`

Gets or sets the date when the link was removed.

#### Defined in

[src/types/Checkmate/ObjectModel/UserDeviceLink.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/UserDeviceLink.ts#L23)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
