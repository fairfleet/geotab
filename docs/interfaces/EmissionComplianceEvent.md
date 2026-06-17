[@fairfleet/geotab](../README.md) / EmissionComplianceEvent

# Interface: EmissionComplianceEvent

Represents a significant event in the compliance timeline of a vehicle's Clean Truck Check (CTC) enrollment.
 This entity logs key milestones, such as the initial enrollment, scheduled compliance actions,
 report submissions to the Californian Air Resources Board (CARB), and the resulting compliance status feedback.
 Security clearance requirements:
 <list type="bullet"><item><description>Creating/Updating (Add/Set requests) for EmissionComplianceEvent are not available to API users.</description></item><item><description>Retrieving (Get requests) requires one of the following clearances: AccessCleanTruckCheckCompliance, AccessCleanTruckCheckComplianceEditor, or AccessCleanTruckCheckComplianceViewer.</description></item></list>

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`EmissionComplianceEvent`**

## Table of contents

### Properties

- [complianceErrorCount](EmissionComplianceEvent.md#complianceerrorcount)
- [complianceStatus](EmissionComplianceEvent.md#compliancestatus)
- [createdDateTime](EmissionComplianceEvent.md#createddatetime)
- [emissionVehicleEnrollment](EmissionComplianceEvent.md#emissionvehicleenrollment)
- [eventType](EmissionComplianceEvent.md#eventtype)
- [id](EmissionComplianceEvent.md#id)
- [nextComplianceDueDateTime](EmissionComplianceEvent.md#nextcomplianceduedatetime)
- [protocol](EmissionComplianceEvent.md#protocol)
- [scheduleType](EmissionComplianceEvent.md#scheduletype)
- [scheduledDateTime](EmissionComplianceEvent.md#scheduleddatetime)
- [submittedDateTime](EmissionComplianceEvent.md#submitteddatetime)
- [testResultMessage](EmissionComplianceEvent.md#testresultmessage)
- [version](EmissionComplianceEvent.md#version)

## Properties

### complianceErrorCount

• **complianceErrorCount**: `number`

Gets or sets the compliance error count.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts#L17)

___

### complianceStatus

• **complianceStatus**: `string`

Gets or sets the compliance status associated with this event. This can represent an initial state (NoCompleteCycles) or feedback from CARB.
 Note: NoCompleteCycles indicates that no completed valid Clean Truck Check cycle has been received for an enrolled device.
 Valid values are:
 <list type="bullet"><item><description>Fail</description></item><item><description>Pass</description></item><item><description>NotReady</description></item><item><description>Incomplete</description></item><item><description>InvalidTesterId</description></item><item><description>InvalidSoftwareVersion</description></item><item><description>VehicleNotApplicableForObdTesting</description></item><item><description>TestResultCouldNotBeDetermined</description></item><item><description>VehicleNotApplicableForCleanTruckCheck</description></item><item><description>InvalidTest</description></item><item><description>NoCompleteCycles</description></item><item><description>PendingReportSubmissionWindow</description></item><item><description>FailDueToApparentChangeInConfiguration</description></item><item><description>RefereeReferral</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts#L24)

___

### createdDateTime

• **createdDateTime**: `Date`

Gets or sets the DateTime when the emission compliance event record was created. Timestamp of the last response received from CARB for a submitted report.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts#L26)

___

### emissionVehicleEnrollment

• **emissionVehicleEnrollment**: [`EmissionVehicleEnrollment`](EmissionVehicleEnrollment.md)

Gets or sets the [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md) the event is associated with.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts#L28)

___

### eventType

• **eventType**: `string`

Gets or sets the event type for the compliance event.
 Valid values are:
 <list type="bullet"><item><description>InitialDeadlineSet</description></item><item><description>ResponseReceived</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts#L34)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### nextComplianceDueDateTime

• **nextComplianceDueDateTime**: `Date`

Gets or sets the DateTime the next compliance action is due following this event.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts#L36)

___

### protocol

• **protocol**: `string`

Gets or sets the emission reporting protocol.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts#L38)

___

### scheduleType

• **scheduleType**: `string`

Gets or sets the schedule type for the compliance event.
 Valid values are:
 <list type="bullet"><item><description>NextIgnitionOn</description></item><item><description>DateTime</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts#L46)

___

### scheduledDateTime

• **scheduledDateTime**: `Date`

Gets or sets the DateTime this event was scheduled for.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts#L40)

___

### submittedDateTime

• **submittedDateTime**: `Date`

Gets or sets the DateTime a report related to this event was submitted to CARB. Timestamp of the finalized event record. A response has been received.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts#L48)

___

### testResultMessage

• **testResultMessage**: `string`

Gets or sets the emission compliance event test result message.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEvent.ts#L50)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
