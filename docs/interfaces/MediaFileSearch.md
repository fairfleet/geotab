[@fairfleet/geotab](../README.md) / MediaFileSearch

# Interface: MediaFileSearch

The object used to specify the arguments when searching for [MediaFile](MediaFile.md). This will return the data describing a file, not the actual file.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`MediaFileSearch`**

## Table of contents

### Properties

- [deviceSearch](MediaFileSearch.md#devicesearch)
- [driverSearch](MediaFileSearch.md#driversearch)
- [fromDate](MediaFileSearch.md#fromdate)
- [id](MediaFileSearch.md#id)
- [maxVersion](MediaFileSearch.md#maxversion)
- [minVersion](MediaFileSearch.md#minversion)
- [solutionId](MediaFileSearch.md#solutionid)
- [tagSearch](MediaFileSearch.md#tagsearch)
- [toDate](MediaFileSearch.md#todate)
- [version](MediaFileSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any MediaFiles that are assigned to that Device.
 Providing the Groups will search for MediaFiles for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Group</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L19)

___

### driverSearch

• **driverSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for MediaFile with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L25)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for MediaFile records at this date or after. Includes overlapping dates.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L27)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets search for MediaFile records before this version.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L29)

___

### minVersion

• **minVersion**: `number`

Gets or sets search for MediaFile records at or after this version.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L31)

___

### solutionId

• **solutionId**: `string`

Gets or sets search for MediaFile records with this SolutionId.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L33)

___

### tagSearch

• **tagSearch**: [`TagSearch`](TagSearch.md)

Gets or sets search for MediaFile with this MediaFileSearch.TagSearch.
 Available TagSearch options are:.
 <list><item><description>Id</description></item><item><description>TagIds</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L39)

___

### toDate

• **toDate**: `Date`

Gets or sets search for MediaFile records at this date or before. Includes overlapping dates.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L41)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
