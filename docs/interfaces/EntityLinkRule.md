[@fairfleet/geotab](../README.md) / EntityLinkRule

# Interface: EntityLinkRule

A particular instance of an [EntityLinkRule](EntityLinkRule.md).

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`EntityLinkRule`**

## Table of contents

### Properties

- [comments](EntityLinkRule.md#comments)
- [createdDate](EntityLinkRule.md#createddate)
- [destinationGroup](EntityLinkRule.md#destinationgroup)
- [entityLinkRuleConditions](EntityLinkRule.md#entitylinkruleconditions)
- [entityLinkType](EntityLinkRule.md#entitylinktype)
- [id](EntityLinkRule.md#id)
- [isActive](EntityLinkRule.md#isactive)
- [isAutoDetach](EntityLinkRule.md#isautodetach)
- [name](EntityLinkRule.md#name)
- [sourceGroup](EntityLinkRule.md#sourcegroup)
- [validFrom](EntityLinkRule.md#validfrom)
- [validTo](EntityLinkRule.md#validto)

## Properties

### comments

• **comments**: `string`

Gets or sets a value indicating the comments on this rule.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts:13](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts#L13)

___

### createdDate

• **createdDate**: `Date`

Gets or sets a value indicating when the entity link rule was created.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts#L15)

___

### destinationGroup

• **destinationGroup**: [`Group`](Group.md)

Gets or sets the destination group.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts#L17)

___

### entityLinkRuleConditions

• **entityLinkRuleConditions**: [`EntityLinkRuleConditions`](EntityLinkRuleConditions.md)

Gets or sets the conditions for the entity link rule.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts#L19)

___

### entityLinkType

• **entityLinkType**: [`EntityLinkType`](../README.md#entitylinktype)

Gets or sets the entity link type.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts#L21)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### isActive

• **isActive**: `boolean`

Gets or sets a value indicating this rule is active and will be considered in evaludation.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts#L23)

___

### isAutoDetach

• **isAutoDetach**: `boolean`

Gets or sets a value indicating this rule is enforcing the auto detachment of existing links when a new link is made.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts:25](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts#L25)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### sourceGroup

• **sourceGroup**: [`Group`](Group.md)

Gets or sets the source group.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts:27](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts#L27)

___

### validFrom

• **validFrom**: `Date`

Gets or sets a value indicating the start date the rule is valid from.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts:29](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts#L29)

___

### validTo

• **validTo**: `Date`

Gets or sets a value indicating the end date the rule is valid to.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts:31](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityLink/EntityLinkRule.ts#L31)
