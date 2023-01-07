[@fairfleet/geotab](../README.md) / Group

# Interface: Group

A group is one element in a hierarchical tree. Each group can have none or many children, it is the children that define the shape of the hierarchical tree. The parent is not a property of the group object and is only defined by who the group is a child of. It is necessary to know the id of the parent group when adding a new group or removing an existing group.
 There are three core Group branches used in MyGeotab. The most common are "Company Groups", company Groups are used to organize entities ([Zone](Zone.md), [User](User.md), [Device](Device.md), [Driver](Driver.md), [Rule](Rule.md) and [EventRule](EventRule.md)) into logical groups related to the organization. A Group structure can be constructed by region, vocation, reporting or anything that makes sense to the business, this allows aggregate reports and rolling up data in a flexible way. These groups have a many to many type of relationship with the entities that are members and are not limited to one type of entity.
 The second type is "Security Groups", these are Groups to which [User](User.md)(s) are members of and can only be applied to Users. Each Group has a list of SecurityFilter(s) associated to it. Security Filters control what parts of the application/API a User has access to.
 The third type of group is a "Private User Group", this group is used only for scheduling reports and displaying dashboard reports for a User. This Group will only ever apply to one User and will typically be named the user's name.
 There is a base structure of Groups which cannot be removed, these are considered to be "System"
 Groups:
 <list><item><description>Company Group</description></item><item><description>Security Group</description></item><item><description>Everything Security Group</description></item><item><description>Supervisor Security Group</description></item><item><description>User Security Group</description></item><item><description>View Only Security Group</description></item><item><description>Nothing Security Group</description></item><item><description>Private User Group</description></item></list>
 When Groups are retrieved they will always be in a flat list of groups. The hierarchically tree(s) can be reconstructed by looking at the "Children" property of each Group. The "Root" group will never be returned and is only for system use.

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`Group`**

  ↳↳ [`Defect`](Defect.md)

## Table of contents

### Properties

- [children](Group.md#children)
- [color](Group.md#color)
- [comments](Group.md#comments)
- [id](Group.md#id)
- [name](Group.md#name)
- [parent](Group.md#parent)
- [path](Group.md#path)
- [reference](Group.md#reference)

## Properties

### children

• **children**: [`Group`](Group.md)[]

Gets or sets the Children of this group. A list of Group(s).

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Group.ts#L20)

___

### color

• **color**: [`Color`](Color.md)

Gets or sets the [Color](Color.md) used to render assets belonging to this group. Default [Blue].

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Group.ts#L22)

___

### comments

• **comments**: `string`

Gets or sets the free text field where any user information can be stored and referenced for this entity. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Group.ts#L24)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Overrides

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Group.ts#L26)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Overrides

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Group.ts#L28)

___

### parent

• **parent**: [`Group`](Group.md)

Gets or sets the parent Group of the selected group.

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:30](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Group.ts#L30)

___

### path

• **path**: `string`

Gets or sets the ltree path of the group.

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:32](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Group.ts#L32)

___

### reference

• **reference**: `string`

Gets or sets the string reference to add to the database entry for this group. Maximum length [255] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Group.ts:34](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Group.ts#L34)
