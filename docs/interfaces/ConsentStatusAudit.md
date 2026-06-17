[@fairfleet/geotab](../README.md) / ConsentStatusAudit

# Interface: ConsentStatusAudit

The audit records for consentstatus records.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`ConsentStatusAudit`**

## Table of contents

### Properties

- [consentBy](ConsentStatusAudit.md#consentby)
- [consentStatus](ConsentStatusAudit.md#consentstatus)
- [id](ConsentStatusAudit.md#id)
- [isGranted](ConsentStatusAudit.md#isgranted)
- [start](ConsentStatusAudit.md#start)
- [timestamp](ConsentStatusAudit.md#timestamp)
- [user](ConsentStatusAudit.md#user)
- [version](ConsentStatusAudit.md#version)

## Properties

### consentBy

• **consentBy**: [`User`](User.md)

Gets or sets the user.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusAudit.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusAudit.ts#L12)

___

### consentStatus

• **consentStatus**: [`ConsentStatus`](ConsentStatus.md)

Gets or sets the consent status ID.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusAudit.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusAudit.ts#L14)

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

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusAudit.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusAudit.ts#L16)

___

### start

• **start**: `Date`

Gets or sets the timestamp of the consent.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusAudit.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusAudit.ts#L18)

___

### timestamp

• **timestamp**: `Date`

Gets or sets the timestamp of the consent last update.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusAudit.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusAudit.ts#L20)

___

### user

• **user**: [`User`](User.md)

Gets or sets the user.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusAudit.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusAudit.ts#L22)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
