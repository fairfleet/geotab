[@fairfleet/geotab](../README.md) / UserLoginStatus

# Interface: UserLoginStatus

User's Login status.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`UserLoginStatus`**

## Table of contents

### Properties

- [dateTime](UserLoginStatus.md#datetime)
- [firstLoginFailureDatetime](UserLoginStatus.md#firstloginfailuredatetime)
- [id](UserLoginStatus.md#id)
- [lockoutUntil](UserLoginStatus.md#lockoutuntil)
- [loginFailureCount](UserLoginStatus.md#loginfailurecount)
- [user](UserLoginStatus.md#user)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets updated time of this record.

#### Defined in

[src/types/Checkmate/ObjectModel/UserLoginStatus.ts:11](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/UserLoginStatus.ts#L11)

___

### firstLoginFailureDatetime

• **firstLoginFailureDatetime**: `Date`

Gets or sets user's first failure authentication time.

#### Defined in

[src/types/Checkmate/ObjectModel/UserLoginStatus.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/UserLoginStatus.ts#L13)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lockoutUntil

• **lockoutUntil**: `Date`

Gets or sets user's lockout time.

#### Defined in

[src/types/Checkmate/ObjectModel/UserLoginStatus.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/UserLoginStatus.ts#L15)

___

### loginFailureCount

• **loginFailureCount**: `number`

Gets or sets user's failure count.

#### Defined in

[src/types/Checkmate/ObjectModel/UserLoginStatus.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/UserLoginStatus.ts#L17)

___

### user

• **user**: [`User`](User.md)

Gets or sets the user.

#### Defined in

[src/types/Checkmate/ObjectModel/UserLoginStatus.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/UserLoginStatus.ts#L19)
