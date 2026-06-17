[@fairfleet/geotab](../README.md) / DeviceShare

# Interface: DeviceShare

A device share represents the sharing of steaming data from a device into multiple databases.
 A database which is the primary device subscriber may share the data with one or many other databases.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`DeviceShare`**

## Table of contents

### Properties

- [acceptedDateTime](DeviceShare.md#accepteddatetime)
- [dateTime](DeviceShare.md#datetime)
- [device](DeviceShare.md#device)
- [devicePlan](DeviceShare.md#deviceplan)
- [devicePlanBillingInfo](DeviceShare.md#deviceplanbillinginfo)
- [expirationDateTime](DeviceShare.md#expirationdatetime)
- [id](DeviceShare.md#id)
- [lastUpdatedBy](DeviceShare.md#lastupdatedby)
- [myAdminId](DeviceShare.md#myadminid)
- [name](DeviceShare.md#name)
- [options](DeviceShare.md#options)
- [serialNumber](DeviceShare.md#serialnumber)
- [shareStatus](DeviceShare.md#sharestatus)
- [shareType](DeviceShare.md#sharetype)
- [sourceDatabaseGuid](DeviceShare.md#sourcedatabaseguid)
- [sourceDatabaseName](DeviceShare.md#sourcedatabasename)
- [targetDatabaseGuid](DeviceShare.md#targetdatabaseguid)
- [targetDatabaseName](DeviceShare.md#targetdatabasename)
- [terminatedDateTime](DeviceShare.md#terminateddatetime)
- [updatedDateTime](DeviceShare.md#updateddatetime)
- [version](DeviceShare.md#version)

## Properties

### acceptedDateTime

• **acceptedDateTime**: `Date`

Gets or sets the date that the [DeviceShare](DeviceShare.md) was accepted.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L20)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date time of when the [DeviceShare](DeviceShare.md) was created.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L22)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the DeviceShare.Device to populate Device created from DeviceShare.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L24)

___

### devicePlan

• **devicePlan**: [`DevicePlan`](../README.md#deviceplan)

Gets or sets the [DevicePlan](../README.md#deviceplan) for this DeviceShare.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L26)

___

### devicePlanBillingInfo

• **devicePlanBillingInfo**: [`DevicePlanBillingInfo`](DevicePlanBillingInfo.md)

Gets or sets the DeviceShare.DevicePlanBillingInfo of this DeviceShare.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L28)

___

### expirationDateTime

• **expirationDateTime**: `Date`

Gets or sets when the [DeviceShare](DeviceShare.md) is set to expire.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L30)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lastUpdatedBy

• **lastUpdatedBy**: [`User`](User.md)

Gets or sets the [User](User.md) that last updated this DeviceShare.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L32)

___

### myAdminId

• **myAdminId**: `number`

Gets or sets the Int32 id that MyAdmin associates with this [DeviceShare](DeviceShare.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L34)

___

### name

• **name**: `string`

Gets or sets the name of this entity which identifies it and is used when displaying this entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### options

• **options**: [`DeviceShareOptions`](DeviceShareOptions.md)

Gets or sets the [DeviceShareOptions](DeviceShareOptions.md) of this DeviceShare.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L36)

___

### serialNumber

• **serialNumber**: `string`

Gets or sets the String serial number of the device associated with this [DeviceShare](DeviceShare.md).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L38)

___

### shareStatus

• **shareStatus**: [`DeviceShareStatus`](../README.md#devicesharestatus)

Gets or sets the [DeviceShareStatus](../README.md#devicesharestatus) of this DeviceShare.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L40)

___

### shareType

• **shareType**: [`DeviceShareType`](../README.md#devicesharetype)

Gets or sets the [DeviceShareType](../README.md#devicesharetype) of this DeviceShare.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L42)

___

### sourceDatabaseGuid

• **sourceDatabaseGuid**: `string`

Gets or sets Guid of the source database; internal use only.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L44)

___

### sourceDatabaseName

• **sourceDatabaseName**: `string`

Gets or sets the name of the source database for this device share. This is the database that owns the
 device and is allowing the sharing to occur.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L49)

___

### targetDatabaseGuid

• **targetDatabaseGuid**: `string`

Gets or sets Guid of the target database; internal use only.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L51)

___

### targetDatabaseName

• **targetDatabaseName**: `string`

Gets or sets the name of the target database for this device share. This is the database that the device's
 data is being shared to, and does not own the device.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L56)

___

### terminatedDateTime

• **terminatedDateTime**: `Date`

Gets or sets the date that the [DeviceShare](DeviceShare.md) was terminated.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L58)

___

### updatedDateTime

• **updatedDateTime**: `Date`

Gets or sets the date time of when the [DeviceShare](DeviceShare.md) status was updated. This is when the share request was
 accepted/rejected by a target-database user or cancelled by a source-database user.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShare.ts:63](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceShare.ts#L63)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
