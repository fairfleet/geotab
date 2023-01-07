[@fairfleet/geotab](../README.md) / DVIRLogSearch

# Interface: DVIRLogSearch

The object used to specify the arguments when searching for [DVIRLog](DVIRLog.md)(s). A trailerSearch and deviceSearch cannot be used at the same time because a DVIR log entry is only ever associated with one asset type (for instance, if the "device" is set, "trailer" is always null and vice versa).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DVIRLogSearch`**

## Table of contents

### Properties

- [certifiedBySearch](DVIRLogSearch.md#certifiedbysearch)
- [defectSearch](DVIRLogSearch.md#defectsearch)
- [deviceSearch](DVIRLogSearch.md#devicesearch)
- [fromDate](DVIRLogSearch.md#fromdate)
- [id](DVIRLogSearch.md#id)
- [includeBoundaryLogs](DVIRLogSearch.md#includeboundarylogs)
- [includeRejected](DVIRLogSearch.md#includerejected)
- [isCertified](DVIRLogSearch.md#iscertified)
- [isDefective](DVIRLogSearch.md#isdefective)
- [isRepaired](DVIRLogSearch.md#isrepaired)
- [isSafeToOperate](DVIRLogSearch.md#issafetooperate)
- [logTypes](DVIRLogSearch.md#logtypes)
- [maxVersion](DVIRLogSearch.md#maxversion)
- [minVersion](DVIRLogSearch.md#minversion)
- [populateLogType](DVIRLogSearch.md#populatelogtype)
- [repairedBySearch](DVIRLogSearch.md#repairedbysearch)
- [searchByRemark](DVIRLogSearch.md#searchbyremark)
- [toDate](DVIRLogSearch.md#todate)
- [trailerSearch](DVIRLogSearch.md#trailersearch)
- [userSearch](DVIRLogSearch.md#usersearch)
- [version](DVIRLogSearch.md#version)

## Properties

### certifiedBySearch

• **certifiedBySearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for DVIRLogs certified by a [User](User.md).
 Available [UserSearch](UserSearch.md) options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L21)

___

### defectSearch

• **defectSearch**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for DVIRLogs that are a member of these defect [Group](Group.md)(s).
 Available
 [GroupSearch](GroupSearch.md) options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L28)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any DVIRLogs that are assigned to that Device.
 Providing the Groups will search for DVIRLogs for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:36](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L36)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for DVIRLogs that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:38](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L38)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeBoundaryLogs

• **includeBoundaryLogs**: `boolean`

Gets or sets search for DVIRLogs and include boundary logs outside the from and to dates
 (for example, the log immediately preceding the from date).

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:43](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L43)

___

### includeRejected

• **includeRejected**: `boolean`

Gets or sets search for DVIRLogs and include logs that have been marked as rejected by the driver.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:45](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L45)

___

### isCertified

• **isCertified**: `boolean`

Gets or sets search for DVIRLogs that have been certified (DVIRLog.CertifyDate is not null).

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:47](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L47)

___

### isDefective

• **isDefective**: `boolean`

Gets or sets search for DVIRLogs that have. DVIRLog.Defects

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:49](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L49)

___

### isRepaired

• **isRepaired**: `boolean`

Gets or sets search for DVIRLogs that have been repaired (DVIRLog.RepairDate is not null).

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:51](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L51)

___

### isSafeToOperate

• **isSafeToOperate**: `boolean`

Gets or sets search for DVIRLogs which are safe or are not safe to operate.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:53](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L53)

___

### logTypes

• **logTypes**: [`DVIRLogType`](../README.md#dvirlogtype)[]

Gets or sets search for [DVIRLog](DVIRLog.md)s that match the specified [DVIRLogType](../README.md#dvirlogtype)s.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:55](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L55)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets
 Search for [DVIRLog](DVIRLog.md)s with a maximum of this version.

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:62](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L62)

___

### minVersion

• **minVersion**: `number`

Gets or sets
 Search for [DVIRLog](DVIRLog.md)s with a minimum of this version.

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:69](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L69)

___

### populateLogType

• **populateLogType**: `boolean`

Gets or sets search to populate. [DVIRLogType](../README.md#dvirlogtype)

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:75](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L75)

___

### repairedBySearch

• **repairedBySearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for DVIRLogs repaired by a [User](User.md).
 Available [UserSearch](UserSearch.md) options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:81](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L81)

___

### searchByRemark

• **searchByRemark**: `string`

Gets or sets search for DVIRLogs have a match to this. [DefectRemark](DefectRemark.md)

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:83](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L83)

___

### toDate

• **toDate**: `Date`

Gets or sets search for DVIRLogs that were recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:85](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L85)

___

### trailerSearch

• **trailerSearch**: [`TrailerSearch`](TrailerSearch.md)

Gets or sets filter by the [TrailerSearch](TrailerSearch.md) options. Providing a trailer ID will
 search for any DVIRLogs that are assigned to that Trailer.
 Providing the Groups will search for DVIRLogs for that have Trailer in that group.
 Available TrailerSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:93](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L93)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for DVIRLogs with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRLogSearch.ts:99](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRLogSearch.ts#L99)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
