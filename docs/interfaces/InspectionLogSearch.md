[@fairfleet/geotab](../README.md) / InspectionLogSearch

# Interface: InspectionLogSearch

The object used to specify the arguments when searching for [InspectionLog](InspectionLog.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`InspectionLogSearch`**

## Table of contents

### Properties

- [assetSearch](InspectionLogSearch.md#assetsearch)
- [createdBySearch](InspectionLogSearch.md#createdbysearch)
- [fromDate](InspectionLogSearch.md#fromdate)
- [id](InspectionLogSearch.md#id)
- [logStatuses](InspectionLogSearch.md#logstatuses)
- [maxVersion](InspectionLogSearch.md#maxversion)
- [minVersion](InspectionLogSearch.md#minversion)
- [toDate](InspectionLogSearch.md#todate)
- [version](InspectionLogSearch.md#version)

## Properties

### assetSearch

• **assetSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for InspectionLogs for this [DeviceSearch](DeviceSearch.md) Id.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLogSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLogSearch.ts#L12)

___

### createdBySearch

• **createdBySearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for InspectionLogs created by this [UserSearch](UserSearch.md) Id.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLogSearch.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLogSearch.ts#L14)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for InspectionLogs that were created at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLogSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLogSearch.ts#L16)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### logStatuses

• **logStatuses**: `string`[]

Gets or sets search for InspectionLogs matching any of the specified [InspectionLogStatus](../README.md#inspectionlogstatus) values.
 Valid "LogStatus" values are:
 <list><item><description>Unknown</description></item><item><description>Draft</description></item><item><description>Complete</description></item><item><description>Submitted</description></item><item><description>InReview</description></item><item><description>Reviewed</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLogSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLogSearch.ts#L22)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum version.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLogSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLogSearch.ts#L24)

___

### minVersion

• **minVersion**: `number`

Gets or sets the minimum version.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLogSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLogSearch.ts#L26)

___

### toDate

• **toDate**: `Date`

Gets or sets search for InspectionLogs that were created at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLogSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLogSearch.ts#L28)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
