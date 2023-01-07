[@fairfleet/geotab](../README.md) / Certificate

# Interface: Certificate

An object representing a X509Certificate2 used to check if a message came from the correct external source.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Certificate`**

## Table of contents

### Properties

- [id](Certificate.md#id)
- [isRoot](Certificate.md#isroot)
- [issuer](Certificate.md#issuer)
- [key](Certificate.md#key)
- [logInUrl](Certificate.md#loginurl)
- [logOffUrl](Certificate.md#logoffurl)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isRoot

• **isRoot**: `boolean`

Gets or sets a value indicating whether certificate is a root certificate that is used for validating all client certificate.

#### Defined in

[src/types/Checkmate/ObjectModel/Certificate.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Certificate.ts#L10)

___

### issuer

• **issuer**: `string`

Gets or sets the issuer of the [Certificate](Certificate.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Certificate.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Certificate.ts#L12)

___

### key

• **key**: `unknown`

Gets or sets the public key of the [Certificate](Certificate.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Certificate.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Certificate.ts#L14)

___

### logInUrl

• **logInUrl**: `unknown`

Gets or sets the Uri to go to when a [User](User.md) with this [Certificate](Certificate.md) logs in.

#### Defined in

[src/types/Checkmate/ObjectModel/Certificate.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Certificate.ts#L16)

___

### logOffUrl

• **logOffUrl**: `unknown`

Gets or sets the Uri to go to when a [User](User.md) with this [Certificate](Certificate.md) logs off.

#### Defined in

[src/types/Checkmate/ObjectModel/Certificate.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Certificate.ts#L18)
