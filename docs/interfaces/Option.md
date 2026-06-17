[@fairfleet/geotab](../README.md) / Option

# Interface: Option

The option for a consent or authorization of a product in the database.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`Option`**

## Table of contents

### Properties

- [authOption](Option.md#authoption)
- [description](Option.md#description)
- [id](Option.md#id)
- [optionId](Option.md#optionid)
- [product](Option.md#product)
- [program](Option.md#program)
- [version](Option.md#version)

## Properties

### authOption

• **authOption**: [`Option`](Option.md)

Gets or sets the authorization associated with the option.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/Option.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/Option.ts#L11)

___

### description

• **description**: `string`

Gets or sets the description of the option.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/Option.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/Option.ts#L13)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### optionId

• **optionId**: `string`

Gets or sets the option id.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/Option.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/Option.ts#L15)

___

### product

• **product**: [`Product`](Product.md)

Gets or sets the product associated with the option.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/Option.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/Option.ts#L17)

___

### program

• **program**: `string`

Gets or sets the program to which the option belong to.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/Option.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/Option.ts#L19)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
