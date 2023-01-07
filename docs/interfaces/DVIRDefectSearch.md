[@fairfleet/geotab](../README.md) / DVIRDefectSearch

# Interface: DVIRDefectSearch

The object used to specify the arguments when searching for [DVIRDefect](DVIRDefect.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DVIRDefectSearch`**

## Table of contents

### Properties

- [defectSearch](DVIRDefectSearch.md#defectsearch)
- [dvirLogSearch](DVIRDefectSearch.md#dvirlogsearch)
- [fromDate](DVIRDefectSearch.md#fromdate)
- [id](DVIRDefectSearch.md#id)
- [toDate](DVIRDefectSearch.md#todate)
- [userSearch](DVIRDefectSearch.md#usersearch)
- [version](DVIRDefectSearch.md#version)

## Properties

### defectSearch

• **defectSearch**: [`GroupSearch`](GroupSearch.md)

Gets or sets search for DVIRDefect that are a member of these defect [Group](Group.md)(s).
 Available
 [GroupSearch](GroupSearch.md) options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefectSearch.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRDefectSearch.ts#L18)

___

### dvirLogSearch

• **dvirLogSearch**: [`DVIRLogSearch`](DVIRLogSearch.md)

Gets or sets search for DVIRDefect with this [DVIRLogSearch](DVIRLogSearch.md) Id.
 Available DVIRLogSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefectSearch.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRDefectSearch.ts#L24)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for DVIRDefect that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefectSearch.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRDefectSearch.ts#L26)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### toDate

• **toDate**: `Date`

Gets or sets search for DVIRDefect that were recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefectSearch.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRDefectSearch.ts#L28)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for DVIRDefects with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DVIRDefectSearch.ts:34](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DVIRDefectSearch.ts#L34)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
