[@fairfleet/geotab](../README.md) / UserDisplayProfileSearch

# Interface: UserDisplayProfileSearch

The object used to specify the arguments when searching for a [UserDisplayProfile](UserDisplayProfile.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`UserDisplayProfileSearch`**

## Table of contents

### Properties

- [getDefaultProfile](UserDisplayProfileSearch.md#getdefaultprofile)
- [id](UserDisplayProfileSearch.md#id)
- [user](UserDisplayProfileSearch.md#user)
- [version](UserDisplayProfileSearch.md#version)

## Properties

### getDefaultProfile

• **getDefaultProfile**: `boolean`

Gets or sets whether or not to get a default profile in user search; the default is not to retrieve a default profile when none is present in database.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/UserDisplayProfileSearch.ts:11](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/UserDisplayProfileSearch.ts#L11)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### user

• **user**: [`User`](User.md)

Gets or sets the user.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/UserDisplayProfileSearch.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DisplayDiagnostic/UserDisplayProfileSearch.ts#L13)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
