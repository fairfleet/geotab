[@fairfleet/geotab](../README.md) / EmissionReport

# Interface: EmissionReport

<para />
 A Clean Check Truck emission report.
 <para />
 Security clearance requirements:
 <para />
 Creating/Updating EmissionReport (Add/Set requests) requires security clearances SecurityIdentifier.AccessCleanTruckCheckCompliance;
 <para />
 Retrieving EmissionReport (Get requests) requires one of the following security clearances SecurityIdentifier.AccessCleanTruckCheckCompliance, SecurityIdentifier.AccessCleanTruckCheckComplianceEditor, or SecurityIdentifier.AccessCleanTruckCheckComplianceViewer

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EmissionReport`**

## Table of contents

### Properties

- [emissionVehicleCycle](EmissionReport.md#emissionvehiclecycle)
- [filename](EmissionReport.md#filename)
- [id](EmissionReport.md#id)
- [lastPollFailureReason](EmissionReport.md#lastpollfailurereason)
- [lastResponseCode](EmissionReport.md#lastresponsecode)
- [lastResponsePollDateTime](EmissionReport.md#lastresponsepolldatetime)
- [pollAttemptCount](EmissionReport.md#pollattemptcount)
- [report](EmissionReport.md#report)
- [reportSubmittedDateTime](EmissionReport.md#reportsubmitteddatetime)
- [reportType](EmissionReport.md#reporttype)
- [reportUpdatedDateTime](EmissionReport.md#reportupdateddatetime)
- [responseStatus](EmissionReport.md#responsestatus)

## Properties

### emissionVehicleCycle

• **emissionVehicleCycle**: [`EmissionVehicleCycle`](EmissionVehicleCycle.md)

Gets or sets the EmissionReport.EmissionVehicleCycle from which the [EmissionReport](EmissionReport.md) is generated.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts#L20)

___

### filename

• **filename**: `string`

Gets or sets the filename for [EmissionReport](EmissionReport.md).
 The maximum number of characters allowed for a filename is EmissionReport.MaxFileNameCharLength.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts#L25)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lastPollFailureReason

• **lastPollFailureReason**: `string`

Gets or sets the reason for the last poll attempt failure.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts#L27)

___

### lastResponseCode

• **lastResponseCode**: `number`

Gets or sets the last HTTP response code received from the CARB CTC-VIS API.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts#L29)

___

### lastResponsePollDateTime

• **lastResponsePollDateTime**: `Date`

Gets or sets the DateTime of the last poll attempt of the CARB CTC-VIS API.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts#L31)

___

### pollAttemptCount

• **pollAttemptCount**: `number`

Gets or sets the number of times the CARB CTC-VIS API has been polled for a response.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts#L33)

___

### report

• **report**: `number`[]

Gets or sets a byte array representing the content of [EmissionReport](EmissionReport.md). The maximum byte length allowed for a report is EmissionReport.MaxReportBytes.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts#L35)

___

### reportSubmittedDateTime

• **reportSubmittedDateTime**: `Date`

Gets or sets the DateTime when the report was submitted.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts#L37)

___

### reportType

• **reportType**: `string`

Gets or sets the format or type for the [EmissionReport](EmissionReport.md).
 Valid values are:
 <list><item><description>J1939ZipReport</description></item><item><description>J1979ZipReport</description></item><item><description>J1979V2ZipReport</description></item><item><description>J1939GpgReport</description></item><item><description>J1979GpgReport</description></item><item><description>J1979V2GpgReport</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts#L43)

___

### reportUpdatedDateTime

• **reportUpdatedDateTime**: `Date`

Gets or sets the DateTime when the report was last updated.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts#L45)

___

### responseStatus

• **responseStatus**: `string`

Gets or sets the response status of the report submission to the CARB CTC-VIS database.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReport.ts#L47)
