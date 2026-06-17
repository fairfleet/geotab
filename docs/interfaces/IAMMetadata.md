[@fairfleet/geotab](../README.md) / IAMMetadata

# Interface: IAMMetadata

Metadata for a user on IAM.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`IAMMetadata`**

## Table of contents

### Properties

- [connectionName](IAMMetadata.md#connectionname)
- [id](IAMMetadata.md#id)
- [isIAMVerified](IAMMetadata.md#isiamverified)
- [isWelcomeEmailSent](IAMMetadata.md#iswelcomeemailsent)
- [userId](IAMMetadata.md#userid)

## Properties

### connectionName

• **connectionName**: `string`

Gets or sets the name of the connection the user belongs to on IAM.

#### Defined in

[src/types/Checkmate/ObjectModel/IAMMetadata.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/IAMMetadata.ts#L10)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isIAMVerified

• **isIAMVerified**: `boolean`

Gets or sets a value indicating whether the user is verified on IAM, if [true] the user is verified on IAM, otherwise [false]. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/IAMMetadata.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/IAMMetadata.ts#L12)

___

### isWelcomeEmailSent

• **isWelcomeEmailSent**: `boolean`

Gets or sets a value indicating whether the user has received a welcome email. Default [true].

#### Defined in

[src/types/Checkmate/ObjectModel/IAMMetadata.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/IAMMetadata.ts#L14)

___

### userId

• **userId**: `string`

Gets or sets the user's Id on IAM.

#### Defined in

[src/types/Checkmate/ObjectModel/IAMMetadata.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/IAMMetadata.ts#L16)
