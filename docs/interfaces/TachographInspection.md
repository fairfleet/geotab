[@fairfleet/geotab](../README.md) / TachographInspection

# Interface: TachographInspection

The class representing an Authority Inspections.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`TachographInspection`**

## Table of contents

### Properties

- [id](TachographInspection.md#id)
- [notes](TachographInspection.md#notes)
- [receptionDate](TachographInspection.md#receptiondate)
- [reference](TachographInspection.md#reference)
- [requirementFrom](TachographInspection.md#requirementfrom)
- [requirementTo](TachographInspection.md#requirementto)
- [submitDate](TachographInspection.md#submitdate)
- [submitLimit](TachographInspection.md#submitlimit)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### notes

• **notes**: `string`

Gets or sets the internal Notes about inspection.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Inspections/TachographInspection.ts:10

___

### receptionDate

• **receptionDate**: `Date`

Gets or sets when Inspection has been notified.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Inspections/TachographInspection.ts:12

___

### reference

• **reference**: `string`

Gets or sets the reference number document.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Inspections/TachographInspection.ts:14

___

### requirementFrom

• **requirementFrom**: `Date`

Gets or sets the requirement files date from.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Inspections/TachographInspection.ts:16

___

### requirementTo

• **requirementTo**: `Date`

Gets or sets the requirement files date to.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Inspections/TachographInspection.ts:18

___

### submitDate

• **submitDate**: `Date`

Gets or sets the date when files have been submitted.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Inspections/TachographInspection.ts:20

___

### submitLimit

• **submitLimit**: `number`

Gets or sets the limit submit to send files.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/Inspections/TachographInspection.ts:22
