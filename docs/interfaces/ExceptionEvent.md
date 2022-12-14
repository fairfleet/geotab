[@fairfleet/geotab](../README.md) / ExceptionEvent

# Interface: ExceptionEvent

The event of an exception generated by Rule violation.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`ExceptionEvent`**

## Table of contents

### Properties

- [activeFrom](ExceptionEvent.md#activefrom)
- [activeTo](ExceptionEvent.md#activeto)
- [device](ExceptionEvent.md#device)
- [diagnostic](ExceptionEvent.md#diagnostic)
- [distance](ExceptionEvent.md#distance)
- [driver](ExceptionEvent.md#driver)
- [duration](ExceptionEvent.md#duration)
- [exceptions](ExceptionEvent.md#exceptions)
- [from](ExceptionEvent.md#from)
- [id](ExceptionEvent.md#id)
- [lastModifiedDateTime](ExceptionEvent.md#lastmodifieddatetime)
- [rule](ExceptionEvent.md#rule)
- [state](ExceptionEvent.md#state)
- [to](ExceptionEvent.md#to)
- [version](ExceptionEvent.md#version)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets the start date of the ExceptionEvent; at or after this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts#L15)

___

### activeTo

• **activeTo**: `Date`

Gets or sets the end date of the ExceptionEvent; at or before this date.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts#L17)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) specified for the device.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts#L19)

___

### diagnostic

• **diagnostic**: [`Diagnostic`](Diagnostic.md)

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts:23](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts#L23)

___

### distance

• **distance**: `number`

Gets or sets the km distance traveled since the start of the ExceptionEvent.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts:25](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts#L25)

___

### driver

• **driver**: [`Driver`](Driver.md)

Gets or sets the [Driver](Driver.md) specified for the device.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts:27](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts#L27)

___

### duration

• **duration**: `string`

Gets the duration of the violation.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts:29](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts#L29)

___

### exceptions

• **exceptions**: `unknown`[]

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts:33](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts#L33)

___

### from

• **from**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts:37](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts#L37)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lastModifiedDateTime

• **lastModifiedDateTime**: `Date`

Gets or sets the time this exception event was last updated. Default [MinDate].

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts:39](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts#L39)

___

### rule

• **rule**: [`Rule`](Rule.md)

Gets or sets the [Rule](Rule.md) which was violated.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts:41](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts#L41)

___

### state

• **state**: [`ExceptionEventState`](ExceptionEventState.md)

Gets or sets the [ExceptionEventState](ExceptionEventState.md) of the exception.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts:43](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts#L43)

___

### to

• **to**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts:47](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEvent.ts#L47)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
