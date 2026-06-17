[@fairfleet/geotab](../README.md) / EventOccurrence

# Interface: EventOccurrence

A particular occurrence of an [MaintenanceSchedule](MaintenanceSchedule.md).

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
- [currentEngineHoursInHours](EventOccurrence.md#currentenginehoursinhours)
- [currentOdometer](EventOccurrence.md#currentodometer)
- [device](EventOccurrence.md#device)
- [eventDate](EventOccurrence.md#eventdate)
- [eventRule](EventOccurrence.md#eventrule)
- [eventType](EventOccurrence.md#eventtype)
- [id](EventOccurrence.md#id)
- [laborCost](EventOccurrence.md#laborcost)
- [laborCostConverted](EventOccurrence.md#laborcostconverted)
- [maintenanceSchedule](EventOccurrence.md#maintenanceschedule)
- [mediaFiles](EventOccurrence.md#mediafiles)
- [partsCost](EventOccurrence.md#partscost)
- [partsCostConverted](EventOccurrence.md#partscostconverted)
- [reference](EventOccurrence.md#reference)
- [skipped](EventOccurrence.md#skipped)
- [snoozed](EventOccurrence.md#snoozed)
- [taxCost](EventOccurrence.md#taxcost)
- [taxCostConverted](EventOccurrence.md#taxcostconverted)
- [totalCost](EventOccurrence.md#totalcost)
- [totalCostConverted](EventOccurrence.md#totalcostconverted)

## Properties

### active

• **active**: `boolean`

Gets or sets a value indicating whether this [EventOccurrence](EventOccurrence.md) is active.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L20)

___

### adjustedEngineHours

• **adjustedEngineHours**: `string`

Gets or sets the adjusted engine hours.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L22)

___

### adjustedOdometer

• **adjustedOdometer**: `number`

Gets or sets the adjusted odometer.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L24)

___

### comment

• **comment**: `string`

Gets or sets free text field where any user information can be stored and referenced for this entity.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L26)

___

### costCurrency

• **costCurrency**: [`Currency`](../README.md#currency)

Gets or sets the currency in which costs were entered.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L28)

___

### costCurrencyCode

• **costCurrencyCode**: `string`

Gets the code for CostCurrency

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L30)

___

### costCurrencyConverted

• **costCurrencyConverted**: [`Currency`](../README.md#currency)

Gets or sets the currency in which costs will be displayed.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L32)

___

### costCurrencyConvertedCode

• **costCurrencyConvertedCode**: `string`

Gets the code for CostCurrencyConverted

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L34)

___

### currencyConversionFailed

• **currencyConversionFailed**: `boolean`

Gets or sets a value indicating whether the currency conversion failed

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L36)

___

### currentEngineHours

• **currentEngineHours**: `string`

Gets or sets the current engine hours.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L38)

___

### currentEngineHoursInHours

• **currentEngineHoursInHours**: `number`

Gets the current engine hours in hours as an integer.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L40)

___

### currentOdometer

• **currentOdometer**: `number`

Gets or sets the current odometer.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L42)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets gets the [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L44)

___

### eventDate

• **eventDate**: `Date`

Gets or sets the event date.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L46)

___

### eventRule

• **eventRule**: [`EventRule`](EventRule.md)

Gets or sets the event rule.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L48)

___

### eventType

• **eventType**: [`EventType`](EventType.md)

Gets or sets the event type. Should only be set if EventRule is null

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L50)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### laborCost

• **laborCost**: `number`

Gets or sets the amount paid for labor.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L52)

___

### laborCostConverted

• **laborCostConverted**: `number`

Gets or sets the amount paid for labor converted to UI Settings Currency.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L54)

___

### maintenanceSchedule

• **maintenanceSchedule**: [`MaintenanceSchedule`](MaintenanceSchedule.md)

Gets or sets the maintenance schedule.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L56)

___

### mediaFiles

• **mediaFiles**: [`MediaFile`](MediaFile.md)[]

Gets or sets the list of [MediaFile](MediaFile.md) for a event.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L58)

___

### partsCost

• **partsCost**: `number`

Gets or sets the amount paid for parts.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:60](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L60)

___

### partsCostConverted

• **partsCostConverted**: `number`

Gets or sets the amount paid for Parts cost converted to UI Settings Currency.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:62](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L62)

___

### reference

• **reference**: `string`

Gets or sets the reference or work order number for the event.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:64](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L64)

___

### skipped

• **skipped**: `boolean`

Gets or sets a value indicating whether the event isn't being completed

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:66](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L66)

___

### snoozed

• **snoozed**: `boolean`

Gets or sets a value indicating whether the event has been delayed

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:68](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L68)

___

### taxCost

• **taxCost**: `number`

Gets or sets the amount paid in taxes.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:70](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L70)

___

### taxCostConverted

• **taxCostConverted**: `number`

Gets or sets the amount paid in taxes converted to UI Settings Currency.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:72](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L72)

___

### totalCost

• **totalCost**: `number`

Gets or sets the amount paid in taxes.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:74](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L74)

___

### totalCostConverted

• **totalCostConverted**: `number`

Gets or sets the amount paid in taxes.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrence.ts:76](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EventOccurrence.ts#L76)
