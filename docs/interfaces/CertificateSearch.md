[@fairfleet/geotab](../README.md) / CertificateSearch

# Interface: CertificateSearch

An object used to search for [Certificate](Certificate.md)s.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`CertificateSearch`**

## Table of contents

### Properties

- [id](CertificateSearch.md#id)
- [isRoot](CertificateSearch.md#isroot)
- [issuer](CertificateSearch.md#issuer)
- [version](CertificateSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isRoot

• **isRoot**: `boolean`

Gets or sets the boolean indicating if [Certificate](Certificate.md) is root, used for searching the root certificate.

#### Defined in

[src/types/Checkmate/ObjectModel/CertificateSearch.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/CertificateSearch.ts#L10)

___

### issuer

• **issuer**: `string`

Gets or sets the issuer of the [Certificate](Certificate.md).

#### Defined in

[src/types/Checkmate/ObjectModel/CertificateSearch.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/CertificateSearch.ts#L12)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
