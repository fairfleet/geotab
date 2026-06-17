[@fairfleet/geotab](../README.md) / InspectedItemSearch

# Interface: InspectedItemSearch

The object used to specify the arguments when searching for [InspectedItem](InspectedItem.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`InspectedItemSearch`**

## Table of contents

### Properties

- [fromDate](InspectedItemSearch.md#fromdate)
- [id](InspectedItemSearch.md#id)
- [inspectionItemSearch](InspectedItemSearch.md#inspectionitemsearch)
- [inspectionLogSearch](InspectedItemSearch.md#inspectionlogsearch)
- [repairBySearch](InspectedItemSearch.md#repairbysearch)
- [toDate](InspectedItemSearch.md#todate)
- [version](InspectedItemSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets search for InspectedItems that were repaired at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItemSearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItemSearch.ts#L13)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### inspectionItemSearch

• **inspectionItemSearch**: [`GroupSearch`](GroupSearch.md)

Gets or sets search for InspectedItems for this [GroupSearch](GroupSearch.md) Id.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItemSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItemSearch.ts#L15)

___

### inspectionLogSearch

• **inspectionLogSearch**: [`InspectionLogSearch`](InspectionLogSearch.md)

Gets or sets search for InspectedItems for this InspectedItemSearch.InspectionLogSearch Id.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItemSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItemSearch.ts#L17)

___

### repairBySearch

• **repairBySearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for InspectedItems repaired by this [UserSearch](UserSearch.md) Id.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItemSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItemSearch.ts#L19)

___

### toDate

• **toDate**: `Date`

Gets or sets search for InspectedItems that were repaired at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/InspectedItemSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/InspectedItemSearch.ts#L21)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
