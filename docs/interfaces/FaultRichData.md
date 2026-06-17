[@fairfleet/geotab](../README.md) / FaultRichData

# Interface: FaultRichData

A class that holds enrichment data for a fault.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`FaultRichData`**

## Table of contents

### Properties

- [additionalData](FaultRichData.md#additionaldata)
- [dateTime](FaultRichData.md#datetime)
- [diagnostic](FaultRichData.md#diagnostic)
- [effectOnComponent](FaultRichData.md#effectoncomponent)
- [engineHours](FaultRichData.md#enginehours)
- [errorType](FaultRichData.md#errortype)
- [faultData](FaultRichData.md#faultdata)
- [faultDescription](FaultRichData.md#faultdescription)
- [id](FaultRichData.md#id)
- [odometer](FaultRichData.md#odometer)
- [recommendation](FaultRichData.md#recommendation)
- [severity](FaultRichData.md#severity)
- [vendorSource](FaultRichData.md#vendorsource)
- [version](FaultRichData.md#version)

## Properties

### additionalData

• **additionalData**: `string`

Gets or sets the vendor JSON data.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultRichData.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultRichData.ts#L15)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the datetime.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultRichData.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultRichData.ts#L17)

___

### diagnostic

• **diagnostic**: [`Diagnostic`](Diagnostic.md)

Gets or sets the diagnostic

#### Defined in

[src/types/Checkmate/ObjectModel/FaultRichData.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultRichData.ts#L19)

___

### effectOnComponent

• **effectOnComponent**: `string`

Gets or sets the effect on component.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultRichData.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultRichData.ts#L21)

___

### engineHours

• **engineHours**: `number`

Gets or sets the engine hours .

#### Defined in

[src/types/Checkmate/ObjectModel/FaultRichData.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultRichData.ts#L23)

___

### errorType

• **errorType**: [`FaultRichDataErrorType`](../README.md#faultrichdataerrortype)

Gets or sets the Error Type.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultRichData.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultRichData.ts#L25)

___

### faultData

• **faultData**: [`FaultData`](FaultData.md)

Gets or sets the fault.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultRichData.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultRichData.ts#L27)

___

### faultDescription

• **faultDescription**: `string`

Gets or sets the fault description.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultRichData.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultRichData.ts#L29)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### odometer

• **odometer**: `number`

Gets or sets the odometer.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultRichData.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultRichData.ts#L31)

___

### recommendation

• **recommendation**: `string`

Gets or sets the recommendation.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultRichData.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultRichData.ts#L33)

___

### severity

• **severity**: [`DtcSeverity`](../README.md#dtcseverity)

Gets or sets the severity.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultRichData.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultRichData.ts#L35)

___

### vendorSource

• **vendorSource**: [`FaultRichDataVendorSource`](../README.md#faultrichdatavendorsource)

Gets or sets the vendor source.

#### Defined in

[src/types/Checkmate/ObjectModel/FaultRichData.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FaultRichData.ts#L37)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
