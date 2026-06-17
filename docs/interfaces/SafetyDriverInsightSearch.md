[@fairfleet/geotab](../README.md) / SafetyDriverInsightSearch

# Interface: SafetyDriverInsightSearch

The object used to specify the arguments when searching for [SafetyDriverInsight](SafetyDriverInsight.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`SafetyDriverInsightSearch`**

## Table of contents

### Properties

- [areaRiskClassificationEnum](SafetyDriverInsightSearch.md#areariskclassificationenum)
- [areaRiskClassificationText](SafetyDriverInsightSearch.md#areariskclassificationtext)
- [fromDate](SafetyDriverInsightSearch.md#fromdate)
- [id](SafetyDriverInsightSearch.md#id)
- [toDate](SafetyDriverInsightSearch.md#todate)
- [userSearch](SafetyDriverInsightSearch.md#usersearch)
- [version](SafetyDriverInsightSearch.md#version)

## Properties

### areaRiskClassificationEnum

• **areaRiskClassificationEnum**: `number`

Gets or sets search for AreaRiskClassificationEnum records matching this.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyDriverInsightSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyDriverInsightSearch.ts#L15)

___

### areaRiskClassificationText

• **areaRiskClassificationText**: `string`

Gets or sets search for AreaRiskClassificationText records matching this.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyDriverInsightSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyDriverInsightSearch.ts#L17)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for SafetyDriverInsight records at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyDriverInsightSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyDriverInsightSearch.ts#L19)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### toDate

• **toDate**: `Date`

Gets or sets search for SafetyDriverInsight records at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyDriverInsightSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyDriverInsightSearch.ts#L21)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for [SafetyDriverInsight](SafetyDriverInsight.md)s matching this
 [UserSearch](UserSearch.md). Providing a device ID will
 search for any SafetyDriverInsight that is assigned to that Device.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyDriverInsightSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyDriverInsightSearch.ts#L28)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
