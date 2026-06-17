[@fairfleet/geotab](../README.md) / AddInSearch

# Interface: AddInSearch

The object used to specify the arguments when searching for [AddIn](AddIn.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`AddInSearch`**

## Table of contents

### Properties

- [autoEnrollmentGroups](AddInSearch.md#autoenrollmentgroups)
- [configuration](AddInSearch.md#configuration)
- [id](AddInSearch.md#id)
- [isAutoEnrollEnabled](AddInSearch.md#isautoenrollenabled)
- [version](AddInSearch.md#version)

## Properties

### autoEnrollmentGroups

• **autoEnrollmentGroups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Addins that are members of these [GroupSearch](GroupSearch.md)(s) one of
 its parents or itself. Available GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInSearch.ts#L16)

___

### configuration

• **configuration**: [`AddInConfigurationSearch`](AddInConfigurationSearch.md)

Gets or sets the [AddInConfigurationSearch](AddInConfigurationSearch.md).

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInSearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInSearch.ts#L18)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isAutoEnrollEnabled

• **isAutoEnrollEnabled**: `boolean`

Gets or sets whether the add-in has auto enroll enabled.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInSearch.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInSearch.ts#L20)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
