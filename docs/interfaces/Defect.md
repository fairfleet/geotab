[@fairfleet/geotab](../README.md) / Defect

# Interface: Defect

Represents a Defect entity. This defines the one
 to one relationship between a [DefectSeverity](../README.md#defectseverity) and
 [Group](Group.md).

## Hierarchy

- [`Group`](Group.md)

  ↳ **`Defect`**

## Table of contents

### Properties

- [assetType](Defect.md#assettype)
- [children](Defect.md#children)
- [color](Defect.md#color)
- [comments](Defect.md#comments)
- [groups](Defect.md#groups)
- [id](Defect.md#id)
- [isDefectList](Defect.md#isdefectlist)
- [isHidden](Defect.md#ishidden)
- [isRequired](Defect.md#isrequired)
- [name](Defect.md#name)
- [parent](Defect.md#parent)
- [path](Defect.md#path)
- [reference](Defect.md#reference)
- [severity](Defect.md#severity)

## Properties

### assetType

• **assetType**: [`DefectAssetType`](../README.md#defectassettype)

Gets or sets the [DefectAssetType](../README.md#defectassettype) of the defect.

#### Defined in

[src/types/Checkmate/ObjectModel/Defect.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Defect.ts#L17)

___

### children

• **children**: [`Group`](Group.md)[]

Gets or sets the Children of this group. A list of Group(s).

#### Inherited from

[Group](Group.md).[children](Group.md#children)

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:20](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Group.ts#L20)

___

### color

• **color**: [`Color`](Color.md)

Gets or sets the color used to render assets belonging to this defect.

#### Overrides

[Group](Group.md).[color](Group.md#color)

#### Defined in

[src/types/Checkmate/ObjectModel/Defect.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Defect.ts#L19)

___

### comments

• **comments**: `string`

Gets or sets the free text field where any user information can be stored and referenced for this entity. Default [""].

#### Inherited from

[Group](Group.md).[comments](Group.md#comments)

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:24](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Group.ts#L24)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets the list of Defect groups.

#### Defined in

[src/types/Checkmate/ObjectModel/Defect.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Defect.ts#L21)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Inherited from

[Group](Group.md).[id](Group.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:26](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Group.ts#L26)

___

### isDefectList

• **isDefectList**: `boolean`

Gets a value indicating whether this is a list of defects.

#### Defined in

[src/types/Checkmate/ObjectModel/Defect.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Defect.ts#L23)

___

### isHidden

• **isHidden**: `boolean`

Gets or sets a value indicating whether this defect is hidden in the UI. Used for parts to determine if 'other' should be shown or not.

#### Defined in

[src/types/Checkmate/ObjectModel/Defect.ts:25](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Defect.ts#L25)

___

### isRequired

• **isRequired**: `boolean`

Gets or sets a value indicating whether this defect must be signed off on. Used for parts to determine if the part must be explicitly marked as having defect(s) or not.

#### Defined in

[src/types/Checkmate/ObjectModel/Defect.ts:27](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Defect.ts#L27)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[Group](Group.md).[name](Group.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:28](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Group.ts#L28)

___

### parent

• **parent**: [`Group`](Group.md)

Gets or sets the parent Group of the selected group.

#### Inherited from

[Group](Group.md).[parent](Group.md#parent)

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:30](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Group.ts#L30)

___

### path

• **path**: `string`

Gets or sets the ltree path of the group.

#### Inherited from

[Group](Group.md).[path](Group.md#path)

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:32](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Group.ts#L32)

___

### reference

• **reference**: `string`

Gets or sets the string reference to add to the database entry for this group. Maximum length [255] Default [""].

#### Inherited from

[Group](Group.md).[reference](Group.md#reference)

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:34](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Group.ts#L34)

___

### severity

• **severity**: [`DefectSeverity`](../README.md#defectseverity)

Gets or sets the [DefectSeverity](../README.md#defectseverity) of the Defect.

#### Defined in

[src/types/Checkmate/ObjectModel/Defect.ts:29](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Defect.ts#L29)
