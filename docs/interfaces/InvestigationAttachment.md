[@fairfleet/geotab](../README.md) / InvestigationAttachment

# Interface: InvestigationAttachment

Represents an uploaded [MediaFile](MediaFile.md) associated with an [Investigation](Investigation.md).

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`InvestigationAttachment`**

## Table of contents

### Properties

- [id](InvestigationAttachment.md#id)
- [investigationId](InvestigationAttachment.md#investigationid)
- [mediaFile](InvestigationAttachment.md#mediafile)
- [uploadedById](InvestigationAttachment.md#uploadedbyid)
- [uploadedDate](InvestigationAttachment.md#uploadeddate)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### investigationId

• **investigationId**: `string`

Gets or sets the ID of the [Investigation](Investigation.md) that this attachment belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationAttachment.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationAttachment.ts#L11)

___

### mediaFile

• **mediaFile**: [`MediaFile`](MediaFile.md)

Gets or sets the [MediaFile](MediaFile.md) attachment associated with the [Investigation](Investigation.md).

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationAttachment.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationAttachment.ts#L13)

___

### uploadedById

• **uploadedById**: `string`

Gets or sets the ID of the [User](User.md) who uploaded the file to the investigation.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationAttachment.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationAttachment.ts#L15)

___

### uploadedDate

• **uploadedDate**: `Date`

Gets or sets the timestamp when the file was uploaded.

#### Defined in

[src/types/Checkmate/ObjectModel/InvestigationAttachment.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InvestigationAttachment.ts#L17)
