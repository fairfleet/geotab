[@fairfleet/geotab](../README.md) / DefectSearch

# Interface: DefectSearch

The object used to specify the arguments when searching for a [Defect](Defect.md).

## Hierarchy

- [`GroupSearch`](GroupSearch.md)

  ↳ **`DefectSearch`**

## Table of contents

### Properties

- [deviceSearch](DefectSearch.md#devicesearch)
- [groupFilterCondition](DefectSearch.md#groupfiltercondition)
- [groups](DefectSearch.md#groups)
- [id](DefectSearch.md#id)
- [includeAllTrees](DefectSearch.md#includealltrees)
- [maxId](DefectSearch.md#maxid)
- [name](DefectSearch.md#name)
- [reference](DefectSearch.md#reference)
- [trailerSearch](DefectSearch.md#trailersearch)
- [version](DefectSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for defect lists available to this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DefectSearch.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DefectSearch.ts#L17)

___

### groupFilterCondition

• **groupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets the groups to find the rules belonging to parents or children of the groups using and/or relationship.

#### Defined in

[src/types/Checkmate/ObjectModel/DefectSearch.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DefectSearch.ts#L19)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for defect lists that are members of these [GroupSearch](GroupSearch.md)(s) one of
 it's children or one of it's parents.
 Available GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DefectSearch.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DefectSearch.ts#L26)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[GroupSearch](GroupSearch.md).[id](GroupSearch.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeAllTrees

• **includeAllTrees**: `boolean`

Gets or sets include Groups from all trees, for example "Security Groups" and "Private User Groups". The"Company Group" tree is included by default.

#### Inherited from

[GroupSearch](GroupSearch.md).[includeAllTrees](GroupSearch.md#includealltrees)

#### Defined in

[src/types/Checkmate/ObjectModel/GroupSearch.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupSearch.ts#L10)

___

### maxId

• **maxId**: `string`

Gets or sets gets maximum Id of the search criteria.

#### Inherited from

[GroupSearch](GroupSearch.md).[maxId](GroupSearch.md#maxid)

#### Defined in

[src/types/Checkmate/ObjectModel/GroupSearch.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupSearch.ts#L12)

___

### name

• **name**: `string`

Gets or sets search for Groups with this Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%".

#### Inherited from

[GroupSearch](GroupSearch.md).[name](GroupSearch.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/GroupSearch.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupSearch.ts#L14)

___

### reference

• **reference**: `string`

Gets or sets search for Groups with this Reference. Wildcard can be used by prepending/appending "%" to string. Example "%reference%".

#### Inherited from

[GroupSearch](GroupSearch.md).[reference](GroupSearch.md#reference)

#### Defined in

[src/types/Checkmate/ObjectModel/GroupSearch.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/GroupSearch.ts#L16)

___

### trailerSearch

• **trailerSearch**: [`TrailerSearch`](TrailerSearch.md)

Gets or sets search for defect lists available to this [TrailerSearch](TrailerSearch.md) Id.
 Available TrailerSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DefectSearch.ts:32](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DefectSearch.ts#L32)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[GroupSearch](GroupSearch.md).[version](GroupSearch.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
