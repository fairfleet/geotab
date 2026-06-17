[@fairfleet/geotab](../README.md) / SustainabilityGroupIdlingSummary

# Interface: SustainabilityGroupIdlingSummary

Represents the summarized sustainability idling data grouped by year and date for the specified date range.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`SustainabilityGroupIdlingSummary`**

## Table of contents

### Properties

- [id](SustainabilityGroupIdlingSummary.md#id)
- [powertrainGroup](SustainabilityGroupIdlingSummary.md#powertraingroup)
- [powertrainIdlingSummaries](SustainabilityGroupIdlingSummary.md#powertrainidlingsummaries)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### powertrainGroup

• **powertrainGroup**: [`Group`](Group.md)

Gets or sets the power train group associated with the data.

#### Defined in

[src/types/Checkmate/ObjectModel/Sustainability/SustainabilityGroupIdlingSummary.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Sustainability/SustainabilityGroupIdlingSummary.ts#L11)

___

### powertrainIdlingSummaries

• **powertrainIdlingSummaries**: `unknown`[]

Gets or sets the idling summaries for different powertrain groups

#### Defined in

[src/types/Checkmate/ObjectModel/Sustainability/SustainabilityGroupIdlingSummary.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Sustainability/SustainabilityGroupIdlingSummary.ts#L13)
