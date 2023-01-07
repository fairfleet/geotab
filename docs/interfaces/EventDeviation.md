[@fairfleet/geotab](../README.md) / EventDeviation

# Interface: EventDeviation

A particular occurrence of an [EventDeviation](EventDeviation.md).

**`Deprecated`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EventDeviation`**

## Table of contents

### Properties

- [active](EventDeviation.md#active)
- [dateTime](EventDeviation.md#datetime)
- [device](EventDeviation.md#device)
- [dueOn](EventDeviation.md#dueon)
- [eventRule](EventDeviation.md#eventrule)
- [id](EventDeviation.md#id)
- [snoozeDuration](EventDeviation.md#snoozeduration)

## Properties

### active

• **active**: `boolean`

Gets or sets a value indicating whether this [EventDeviation](EventDeviation.md) is active.

#### Defined in

src/types/Checkmate/ObjectModel/EventDeviation.ts:16

___

### dateTime

• **dateTime**: `Date`

Gets or sets the EventDeviation.DateTime of the event exception.

#### Defined in

src/types/Checkmate/ObjectModel/EventDeviation.ts:18

___

### device

• **device**: [`Device`](Device.md)

Gets or sets gets the [Device](Device.md).

#### Defined in

src/types/Checkmate/ObjectModel/EventDeviation.ts:20

___

### dueOn

• **dueOn**: `Date`

Gets or sets the event date.

#### Defined in

src/types/Checkmate/ObjectModel/EventDeviation.ts:22

___

### eventRule

• **eventRule**: [`EventRule`](EventRule.md)

Gets or sets the event rule.

#### Defined in

src/types/Checkmate/ObjectModel/EventDeviation.ts:24

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### snoozeDuration

• **snoozeDuration**: `number`

Gets or sets the snooze duration.

#### Defined in

src/types/Checkmate/ObjectModel/EventDeviation.ts:26
