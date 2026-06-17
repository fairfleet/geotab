[@fairfleet/geotab](../README.md) / EventType

# Interface: EventType

The type of an event.

## Table of contents

### Properties

- [activeFrom](EventType.md#activefrom)
- [activeTo](EventType.md#activeto)
- [createdBy](EventType.md#createdby)
- [customSource](EventType.md#customsource)
- [defect](EventType.md#defect)
- [deletedDateTime](EventType.md#deleteddatetime)
- [id](EventType.md#id)
- [source](EventType.md#source)
- [sourceDescription](EventType.md#sourcedescription)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets the date the event type becomes active (inclusive). Default: time of construction.

#### Defined in

[src/types/Checkmate/ObjectModel/EventType.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventType.ts#L11)

___

### activeTo

• **activeTo**: `Date`

Gets or sets the date the event type is active to. If equal to DateTime.MaxValue it is considered active.
 Setting to a value &lt; MaxValue archives the entity.

#### Defined in

[src/types/Checkmate/ObjectModel/EventType.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventType.ts#L16)

___

### createdBy

• **createdBy**: [`User`](User.md)

Gets or sets the user that created the maintenance type.

#### Defined in

[src/types/Checkmate/ObjectModel/EventType.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventType.ts#L18)

___

### customSource

• **customSource**: `string`

Gets or sets the custom source.

#### Defined in

[src/types/Checkmate/ObjectModel/EventType.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventType.ts#L20)

___

### defect

• **defect**: [`Defect`](Defect.md)

Gets or sets the group that's a defect related to the type.

#### Defined in

[src/types/Checkmate/ObjectModel/EventType.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventType.ts#L22)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/EventType.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventType.ts#L26)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Defined in

[src/types/Checkmate/ObjectModel/EventType.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventType.ts#L28)

___

### source

• **source**: `string`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/EventType.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventType.ts#L32)

___

### sourceDescription

• **sourceDescription**: `string`

Gets or sets the source description.

#### Defined in

[src/types/Checkmate/ObjectModel/EventType.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventType.ts#L34)
