[@fairfleet/geotab](../README.md) / EmissionReportSearch

# Interface: EmissionReportSearch

Search class for [EmissionReport](EmissionReport.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EmissionReportSearch`**

## Table of contents

### Properties

- [emissionVehicleCycleSearch](EmissionReportSearch.md#emissionvehiclecyclesearch)
- [filename](EmissionReportSearch.md#filename)
- [fromLastResponsePollDateTime](EmissionReportSearch.md#fromlastresponsepolldatetime)
- [fromReportSubmittedDateTime](EmissionReportSearch.md#fromreportsubmitteddatetime)
- [fromReportUpdatedDateTime](EmissionReportSearch.md#fromreportupdateddatetime)
- [id](EmissionReportSearch.md#id)
- [isSubmitted](EmissionReportSearch.md#issubmitted)
- [lastPollFailureReason](EmissionReportSearch.md#lastpollfailurereason)
- [maxId](EmissionReportSearch.md#maxid)
- [maxPollAttemptCount](EmissionReportSearch.md#maxpollattemptcount)
- [minId](EmissionReportSearch.md#minid)
- [minPollAttemptCount](EmissionReportSearch.md#minpollattemptcount)
- [reportType](EmissionReportSearch.md#reporttype)
- [responseStatus](EmissionReportSearch.md#responsestatus)
- [toLastResponsePollDateTime](EmissionReportSearch.md#tolastresponsepolldatetime)
- [toReportSubmittedDateTime](EmissionReportSearch.md#toreportsubmitteddatetime)
- [toReportUpdatedDateTime](EmissionReportSearch.md#toreportupdateddatetime)
- [version](EmissionReportSearch.md#version)

## Properties

### emissionVehicleCycleSearch

• **emissionVehicleCycleSearch**: [`EmissionVehicleCycleSearch`](EmissionVehicleCycleSearch.md)

Gets or sets the search criteria for the EmissionReport.EmissionVehicleCycle property.
 Available EmissionReportSearch.EmissionVehicleCycleSearch options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L15)

___

### filename

• **filename**: `string`

Gets or sets the filename to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L17)

___

### fromLastResponsePollDateTime

• **fromLastResponsePollDateTime**: `Date`

Gets or sets the from date for the last response poll date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L19)

___

### fromReportSubmittedDateTime

• **fromReportSubmittedDateTime**: `Date`

Gets or sets the from date for the report submitted date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L21)

___

### fromReportUpdatedDateTime

• **fromReportUpdatedDateTime**: `Date`

Gets or sets the from date for the report updated date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L23)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isSubmitted

• **isSubmitted**: `boolean`

Gets or sets a value indicating whether to search for submitted reports.
 If true, only returns submitted [EmissionReport](EmissionReport.md)s;
 if false, only returns unsubmitted [EmissionReport](EmissionReport.md)s;
 If unset, return all [EmissionReport](EmissionReport.md)s matching other search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L30)

___

### lastPollFailureReason

• **lastPollFailureReason**: `string`

Gets or sets the last poll failure reason to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L32)

___

### maxId

• **maxId**: `string`

Gets or sets the maximum Id of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L34)

___

### maxPollAttemptCount

• **maxPollAttemptCount**: `number`

Gets or sets the maximum number of poll attempts to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L36)

___

### minId

• **minId**: `string`

Gets or sets the minimum Id of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L38)

___

### minPollAttemptCount

• **minPollAttemptCount**: `number`

Gets or sets the minimum number of poll attempts to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L40)

___

### reportType

• **reportType**: `string`

Gets or sets the report type to search for.
 Valid values are:
 <list><item><description>J1939ZipReport</description></item><item><description>J1979ZipReport</description></item><item><description>J1979V2ZipReport</description></item><item><description>J1939GpgReport</description></item><item><description>J1979GpgReport</description></item><item><description>J1979V2GpgReport</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L46)

___

### responseStatus

• **responseStatus**: `string`

Gets or sets the response status to search for.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L48)

___

### toLastResponsePollDateTime

• **toLastResponsePollDateTime**: `Date`

Gets or sets the to date for the last response poll date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L50)

___

### toReportSubmittedDateTime

• **toReportSubmittedDateTime**: `Date`

Gets or sets the to date for the report submitted date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L52)

___

### toReportUpdatedDateTime

• **toReportUpdatedDateTime**: `Date`

Gets or sets the to date for the report updated date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionReportSearch.ts#L54)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
