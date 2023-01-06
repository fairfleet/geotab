[@fairfleet/geotab](../README.md) / Entity

# Interface: Entity

All objects that are stored in the database are entities. They are uniquely identified by their
 Id which is used later to Get, modify (Set) or Remove that
 object.
 The following entities are supported:
 <list><item><description>A1</description></item><item><description>[AddInData](AddInData.md)</description></item><item><description>[AnnotationLog](AnnotationLog.md)</description></item><item><description>[Audit](Audit.md)</description></item><item><description>BinaryPayload</description></item><item><description>[Condition](Condition.md)</description></item><item><description>[Controller](Controller.md)</description></item><item><description>[CustomData](CustomData.md)</description></item><item><description>CustomDevice</description></item><item><description>DataDiagnostic</description></item><item><description>[DebugData](DebugData.md)</description></item><item><description>[Device](Device.md)</description></item><item><description>[DeviceShare](DeviceShare.md)</description></item><item><description>[DeviceStatusInfo](DeviceStatusInfo.md)</description></item><item><description>[Diagnostic](Diagnostic.md)</description></item><item><description>[DistributionList](DistributionList.md)</description></item><item><description>[Driver](Driver.md)</description></item><item><description>[DriverChange](DriverChange.md)</description></item><item><description>[DutyStatusAvailability](DutyStatusAvailability.md)</description></item><item><description>[DutyStatusLog](DutyStatusLog.md)</description></item><item><description>[DutyStatusViolation](DutyStatusViolation.md)</description></item><item><description>[DVIRLog](DVIRLog.md)</description></item><item><description>[ExceptionEvent](ExceptionEvent.md)</description></item><item><description>[FailureMode](FailureMode.md)</description></item><item><description>[FaultData](FaultData.md)</description></item><item><description>[FlashCode](FlashCode.md)</description></item><item><description>[FuelTaxDetail](FuelTaxDetail.md)</description></item><item><description>[FuelTransaction](FuelTransaction.md)</description></item><item><description>Go4v3</description></item><item><description>Go5</description></item><item><description>Go6</description></item><item><description>Go7</description></item><item><description>Go8</description></item><item><description>Go9</description></item><item><description>Go9B</description></item><item><description>GoCurve</description></item><item><description>GoCurveAuxiliary</description></item><item><description>GoDevice</description></item><item><description>[Group](Group.md)</description></item><item><description>GroupSecurity</description></item><item><description>[IoxAddOn](IoxAddOn.md)</description></item><item><description>[LogRecord](LogRecord.md)</description></item><item><description>[MediaFile](MediaFile.md)</description></item><item><description>[ParameterGroup](ParameterGroup.md)</description></item><item><description>[Recipient](Recipient.md)</description></item><item><description>RequestLocation</description></item><item><description>[Route](Route.md)</description></item><item><description>RoutePlanItem</description></item><item><description>[Rule](Rule.md)</description></item><item><description>SecurityClearance</description></item><item><description>[ShipmentLog](ShipmentLog.md)</description></item><item><description>[Source](Source.md)</description></item><item><description>[StatusData](StatusData.md)</description></item><item><description>[TextMessage](TextMessage.md)</description></item><item><description>[Trailer](Trailer.md)</description></item><item><description>[TrailerAttachment](TrailerAttachment.md)</description></item><item><description>[Trip](Trip.md)</description></item><item>Bridge
 <description>U1</description></item><item><description>[UnitOfMeasure](UnitOfMeasure.md)</description></item><item><description>[User](User.md)</description></item><item><description>[WorkHoliday](WorkHoliday.md)</description></item><item><description>[WorkTime](WorkTime.md)</description></item><item><description>WorkTimeDetail</description></item><item><description>[Zone](Zone.md)</description></item></list>

## Hierarchy

- **`Entity`**

  ↳ [`AddInData`](AddInData.md)

  ↳ [`Certificate`](Certificate.md)

  ↳ [`CustomData`](CustomData.md)

  ↳ [`DVIRDefect`](DVIRDefect.md)

  ↳ [`DebugData`](DebugData.md)

  ↳ [`DefectRemark`](DefectRemark.md)

  ↳ [`DeviceDataPrivacyChange`](DeviceDataPrivacyChange.md)

  ↳ [`DeviceMasterFlag`](DeviceMasterFlag.md)

  ↳ [`DeviceRegistrationState`](DeviceRegistrationState.md)

  ↳ [`DeviceReplacementInfo`](DeviceReplacementInfo.md)

  ↳ [`ReplacementStatus`](ReplacementStatus.md)

  ↳ [`DriverRegulation`](DriverRegulation.md)

  ↳ [`Employee`](Employee.md)

  ↳ [`EmployeeRoutePlan`](EmployeeRoutePlan.md)

  ↳ [`EnergySnapshotRecord`](EnergySnapshotRecord.md)

  ↳ [`DisplayMeasurementProfileDetailsHelper`](DisplayMeasurementProfileDetailsHelper.md)

  ↳ [`UserDisplayProfile`](UserDisplayProfile.md)

  ↳ [`FaultData`](FaultData.md)

  ↳ [`EntityWithVersion`](EntityWithVersion.md)

  ↳ [`EventOccurrence`](EventOccurrence.md)

  ↳ [`EventOccurrenceDue`](EventOccurrenceDue.md)

  ↳ [`Condition`](Condition.md)

  ↳ [`ExceptionEventAttachment`](ExceptionEventAttachment.md)

  ↳ [`ExceptionEventComment`](ExceptionEventComment.md)

  ↳ [`VirtualExceptionEvent`](VirtualExceptionEvent.md)

  ↳ [`FeedVersionTrackingData`](FeedVersionTrackingData.md)

  ↳ [`FuelSnapshotRecord`](FuelSnapshotRecord.md)

  ↳ [`FuelTaxDetail`](FuelTaxDetail.md)

  ↳ [`GroupZoneMetadata`](GroupZoneMetadata.md)

  ↳ [`IoxAddOn`](IoxAddOn.md)

  ↳ [`LogRecord`](LogRecord.md)

  ↳ [`LogRecordZoneDistance`](LogRecordZoneDistance.md)

  ↳ [`MaintenanceNotificationRule`](MaintenanceNotificationRule.md)

  ↳ [`MaintenanceNotificationState`](MaintenanceNotificationState.md)

  ↳ [`MimeTask`](MimeTask.md)

  ↳ [`NameEntity`](NameEntity.md)

  ↳ [`FuelAndEnergySnapshotProcessing`](FuelAndEnergySnapshotProcessing.md)

  ↳ [`Recipient`](Recipient.md)

  ↳ [`DeviceReprocessRequest`](DeviceReprocessRequest.md)

  ↳ [`RouteExtract`](RouteExtract.md)

  ↳ [`ShareableLink`](ShareableLink.md)

  ↳ [`Trip`](Trip.md)

  ↳ [`TripAnnotation`](TripAnnotation.md)

  ↳ [`TripGeohash`](TripGeohash.md)

  ↳ [`TripTypeChange`](TripTypeChange.md)

  ↳ [`UserLoginStatus`](UserLoginStatus.md)

  ↳ [`UserSupport`](UserSupport.md)

## Table of contents

### Properties

- [id](Entity.md#id)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)
