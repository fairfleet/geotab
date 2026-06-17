[@fairfleet/geotab](../README.md) / MaintenanceWorkRequest

# Interface: MaintenanceWorkRequest

Maintenance Work Request for a particular device.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`MaintenanceWorkRequest`**

## Table of contents

### Properties

- [costCurrency](MaintenanceWorkRequest.md#costcurrency)
- [currentEngineHours](MaintenanceWorkRequest.md#currentenginehours)
- [currentEngineHoursInHours](MaintenanceWorkRequest.md#currentenginehoursinhours)
- [currentOdometer](MaintenanceWorkRequest.md#currentodometer)
- [currentOdometerDisplay](MaintenanceWorkRequest.md#currentodometerdisplay)
- [dateTime](MaintenanceWorkRequest.md#datetime)
- [deletedDateTime](MaintenanceWorkRequest.md#deleteddatetime)
- [description](MaintenanceWorkRequest.md#description)
- [device](MaintenanceWorkRequest.md#device)
- [dueOnDate](MaintenanceWorkRequest.md#dueondate)
- [estimateCost](MaintenanceWorkRequest.md#estimatecost)
- [expirationDate](MaintenanceWorkRequest.md#expirationdate)
- [id](MaintenanceWorkRequest.md#id)
- [impact](MaintenanceWorkRequest.md#impact)
- [isOverdue](MaintenanceWorkRequest.md#isoverdue)
- [isPending](MaintenanceWorkRequest.md#ispending)
- [isVisible](MaintenanceWorkRequest.md#isvisible)
- [labels](MaintenanceWorkRequest.md#labels)
- [lastCompletedWorkOrderJob](MaintenanceWorkRequest.md#lastcompletedworkorderjob)
- [lastEngineHours](MaintenanceWorkRequest.md#lastenginehours)
- [lastEngineHoursInHours](MaintenanceWorkRequest.md#lastenginehoursinhours)
- [lastMaintenanceDate](MaintenanceWorkRequest.md#lastmaintenancedate)
- [lastOdometer](MaintenanceWorkRequest.md#lastodometer)
- [lastOdometerDisplay](MaintenanceWorkRequest.md#lastodometerdisplay)
- [maintenanceType](MaintenanceWorkRequest.md#maintenancetype)
- [metadata](MaintenanceWorkRequest.md#metadata)
- [name](MaintenanceWorkRequest.md#name)
- [recommendation](MaintenanceWorkRequest.md#recommendation)
- [requiresCalculation](MaintenanceWorkRequest.md#requirescalculation)
- [schedule](MaintenanceWorkRequest.md#schedule)
- [serviceDueInEngineHours](MaintenanceWorkRequest.md#servicedueinenginehours)
- [serviceDueInEngineHoursInHours](MaintenanceWorkRequest.md#servicedueinenginehoursinhours)
- [serviceDueInKilometers](MaintenanceWorkRequest.md#servicedueinkilometers)
- [serviceDueInMiles](MaintenanceWorkRequest.md#servicedueinmiles)
- [serviceDueOnEngineHours](MaintenanceWorkRequest.md#servicedueonenginehours)
- [serviceDueOnEngineHoursInHours](MaintenanceWorkRequest.md#servicedueonenginehoursinhours)
- [serviceDueOnOdometer](MaintenanceWorkRequest.md#servicedueonodometer)
- [severity](MaintenanceWorkRequest.md#severity)
- [severityDisplay](MaintenanceWorkRequest.md#severitydisplay)
- [snoozeDate](MaintenanceWorkRequest.md#snoozedate)
- [snoozeUntilDate](MaintenanceWorkRequest.md#snoozeuntildate)
- [triggeredDateTime](MaintenanceWorkRequest.md#triggereddatetime)
- [updateDate](MaintenanceWorkRequest.md#updatedate)
- [version](MaintenanceWorkRequest.md#version)

## Properties

### costCurrency

• **costCurrency**: `string`

Gets or sets the currency cost for the work request.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L14)

___

### currentEngineHours

• **currentEngineHours**: `string`

Gets or sets the current engine hours of the MaintenanceWorkRequest.Device.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L16)

___

### currentEngineHoursInHours

• **currentEngineHoursInHours**: `number`

Gets the current engine hours of the MaintenanceWorkRequest.Device rounded to the nearest whole hour.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L18)

___

### currentOdometer

• **currentOdometer**: `number`

Gets or sets the current odometer of the MaintenanceWorkRequest.Device.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L20)

___

### currentOdometerDisplay

• **currentOdometerDisplay**: `number`

Gets or sets the current odometer of the MaintenanceWorkRequest.Device but in user preferred unit.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L22)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date the work request was created.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L24)

___

### deletedDateTime

• **deletedDateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L28)

___

### description

• **description**: `string`

Gets or sets the description of the work request.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L30)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the MaintenanceWorkRequest.Device related to the work request.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L32)

___

### dueOnDate

• **dueOnDate**: `Date`

Gets or sets the date the work request is due.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L34)

___

### estimateCost

• **estimateCost**: `number`

Gets or sets the estimate cost for the work request.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L36)

___

### expirationDate

• **expirationDate**: `Date`

Gets or sets the datetime of when the work request should expire.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:38](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L38)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### impact

• **impact**: `string`

Gets or sets the impact of the work request.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:40](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L40)

___

### isOverdue

• **isOverdue**: `boolean`

Gets or sets whether the work request is overdue or not.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L42)

___

### isPending

• **isPending**: `boolean`

Gets or sets whether the work request is pending or not to be solved.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L44)

___

### isVisible

• **isVisible**: `boolean`

Gets or sets whether the work request is visible or not.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:46](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L46)

___

### labels

• **labels**: `string`[]

Gets or sets the labels.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:48](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L48)

___

### lastCompletedWorkOrderJob

• **lastCompletedWorkOrderJob**: [`MaintenanceWorkOrderJob`](MaintenanceWorkOrderJob.md)

Gets or sets the last completed work order job related to this work request.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L50)

___

### lastEngineHours

• **lastEngineHours**: `string`

Gets or sets the engine hours from the last maintenance done. Only used if work request is scheduled.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:52](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L52)

___

### lastEngineHoursInHours

• **lastEngineHoursInHours**: `number`

Gets the engine hours in hours from the last maintenance done. Only used if work request is scheduled.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:54](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L54)

___

### lastMaintenanceDate

• **lastMaintenanceDate**: `Date`

Gets or sets the datetime of the last maintenance performed. This can be populated even if the work request is not scheduled, but it is only relevant and used when the work request is scheduled.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:56](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L56)

___

### lastOdometer

• **lastOdometer**: `number`

Gets or sets the odometer of the last maintenance performed for the MaintenanceWorkRequest.Device. This can be populated even if the work request is not scheduled, but it is only relevant and used when the work request is scheduled.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:58](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L58)

___

### lastOdometerDisplay

• **lastOdometerDisplay**: `number`

Gets or sets the engine hours of the last maintenance performed for the MaintenanceWorkRequest.Device. This can be populated even if the work request is not scheduled, but it is only relevant and used when the work request is scheduled.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:60](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L60)

___

### maintenanceType

• **maintenanceType**: [`EventType`](EventType.md)

Gets or sets the maintenance [EventType](EventType.md) of the work request.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:62](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L62)

___

### metadata

• **metadata**: `Object`

Gets or sets the metadata of the work request.

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:64](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L64)

___

### name

• **name**: `string`

Gets or sets the name of this entity which identifies it and is used when displaying this entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntity.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntity.ts#L10)

___

### recommendation

• **recommendation**: `string`

Gets or sets the recommendation for the work request.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:66](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L66)

___

### requiresCalculation

• **requiresCalculation**: `boolean`

Gets a value indicating whether determines if the work request requires calculation when new (only for scheduled work requests).

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:68](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L68)

___

### schedule

• **schedule**: [`MaintenanceSchedule`](MaintenanceSchedule.md)

Gets or sets the [MaintenanceSchedule](MaintenanceSchedule.md) related to the work request.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:70](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L70)

___

### serviceDueInEngineHours

• **serviceDueInEngineHours**: `string`

Gets or sets the remaining engine hours of the MaintenanceWorkRequest.Device before the work request becomes overdue. A negative value indicates that the service is overdue.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:72](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L72)

___

### serviceDueInEngineHoursInHours

• **serviceDueInEngineHoursInHours**: `number`

Gets the remaining engine hours of the MaintenanceWorkRequest.Device before the work request becomes overdue rounded to the nearest whole hour. A negative value indicates that the service is overdue .

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:74](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L74)

___

### serviceDueInKilometers

• **serviceDueInKilometers**: `number`

Gets or sets the remaining distance of the MaintenanceWorkRequest.Device before the work request becomes overdue.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:76](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L76)

___

### serviceDueInMiles

• **serviceDueInMiles**: `number`

Gets or sets the odometer reading in miles of the MaintenanceWorkRequest.Device at which the work request is due. A negative value indicates that the service is overdue.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:78](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L78)

___

### serviceDueOnEngineHours

• **serviceDueOnEngineHours**: `string`

Gets or sets the engine hours of the MaintenanceWorkRequest.Device at which the work request is due.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:80](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L80)

___

### serviceDueOnEngineHoursInHours

• **serviceDueOnEngineHoursInHours**: `number`

Gets the engine hours of the MaintenanceWorkRequest.Device at which the work request is due rounded to the nearest whole hour.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:82](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L82)

___

### serviceDueOnOdometer

• **serviceDueOnOdometer**: `number`

Gets or sets the odometer reading the MaintenanceWorkRequest.Device at which the work request is due.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:84](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L84)

___

### severity

• **severity**: `number`

Gets or sets the severity of the work request.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:86](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L86)

___

### severityDisplay

• **severityDisplay**: `number`

Gets or sets the severity of the work request.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:88](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L88)

___

### snoozeDate

• **snoozeDate**: `Date`

Gets or sets the date when the work request was snoozed.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:90](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L90)

___

### snoozeUntilDate

• **snoozeUntilDate**: `Date`

Gets or sets the date until which the work request is snoozed.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:92](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L92)

___

### triggeredDateTime

• **triggeredDateTime**: `Date`

Gets or sets the triggered dateTime of the work request.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:94](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L94)

___

### updateDate

• **updateDate**: `Date`

Gets or sets the date the work request was updated.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts:96](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/MaintenanceWorkRequest.ts#L96)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
