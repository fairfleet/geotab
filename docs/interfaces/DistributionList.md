[@fairfleet/geotab](../README.md) / DistributionList

# Interface: DistributionList

A distribution list links a set of [Rule](Rule.md)(s) to a set of [Recipient](Recipient.md)(s). When a [Rule](Rule.md) is violated each related [Recipient](Recipient.md) will receive a notification of the kind defined by its [RecipientType](../README.md#recipienttype).

## Hierarchy

- [`NameEntity`](NameEntity.md)

  ↳ **`DistributionList`**

## Table of contents

### Properties

- [id](DistributionList.md#id)
- [name](DistributionList.md#name)
- [recipients](DistributionList.md#recipients)
- [rules](DistributionList.md#rules)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntity](NameEntity.md).[id](NameEntity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Inherited from

[NameEntity](NameEntity.md).[name](NameEntity.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### recipients

• **recipients**: [`Recipient`](Recipient.md)[]

Gets or sets a list of recipients that will be notified when the
 [Rule](Rule.md)(s) are violated.

#### Defined in

[src/types/Checkmate/ObjectModel/DistributionList.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DistributionList.ts#L17)

___

### rules

• **rules**: [`Rule`](Rule.md)[]

Gets or sets the list of [Rule](Rule.md)(s) that the [Recipient](Recipient.md)(s)
 will be notified of when broken.

#### Defined in

[src/types/Checkmate/ObjectModel/DistributionList.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DistributionList.ts#L22)
