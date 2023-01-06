[@fairfleet/geotab](../README.md) / Property

# Interface: Property

The custom property of an entity that is customizable.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`Property`**

## Table of contents

### Properties

- [externalReference](Property.md#externalreference)
- [id](Property.md#id)
- [isRequired](Property.md#isrequired)
- [isVisible](Property.md#isvisible)
- [maxLength](Property.md#maxlength)
- [minLength](Property.md#minlength)
- [name](Property.md#name)
- [propertySet](Property.md#propertyset)
- [propertyType](Property.md#propertytype)
- [version](Property.md#version)

## Properties

### externalReference

• **externalReference**: `string`

Gets or sets the External Reference of the Property.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Property.ts#L12)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### isRequired

• **isRequired**: `boolean`

Gets or sets a value indicating whether the Property needs to be populated or not before the entity can be saved.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Property.ts#L14)

___

### isVisible

• **isVisible**: `boolean`

Gets or sets a value indicating whether the Property is visible or not to the UI.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Property.ts#L16)

___

### maxLength

• **maxLength**: `number`

Gets or sets the maximum length of the Property.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Property.ts#L18)

___

### minLength

• **minLength**: `number`

Gets or sets the minimum length of the Property.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Property.ts#L20)

___

### name

• **name**: `string`

Gets or sets the Name of the Property.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Property.ts#L22)

___

### propertySet

• **propertySet**: [`PropertySet`](PropertySet.md)

Gets or sets the Property.PropertySet that this Property belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:24](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Property.ts#L24)

___

### propertyType

• **propertyType**: [`SupportedPropertyType`](../README.md#supportedpropertytype)

Gets or sets the support type of the Property.

#### Defined in

[src/types/Checkmate/ObjectModel/Property.ts:26](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Property.ts#L26)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
