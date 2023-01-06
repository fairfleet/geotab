[@fairfleet/geotab](../README.md) / EntityWithVersion

# Interface: EntityWithVersion

An Entity with a version.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EntityWithVersion`**

  ↳↳ [`AnnotationLog`](AnnotationLog.md)

  ↳↳ [`BinaryData`](BinaryData.md)

  ↳↳ [`ChargeEvent`](ChargeEvent.md)

  ↳↳ [`DVIRLog`](DVIRLog.md)

  ↳↳ [`DeviceLink`](DeviceLink.md)

  ↳↳ [`DeviceStatusInfo`](DeviceStatusInfo.md)

  ↳↳ [`DriverChange`](DriverChange.md)

  ↳↳ [`DutyStatusLog`](DutyStatusLog.md)

  ↳↳ [`EnergyConsumed`](EnergyConsumed.md)

  ↳↳ [`DisplayMeasurementProfileDetail`](DisplayMeasurementProfileDetail.md)

  ↳↳ [`StatusData`](StatusData.md)

  ↳↳ [`ExceptionEvent`](ExceptionEvent.md)

  ↳↳ [`FuelEvent`](FuelEvent.md)

  ↳↳ [`FuelUsed`](FuelUsed.md)

  ↳↳ [`InstallRecord`](InstallRecord.md)

  ↳↳ [`Notification`](Notification.md)

  ↳↳ [`EnergyConsumedProcessing`](EnergyConsumedProcessing.md)

  ↳↳ [`Property`](Property.md)

  ↳↳ [`PropertySet`](PropertySet.md)

  ↳↳ [`ReportStorage`](ReportStorage.md)

  ↳↳ [`ShipmentLog`](ShipmentLog.md)

  ↳↳ [`TextMessage`](TextMessage.md)

  ↳↳ [`TrailerAttachment`](TrailerAttachment.md)

  ↳↳ [`UserDeviceLink`](UserDeviceLink.md)

  ↳↳ [`UserHosRuleSet`](UserHosRuleSet.md)

  ↳↳ [`VehicleConfiguration`](VehicleConfiguration.md)

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

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
