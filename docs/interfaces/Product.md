[@fairfleet/geotab](../README.md) / Product

# Interface: Product

The product installed in the database.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`Product`**

## Table of contents

### Properties

- [dateTime](Product.md#datetime)
- [id](Product.md#id)
- [name](Product.md#name)
- [productVersion](Product.md#productversion)
- [solutionId](Product.md#solutionid)
- [version](Product.md#version)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the date time of the product installation.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/Product.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/Product.ts#L10)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### name

• **name**: `string`

Gets or sets the name of this entity which identifies it and is used when displaying this entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### productVersion

• **productVersion**: `string`

Gets or sets the version of the product.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/Product.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/Product.ts#L12)

___

### solutionId

• **solutionId**: `string`

Gets or sets the name of the product.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/Product.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/Product.ts#L14)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
