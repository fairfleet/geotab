[@fairfleet/geotab](../README.md) / MediaFile

# Interface: MediaFile

The entity which describes the binary media.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`MediaFile`**

## Table of contents

### Properties

- [device](MediaFile.md#device)
- [driver](MediaFile.md#driver)
- [fromDate](MediaFile.md#fromdate)
- [id](MediaFile.md#id)
- [mediaType](MediaFile.md#mediatype)
- [metaData](MediaFile.md#metadata)
- [name](MediaFile.md#name)
- [solutionId](MediaFile.md#solutionid)
- [status](MediaFile.md#status)
- [tags](MediaFile.md#tags)
- [thumbnails](MediaFile.md#thumbnails)
- [toDate](MediaFile.md#todate)
- [version](MediaFile.md#version)

## Properties

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with the file.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFile.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Files/MediaFile.ts#L14)

___

### driver

• **driver**: [`Driver`](Driver.md)

Gets or sets the [Driver](Driver.md) associated with the file.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFile.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Files/MediaFile.ts#L16)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the from date.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFile.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Files/MediaFile.ts#L18)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### mediaType

• **mediaType**: [`MediaType`](../README.md#mediatype)

Gets or sets the [MediaType](../README.md#mediatype).

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFile.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Files/MediaFile.ts#L20)

___

### metaData

• **metaData**: `string`

Gets or sets file metadata in JSON format.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFile.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Files/MediaFile.ts#L22)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### solutionId

• **solutionId**: `string`

Gets or sets the Id of the solution which added the data.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFile.ts:24](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Files/MediaFile.ts#L24)

___

### status

• **status**: [`Status`](../README.md#status)

Gets or sets the file processing [Status](../README.md#status).

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFile.ts:26](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Files/MediaFile.ts#L26)

___

### tags

• **tags**: `unknown`[]

Gets or sets the list of tags to provide context to the file.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFile.ts:28](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Files/MediaFile.ts#L28)

___

### thumbnails

• **thumbnails**: [`MediaFile`](MediaFile.md)[]

Gets or sets the list of files which serve as the thumbnail for this file.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFile.ts:30](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Files/MediaFile.ts#L30)

___

### toDate

• **toDate**: `Date`

Gets or sets the to date.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFile.ts:32](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Files/MediaFile.ts#L32)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
