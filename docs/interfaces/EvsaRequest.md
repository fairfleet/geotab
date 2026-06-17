[@fairfleet/geotab](../README.md) / EvsaRequest

# Interface: EvsaRequest

Represents a EV Suitability Assessment request.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EvsaRequest`**

## Table of contents

### Properties

- [assessmentName](EvsaRequest.md#assessmentname)
- [assetsCount](EvsaRequest.md#assetscount)
- [evsaConfiguration](EvsaRequest.md#evsaconfiguration)
- [evsaDateTime](EvsaRequest.md#evsadatetime)
- [evsaRequestSettings](EvsaRequest.md#evsarequestsettings)
- [groups](EvsaRequest.md#groups)
- [id](EvsaRequest.md#id)
- [isOpened](EvsaRequest.md#isopened)
- [jobId](EvsaRequest.md#jobid)
- [status](EvsaRequest.md#status)
- [userId](EvsaRequest.md#userid)

## Properties

### assessmentName

• **assessmentName**: `string`

Gets or sets the assessment name.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts#L13)

___

### assetsCount

• **assetsCount**: `number`

Gets or sets the assets count.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts#L15)

___

### evsaConfiguration

• **evsaConfiguration**: [`EvsaConfiguration`](EvsaConfiguration.md)

Gets or sets the EvsaRequest.EvsaConfiguration associated with the [EvsaRequest](EvsaRequest.md).

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts#L17)

___

### evsaDateTime

• **evsaDateTime**: `Date`

Gets or sets the date and time (UTC, ISO 8601 format) when the [EvsaRequest](EvsaRequest.md) was triggered.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts#L19)

___

### evsaRequestSettings

• **evsaRequestSettings**: [`EvsaRequestSettings`](EvsaRequestSettings.md)

Gets or sets the EvsaRequest.EvsaRequestSettings associated with the [EvsaRequest](EvsaRequest.md).

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts#L21)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets the group(s) this preset belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts#L23)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isOpened

• **isOpened**: `boolean`

Gets or sets a value indicating whether the evsa report was opened.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts#L25)

___

### jobId

• **jobId**: `string`

Gets or sets the job Id of the EVSA request.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts#L27)

___

### status

• **status**: `string`

Gets or sets the status of the evsa request.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts#L29)

___

### userId

• **userId**: `string`

Gets or sets the Id of the user triggering the EVSA.

#### Defined in

[src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EvSuitabilityAssessment/EvsaRequest.ts#L31)
