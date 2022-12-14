[@fairfleet/geotab](../README.md) / AddInData

# Interface: AddInData

A class that holds data stored by an add-in.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`AddInData`**

## Table of contents

### Properties

- [addInId](AddInData.md#addinid)
- [details](AddInData.md#details)
- [groups](AddInData.md#groups)
- [id](AddInData.md#id)

## Properties

### addInId

• **addInId**: `string`

Gets or sets the add-in identifier.

#### Defined in

[src/types/Checkmate/ObjectModel/AddInData.ts:11](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/AddInData.ts#L11)

___

### details

• **details**: `string`

Gets or sets the Details string as a serialized JSON object.

#### Defined in

[src/types/Checkmate/ObjectModel/AddInData.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/AddInData.ts#L13)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets the list of [Group](Group.md)(s) the [AddInData](AddInData.md) belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/AddInData.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/AddInData.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)
