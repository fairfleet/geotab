[@fairfleet/geotab](../README.md) / DVIRDefect

# Interface: DVIRDefect

A DVIRDefect is a Defect that can be associated with a [DVIRLog](DVIRLog.md).
 It contains repair information such as repair DateTime, repair [, and {@link RepairStatusType](User.md).
 DVIRDefect also consists a list of [DefectRemark](DefectRemark.md)} which can be used to store additional information for the defect.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DVIRDefect`**

## Table of contents

### Properties

- [defect](DVIRDefect.md#defect)
- [defectRemarks](DVIRDefect.md#defectremarks)
- [id](DVIRDefect.md#id)
- [repairDateTime](DVIRDefect.md#repairdatetime)
- [repairStatus](DVIRDefect.md#repairstatus)
- [repairUser](DVIRDefect.md#repairuser)

## Properties

### defect

• **defect**: [`Defect`](Defect.md)

Gets or sets the DVIRDefect.Defect which this DVIRDefect belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefect.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRDefect.ts#L18)

___

### defectRemarks

• **defectRemarks**: [`DefectRemark`](DefectRemark.md)[]

Gets or sets the [DefectRemark](DefectRemark.md)s which this DVIRDefect has.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefect.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRDefect.ts#L20)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### repairDateTime

• **repairDateTime**: `Date`

Gets or sets the date and time the DVIRDefect was repaired.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefect.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRDefect.ts#L22)

___

### repairStatus

• **repairStatus**: [`RepairStatusType`](../README.md#repairstatustype)

Gets or sets the [RepairStatusType](../README.md#repairstatustype) of this DVIRDefect.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefect.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRDefect.ts#L24)

___

### repairUser

• **repairUser**: [`User`](User.md)

Gets or sets the [User](User.md) who repaired the DVIRDefect.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefect.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRDefect.ts#L26)
