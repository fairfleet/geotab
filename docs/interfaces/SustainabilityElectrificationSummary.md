[@fairfleet/geotab](../README.md) / SustainabilityElectrificationSummary

# Interface: SustainabilityElectrificationSummary

Data for Sustainability Electrification Summary API

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`SustainabilityElectrificationSummary`**

## Table of contents

### Properties

- [id](SustainabilityElectrificationSummary.md#id)
- [powertrainElectrificationSummary](SustainabilityElectrificationSummary.md#powertrainelectrificationsummary)
- [powertrainGroup](SustainabilityElectrificationSummary.md#powertraingroup)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### powertrainElectrificationSummary

• **powertrainElectrificationSummary**: [`SustainabilityPowertrainElectrificationSummary`](SustainabilityPowertrainElectrificationSummary.md)

Gets or sets the electrification summary.

#### Defined in

[src/types/Checkmate/ObjectModel/Sustainability/SustainabilityElectrificationSummary.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Sustainability/SustainabilityElectrificationSummary.ts#L12)

___

### powertrainGroup

• **powertrainGroup**: [`Group`](Group.md)

Gets or sets the group associated with the summary data.

#### Defined in

[src/types/Checkmate/ObjectModel/Sustainability/SustainabilityElectrificationSummary.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Sustainability/SustainabilityElectrificationSummary.ts#L14)
