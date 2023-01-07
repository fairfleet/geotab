[@fairfleet/geotab](../README.md) / Credentials

# Interface: Credentials

The authentication credentials for a [User](User.md) used when making calls to MyGeotab.

## Table of contents

### Properties

- [database](Credentials.md#database)
- [password](Credentials.md#password)
- [refreshToken](Credentials.md#refreshtoken)
- [sessionId](Credentials.md#sessionid)
- [userName](Credentials.md#username)

## Properties

### database

• **database**: `string`

Gets or sets the database name.

#### Defined in

[src/types/Checkmate/ObjectModel/Credentials.ts:8](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Credentials.ts#L8)

___

### password

• **password**: `string`

Gets or sets the users login password. This can be used instead of providing a session Id. It is mutually exclusive with SessionId.

#### Defined in

[src/types/Checkmate/ObjectModel/Credentials.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Credentials.ts#L10)

___

### refreshToken

• **refreshToken**: `string`

Gets or sets the refresh token.

#### Defined in

[src/types/Checkmate/ObjectModel/Credentials.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Credentials.ts#L12)

___

### sessionId

• **sessionId**: `string`

Gets or sets the session Id is a token which is generated from an authentication call and can be used instead of providing the password each time. It is mutually exclusive with Password.

#### Defined in

[src/types/Checkmate/ObjectModel/Credentials.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Credentials.ts#L14)

___

### userName

• **userName**: `string`

Gets or sets the MyGeotab username.

#### Defined in

[src/types/Checkmate/ObjectModel/Credentials.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Credentials.ts#L16)
