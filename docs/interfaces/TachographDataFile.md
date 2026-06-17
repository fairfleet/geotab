[@fairfleet/geotab](../README.md) / TachographDataFile

# Interface: TachographDataFile

The entity which describes the tachograph data file.
 Notes: Although possible, it is not recommended to directly introduce new entities of this type with the Add API call.
 New entities are created through other means in the application (i.e. scheduled remote downloads from the Tachograph).

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`TachographDataFile`**

## Table of contents

### Properties

- [archived](TachographDataFile.md#archived)
- [binaryData](TachographDataFile.md#binarydata)
- [dateTime](TachographDataFile.md#datetime)
- [device](TachographDataFile.md#device)
- [driver](TachographDataFile.md#driver)
- [errors](TachographDataFile.md#errors)
- [fileName](TachographDataFile.md#filename)
- [fileNameDdd](TachographDataFile.md#filenameddd)
- [fileNameTgd](TachographDataFile.md#filenametgd)
- [fileNameV1B](TachographDataFile.md#filenamev1b)
- [id](TachographDataFile.md#id)
- [lockGaps](TachographDataFile.md#lockgaps)
- [origin](TachographDataFile.md#origin)
- [originDescription](TachographDataFile.md#origindescription)
- [processingStatus](TachographDataFile.md#processingstatus)
- [signature](TachographDataFile.md#signature)
- [summary](TachographDataFile.md#summary)
- [timestamp](TachographDataFile.md#timestamp)
- [timestampEnd](TachographDataFile.md#timestampend)
- [timestampStart](TachographDataFile.md#timestampstart)
- [uploadDateTime](TachographDataFile.md#uploaddatetime)
- [version](TachographDataFile.md#version)
- [warnings](TachographDataFile.md#warnings)

## Properties

### archived

• **archived**: `boolean`

Gets or sets the value that indicates whether it's archived.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L16)

___

### binaryData

• **binaryData**: `number`[]

Gets or sets the associated binary data object.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L18)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date on which the file was uploaded.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L20)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) related with the file data.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L22)

___

### driver

• **driver**: [`Driver`](Driver.md)

Gets or sets the [Driver](Driver.md) related with the file data.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L24)

___

### errors

• **errors**: `string`

Gets or sets the string with the errors found in the download, the download is NOT valid and will have to be repeated.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L26)

___

### fileName

• **fileName**: `string`

Gets or sets the file name.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L28)

___

### fileNameDdd

• **fileNameDdd**: `string`

Gets or sets the DDD file name.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L30)

___

### fileNameTgd

• **fileNameTgd**: `string`

Gets or sets the TGD file name.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L32)

___

### fileNameV1B

• **fileNameV1B**: `string`

Gets or sets the V1B file name.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L34)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lockGaps

• **lockGaps**: `string`

Gets or sets the value that contains file gaps.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L36)

___

### origin

• **origin**: `number`

Gets or sets the origin of the file.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L38)

___

### originDescription

• **originDescription**: `string`

Gets or sets the description of the origin of the file.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L40)

___

### processingStatus

• **processingStatus**: `number`

Gets or sets the int code for the processing status.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L42)

___

### signature

• **signature**: `number`

Gets or sets the signature.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L44)

___

### summary

• **summary**: `string`

Gets or sets the summary about the information of the file.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L46)

___

### timestamp

• **timestamp**: `Date`

Gets or sets the date on which the file was generated by a tachograph or reader.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L48)

___

### timestampEnd

• **timestampEnd**: `Date`

Gets or sets the most recent date with activity.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L50)

___

### timestampStart

• **timestampStart**: `Date`

Gets or sets the minimum date containing all data.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L52)

___

### uploadDateTime

• **uploadDateTime**: `Date`

Gets or sets the date on which the file was uploaded.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L54)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)

___

### warnings

• **warnings**: `string`

Gets or sets the string with the warnings found in the download, the download is correct for the administration.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFile.ts#L56)
