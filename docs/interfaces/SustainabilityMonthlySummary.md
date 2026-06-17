[@fairfleet/geotab](../README.md) / SustainabilityMonthlySummary

# Interface: SustainabilityMonthlySummary

Represents the summarized sustainability data grouped by year and date for the specified date range.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`SustainabilityMonthlySummary`**

## Table of contents

### Properties

- [id](SustainabilityMonthlySummary.md#id)
- [powertrainGroup](SustainabilityMonthlySummary.md#powertraingroup)
- [powertrainMonthlySummaries](SustainabilityMonthlySummary.md#powertrainmonthlysummaries)

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

Gets or sets the group associated with the summarized data.

#### Defined in

[src/types/Checkmate/ObjectModel/Sustainability/SustainabilityMonthlySummary.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Sustainability/SustainabilityMonthlySummary.ts#L11)

___

### powertrainMonthlySummaries

• **powertrainMonthlySummaries**: `unknown`[]

Gets or sets the idling summaries for different powertrain groups

#### Defined in

[src/types/Checkmate/ObjectModel/Sustainability/SustainabilityMonthlySummary.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Sustainability/SustainabilityMonthlySummary.ts#L13)
