[@fairfleet/geotab](../README.md) / PropertySet

# Interface: PropertySet

The property set that groups [Property](Property.md) together based on a grouping structure.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`PropertySet`**

## Table of contents

### Properties

- [externalReference](PropertySet.md#externalreference)
- [groups](PropertySet.md#groups)
- [id](PropertySet.md#id)
- [name](PropertySet.md#name)
- [properties](PropertySet.md#properties)
- [version](PropertySet.md#version)

## Properties

### externalReference

• **externalReference**: `string`

Gets or sets the External Reference of the PropertySet.

#### Defined in

[src/types/Checkmate/ObjectModel/PropertySet.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/PropertySet.ts#L12)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets the [Group](Group.md)s of the PropertySet.

#### Defined in

[src/types/Checkmate/ObjectModel/PropertySet.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/PropertySet.ts#L14)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### name

• **name**: `string`

Gets or sets the Name of the PropertySet.

#### Defined in

[src/types/Checkmate/ObjectModel/PropertySet.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/PropertySet.ts#L16)

___

### properties

• **properties**: [`Property`](Property.md)[]

Gets or sets the Properties of the PropertySet.

#### Defined in

[src/types/Checkmate/ObjectModel/PropertySet.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/PropertySet.ts#L18)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
