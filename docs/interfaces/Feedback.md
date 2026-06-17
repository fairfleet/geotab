[@fairfleet/geotab](../README.md) / Feedback

# Interface: Feedback

Feedback that is collected for the purpose of data labeling.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Feedback`**

## Table of contents

### Properties

- [author](Feedback.md#author)
- [device](Feedback.md#device)
- [feedbackStatus](Feedback.md#feedbackstatus)
- [feedbackTargetId](Feedback.md#feedbacktargetid)
- [feedbackType](Feedback.md#feedbacktype)
- [id](Feedback.md#id)
- [submittedOn](Feedback.md#submittedon)

## Properties

### author

• **author**: [`User`](User.md)

Gets or sets the [User](User.md) who left the feedback.

#### Defined in

[src/types/Checkmate/ObjectModel/Feedback.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Feedback.ts#L14)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) the feedback was left for.

#### Defined in

[src/types/Checkmate/ObjectModel/Feedback.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Feedback.ts#L16)

___

### feedbackStatus

• **feedbackStatus**: [`FeedbackStatus`](../README.md#feedbackstatus)

Gets or sets the status of the feedback.

#### Defined in

[src/types/Checkmate/ObjectModel/Feedback.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Feedback.ts#L18)

___

### feedbackTargetId

• **feedbackTargetId**: `string`

Gets or sets the Id of the feedback target.

#### Defined in

[src/types/Checkmate/ObjectModel/Feedback.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Feedback.ts#L20)

___

### feedbackType

• **feedbackType**: [`FeedbackType`](../README.md#feedbacktype)

Gets or sets the type of feedback.

#### Defined in

[src/types/Checkmate/ObjectModel/Feedback.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Feedback.ts#L22)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### submittedOn

• **submittedOn**: `Date`

Gets or sets the date the feedback was submitted on.

#### Defined in

[src/types/Checkmate/ObjectModel/Feedback.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Feedback.ts#L24)
