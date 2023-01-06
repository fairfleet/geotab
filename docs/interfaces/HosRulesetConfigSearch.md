[@fairfleet/geotab](../README.md) / HosRulesetConfigSearch

# Interface: HosRulesetConfigSearch

The object used to specify the arguments when searching for
 [HosRulesetConfig](HosRulesetConfig.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`HosRulesetConfigSearch`**

## Table of contents

### Properties

- [id](HosRulesetConfigSearch.md#id)
- [name](HosRulesetConfigSearch.md#name)
- [propertySelector](HosRulesetConfigSearch.md#propertyselector)
- [version](HosRulesetConfigSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### name

• **name**: `string`

Gets or sets ruleset configs with a name containing this String. Wildcard can be used by prepending/appending "%" to string.

#### Defined in

[src/types/Checkmate/ObjectModel/HosRulesetConfigSearch.ts:13](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/HosRulesetConfigSearch.ts#L13)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
