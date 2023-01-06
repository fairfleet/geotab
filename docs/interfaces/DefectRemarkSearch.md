[@fairfleet/geotab](../README.md) / DefectRemarkSearch

# Interface: DefectRemarkSearch

The object used to specify the arguments when searching for [DefectRemark](DefectRemark.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DefectRemarkSearch`**

## Table of contents

### Properties

- [dvirDefectSearch](DefectRemarkSearch.md#dvirdefectsearch)
- [fromDate](DefectRemarkSearch.md#fromdate)
- [id](DefectRemarkSearch.md#id)
- [propertySelector](DefectRemarkSearch.md#propertyselector)
- [remarkSearch](DefectRemarkSearch.md#remarksearch)
- [toDate](DefectRemarkSearch.md#todate)
- [userSearch](DefectRemarkSearch.md#usersearch)
- [version](DefectRemarkSearch.md#version)

## Properties

### dvirDefectSearch

• **dvirDefectSearch**: [`DVIRDefectSearch`](DVIRDefectSearch.md)

Gets or sets search for DefectRemark with this [DVIRDefectSearch](DVIRDefectSearch.md) Id.
 Available DVIRDefectSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DefectRemarkSearch.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DefectRemarkSearch.ts#L16)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for DefectRemark that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/DefectRemarkSearch.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DefectRemarkSearch.ts#L18)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### remarkSearch

• **remarkSearch**: `string`

Gets or sets search for DefectRemarks with this remark as part of it.

#### Defined in

[src/types/Checkmate/ObjectModel/DefectRemarkSearch.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DefectRemarkSearch.ts#L20)

___

### toDate

• **toDate**: `Date`

Gets or sets search for DefectRemark that were recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DefectRemarkSearch.ts:22](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DefectRemarkSearch.ts#L22)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for DefectRemarks with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DefectRemarkSearch.ts:28](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/DefectRemarkSearch.ts#L28)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
