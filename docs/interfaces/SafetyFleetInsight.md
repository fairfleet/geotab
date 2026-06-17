[@fairfleet/geotab](../README.md) / SafetyFleetInsight

# Interface: SafetyFleetInsight

Data for a fleet cluster

## Table of contents

### Properties

- [collisionCount](SafetyFleetInsight.md#collisioncount)
- [deviceCount](SafetyFleetInsight.md#devicecount)
- [distanceTodayKm](SafetyFleetInsight.md#distancetodaykm)
- [durationTodayHours](SafetyFleetInsight.md#durationtodayhours)
- [harshAccelerationRank](SafetyFleetInsight.md#harshaccelerationrank)
- [harshBrakingRank](SafetyFleetInsight.md#harshbrakingrank)
- [harshCorneringRank](SafetyFleetInsight.md#harshcorneringrank)
- [majorVersion](SafetyFleetInsight.md#majorversion)
- [metaData](SafetyFleetInsight.md#metadata)
- [minorVersion](SafetyFleetInsight.md#minorversion)
- [observationDate](SafetyFleetInsight.md#observationdate)
- [overallSafetyRank](SafetyFleetInsight.md#overallsafetyrank)
- [patchVersion](SafetyFleetInsight.md#patchversion)
- [predictedCrashes](SafetyFleetInsight.md#predictedcrashes)
- [predictedCrashesBenchmark](SafetyFleetInsight.md#predictedcrashesbenchmark)
- [predictedCrashesBestInClass](SafetyFleetInsight.md#predictedcrashesbestinclass)
- [seatbeltRank](SafetyFleetInsight.md#seatbeltrank)
- [speedingRank](SafetyFleetInsight.md#speedingrank)
- [tailgatingDistanceKm7Day](SafetyFleetInsight.md#tailgatingdistancekm7day)
- [tailgatingDistanceKmToday](SafetyFleetInsight.md#tailgatingdistancekmtoday)
- [tailgatingRank](SafetyFleetInsight.md#tailgatingrank)
- [totalDistanceKm](SafetyFleetInsight.md#totaldistancekm)
- [totalDurationHours](SafetyFleetInsight.md#totaldurationhours)

## Properties

### collisionCount

• **collisionCount**: `number`

Gets or sets the collision count.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:8](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L8)

___

### deviceCount

• **deviceCount**: `number`

Gets or sets the number of device count.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L10)

___

### distanceTodayKm

• **distanceTodayKm**: `number`

Gets or sets the distance driven in km on the observation date.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L12)

___

### durationTodayHours

• **durationTodayHours**: `number`

Gets or sets the duration driven in hours on the observation date.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L14)

___

### harshAccelerationRank

• **harshAccelerationRank**: `number`

Gets or sets the harsh acceleration rank.
 From 0: worst to 1: best

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L19)

___

### harshBrakingRank

• **harshBrakingRank**: `number`

Gets or sets the harsh braking rank.
 From 0: worst to 1: best

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L24)

___

### harshCorneringRank

• **harshCorneringRank**: `number`

Gets or sets the harsh cornering rank.
 From 0: worst to 1: best

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L29)

___

### majorVersion

• **majorVersion**: `number`

Gets or sets the major version of the safety insight data.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L31)

___

### metaData

• **metaData**: `string`

Gets or sets metadata in JSON format.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L33)

___

### minorVersion

• **minorVersion**: `number`

Gets or sets the minor version of the safety insight data.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L35)

___

### observationDate

• **observationDate**: `Date`

Gets or sets the observation date.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L37)

___

### overallSafetyRank

• **overallSafetyRank**: `number`

Gets or sets the overall safety rank.
 From 0: worst to 1: best

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L42)

___

### patchVersion

• **patchVersion**: `number`

Gets or sets the patch version of the safety insight data.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L44)

___

### predictedCrashes

• **predictedCrashes**: `number`

Gets or sets the predicted crashes value. Units of crashes per 1 000 000 km.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L46)

___

### predictedCrashesBenchmark

• **predictedCrashesBenchmark**: `number`

Gets or sets the predicted crashes benchmark. Units of crashes per 1 000 000 km.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L48)

___

### predictedCrashesBestInClass

• **predictedCrashesBestInClass**: `number`

Gets or sets the predicted crashes best in class. Units of crashes per 1 000 000 km.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L50)

___

### seatbeltRank

• **seatbeltRank**: `number`

Gets or sets the seatbelt rank.
 From 0: worst to 1: best

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:55](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L55)

___

### speedingRank

• **speedingRank**: `number`

Gets or sets the speeding rank.
 From 0: worst to 1: best

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:60](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L60)

___

### tailgatingDistanceKm7Day

• **tailgatingDistanceKm7Day**: `number`

Gets or sets the tailgating distance 7 day in km.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:62](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L62)

___

### tailgatingDistanceKmToday

• **tailgatingDistanceKmToday**: `number`

Gets or sets the tailgating distance today in km.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:64](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L64)

___

### tailgatingRank

• **tailgatingRank**: `number`

Gets or sets the tailgating rank.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:66](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L66)

___

### totalDistanceKm

• **totalDistanceKm**: `number`

Gets or sets the total distance driven value in km over rolling 7 day window ending on observation date.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:68](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L68)

___

### totalDurationHours

• **totalDurationHours**: `number`

Gets or sets the total duration driven value in hours over rolling 7 day window ending on observation date.

#### Defined in

[src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts:70](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/SafetyFleetInsight.ts#L70)
