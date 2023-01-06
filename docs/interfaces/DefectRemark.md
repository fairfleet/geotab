[@fairfleet/geotab](../README.md) / DefectRemark

# Interface: DefectRemark

An DefectRemark is a remark that can be associated with a [DVIRDefect](DVIRDefect.md).

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DefectRemark`**

## Table of contents

### Properties

- [dateTime](DefectRemark.md#datetime)
- [dvirDefect](DefectRemark.md#dvirdefect)
- [id](DefectRemark.md#id)
- [mediaFiles](DefectRemark.md#mediafiles)
- [remark](DefectRemark.md#remark)
- [user](DefectRemark.md#user)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time the log was created.

#### Defined in

[src/types/Checkmate/ObjectModel/DefectRemark.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DefectRemark.ts#L15)

___

### dvirDefect

• **dvirDefect**: [`DVIRDefect`](DVIRDefect.md)

Gets or sets the DefectRemark.DVIRDefect which this DefectRemark belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/DefectRemark.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DefectRemark.ts#L17)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### mediaFiles

• **mediaFiles**: [`MediaFile`](MediaFile.md)[]

Gets or sets the list of [MediaFile](MediaFile.md) for a defect remark.

#### Defined in

[src/types/Checkmate/ObjectModel/DefectRemark.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DefectRemark.ts#L19)

___

### remark

• **remark**: `string`

Gets or sets the DVIR text associated with the log.

#### Defined in

[src/types/Checkmate/ObjectModel/DefectRemark.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DefectRemark.ts#L21)

___

### user

• **user**: [`User`](User.md)

Gets or sets the [User](User.md) who created the log.

#### Defined in

[src/types/Checkmate/ObjectModel/DefectRemark.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DefectRemark.ts#L23)
