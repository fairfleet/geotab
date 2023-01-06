[@fairfleet/geotab](../README.md) / LoginResult

# Interface: LoginResult

The results of an authentication attempt.

## Table of contents

### Properties

- [credentials](LoginResult.md#credentials)
- [path](LoginResult.md#path)

## Properties

### credentials

• **credentials**: [`Credentials`](Credentials.md)

Gets or sets the [Credentials](Credentials.md) to be used when making calls to MyGeotab.

#### Defined in

[src/types/Checkmate/ObjectModel/LoginResult.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/LoginResult.ts#L10)

___

### path

• **path**: `string`

Gets or sets the path of server hosting the database. "ThisServer" if successfully logged in to this server,
 or "servername". The caller must handle prepending the protocol.

#### Defined in

[src/types/Checkmate/ObjectModel/LoginResult.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/LoginResult.ts#L15)
