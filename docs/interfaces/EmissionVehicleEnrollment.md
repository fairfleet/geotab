[@fairfleet/geotab](../README.md) / EmissionVehicleEnrollment

# Interface: EmissionVehicleEnrollment

<para />
 A Clean Check Truck emission vehicle enrollment. One [Device](Device.md) should only have one active enrollment with status Pending or Enrolled.
 <para />
 Security clearance requirements:
 <para />
 Creating EmissionVehicleEnrollment (Add requests) requires security clearances AccessCleanTruckCheckCompliance;
 <para />
 Updating EmissionVehicleEnrollment (Set requests) requires one of the following security clearances
 AccessCleanTruckCheckCompliance or AccessCleanTruckCheckComplianceEditor;
 <para />
 Note: AccessCleanTruckCheckComplianceEditor is not allowed for disenrolling an enrollment.
 <para />
 Retrieving EmissionVehicleEnrollment (Get requests) requires one of the following security clearances
 AccessCleanTruckCheckCompliance, AccessCleanTruckCheckComplianceEditor or AccessCleanTruckCheckComplianceViewer.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`EmissionVehicleEnrollment`**

## Table of contents

### Properties

- [createdDateTime](EmissionVehicleEnrollment.md#createddatetime)
- [device](EmissionVehicleEnrollment.md#device)
- [disenrolledDateTime](EmissionVehicleEnrollment.md#disenrolleddatetime)
- [dmvRegistrationDateTime](EmissionVehicleEnrollment.md#dmvregistrationdatetime)
- [enrollmentStatus](EmissionVehicleEnrollment.md#enrollmentstatus)
- [failureReason](EmissionVehicleEnrollment.md#failurereason)
- [id](EmissionVehicleEnrollment.md#id)
- [lastLoggingFrequencyUpdateDateTime](EmissionVehicleEnrollment.md#lastloggingfrequencyupdatedatetime)
- [loggingFrequencyType](EmissionVehicleEnrollment.md#loggingfrequencytype)
- [planDowngradeDetectedDateTime](EmissionVehicleEnrollment.md#plandowngradedetecteddatetime)
- [selectedLoggingFrequencyType](EmissionVehicleEnrollment.md#selectedloggingfrequencytype)
- [shouldClearPlanDowngradeDetectedDateTime](EmissionVehicleEnrollment.md#shouldclearplandowngradedetecteddatetime)
- [submissionDeadlineOverrideType](EmissionVehicleEnrollment.md#submissiondeadlineoverridetype)
- [vehicleIdentificationNumber](EmissionVehicleEnrollment.md#vehicleidentificationnumber)
- [version](EmissionVehicleEnrollment.md#version)

## Properties

### createdDateTime

• **createdDateTime**: `Date`

Gets or sets the DateTime when the emission vehicle enrollment record was created.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts#L27)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md).

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts#L29)

___

### disenrolledDateTime

• **disenrolledDateTime**: `Date`

Gets or sets the disenrolled DateTime if the [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md) is disenrolled. If null, the [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md) is not disenrolled.
 To disenroll a device, cancel its enrollment by:
 <list><item><description>Setting DisenrolledDateTime to a not-null timestamp;</description></item><item><description>Setting the EnrollmentStatus to NotEnrolled;</description></item><item><description>Setting the LoggingFrequency to 0 (Disabled).</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts#L35)

___

### dmvRegistrationDateTime

• **dmvRegistrationDateTime**: `Date`

Gets or sets the DMV registration DateTime for the [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md).

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts#L37)

___

### enrollmentStatus

• **enrollmentStatus**: `string`

Gets or sets the enrollment status for the [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md).
 Valid values are:
 <list><item><description>
 NotEnrolled: When an enrollment's status is set to NotEnrolled or the DisenrolledDateTime is set, the enrollment is cancelled and the device is disenrolled.
 </description></item><item><description>
 Pending: Active enrollment status. A new enrollment should be created with Pending status.
 </description></item><item><description>
 Enrolled: Active enrollment status. Once a complete cycle has been received, a Pending enrollment will be marked as Enrolled.
 </description></item><item><description>
 Rejected: When an enrollment attempt fails, an enrollment record with Rejected status will be created for the device with the failure reason. If later enrollment succeeds, the enrollment will be updated with an active enrollment status.
 </description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts:51](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts#L51)

___

### failureReason

• **failureReason**: `string`

Gets or sets the reason for enrollment failure.
 Valid values are:
 <list><item><description>None</description></item><item><description>DeviceIsNotProPlusOrGoPlan</description></item><item><description>NoCompleteCycleReceived</description></item><item><description>DeviceRatePlanNotFound</description></item><item><description>VehicleNotApplicableForObdTesting</description></item><item><description>VehicleNotApplicableForCleanTruckCheck</description></item><item><description>DeviceIsArchived</description></item><item><description>UncertifiedHarnessDetected</description></item><item><description>Unknown</description></item></list>
 The default value is "None".

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts#L58)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lastLoggingFrequencyUpdateDateTime

• **lastLoggingFrequencyUpdateDateTime**: `Date`

Gets or sets the DateTime when the logging frequency value was last updated.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts:60](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts#L60)

___

### loggingFrequencyType

• **loggingFrequencyType**: [`EmissionEnrollmentLoggingFrequencyType`](EmissionEnrollmentLoggingFrequencyType.md)

Gets or sets the [EmissionEnrollmentLoggingFrequencyType](EmissionEnrollmentLoggingFrequencyType.md) for the [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md).
 Sets the Value property of [EmissionEnrollmentLoggingFrequencyType](EmissionEnrollmentLoggingFrequencyType.md) to the one of the following numeric values to configure the emission logging frequency type:
 <list><item><description>0 (Disabled)</description></item><item><description>1~250 (Every 1~125 Day)</description></item><item><description>251 (Every Ignition)</description></item><item><description>253 (On Demand)</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts:66](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts#L66)

___

### planDowngradeDetectedDateTime

• **planDowngradeDetectedDateTime**: `Date`

Gets or sets the DateTime when a device plan downgrade was detected for the enrolled EmissionVehicleEnrollment.Device.
 If null, no plan downgrade has been detected for this enrollment.
 A plan downgrade occurs when a device's rate plan changes from a supported plan (ProPlus or GO) to an unsupported plan
 (e.g., Basic, Suspended, Terminated). When this happens, the system automatically records the timestamp when the downgrade was detected.
 To clear this value, use the <see cref="M:Geotab.Checkmate.ObjectModel.EmissionReporting.EmissionVehicleEnrollment.ClearPlanDowngradeDetectedDateTime" /> method instead of setting this property to null directly.
 This ensures the database is properly updated to remove the timestamp.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts:75](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts#L75)

___

### selectedLoggingFrequencyType

• **selectedLoggingFrequencyType**: [`EmissionEnrollmentLoggingFrequencyType`](EmissionEnrollmentLoggingFrequencyType.md)

Gets or sets the selected [EmissionEnrollmentLoggingFrequencyType](EmissionEnrollmentLoggingFrequencyType.md) for the [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md).

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts:77](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts#L77)

___

### shouldClearPlanDowngradeDetectedDateTime

• **shouldClearPlanDowngradeDetectedDateTime**: `boolean`

Gets or sets a value indicating whether the EmissionVehicleEnrollment.PlanDowngradeDetectedDateTime should be cleared in the database.
 This flag is automatically set to true by the <see cref="M:Geotab.Checkmate.ObjectModel.EmissionReporting.EmissionVehicleEnrollment.ClearPlanDowngradeDetectedDateTime" /> method.
 This is used internally by the persistence layer to distinguish between a null value that should be written to the database
 versus a property that was not loaded or should not be modified.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts:84](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts#L84)

___

### submissionDeadlineOverrideType

• **submissionDeadlineOverrideType**: `string`

Gets or sets the submission deadline override type for the [EmissionVehicleEnrollment](EmissionVehicleEnrollment.md).
 The default value is "None".
 Valid values are:
 <list><item><description>None</description></item><item><description>SubmitUntilPass</description></item><item><description>SubmitUntilPassOrFailResponseReceive</description></item><item><description>SubmitUntilAnyResponseReceived</description></item><item><description>NeverSubmit</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts:91](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts#L91)

___

### vehicleIdentificationNumber

• **vehicleIdentificationNumber**: `string`

Gets or sets the Vehicle Identification Number (VIN) of the EmissionVehicleEnrollment.Device enrolled.
 The maximum number of characters allowed for a vehicle identification number is EmissionVehicleEnrollment.MaxVehicleIdentificationNumberLength.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts:96](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionVehicleEnrollment.ts#L96)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
