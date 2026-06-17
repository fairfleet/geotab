[@fairfleet/geotab](../README.md) / TachographDataFileSearch

# Interface: TachographDataFileSearch

The object used to specify the arguments when searching for [TachographDataFile](TachographDataFile.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`TachographDataFileSearch`**

## Table of contents

### Properties

- [activityTimestampBetween](TachographDataFileSearch.md#activitytimestampbetween)
- [deviceSearch](TachographDataFileSearch.md#devicesearch)
- [errorContains](TachographDataFileSearch.md#errorcontains)
- [fromActivityTimestampEnd](TachographDataFileSearch.md#fromactivitytimestampend)
- [fromFloorToCeilingTimestamp](TachographDataFileSearch.md#fromfloortoceilingtimestamp)
- [fromTimestamp](TachographDataFileSearch.md#fromtimestamp)
- [fromUploadDate](TachographDataFileSearch.md#fromuploaddate)
- [id](TachographDataFileSearch.md#id)
- [ids](TachographDataFileSearch.md#ids)
- [includeArchived](TachographDataFileSearch.md#includearchived)
- [includeBinaryData](TachographDataFileSearch.md#includebinarydata)
- [keywords](TachographDataFileSearch.md#keywords)
- [processingStatus](TachographDataFileSearch.md#processingstatus)
- [toTimestamp](TachographDataFileSearch.md#totimestamp)
- [toUploadDate](TachographDataFileSearch.md#touploaddate)
- [type](TachographDataFileSearch.md#type)
- [userSearch](TachographDataFileSearch.md#usersearch)
- [version](TachographDataFileSearch.md#version)
- [withoutError](TachographDataFileSearch.md#withouterror)

## Properties

### activityTimestampBetween

• **activityTimestampBetween**: [`ActivityTimestampBetweenSearch`](ActivityTimestampBetweenSearch.md)

Gets or sets the filter to search the files in a period of activity time.
 Available ActivityTimestampBetweenSearch options are:
 <list><item><description>FromActivityTimestamp: Gets or sets search for TachographFile records whose activity period starts.</description></item><item><description>ToActivityTimestamp: Gets or sets search for TachographFile records whose activity period ends.</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L18)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options.
 Providing a device ID will search for any file that is assigned to that Device.
 Providing the Groups will search for files that have Devices in that group.
 Providing the device IDs will search for files that have Devices in that list.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Group</description></item><item><description>DeviceIds</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L27)

___

### errorContains

• **errorContains**: `string`

Gets or sets search for contains text in errors.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L29)

___

### fromActivityTimestampEnd

• **fromActivityTimestampEnd**: `Date`

Gets or sets datetime to filter by ActivityTimestampEnd.
 It will return the last file of each driver where ActivityTimestampEnd is greater than this value.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L34)

___

### fromFloorToCeilingTimestamp

• **fromFloorToCeilingTimestamp**: [`FloorToCeilingTimestampSearch`](FloorToCeilingTimestampSearch.md)

Gets or sets the filter to search the files in a period of time from floor to ceiling.
 Available FloorToCeilingTimestampSearch options are:
 <list><item><description>FromTimestamp: Gets or sets search for TachographFile records that were generated at this date or after.</description></item><item><description>ToTimestamp: Gets or sets search for TachographFile records that were generated at this date or before.</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L40)

___

### fromTimestamp

• **fromTimestamp**: `Date`

Gets or sets search for TachographFile records that were generated at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L42)

___

### fromUploadDate

• **fromUploadDate**: `Date`

Gets or sets search for file records that were uploaded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L44)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### ids

• **ids**: `string`[]

Gets or sets search for TachographFile Device Ids records are in the list.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L46)

___

### includeArchived

• **includeArchived**: `boolean`

Gets or sets the flag to include archived files. By default archived tachograph data file records are not returned, set this flag to true to return all records.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L48)

___

### includeBinaryData

• **includeBinaryData**: `boolean`

Gets or sets the flag to include binary data in the response.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L50)

___

### keywords

• **keywords**: `string`[]

Gets or sets search for entities that contain specific keywords into FileName, FileNameDdd, FileNameTgd, FileNameV1B,
 in case the “type = Driver” it will look into the driver's first name and last name, or when “type = Device” in the license plate.
 Note: It is currently limited to only one keyword. To use keywords it is necessary to use the “type” filter too.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L56)

___

### processingStatus

• **processingStatus**: `number`

Gets or sets search for files with a specific processing status.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L58)

___

### toTimestamp

• **toTimestamp**: `Date`

Gets or sets search for TachographFile records that were generated at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:60](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L60)

___

### toUploadDate

• **toUploadDate**: `Date`

Gets or sets search for file records that were uploaded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:62](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L62)

___

### type

• **type**: `string`

Gets or sets search for file records based on the file type.
 The available values are:
 <list><item><description>"Driver": To filter by file type Driver.</description></item><item><description>"Device": To filter by file type Device.</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:68](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L68)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets filter by the [UserSearch](UserSearch.md) options.
 Providing a user ID will search for any file that is assigned to that user.
 Providing the Groups will search for files that have Users in that group.
 Providing the user IDs will search for files that have Users in that list, in this case the users will be drivers.
 Available UserSearch options are:
 <list><item><description>Id</description></item><item><description>Group</description></item><item><description>UserIds</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:77](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L77)

___

### version

• **version**: `number`

Gets or sets the row version of the
 [TachographDataFile](TachographDataFile.md)
 search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:83](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L83)

___

### withoutError

• **withoutError**: `boolean`

Gets or sets search for files without errors.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:85](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts#L85)
