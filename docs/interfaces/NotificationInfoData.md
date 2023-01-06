[@fairfleet/geotab](../README.md) / NotificationInfoData

# Interface: NotificationInfoData

The information data associated with a notification.

## Hierarchy

- [`NotificationData`](../README.md#notificationdata)

  ↳ **`NotificationInfoData`**

## Table of contents

### Properties

- [id](NotificationInfoData.md#id)
- [info](NotificationInfoData.md#info)
- [instance](NotificationInfoData.md#instance)
- [machineName](NotificationInfoData.md#machinename)
- [source](NotificationInfoData.md#source)
- [state](NotificationInfoData.md#state)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

NotificationData.id

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### info

• **info**: `string`

Gets or sets the information for the specific machine.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationInfoData.ts:11](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NotificationInfoData.ts#L11)

___

### instance

• **instance**: `string`

Gets or sets the instance of this particular notification eg. the particular downloader serial number.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationInfoData.ts:13](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NotificationInfoData.ts#L13)

___

### machineName

• **machineName**: `string`

Gets or sets the machine name pertaining to the relevant information.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationInfoData.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NotificationInfoData.ts#L15)

___

### source

• **source**: `string`

Gets or sets what is the source of the application exception.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationInfoData.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NotificationInfoData.ts#L17)

___

### state

• **state**: [`NotificationStatus`](../README.md#notificationstatus)

Gets or sets what is the current state for the application exception.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationInfoData.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NotificationInfoData.ts#L19)
