[@fairfleet/geotab](../README.md) / Investigation

# Interface: Investigation

Represents an investigation record, which is a user-defined search area of actvity over a specific time period.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Investigation`**

## Table of contents

### Properties

- [centerPointAddress](Investigation.md#centerpointaddress)
- [created](Investigation.md#created)
- [createdBy](Investigation.md#createdby)
- [description](Investigation.md#description)
- [filterState](Investigation.md#filterstate)
- [from](Investigation.md#from)
- [id](Investigation.md#id)
- [name](Investigation.md#name)
- [searchArea](Investigation.md#searcharea)
- [status](Investigation.md#status)
- [to](Investigation.md#to)
- [wkbSearchArea](Investigation.md#wkbsearcharea)

## Properties

### centerPointAddress

• **centerPointAddress**: `string`

Gets or sets the center address of the bounding box for the investigation.

#### Defined in

[src/types/Checkmate/ObjectModel/Investigation.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Investigation.ts#L12)

___

### created

• **created**: `Date`

Gets or sets the timestamp for when the investigation was created.

#### Defined in

[src/types/Checkmate/ObjectModel/Investigation.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Investigation.ts#L14)

___

### createdBy

• **createdBy**: [`User`](User.md)

Gets or sets the user who created the investigation.

#### Defined in

[src/types/Checkmate/ObjectModel/Investigation.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Investigation.ts#L16)

___

### description

• **description**: `string`

Gets or sets an optional description of the investigation.

#### Defined in

[src/types/Checkmate/ObjectModel/Investigation.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Investigation.ts#L18)

___

### filterState

• **filterState**: `string`

Gets or sets a JSON storing the state of filters applied to the investigation.

#### Defined in

[src/types/Checkmate/ObjectModel/Investigation.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Investigation.ts#L20)

___

### from

• **from**: `Date`

Gets or sets the start date and time for the investigation's period of interest.

#### Defined in

[src/types/Checkmate/ObjectModel/Investigation.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Investigation.ts#L22)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### name

• **name**: `string`

Gets or sets the name for the investigation.

#### Defined in

[src/types/Checkmate/ObjectModel/Investigation.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Investigation.ts#L24)

___

### searchArea

• **searchArea**: `unknown`[]

Gets or sets the list of points (see [Coordinate](Coordinate.md)) that define a search area of an investigation.

#### Defined in

[src/types/Checkmate/ObjectModel/Investigation.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Investigation.ts#L26)

___

### status

• **status**: [`InvestigationStatus`](../README.md#investigationstatus)

Gets or sets the status of the investigation (Open, Closed, Archived).

#### Defined in

[src/types/Checkmate/ObjectModel/Investigation.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Investigation.ts#L28)

___

### to

• **to**: `Date`

Gets or sets the end date and time for the investigation's period of interest.

#### Defined in

[src/types/Checkmate/ObjectModel/Investigation.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Investigation.ts#L30)

___

### wkbSearchArea

• **wkbSearchArea**: `number`[]

Gets or sets the geographic area for the investigation.

#### Defined in

[src/types/Checkmate/ObjectModel/Investigation.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Investigation.ts#L32)
