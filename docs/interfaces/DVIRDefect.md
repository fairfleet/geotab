[@fairfleet/geotab](../README.md) / DVIRDefect

# Interface: DVIRDefect

A DVIRDefect is a Defect that can be associated with a [DVIRLog](DVIRLog.md).
 It contains repair information such as repair DateTime, repair [User](User.md), and [RepairStatusType](../README.md#repairstatustype).
 DVIRDefect also consists a list of [DefectRemark](DefectRemark.md) which can be used to store additional information for the defect.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DVIRDefect`**

## Table of contents

### Properties

- [defect](DVIRDefect.md#defect)
- [defectRemarks](DVIRDefect.md#defectremarks)
- [id](DVIRDefect.md#id)
- [part](DVIRDefect.md#part)
- [repairDateTime](DVIRDefect.md#repairdatetime)
- [repairStatus](DVIRDefect.md#repairstatus)
- [repairUser](DVIRDefect.md#repairuser)

## Properties

### defect

• **defect**: [`Defect`](Defect.md)

Gets or sets the DVIRDefect.Defect which this DVIRDefect belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefect.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRDefect.ts#L19)

___

### defectRemarks

• **defectRemarks**: [`DefectRemark`](DefectRemark.md)[]

Gets or sets the [DefectRemark](DefectRemark.md)s which this DVIRDefect has.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefect.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRDefect.ts#L21)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### part

• **part**: [`Group`](Group.md)

Gets or sets the [Group](Group.md) part associated with this DVIRDefect, e.g., front left tire, rear right door, headlight.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefect.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRDefect.ts#L23)

___

### repairDateTime

• **repairDateTime**: `Date`

Gets or sets the date and time the DVIRDefect was repaired.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefect.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRDefect.ts#L25)

___

### repairStatus

• **repairStatus**: [`RepairStatusType`](../README.md#repairstatustype)

Gets or sets the [RepairStatusType](../README.md#repairstatustype) of this DVIRDefect.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefect.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRDefect.ts#L27)

___

### repairUser

• **repairUser**: [`User`](User.md)

Gets or sets the [User](User.md) who repaired the DVIRDefect.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefect.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DVIRDefect.ts#L29)
