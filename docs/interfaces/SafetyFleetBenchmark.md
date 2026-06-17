[@fairfleet/geotab](../README.md) / SafetyFleetBenchmark

# Interface: SafetyFleetBenchmark

Data for a fleet cluster.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`SafetyFleetBenchmark`**

## Table of contents

### Properties

- [crashProbabilityBenchmarkKm](SafetyFleetBenchmark.md#crashprobabilitybenchmarkkm)
- [crashProbabilityBenchmarkMile](SafetyFleetBenchmark.md#crashprobabilitybenchmarkmile)
- [crashProbabilityBestInClassKm](SafetyFleetBenchmark.md#crashprobabilitybestinclasskm)
- [crashProbabilityBestInClassMile](SafetyFleetBenchmark.md#crashprobabilitybestinclassmile)
- [id](SafetyFleetBenchmark.md#id)
- [lastUpdated](SafetyFleetBenchmark.md#lastupdated)
- [majorVersion](SafetyFleetBenchmark.md#majorversion)
- [minorVersion](SafetyFleetBenchmark.md#minorversion)
- [observationDate](SafetyFleetBenchmark.md#observationdate)
- [patchVersion](SafetyFleetBenchmark.md#patchversion)
- [predictedCrashesBenchmark](SafetyFleetBenchmark.md#predictedcrashesbenchmark)
- [predictedCrashesBestInClass](SafetyFleetBenchmark.md#predictedcrashesbestinclass)

## Properties

### crashProbabilityBenchmarkKm

• **crashProbabilityBenchmarkKm**: `number`

Gets or sets the crash probability per 100 000 km benchmark value.
 This value is derived from SafetyFleetBenchmark.PredictedCrashesBenchmark

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts#L13)

___

### crashProbabilityBenchmarkMile

• **crashProbabilityBenchmarkMile**: `number`

Gets or sets the crash probability per 100 000 miles benchmark value.
 This value is derived from SafetyFleetBenchmark.PredictedCrashesBenchmark

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts#L18)

___

### crashProbabilityBestInClassKm

• **crashProbabilityBestInClassKm**: `number`

Gets or sets the crash probability per 100 000 km best in class value.
 This value is derived from SafetyFleetBenchmark.PredictedCrashesBestInClass

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts#L23)

___

### crashProbabilityBestInClassMile

• **crashProbabilityBestInClassMile**: `number`

Gets or sets the crash probability per 100 000 mile best in class value.
 This value is derived from SafetyFleetBenchmark.PredictedCrashesBestInClass

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts#L28)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lastUpdated

• **lastUpdated**: `Date`

Gets or sets the last update date of the data.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts#L30)

___

### majorVersion

• **majorVersion**: `number`

Gets or sets the major version of the safety insight data.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts#L32)

___

### minorVersion

• **minorVersion**: `number`

Gets or sets the minor version of the safety insight data.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts#L34)

___

### observationDate

• **observationDate**: `Date`

Gets or sets the observation date.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts#L36)

___

### patchVersion

• **patchVersion**: `number`

Gets or sets the patch version of the safety insight data.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts#L38)

___

### predictedCrashesBenchmark

• **predictedCrashesBenchmark**: `number`

Gets or sets the predicted crashes benchmark (50th percentile) value. Units of crashes per 1 000 000 km.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts#L40)

___

### predictedCrashesBestInClass

• **predictedCrashesBestInClass**: `number`

Gets or sets the predicted crashes best in class (80th percentile) value. Units of crashes per 1 000 000 km.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetBenchmark.ts#L42)
