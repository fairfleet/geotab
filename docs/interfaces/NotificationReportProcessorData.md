[@fairfleet/geotab](../README.md) / NotificationReportProcessorData

# Interface: NotificationReportProcessorData

The information data associated with a notification.

## Hierarchy

- [`NotificationData`](NotificationData.md)

  ↳ **`NotificationReportProcessorData`**

## Table of contents

### Properties

- [id](NotificationReportProcessorData.md#id)
- [info](NotificationReportProcessorData.md#info)
- [source](NotificationReportProcessorData.md#source)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NotificationData](NotificationData.md).[id](NotificationData.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### info

• **info**: `unknown`

Gets or sets the exception event that holds the data for this notification.

#### Defined in

src/types/Checkmate/ObjectModel/NotificationReportProcessorData.ts:10

___

### source

• **source**: `string`

Gets or sets what is the source of the news.

#### Defined in

src/types/Checkmate/ObjectModel/NotificationReportProcessorData.ts:12
