[@fairfleet/geotab](../README.md) / Condition

# Interface: Condition

Conditions model the logic that govern a [Rule](Rule.md) and can apply to many different types of data and entities. Conditions are structured in hierarchical tree. A condition's type (see [ConditionType](../README.md#conditiontype)) defines the meaning of each condition in the tree and can be an operator, special operator, data or an asset.
 Depending on the type of condition, it can have a minimum of 0 and maximum of 1 entity properties (Device, Driver, Diagnostic, WorkTime, Zone or ZoneType) defined per condition. Operator conditions (OR, AND, &amp;gt;, &amp;lt;, ==, NOT) will not have any entity properties populated. Special Operator conditions evaluate against special types of data such as Aux data, Zones, WorkHours, etc. and may have the entity property populated and/or a child condition populated with a Data condition. Asset conditions will only have the asset entity property populated.
 The unit of measure for data is described either by the related [Diagnostic](Diagnostic.md)'s [UnitOfMeasure](UnitOfMeasure.md) or as follows:
 <list><item><description>
 Distance: Meters (m)
 </description></item><item><description>
 Speed: Kilometers Per Hour (km/h)
 </description></item><item><description>
 Duration: Seconds
 </description></item></list>
 A tree of conditions can define simple or complex rules and can be very powerful. Please take into consideration all possible consequences of a series of rules. Overly complex, poorly written or an excessive number of rules can have undesirable performance effects.

**`Remarks`**

This class is in development. Its public interface is a subject to change.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Condition`**

## Table of contents

### Properties

- [children](Condition.md#children)
- [conditionType](Condition.md#conditiontype)
- [device](Condition.md#device)
- [diagnostic](Condition.md#diagnostic)
- [driver](Condition.md#driver)
- [group](Condition.md#group)
- [id](Condition.md#id)
- [linkTarget](Condition.md#linktarget)
- [parent](Condition.md#parent)
- [rule](Condition.md#rule)
- [sequence](Condition.md#sequence)
- [unit](Condition.md#unit)
- [value](Condition.md#value)
- [workTime](Condition.md#worktime)
- [zone](Condition.md#zone)
- [zoneType](Condition.md#zonetype)

## Properties

### children

• **children**: [`Condition`](Condition.md)[]

Gets or sets child condition(s) of this condition.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:33](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L33)

___

### conditionType

• **conditionType**: [`ConditionType`](../README.md#conditiontype)

Gets or sets the [ConditionType](../README.md#conditiontype) defines the meaning of this condition.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:35](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L35)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets specified [Device](Device.md) associated with the condition.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:37](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L37)

___

### diagnostic

• **diagnostic**: [`Diagnostic`](Diagnostic.md)

Gets or sets the [Diagnostic](Diagnostic.md) to compare the value of.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:39](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L39)

___

### driver

• **driver**: [`Driver`](Driver.md)

Gets or sets specified [Driver](Driver.md) associated with the condition.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:41](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L41)

___

### group

• **group**: [`Group`](Group.md)

Gets or sets specified [Group](Group.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:43](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L43)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### linkTarget

• **linkTarget**: [`Condition`](Condition.md)

Gets or sets the Condition that this Condition is a link of.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:45](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L45)

___

### parent

• **parent**: [`Condition`](Condition.md)

Gets or sets the parent Condition for this Condition. Null for root condition.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:47](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L47)

___

### rule

• **rule**: [`Rule`](Rule.md)

Gets or sets the [Rule](Rule.md) that this condition applies to.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:49](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L49)

___

### sequence

• **sequence**: `number`

Gets or sets the sequence that defines the [Condition](Condition.md)'s relative order in a list of Children [Condition](Condition.md)s of the parent [Condition](Condition.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:51](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L51)

___

### unit

• **unit**: `string`

Gets the name of the metric used.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:53](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L53)

___

### value

• **value**: `number`

Gets or sets the specified value to evaluate against.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:55](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L55)

___

### workTime

• **workTime**: [`WorkTime`](WorkTime.md)

Gets or sets the [WorkTime](WorkTime.md) that the event must occur inside/outside of for the violation to occur.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:57](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L57)

___

### zone

• **zone**: [`Zone`](Zone.md)

Gets or sets specified [Zone](Zone.md) associated with the condition.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:59](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L59)

___

### zoneType

• **zoneType**: [`ZoneType`](ZoneType.md)

Gets or sets specified [ZoneType](ZoneType.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/Condition.ts:61](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/Condition.ts#L61)
