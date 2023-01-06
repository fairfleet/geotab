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
- [propertySelector](MediaFileSearch.md#propertyselector)
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

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L18)

___

### driverSearch

• **driverSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for MediaFile with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:24](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L24)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for MediaFile records at this date or after. Includes overlapping dates.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:26](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L26)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets search for MediaFile records before this version.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:28](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L28)

___

### minVersion

• **minVersion**: `number`

Gets or sets search for MediaFile records at or after this version.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:30](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L30)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### toDate

• **toDate**: `Date`

Gets or sets search for MediaFile records at this date or before. Includes overlapping dates.

#### Defined in

[src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts:32](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Files/MediaFileSearch.ts#L32)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
