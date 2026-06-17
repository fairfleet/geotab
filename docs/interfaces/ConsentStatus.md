[@fairfleet/geotab](../README.md) / ConsentStatus

# Interface: ConsentStatus

The most updated value regarding authorizations and consents.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`ConsentStatus`**

## Table of contents

### Properties

- [consentBy](ConsentStatus.md#consentby)
- [id](ConsentStatus.md#id)
- [isGranted](ConsentStatus.md#isgranted)
- [option](ConsentStatus.md#option)
- [timestamp](ConsentStatus.md#timestamp)
- [user](ConsentStatus.md#user)
- [version](ConsentStatus.md#version)

## Properties

### consentBy

• **consentBy**: [`User`](User.md)

Gets or sets the user.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatus.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatus.ts#L12)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isGranted

• **isGranted**: `boolean`

Gets or sets the Is Granted.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatus.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatus.ts#L14)

___

### option

• **option**: [`Option`](Option.md)

Gets or sets the option ID.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatus.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatus.ts#L16)

___

### timestamp

• **timestamp**: `Date`

Gets or sets the timestamp of the consent.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatus.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatus.ts#L18)

___

### user

• **user**: [`User`](User.md)

Gets or sets the user.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatus.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatus.ts#L20)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
