[@fairfleet/geotab](../README.md) / EntityWithVersion

# Interface: EntityWithVersion

An Entity with a version.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EntityWithVersion`**

  ↳↳ [`AnnotationLog`](AnnotationLog.md)

  ↳↳ [`BinaryData`](BinaryData.md)

  ↳↳ [`Camera`](Camera.md)

  ↳↳ [`CameraHealth`](CameraHealth.md)

  ↳↳ [`CameraStatus`](CameraStatus.md)

  ↳↳ [`ChargeEvent`](ChargeEvent.md)

  ↳↳ [`CoachingSession`](CoachingSession.md)

  ↳↳ [`ConsentStatus`](ConsentStatus.md)

  ↳↳ [`ConsentStatusAudit`](ConsentStatusAudit.md)

  ↳↳ [`Option`](Option.md)

  ↳↳ [`DeviceCommunicationHistory`](DeviceCommunicationHistory.md)

  ↳↳ [`DeviceCommunicationStatus`](DeviceCommunicationStatus.md)

  ↳↳ [`DeviceLink`](DeviceLink.md)

  ↳↳ [`DeviceStatusInfo`](DeviceStatusInfo.md)

  ↳↳ [`DiscreteAvailabilitySnapshot`](DiscreteAvailabilitySnapshot.md)

  ↳↳ [`DriverChange`](DriverChange.md)

  ↳↳ [`DutyStatusLog`](DutyStatusLog.md)

  ↳↳ [`DutyStatusViolation`](DutyStatusViolation.md)

  ↳↳ [`DVIRLog`](DVIRLog.md)

  ↳↳ [`EmissionComplianceEvent`](EmissionComplianceEvent.md)

  ↳↳ [`EmissionVehicleEnrollment`](EmissionVehicleEnrollment.md)

  ↳↳ [`EnergySnapshotRecord`](EnergySnapshotRecord.md)

  ↳↳ [`DisplayMeasurementProfileDetail`](DisplayMeasurementProfileDetail.md)

  ↳↳ [`StatusData`](StatusData.md)

  ↳↳ [`EVStatusInfo`](EVStatusInfo.md)

  ↳↳ [`ExceptionEventMediaLink`](ExceptionEventMediaLink.md)

  ↳↳ [`ExceptionEvent`](ExceptionEvent.md)

  ↳↳ [`FaultRichData`](FaultRichData.md)

  ↳↳ [`FillUp`](FillUp.md)

  ↳↳ [`FuelEvent`](FuelEvent.md)

  ↳↳ [`FuelUsed`](FuelUsed.md)

  ↳↳ [`PotentialFuelFraudEvent`](PotentialFuelFraudEvent.md)

  ↳↳ [`HosStatusInfo`](HosStatusInfo.md)

  ↳↳ [`InspectionLog`](InspectionLog.md)

  ↳↳ [`InstallRecord`](InstallRecord.md)

  ↳↳ [`IoxAddOnStatus`](IoxAddOnStatus.md)

  ↳↳ [`LostModeChange`](LostModeChange.md)

  ↳↳ [`DocumentScanning`](DocumentScanning.md)

  ↳↳ [`MediaRequestNotification`](MediaRequestNotification.md)

  ↳↳ [`Notification`](Notification.md)

  ↳↳ [`Property`](Property.md)

  ↳↳ [`PropertySet`](PropertySet.md)

  ↳↳ [`ReportStorage`](ReportStorage.md)

  ↳↳ [`RestrictedDataModeChange`](RestrictedDataModeChange.md)

  ↳↳ [`ShipmentLog`](ShipmentLog.md)

  ↳↳ [`TachographDataFile`](TachographDataFile.md)

  ↳↳ [`TextMessage`](TextMessage.md)

  ↳↳ [`TrailerAttachment`](TrailerAttachment.md)

  ↳↳ [`Trip`](Trip.md)

  ↳↳ [`UserDeviceLink`](UserDeviceLink.md)

  ↳↳ [`UserHosRuleSet`](UserHosRuleSet.md)

## Table of contents

### Properties

- [id](EntityWithVersion.md#id)
- [version](EntityWithVersion.md#version)

## Properties

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
