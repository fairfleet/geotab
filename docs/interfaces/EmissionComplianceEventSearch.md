[@fairfleet/geotab](../README.md) / EmissionComplianceEventSearch

# Interface: EmissionComplianceEventSearch

A search object for finding specific [EmissionComplianceEvent](EmissionComplianceEvent.md) records.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EmissionComplianceEventSearch`**

## Table of contents

### Properties

- [complianceStatuses](EmissionComplianceEventSearch.md#compliancestatuses)
- [emissionVehicleEnrollmentSearch](EmissionComplianceEventSearch.md#emissionvehicleenrollmentsearch)
- [eventType](EmissionComplianceEventSearch.md#eventtype)
- [fromDate](EmissionComplianceEventSearch.md#fromdate)
- [fromScheduledDateTime](EmissionComplianceEventSearch.md#fromscheduleddatetime)
- [fromSubmittedDateTime](EmissionComplianceEventSearch.md#fromsubmitteddatetime)
- [hasComplianceError](EmissionComplianceEventSearch.md#hascomplianceerror)
- [id](EmissionComplianceEventSearch.md#id)
- [maxVersion](EmissionComplianceEventSearch.md#maxversion)
- [onlyLatestSubmission](EmissionComplianceEventSearch.md#onlylatestsubmission)
- [scheduleType](EmissionComplianceEventSearch.md#scheduletype)
- [toDate](EmissionComplianceEventSearch.md#todate)
- [toScheduledDateTime](EmissionComplianceEventSearch.md#toscheduleddatetime)
- [toSubmittedDateTime](EmissionComplianceEventSearch.md#tosubmitteddatetime)
- [version](EmissionComplianceEventSearch.md#version)

## Properties

### complianceStatuses

• **complianceStatuses**: `string`[]

Gets or sets a list of ComplianceStatus to search for all [EmissionComplianceEvent](EmissionComplianceEvent.md) records matching one of the compliance statuses.
 Valid "ComplianceStatus" values are:
 <list><item><description>Fail</description></item><item><description>Pass</description></item><item><description>NotReady</description></item><item><description>Incomplete</description></item><item><description>InvalidTesterId</description></item><item><description>OutdatedSoftwareVersion</description></item><item><description>VehicleNotApplicableForObdTesting</description></item><item><description>TestResultCouldNotBeDetermined</description></item><item><description>VehicleNotApplicableForCleanTruckCheck</description></item><item><description>InvalidTest</description></item><item><description>NoCompleteCycles</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L15)

___

### emissionVehicleEnrollmentSearch

• **emissionVehicleEnrollmentSearch**: [`EmissionVehicleEnrollmentSearch`](EmissionVehicleEnrollmentSearch.md)

Gets or sets an EmissionComplianceEventSearch.EmissionVehicleEnrollmentSearch to filter events based on their parent enrollment.
 Available search options are:
 <list type="bullet"><item><description>Id</description></item><item><description>EnrollmentIds</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L21)

___

### eventType

• **eventType**: `string`

Gets or sets the event type for the compliance event.
 Valid values are:
 <list type="bullet"><item><description>InitialDeadlineSet</description></item><item><description>ResponseReceived</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L27)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the start of the date range (exclusive) to search for events. This property typically filters on the CreatedDateTime of the entity.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L29)

___

### fromScheduledDateTime

• **fromScheduledDateTime**: `Date`

Gets or sets the start of the date range (inclusive) to search for [EmissionComplianceEvent](EmissionComplianceEvent.md) records by their ScheduledDateTime.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L31)

___

### fromSubmittedDateTime

• **fromSubmittedDateTime**: `Date`

Gets or sets the start of the date range (inclusive) to search for [EmissionComplianceEvent](EmissionComplianceEvent.md) records by their SubmittedDateTime.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L33)

___

### hasComplianceError

• **hasComplianceError**: `boolean`

Gets or sets a value to search for [EmissionComplianceEvent](EmissionComplianceEvent.md) records that have a compliance error.
 If true, returns records with ComplianceErrorCount greater than 0.
 If false, returns records with a zero or null error count.
 If unset (null), this filter is not applied.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L40)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum version of the [EmissionComplianceEvent](EmissionComplianceEvent.md) to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L42)

___

### onlyLatestSubmission

• **onlyLatestSubmission**: `boolean`

Gets or sets a value indicating whether to return only the latest [EmissionComplianceEvent](EmissionComplianceEvent.md) for each associated [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md).
 If true, returns only the most recent event record (by version) per enrollment. The default value is false.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L47)

___

### scheduleType

• **scheduleType**: `string`

Gets or sets the submission schedule type to search for.
 Valid values are:
 <list type="bullet"><item><description>NextIgnitionOn</description></item><item><description>DateTime</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:53](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L53)

___

### toDate

• **toDate**: `Date`

Gets or sets the end of the date range (exclusive) to search for events. This property typically filters on the CreatedDateTime of the entity.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:55](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L55)

___

### toScheduledDateTime

• **toScheduledDateTime**: `Date`

Gets or sets the end of the date range (inclusive) to search for [EmissionComplianceEvent](EmissionComplianceEvent.md) records by their ScheduledDateTime.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:57](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L57)

___

### toSubmittedDateTime

• **toSubmittedDateTime**: `Date`

Gets or sets the end of the date range (inclusive) to search for [EmissionComplianceEvent](EmissionComplianceEvent.md) records by their SubmittedDateTime.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:59](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L59)

___

### version

• **version**: `number`

Gets or sets the minimum version of the [EmissionComplianceEvent](EmissionComplianceEvent.md) to search for.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts:61](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionComplianceEventSearch.ts#L61)
