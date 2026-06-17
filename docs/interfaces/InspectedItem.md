[@fairfleet/geotab](../README.md) / InspectedItem

# Interface: InspectedItem

An InspectedItem is an inspection item that can be associated with an [InspectionLog](InspectionLog.md).
 It contains item status, severity, value, note, and repair information.

**`Deprecated`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`InspectedItem`**

## Table of contents

### Properties

- [id](InspectedItem.md#id)
- [inspectionItem](InspectedItem.md#inspectionitem)
- [itemNote](InspectedItem.md#itemnote)
- [itemSeverity](InspectedItem.md#itemseverity)
- [itemStatus](InspectedItem.md#itemstatus)
- [itemValue](InspectedItem.md#itemvalue)
- [maintenanceWorkOrderId](InspectedItem.md#maintenanceworkorderid)
- [mediaFiles](InspectedItem.md#mediafiles)
- [repairBy](InspectedItem.md#repairby)
- [repairDateTime](InspectedItem.md#repairdatetime)
- [repairNote](InspectedItem.md#repairnote)
- [repairStatus](InspectedItem.md#repairstatus)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### inspectionItem

• **inspectionItem**: [`Group`](Group.md)

Gets or sets the inspection item that was marked as passed or failed.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItem.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItem.ts#L21)

___

### itemNote

• **itemNote**: `string`

Gets or sets the note of inspected item.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItem.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItem.ts#L23)

___

### itemSeverity

• **itemSeverity**: [`InspectionItemSeverity`](../README.md#inspectionitemseverity)

Gets or sets the severity of inspected item.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItem.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItem.ts#L25)

___

### itemStatus

• **itemStatus**: [`InspectedItemStatus`](../README.md#inspecteditemstatus)

Gets or sets the status (pass or failed) of inspected item.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItem.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItem.ts#L27)

___

### itemValue

• **itemValue**: `string`

Gets or sets the custom property value of inspected item.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItem.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItem.ts#L29)

___

### maintenanceWorkOrderId

• **maintenanceWorkOrderId**: `string`

Gets or sets the maintenance work order related to the inspected item.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItem.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItem.ts#L31)

___

### mediaFiles

• **mediaFiles**: [`MediaFile`](MediaFile.md)[]

Gets or sets the list of [MediaFile](MediaFile.md)(s) for an inspected item.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItem.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItem.ts#L33)

___

### repairBy

• **repairBy**: [`User`](User.md)

Gets or sets the user that performed the repair.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItem.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItem.ts#L35)

___

### repairDateTime

• **repairDateTime**: `Date`

Gets or sets the date and time the inspected item was repaired.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItem.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItem.ts#L37)

___

### repairNote

• **repairNote**: `string`

Gets or sets the repair note of inspected item.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItem.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItem.ts#L39)

___

### repairStatus

• **repairStatus**: [`RepairStatusType`](../README.md#repairstatustype)

Gets or sets the status of the repair for the inspected item (Not repaired, repaired, or not necessary).

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItem.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItem.ts#L41)
