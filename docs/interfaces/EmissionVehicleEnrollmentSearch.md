[@fairfleet/geotab](../README.md) / EmissionVehicleEnrollmentSearch

# Interface: EmissionVehicleEnrollmentSearch

Search class for [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EmissionVehicleEnrollmentSearch`**

## Table of contents

### Properties

- [deviceSearch](EmissionVehicleEnrollmentSearch.md#devicesearch)
- [enrollmentIds](EmissionVehicleEnrollmentSearch.md#enrollmentids)
- [enrollmentStatuses](EmissionVehicleEnrollmentSearch.md#enrollmentstatuses)
- [fromDate](EmissionVehicleEnrollmentSearch.md#fromdate)
- [fromDmvRegistrationDateTime](EmissionVehicleEnrollmentSearch.md#fromdmvregistrationdatetime)
- [id](EmissionVehicleEnrollmentSearch.md#id)
- [includeDisenrolledEnrollments](EmissionVehicleEnrollmentSearch.md#includedisenrolledenrollments)
- [includeRejectedEnrollments](EmissionVehicleEnrollmentSearch.md#includerejectedenrollments)
- [loggingFrequencyType](EmissionVehicleEnrollmentSearch.md#loggingfrequencytype)
- [maxVersion](EmissionVehicleEnrollmentSearch.md#maxversion)
- [toDate](EmissionVehicleEnrollmentSearch.md#todate)
- [toDmvRegistrationDateTime](EmissionVehicleEnrollmentSearch.md#todmvregistrationdatetime)
- [version](EmissionVehicleEnrollmentSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets EmissionVehicleEnrollmentSearch.DeviceSearch to filter [EmissionVehicleEnrollmentSearch](EmissionVehicleEnrollmentSearch.md) result.
 Available EmissionVehicleEnrollmentSearch.DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>DeviceIds</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts#L15)

___

### enrollmentIds

• **enrollmentIds**: `string`[]

Gets or sets a list of enrollment Id(s) to search for [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md)s matching one of the enrollment Ids.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts#L17)

___

### enrollmentStatuses

• **enrollmentStatuses**: `string`[]

Gets or sets a list of enrollment statuses to search for [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md)s matching one of the statuses.
 Valid "EnrollmentStatus" values are:
 <list><item><description>NotEnrolled</description></item><item><description>Pending</description></item><item><description>Enrolled</description></item><item><description>Rejected</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts#L23)

___

### fromDate

• **fromDate**: `Date`

Gets or sets a value to search for all [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md)s from this date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts#L25)

___

### fromDmvRegistrationDateTime

• **fromDmvRegistrationDateTime**: `Date`

Gets or sets search for all [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md)s with DMV registration DateTime from this date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts#L27)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeDisenrolledEnrollments

• **includeDisenrolledEnrollments**: `boolean`

Gets or sets a value indicating whether previously disenrolled [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md)s are included.
 If true, returns active enrollments and disenrolled enrollments;
 Otherwise, only returns current active enrollments.
 (An active enrollment has enrollment status Pending or Enrolled.)
 Default is false.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts#L35)

___

### includeRejectedEnrollments

• **includeRejectedEnrollments**: `boolean`

Gets or sets a value indicating whether rejected [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md)s are included.
 If true, returns all active enrollments and rejected enrollments;
 Otherwise, only returns active enrollments.
 (An active enrollment has enrollment status Pending or Enrolled.)
 Default is false.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts#L43)

___

### loggingFrequencyType

• **loggingFrequencyType**: `number`

Gets or sets search for all [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md)s with the given [EmissionEnrollmentLoggingFrequencyType](EmissionEnrollmentLoggingFrequencyType.md) value.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts:45](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts#L45)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum version of the [EmissionVehicleEnrollmentSearch](EmissionVehicleEnrollmentSearch.md) search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts:47](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts#L47)

___

### toDate

• **toDate**: `Date`

Gets or sets a value to search for all [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md)s to this date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts#L49)

___

### toDmvRegistrationDateTime

• **toDmvRegistrationDateTime**: `Date`

Gets or sets search for all [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md)s with DMV registration DateTime to this date.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts#L51)

___

### version

• **version**: `number`

Gets or sets the version of the [EmissionVehicleEnrollmentSearch](EmissionVehicleEnrollmentSearch.md) search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts:53](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollmentSearch.ts#L53)
