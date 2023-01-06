[@fairfleet/geotab](../README.md) / FuelTaxDetail

# Interface: FuelTaxDetail

Fuel tax reporting element. The available driving history for a FuelTaxDetail.Device is stored as a sequence of such details. Each next detail starts when and where the previous detail ended. A detail is identified by its parameters (enter and exit time, odometer, GPS odometer, latitude and longitude) and its attributes (jurisdiction, FuelTaxDetail.Driver, toll road, authority). When any of the attributes changes, the current detail ends and a new detail begins. For more information, see [IFTA Guide](https://docs.google.com/document/d/1vqQYJEIrUqOJ0LlFEeY1iVddcC-I4DTY2z73NE0Nzug).

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`FuelTaxDetail`**

## Table of contents

### Properties

- [attributes](FuelTaxDetail.md#attributes)
- [authority](FuelTaxDetail.md#authority)
- [device](FuelTaxDetail.md#device)
- [driver](FuelTaxDetail.md#driver)
- [enterGpsOdometer](FuelTaxDetail.md#entergpsodometer)
- [enterLatitude](FuelTaxDetail.md#enterlatitude)
- [enterLongitude](FuelTaxDetail.md#enterlongitude)
- [enterOdometer](FuelTaxDetail.md#enterodometer)
- [enterTime](FuelTaxDetail.md#entertime)
- [exitGpsOdometer](FuelTaxDetail.md#exitgpsodometer)
- [exitLatitude](FuelTaxDetail.md#exitlatitude)
- [exitLongitude](FuelTaxDetail.md#exitlongitude)
- [exitOdometer](FuelTaxDetail.md#exitodometer)
- [exitTime](FuelTaxDetail.md#exittime)
- [fuelTaxAttributes](FuelTaxDetail.md#fueltaxattributes)
- [hasHourlyData](FuelTaxDetail.md#hashourlydata)
- [hourlyGpsOdometer](FuelTaxDetail.md#hourlygpsodometer)
- [hourlyIsOdometerInterpolated](FuelTaxDetail.md#hourlyisodometerinterpolated)
- [hourlyLatitude](FuelTaxDetail.md#hourlylatitude)
- [hourlyLongitude](FuelTaxDetail.md#hourlylongitude)
- [hourlyOdometer](FuelTaxDetail.md#hourlyodometer)
- [id](FuelTaxDetail.md#id)
- [isClusterOdometer](FuelTaxDetail.md#isclusterodometer)
- [isEnterOdometerInterpolated](FuelTaxDetail.md#isenterodometerinterpolated)
- [isExitOdometerInterpolated](FuelTaxDetail.md#isexitodometerinterpolated)
- [isNegligible](FuelTaxDetail.md#isnegligible)
- [jurisdiction](FuelTaxDetail.md#jurisdiction)
- [tollRoad](FuelTaxDetail.md#tollroad)
- [versions](FuelTaxDetail.md#versions)

## Properties

### attributes

• **attributes**: `string`

Gets or sets the attributes.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:13](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L13)

___

### authority

• **authority**: `string`

Gets or sets the authority. 'None' by default.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L15)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the FuelTaxDetail.Device.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L17)

___

### driver

• **driver**: [`Driver`](Driver.md)

Gets or sets the FuelTaxDetail.Driver.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L19)

___

### enterGpsOdometer

• **enterGpsOdometer**: `number`

Gets or sets the GPS odometer, in km, at the enter time.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L21)

___

### enterLatitude

• **enterLatitude**: `number`

Gets or sets the latitude at the enter time.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L23)

___

### enterLongitude

• **enterLongitude**: `number`

Gets or sets the longitude at the enter time.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:25](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L25)

___

### enterOdometer

• **enterOdometer**: `number`

Gets or sets the odometer, in km, at the enter time.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:27](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L27)

___

### enterTime

• **enterTime**: `Date`

Gets or sets the time at which the detail begins.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:29](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L29)

___

### exitGpsOdometer

• **exitGpsOdometer**: `number`

Gets or sets the GPS odometer, in km, at the exit time.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:31](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L31)

___

### exitLatitude

• **exitLatitude**: `number`

Gets or sets the latitude at the exit time.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:33](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L33)

___

### exitLongitude

• **exitLongitude**: `number`

Gets or sets the longitude at the exit time.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:35](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L35)

___

### exitOdometer

• **exitOdometer**: `number`

Gets or sets the odometer, in km, at the exit time.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:37](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L37)

___

### exitTime

• **exitTime**: `Date`

Gets or sets the time at which the detail ends.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:39](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L39)

___

### fuelTaxAttributes

• **fuelTaxAttributes**: [`FuelTaxAttributes`](FuelTaxAttributes.md)

Gets or sets the attributes.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:41](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L41)

___

### hasHourlyData

• **hasHourlyData**: `boolean`

Gets a value indicating whether the details has hourly data.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:43](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L43)

___

### hourlyGpsOdometer

• **hourlyGpsOdometer**: `number`[]

Gets or sets the GPS odometer values, in km, at each hour within the detail's time interval.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:45](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L45)

___

### hourlyIsOdometerInterpolated

• **hourlyIsOdometerInterpolated**: `boolean`[]

Gets or sets a list of values indicating whether the odometer at the corresponding hour is interpolated.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:47](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L47)

___

### hourlyLatitude

• **hourlyLatitude**: `number`[]

Gets or sets the latitude values at each hour within the detail's time interval.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:49](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L49)

___

### hourlyLongitude

• **hourlyLongitude**: `number`[]

Gets or sets the longitude values at each hour within the detail's time interval.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:51](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L51)

___

### hourlyOdometer

• **hourlyOdometer**: `number`[]

Gets or sets the odometer values, in km, at each hour within the detail's time interval.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:53](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L53)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### isClusterOdometer

• **isClusterOdometer**: `boolean`

Gets or sets a value indicating whether the odometer values are based on engine odometer records and/or odometer adjustment records, as opposed to GPS distances alone.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:55](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L55)

___

### isEnterOdometerInterpolated

• **isEnterOdometerInterpolated**: `boolean`

Gets or sets a value indicating whether the odometer at enter time is interpolated.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:57](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L57)

___

### isExitOdometerInterpolated

• **isExitOdometerInterpolated**: `boolean`

Gets or sets a value indicating whether the odometer at exit time is interpolated.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:59](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L59)

___

### isNegligible

• **isNegligible**: `boolean`

Gets a value indicating whether the detail is negligible by time or distance.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:61](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L61)

___

### jurisdiction

• **jurisdiction**: `string`

Gets or sets the jurisdiction, such as a U.S. state or a Canadian province.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:63](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L63)

___

### tollRoad

• **tollRoad**: `string`

Gets or sets the toll road name. null by default.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:65](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L65)

___

### versions

• **versions**: `number`[]

Gets or sets the last processed record versions.

#### Defined in

[src/types/Checkmate/ObjectModel/FuelTaxDetail.ts:67](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/FuelTaxDetail.ts#L67)
