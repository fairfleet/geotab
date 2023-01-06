[@fairfleet/geotab](../README.md) / EventOccurrence

# Interface: EventOccurrence

A particular occurrence of an [EventRule](EventRule.md).

**`Deprecated`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EventOccurrence`**

## Table of contents

### Properties

- [active](EventOccurrence.md#active)
- [adjustedEngineHours](EventOccurrence.md#adjustedenginehours)
- [adjustedOdometer](EventOccurrence.md#adjustedodometer)
- [comment](EventOccurrence.md#comment)
- [costCurrency](EventOccurrence.md#costcurrency)
- [costCurrencyCode](EventOccurrence.md#costcurrencycode)
- [costCurrencyConverted](EventOccurrence.md#costcurrencyconverted)
- [costCurrencyConvertedCode](EventOccurrence.md#costcurrencyconvertedcode)
- [currencyConversionFailed](EventOccurrence.md#currencyconversionfailed)
- [currentEngineHours](EventOccurrence.md#currentenginehours)
- [currentOdometer](EventOccurrence.md#currentodometer)
- [device](EventOccurrence.md#device)
- [eventDate](EventOccurrence.md#eventdate)
- [eventRule](EventOccurrence.md#eventrule)
- [eventType](EventOccurrence.md#eventtype)
- [id](EventOccurrence.md#id)
- [laborCost](EventOccurrence.md#laborcost)
- [laborCostConverted](EventOccurrence.md#laborcostconverted)
- [mediaFiles](EventOccurrence.md#mediafiles)
- [partsCost](EventOccurrence.md#partscost)
- [partsCostConverted](EventOccurrence.md#partscostconverted)
- [reference](EventOccurrence.md#reference)
- [taxCost](EventOccurrence.md#taxcost)
- [taxCostConverted](EventOccurrence.md#taxcostconverted)
- [totalCost](EventOccurrence.md#totalcost)
- [totalCostConverted](EventOccurrence.md#totalcostconverted)

## Properties

### active

• **active**: `boolean`

Gets or sets a value indicating whether this [EventOccurrence](EventOccurrence.md) is active.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L19)

___

### adjustedEngineHours

• **adjustedEngineHours**: `string`

Gets or sets the adjusted engine hours.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L21)

___

### adjustedOdometer

• **adjustedOdometer**: `number`

Gets or sets the adjusted odometer.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L23)

___

### comment

• **comment**: `string`

Gets or sets free text field where any user information can be stored and referenced for this entity.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:25](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L25)

___

### costCurrency

• **costCurrency**: [`Currency`](../README.md#currency)

Gets or sets the currency in which costs were entered.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:27](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L27)

___

### costCurrencyCode

• **costCurrencyCode**: `string`

Gets the code for CostCurrency

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:29](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L29)

___

### costCurrencyConverted

• **costCurrencyConverted**: [`Currency`](../README.md#currency)

Gets or sets the currency in which costs will be displayed.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:31](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L31)

___

### costCurrencyConvertedCode

• **costCurrencyConvertedCode**: `string`

Gets the code for CostCurrencyConverted

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:33](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L33)

___

### currencyConversionFailed

• **currencyConversionFailed**: `boolean`

Gets or sets a value indicating whether the currency conversionfailed

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:35](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L35)

___

### currentEngineHours

• **currentEngineHours**: `string`

Gets or sets the current engine hours.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:37](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L37)

___

### currentOdometer

• **currentOdometer**: `number`

Gets or sets the current odometer.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:39](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L39)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets gets the [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:41](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L41)

___

### eventDate

• **eventDate**: `Date`

Gets or sets the event date.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:43](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L43)

___

### eventRule

• **eventRule**: [`EventRule`](EventRule.md)

Gets or sets the event rule.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:45](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L45)

___

### eventType

• **eventType**: [`NameEntity`](NameEntity.md)

Gets or sets the event type. Should only be set if EventRule is null

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:47](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L47)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### laborCost

• **laborCost**: `number`

Gets or sets the amount paid for labor.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:49](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L49)

___

### laborCostConverted

• **laborCostConverted**: `number`

Gets or sets the amount paid for labor converted to UI Settings Currency.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:51](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L51)

___

### mediaFiles

• **mediaFiles**: [`MediaFile`](MediaFile.md)[]

Gets or sets the list of [MediaFile](MediaFile.md) for a event.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:53](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L53)

___

### partsCost

• **partsCost**: `number`

Gets or sets the amount paid for parts.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:55](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L55)

___

### partsCostConverted

• **partsCostConverted**: `number`

Gets or sets the amount paid for Parts cost converted to UI Settings Currency.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:57](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L57)

___

### reference

• **reference**: `string`

Gets or sets the reference or work order number for the event.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:59](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L59)

___

### taxCost

• **taxCost**: `number`

Gets or sets the amount paid in taxes.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:61](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L61)

___

### taxCostConverted

• **taxCostConverted**: `number`

Gets or sets the amount paid in taxes converted to UI Settings Currency.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:63](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L63)

___

### totalCost

• **totalCost**: `number`

Gets or sets the amount paid in taxes.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:65](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L65)

___

### totalCostConverted

• **totalCostConverted**: `number`

Gets or sets the amount paid in taxes.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:67](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L67)
