[@fairfleet/geotab](../README.md) / VirtualExceptionEvent

# Interface: VirtualExceptionEvent

The event of a virtual exception generated by a virtual Rule violation.

**`Deprecated`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`VirtualExceptionEvent`**

## Table of contents

### Properties

- [activeFrom](VirtualExceptionEvent.md#activefrom)
- [activeTo](VirtualExceptionEvent.md#activeto)
- [device](VirtualExceptionEvent.md#device)
- [diagnostic](VirtualExceptionEvent.md#diagnostic)
- [distance](VirtualExceptionEvent.md#distance)
- [driver](VirtualExceptionEvent.md#driver)
- [duration](VirtualExceptionEvent.md#duration)
- [exceptions](VirtualExceptionEvent.md#exceptions)
- [from](VirtualExceptionEvent.md#from)
- [id](VirtualExceptionEvent.md#id)
- [lastModifiedDateTime](VirtualExceptionEvent.md#lastmodifieddatetime)
- [rule](VirtualExceptionEvent.md#rule)
- [state](VirtualExceptionEvent.md#state)
- [to](VirtualExceptionEvent.md#to)

## Properties

### activeFrom

• **activeFrom**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts#L21)

___

### activeTo

• **activeTo**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts:25](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts#L25)

___

### device

• **device**: [`Device`](Device.md)

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts:29](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts#L29)

___

### diagnostic

• **diagnostic**: [`Diagnostic`](Diagnostic.md)

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts:33](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts#L33)

___

### distance

• **distance**: `number`

Gets or sets the km distance traveled since the start of the VirtualExceptionEvent.
 This value may not reflect the actual distance traveled.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts:38](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts#L38)

___

### driver

• **driver**: [`Driver`](Driver.md)

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts:42](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts#L42)

___

### duration

• **duration**: `string`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts:46](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts#L46)

___

### exceptions

• **exceptions**: `unknown`[]

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts:50](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts#L50)

___

### from

• **from**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts:54](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts#L54)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lastModifiedDateTime

• **lastModifiedDateTime**: `Date`

Gets or sets the time this exception event was last updated. Default [DateTime.MinValue].

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts:56](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts#L56)

___

### rule

• **rule**: [`Rule`](Rule.md)

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts:60](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts#L60)

___

### state

• **state**: [`ExceptionEventState`](ExceptionEventState.md)

Gets or sets the [ExceptionEventState](ExceptionEventState.md) of the exception.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts:62](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts#L62)

___

### to

• **to**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts:66](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent.ts#L66)
