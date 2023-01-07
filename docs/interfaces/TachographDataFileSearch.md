[@fairfleet/geotab](../README.md) / TachographDataFileSearch

# Interface: TachographDataFileSearch

The object used to specify the arguments when searching for [TachographDataFile](TachographDataFile.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`TachographDataFileSearch`**

## Table of contents

### Properties

- [activityTimestampBetween](TachographDataFileSearch.md#activitytimestampbetween)
- [containsText](TachographDataFileSearch.md#containstext)
- [deviceIds](TachographDataFileSearch.md#deviceids)
- [deviceSearch](TachographDataFileSearch.md#devicesearch)
- [driverIds](TachographDataFileSearch.md#driverids)
- [errorContains](TachographDataFileSearch.md#errorcontains)
- [fromActivityTimestampEnd](TachographDataFileSearch.md#fromactivitytimestampend)
- [fromDate](TachographDataFileSearch.md#fromdate)
- [fromFloorToCeilingTimestamp](TachographDataFileSearch.md#fromfloortoceilingtimestamp)
- [fromTimestamp](TachographDataFileSearch.md#fromtimestamp)
- [id](TachographDataFileSearch.md#id)
- [ids](TachographDataFileSearch.md#ids)
- [includeBinaryData](TachographDataFileSearch.md#includebinarydata)
- [processingStatus](TachographDataFileSearch.md#processingstatus)
- [toDate](TachographDataFileSearch.md#todate)
- [toTimestamp](TachographDataFileSearch.md#totimestamp)
- [type](TachographDataFileSearch.md#type)
- [userSearch](TachographDataFileSearch.md#usersearch)
- [version](TachographDataFileSearch.md#version)
- [withoutError](TachographDataFileSearch.md#withouterror)

## Properties

### activityTimestampBetween

• **activityTimestampBetween**: [`ActivityTimestampBetweenSearch`](ActivityTimestampBetweenSearch.md)

**`Inherit Doc`**

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:17

___

### containsText

• **containsText**: `string`

Gets or sets search for TachographFile text into specific fields.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:19

___

### deviceIds

• **deviceIds**: `string`[]

Gets or sets search for TachographFile Device Ids records are in the list.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:21

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any TachographFile that are assigned to that Device.
 Providing the Groups will search for TachographFile for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Group</description></item></list>

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:29

___

### driverIds

• **driverIds**: `string`[]

Gets or sets search for TachographFile Driver Ids records are in the list.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:31

___

### errorContains

• **errorContains**: `string`

Gets or sets search for contains text in errors.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:33

___

### fromActivityTimestampEnd

• **fromActivityTimestampEnd**: `Date`

Gets or sets datetime to filter by ActivityTimestampEnd.
 It will return the last file of each driver where ActivityTimestampEnd is greater than this value.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:38

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for TachographFile records that were logged at this date or after.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:40

___

### fromFloorToCeilingTimestamp

• **fromFloorToCeilingTimestamp**: [`FloorToCeilingTimestampSearch`](FloorToCeilingTimestampSearch.md)

**`Inherit Doc`**

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:44

___

### fromTimestamp

• **fromTimestamp**: `Date`

Gets or sets search for TachographFile records that were generated at this date or after.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:46

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### ids

• **ids**: `string`[]

Gets or sets search for TachographFile Device Ids records are in the list.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:48

___

### includeBinaryData

• **includeBinaryData**: `boolean`

Gets or sets the flag to include binary data in the response.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:50

___

### processingStatus

• **processingStatus**: `number`

Gets or sets search for files with a specific processing status.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:52

___

### toDate

• **toDate**: `Date`

Gets or sets search for TachographFile records that were logged at this date or before.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:54

___

### toTimestamp

• **toTimestamp**: `Date`

Gets or sets search for TachographFile records that were generated at this date or before.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:56

___

### type

• **type**: [`TachographFileType`](../README.md#tachographfiletype)

Gets or sets search for TachographFile records based on the type of file.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:58

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets filter by the [UserSearch](UserSearch.md) options. Providing a user ID will
 search for any TachographFile that are assigned to that user.
 Providing the Groups will search for TachographFile for that have Users in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Group</description></item></list>

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:66

___

### version

• **version**: `number`

Gets or sets the row version of the
 [TachographDataFile](TachographDataFile.md)
 search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:72

___

### withoutError

• **withoutError**: `boolean`

Gets or sets search for files without errors.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Files/TachographDataFileSearch.ts:74
