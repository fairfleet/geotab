[@fairfleet/geotab](../README.md) / SafetyVehicleInsightSearch

# Interface: SafetyVehicleInsightSearch

The object used to specify the arguments when searching for [SafetyVehicleInsight](SafetyVehicleInsight.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`SafetyVehicleInsightSearch`**

## Table of contents

### Properties

- [areaRiskClassificationEnum](SafetyVehicleInsightSearch.md#areariskclassificationenum)
- [areaRiskClassificationText](SafetyVehicleInsightSearch.md#areariskclassificationtext)
- [deviceSearch](SafetyVehicleInsightSearch.md#devicesearch)
- [fromDate](SafetyVehicleInsightSearch.md#fromdate)
- [id](SafetyVehicleInsightSearch.md#id)
- [toDate](SafetyVehicleInsightSearch.md#todate)
- [version](SafetyVehicleInsightSearch.md#version)

## Properties

### areaRiskClassificationEnum

• **areaRiskClassificationEnum**: `number`

Gets or sets search for AreaRiskClassificationEnum records matching this.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyVehicleInsightSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyVehicleInsightSearch.ts#L15)

___

### areaRiskClassificationText

• **areaRiskClassificationText**: `string`

Gets or sets search for AreaRiskClassificationText records matching this.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyVehicleInsightSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyVehicleInsightSearch.ts#L17)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [SafetyVehicleInsight](SafetyVehicleInsight.md)s matching this
 [DeviceSearch](DeviceSearch.md). Providing a device ID will
 search for any SafetyVehicleInsight that is assigned to that Device.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyVehicleInsightSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyVehicleInsightSearch.ts#L24)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for SafetyVehicleInsight records at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyVehicleInsightSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyVehicleInsightSearch.ts#L26)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### toDate

• **toDate**: `Date`

Gets or sets search for SafetyVehicleInsight records at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyVehicleInsightSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyVehicleInsightSearch.ts#L28)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
