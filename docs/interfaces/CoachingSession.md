[@fairfleet/geotab](../README.md) / CoachingSession

# Interface: CoachingSession

Represents a coaching session.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`CoachingSession`**

## Table of contents

### Properties

- [coach](CoachingSession.md#coach)
- [createdDateTime](CoachingSession.md#createddatetime)
- [driver](CoachingSession.md#driver)
- [exceptionEvents](CoachingSession.md#exceptionevents)
- [id](CoachingSession.md#id)
- [modifiedDateTime](CoachingSession.md#modifieddatetime)
- [state](CoachingSession.md#state)
- [version](CoachingSession.md#version)

## Properties

### coach

• **coach**: [`User`](User.md)

Gets or sets the coach associated with the session.

#### Defined in

[src/types/Checkmate/ObjectModel/CoachingSession.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CoachingSession.ts#L13)

___

### createdDateTime

• **createdDateTime**: `Date`

Gets or sets the time the coaching session was created.

#### Defined in

[src/types/Checkmate/ObjectModel/CoachingSession.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CoachingSession.ts#L15)

___

### driver

• **driver**: [`User`](User.md)

Gets or sets the driver associated with the session.

#### Defined in

[src/types/Checkmate/ObjectModel/CoachingSession.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CoachingSession.ts#L17)

___

### exceptionEvents

• **exceptionEvents**: [`ExceptionEvent`](ExceptionEvent.md)[]

Gets or sets the list of exception events associated with this session.

#### Defined in

[src/types/Checkmate/ObjectModel/CoachingSession.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CoachingSession.ts#L19)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### modifiedDateTime

• **modifiedDateTime**: `Date`

Gets or sets the time the coaching session was modified.

#### Defined in

[src/types/Checkmate/ObjectModel/CoachingSession.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CoachingSession.ts#L21)

___

### state

• **state**: [`CoachingSessionState`](CoachingSessionState.md)

Gets or sets the state of the coaching session.

#### Defined in

[src/types/Checkmate/ObjectModel/CoachingSession.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/CoachingSession.ts#L23)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
