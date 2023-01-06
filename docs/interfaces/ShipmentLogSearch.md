[@fairfleet/geotab](../README.md) / ShipmentLogSearch

# Interface: ShipmentLogSearch

The object used to specify the arguments when searching for
 [ShipmentLog](ShipmentLog.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ShipmentLogSearch`**

## Table of contents

### Properties

- [commodity](ShipmentLogSearch.md#commodity)
- [deviceSearch](ShipmentLogSearch.md#devicesearch)
- [documentNumber](ShipmentLogSearch.md#documentnumber)
- [fromDate](ShipmentLogSearch.md#fromdate)
- [id](ShipmentLogSearch.md#id)
- [keywords](ShipmentLogSearch.md#keywords)
- [maxVersion](ShipmentLogSearch.md#maxversion)
- [minVersion](ShipmentLogSearch.md#minversion)
- [propertySelector](ShipmentLogSearch.md#propertyselector)
- [shipperName](ShipmentLogSearch.md#shippername)
- [toDate](ShipmentLogSearch.md#todate)
- [userSearch](ShipmentLogSearch.md#usersearch)
- [version](ShipmentLogSearch.md#version)

## Properties

### commodity

• **commodity**: `string`

Gets or sets search for ShipmentLogs with this commodity. Wildcard can be used by prepending/appending "%" to string.

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts#L15)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for ShipmentLogs for this [DeviceSearch](DeviceSearch.md) Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts#L21)

___

### documentNumber

• **documentNumber**: `string`

Gets or sets search for ShipmentLogs with this document number. Wildcard can be used by prepending/appending "%" to string.

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts#L23)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for ShipmentLogs that were active at this date or after. Set to UTC now to search for
 only currently active ShipmentLogs.

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts:28](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts#L28)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### keywords

• **keywords**: `string`[]

Gets or sets search for entities that contain specific keywords in all wildcard string-searchable fields.

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts:30](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts#L30)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets
 Search for [ShipmentLog](ShipmentLog.md)s with a maximum of this version.

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts:37](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts#L37)

___

### minVersion

• **minVersion**: `number`

Gets or sets
 Search for [ShipmentLog](ShipmentLog.md)s with a minimum of this version.

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts:44](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts#L44)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### shipperName

• **shipperName**: `string`

Gets or sets search for ShipmentLogs with this shipper name. Wildcard can be used by prepending/appending "%" to string.

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts:46](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts#L46)

___

### toDate

• **toDate**: `Date`

Gets or sets search for ShipmentLogs that were active at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts:48](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts#L48)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for ShipmentLogs with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts:54](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/ShipmentLogSearch.ts#L54)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
