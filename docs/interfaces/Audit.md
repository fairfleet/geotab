[@fairfleet/geotab](../README.md) / Audit

# Interface: Audit

Entry of events, operations and issues for tracking purposes. Entries can be added and read but cannot be edited.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`Audit`**

## Table of contents

### Properties

- [comment](Audit.md#comment)
- [dateTime](Audit.md#datetime)
- [id](Audit.md#id)
- [name](Audit.md#name)
- [user](Audit.md#user)
- [userName](Audit.md#username)
- [version](Audit.md#version)

## Properties

### comment

• **comment**: `string`

Gets or sets free text field where any user information can be stored and referenced for this entity.

#### Defined in

[src/types/Checkmate/ObjectModel/Audit.ts:11](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Audit.ts#L11)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time the audit was logged.

#### Defined in

[src/types/Checkmate/ObjectModel/Audit.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Audit.ts#L13)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### name

• **name**: `string`

Gets or sets the audit type name.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Audit.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Audit.ts#L15)

___

### user

• **user**: [`User`](User.md)

Gets or sets the [User](User.md) the audit is in reference to.

#### Defined in

[src/types/Checkmate/ObjectModel/Audit.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Audit.ts#L17)

___

### userName

• **userName**: `string`

Gets or sets the name of the user associated with the audit entry.

#### Defined in

[src/types/Checkmate/ObjectModel/Audit.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Audit.ts#L19)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
