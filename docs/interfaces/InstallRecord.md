[@fairfleet/geotab](../README.md) / InstallRecord

# Interface: InstallRecord

Install Records updates to be sent to UI which were received from MyAdmin.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`InstallRecord`**

## Table of contents

### Properties

- [dateOfInstallation](InstallRecord.md#dateofinstallation)
- [id](InstallRecord.md#id)
- [installStatus](InstallRecord.md#installstatus)
- [myAdminJsonResponse](InstallRecord.md#myadminjsonresponse)
- [otherParams](InstallRecord.md#otherparams)
- [serialNumber](InstallRecord.md#serialnumber)
- [version](InstallRecord.md#version)

## Properties

### dateOfInstallation

• **dateOfInstallation**: `Date`

Gets or sets value for date of installation.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecord.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecord.ts#L12)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### installStatus

• **installStatus**: [`InstallStatus`](../README.md#installstatus)

Gets or sets installation status for the device.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecord.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecord.ts#L14)

___

### myAdminJsonResponse

• **myAdminJsonResponse**: `string`

Gets or sets the value for MyAdminJsonResponse.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecord.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecord.ts#L16)

___

### otherParams

• **otherParams**: [`InstallRecordOtherDetails`](InstallRecordOtherDetails.md)

Gets or sets other properties of the device.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecord.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecord.ts#L18)

___

### serialNumber

• **serialNumber**: `string`

Gets or sets value for SerialNumber.

#### Defined in

[src/types/Checkmate/ObjectModel/InstallRecords/InstallRecord.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/InstallRecords/InstallRecord.ts#L20)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
