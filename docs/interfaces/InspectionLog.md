[@fairfleet/geotab](../README.md) / InspectionLog

# Interface: InspectionLog

An InspectionLog is an asset inspection report which is prepared by a user
 regarding the condition of an asset. The log contains inspected items
 with their status, severity, and optional repair information.

**`Deprecated`**

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`InspectionLog`**

## Table of contents

### Properties

- [asset](InspectionLog.md#asset)
- [comments](InspectionLog.md#comments)
- [createdBy](InspectionLog.md#createdby)
- [createdDateTime](InspectionLog.md#createddatetime)
- [duration](InspectionLog.md#duration)
- [id](InspectionLog.md#id)
- [inspectedItems](InspectionLog.md#inspecteditems)
- [inspectionTemplate](InspectionLog.md#inspectiontemplate)
- [lastEditedBy](InspectionLog.md#lasteditedby)
- [lastEditedDateTime](InspectionLog.md#lastediteddatetime)
- [location](InspectionLog.md#location)
- [logStatus](InspectionLog.md#logstatus)
- [logType](InspectionLog.md#logtype)
- [reviewedBy](InspectionLog.md#reviewedby)
- [reviewedDateTime](InspectionLog.md#revieweddatetime)
- [submittedBy](InspectionLog.md#submittedby)
- [submittedDateTime](InspectionLog.md#submitteddatetime)
- [version](InspectionLog.md#version)

## Properties

### asset

• **asset**: [`Device`](Device.md)

Gets or sets the asset (Device) being inspected.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L23)

___

### comments

• **comments**: `string`

Gets or sets comments added by the user that inspected the asset.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L25)

___

### createdBy

• **createdBy**: [`User`](User.md)

Gets or sets the user that created the inspection.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L27)

___

### createdDateTime

• **createdDateTime**: `Date`

Gets or sets the created date and time of the inspection.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L29)

___

### duration

• **duration**: `string`

Gets or sets the duration it takes to complete this inspection.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L31)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### inspectedItems

• **inspectedItems**: [`InspectedItem`](InspectedItem.md)[]

Gets or sets the list of [InspectedItem](InspectedItem.md)(s) for this log.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L33)

___

### inspectionTemplate

• **inspectionTemplate**: [`Group`](Group.md)

Gets or sets the inspection template or defect list used when inspecting this asset.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L35)

___

### lastEditedBy

• **lastEditedBy**: [`User`](User.md)

Gets or sets the user that last edited the inspection.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L37)

___

### lastEditedDateTime

• **lastEditedDateTime**: `Date`

Gets or sets the last edited date and time of the inspection.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L39)

___

### location

• **location**: [`AddressLookupData`](AddressLookupData.md)

Gets or sets an object with the location information of the inspection.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L41)

___

### logStatus

• **logStatus**: [`InspectionLogStatus`](../README.md#inspectionlogstatus)

Gets or sets the status of inspection.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L43)

___

### logType

• **logType**: [`InspectionLogType`](../README.md#inspectionlogtype)

Gets or sets the type of inspection.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L45)

___

### reviewedBy

• **reviewedBy**: [`User`](User.md)

Gets or sets the user that reviewed the inspection.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L47)

___

### reviewedDateTime

• **reviewedDateTime**: `Date`

Gets or sets the reviewed date and time of the inspection.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L49)

___

### submittedBy

• **submittedBy**: [`User`](User.md)

Gets or sets the user that submitted the inspection.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L51)

___

### submittedDateTime

• **submittedDateTime**: `Date`

Gets or sets the submitted date and time of the inspection.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectionLog.ts:53](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectionLog.ts#L53)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
