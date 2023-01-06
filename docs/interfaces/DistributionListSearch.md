[@fairfleet/geotab](../README.md) / DistributionListSearch

# Interface: DistributionListSearch

The object used to specify the arguments when searching for
 [DistributionList](DistributionList.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DistributionListSearch`**

## Table of contents

### Properties

- [id](DistributionListSearch.md#id)
- [maxId](DistributionListSearch.md#maxid)
- [propertySelector](DistributionListSearch.md#propertyselector)
- [recipientSearch](DistributionListSearch.md#recipientsearch)
- [ruleSearch](DistributionListSearch.md#rulesearch)
- [version](DistributionListSearch.md#version)

## Properties

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### maxId

• **maxId**: `string`

Gets or sets the maximum Id of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/DistributionListSearch.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DistributionListSearch.ts#L17)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### recipientSearch

• **recipientSearch**: [`RecipientSearch`](RecipientSearch.md)

Gets or sets search for DistributionLists with these full [Recipient](Recipient.md) objects.
 Available RuleSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DistributionListSearch.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DistributionListSearch.ts#L23)

___

### ruleSearch

• **ruleSearch**: [`RuleSearch`](RuleSearch.md)

Gets or sets search for DistributionLists with this [RuleSearch](RuleSearch.md) Id.
 Available RuleSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DistributionListSearch.ts:29](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DistributionListSearch.ts#L29)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
