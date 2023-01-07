[@fairfleet/geotab](../README.md) / LiveCompletionMapConfig

# Interface: LiveCompletionMapConfig

Route completion Live Map configuration which is a wrapper around all config time windows of a [Group](Group.md).

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`LiveCompletionMapConfig`**

## Table of contents

### Properties

- [id](LiveCompletionMapConfig.md#id)
- [resetDateTime](LiveCompletionMapConfig.md#resetdatetime)
- [ruleId](LiveCompletionMapConfig.md#ruleid)
- [timeWindows](LiveCompletionMapConfig.md#timewindows)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### resetDateTime

• **resetDateTime**: `Date`

Gets or sets the reset date and time of the configuration

#### Defined in

src/types/Checkmate/ObjectModel/LiveCompletionMapConfig.ts:10

___

### ruleId

• **ruleId**: `string`

Gets or sets the Route Completion Rule Id

#### Defined in

src/types/Checkmate/ObjectModel/LiveCompletionMapConfig.ts:12

___

### timeWindows

• **timeWindows**: `unknown`[]

Gets or sets a list of LiveCompletionTimeWindow

#### Defined in

src/types/Checkmate/ObjectModel/LiveCompletionMapConfig.ts:14
