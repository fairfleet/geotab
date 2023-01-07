[@fairfleet/geotab](../README.md) / Property

# Interface: Property

The custom property of an entity that is customizable.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`Property`**

## Table of contents

### Properties

- [entityTypes](Property.md#entitytypes)
- [externalReference](Property.md#externalreference)
- [id](Property.md#id)
- [isVisible](Property.md#isvisible)
- [maxLength](Property.md#maxlength)
- [minLength](Property.md#minlength)
- [name](Property.md#name)
- [propertySet](Property.md#propertyset)
- [propertyType](Property.md#propertytype)
- [version](Property.md#version)

## Properties

### entityTypes

• **entityTypes**: [`CustomPropertyEntityType`](../README.md#custompropertyentitytype)[]

Gets or sets the entity types supported by the Property.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Property.ts#L13)

___

### externalReference

• **externalReference**: `string`

Gets or sets the External Reference of the Property.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Property.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isVisible

• **isVisible**: `boolean`

Gets or sets a value indicating whether the Property is visible or not to the UI.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Property.ts#L17)

___

### maxLength

• **maxLength**: `number`

Gets or sets the maximum length of the Property.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Property.ts#L19)

___

### minLength

• **minLength**: `number`

Gets or sets the minimum length of the Property.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Property.ts#L21)

___

### name

• **name**: `string`

Gets or sets the Name of the Property.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:23](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Property.ts#L23)

___

### propertySet

• **propertySet**: [`PropertySet`](PropertySet.md)

Gets or sets the Property.PropertySet that this Property belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:25](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Property.ts#L25)

___

### propertyType

• **propertyType**: [`SupportedPropertyType`](../README.md#supportedpropertytype)

Gets or sets the support type of the Property.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:27](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Property.ts#L27)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
