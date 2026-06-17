[@fairfleet/geotab](../README.md) / MediaTriggerSettings

# Interface: MediaTriggerSettings

The settings for media trigger rules.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`MediaTriggerSettings`**

## Table of contents

### Properties

- [id](MediaTriggerSettings.md#id)
- [mediaQuality](MediaTriggerSettings.md#mediaquality)
- [mediaType](MediaTriggerSettings.md#mediatype)
- [name](MediaTriggerSettings.md#name)
- [postExceptionEndVideoDurationSeconds](MediaTriggerSettings.md#postexceptionendvideodurationseconds)
- [preExceptionStartVideoDurationSeconds](MediaTriggerSettings.md#preexceptionstartvideodurationseconds)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### mediaQuality

• **mediaQuality**: [`MediaQuality`](../README.md#mediaquality)

Gets or sets the MediaTriggerSettings.MediaQuality of the media to be captured.

#### Defined in

[src/types/Checkmate/ObjectModel/MediaTriggerSettings.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MediaTriggerSettings.ts#L12)

___

### mediaType

• **mediaType**: [`MediaContentType`](../README.md#mediacontenttype)

Gets or sets the MediaTriggerSettings.MediaType.

#### Defined in

[src/types/Checkmate/ObjectModel/MediaTriggerSettings.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MediaTriggerSettings.ts#L14)

___

### name

• **name**: `string`

Gets or sets the name of this entity which identifies it and is used when displaying this entity.

#### Inherited from

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### postExceptionEndVideoDurationSeconds

• **postExceptionEndVideoDurationSeconds**: `number`

Gets or sets the time in seconds after the exception that media should be captured for.

#### Defined in

[src/types/Checkmate/ObjectModel/MediaTriggerSettings.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MediaTriggerSettings.ts#L16)

___

### preExceptionStartVideoDurationSeconds

• **preExceptionStartVideoDurationSeconds**: `number`

Gets or sets the time in seconds before the exception that media should be captured for.

#### Defined in

[src/types/Checkmate/ObjectModel/MediaTriggerSettings.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/MediaTriggerSettings.ts#L18)
