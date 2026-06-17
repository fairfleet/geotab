[@fairfleet/geotab](../README.md) / EvsaConfiguration

# Interface: EvsaConfiguration

Represents the configuration for an EVSA request.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EvsaConfiguration`**

## Table of contents

### Properties

- [electricityCost](EvsaConfiguration.md#electricitycost)
- [evPremium](EvsaConfiguration.md#evpremium)
- [evsaFleetVehicleSizes](EvsaConfiguration.md#evsafleetvehiclesizes)
- [evsaRequestId](EvsaConfiguration.md#evsarequestid)
- [evsaVehicleEstimates](EvsaConfiguration.md#evsavehicleestimates)
- [fuelCost](EvsaConfiguration.md#fuelcost)
- [id](EvsaConfiguration.md#id)
- [monthlyEnrouteCharge](EvsaConfiguration.md#monthlyenroutecharge)
- [preferBev](EvsaConfiguration.md#preferbev)
- [procurementPeriodId](EvsaConfiguration.md#procurementperiodid)
- [procurementType](EvsaConfiguration.md#procurementtype)
- [selectedNonEv](EvsaConfiguration.md#selectednonev)

## Properties

### electricityCost

• **electricityCost**: `number`

Gets or sets the electricity cost.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts#L10)

___

### evPremium

• **evPremium**: `number`

Gets or sets the EV premium.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts#L12)

___

### evsaFleetVehicleSizes

• **evsaFleetVehicleSizes**: `unknown`[]

Gets or sets the EvsaConfiguration.EvsaFleetVehicleSizes associated with the [EvsaConfiguration](EvsaConfiguration.md).

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts#L14)

___

### evsaRequestId

• **evsaRequestId**: `string`

Gets or sets the EVSA request Id.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts#L16)

___

### evsaVehicleEstimates

• **evsaVehicleEstimates**: `unknown`[]

Gets or sets the EvsaConfiguration.EvsaVehicleEstimates associated with the [EvsaConfiguration](EvsaConfiguration.md).

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts#L18)

___

### fuelCost

• **fuelCost**: `number`

Gets or sets the fuel cost.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts#L20)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### monthlyEnrouteCharge

• **monthlyEnrouteCharge**: `number`

Gets or sets the monthly enroute charge.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts#L22)

___

### preferBev

• **preferBev**: `boolean`

Gets or sets a value indicating whether BEV (Battery Electric Vehicle) is preferred.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts#L24)

___

### procurementPeriodId

• **procurementPeriodId**: `number`

Gets or sets the Id of the procurement period.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts#L26)

___

### procurementType

• **procurementType**: `string`

Gets or sets the procurement type.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts#L28)

___

### selectedNonEv

• **selectedNonEv**: `string`

Gets or sets the selected non-EV vehicles (as a text representation, likely comma-separated IDs).

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaConfiguration.ts#L30)
