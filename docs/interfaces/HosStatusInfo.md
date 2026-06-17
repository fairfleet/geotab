[@fairfleet/geotab](../README.md) / HosStatusInfo

# Interface: HosStatusInfo

Represents the current HOS state of a driver by providing information such as the driver's current HosStatusInfo.DutyStatusLog and current HosStatusInfo.UserHosRuleSet.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`HosStatusInfo`**

## Table of contents

### Properties

- [driver](HosStatusInfo.md#driver)
- [dutyStatusLog](HosStatusInfo.md#dutystatuslog)
- [id](HosStatusInfo.md#id)
- [userHosRuleSet](HosStatusInfo.md#userhosruleset)
- [version](HosStatusInfo.md#version)

## Properties

### driver

• **driver**: [`User`](User.md)

Gets or sets the HosStatusInfo.Driver.

#### Defined in

[src/types/Checkmate/ObjectModel/HosStatusInfo.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HosStatusInfo.ts#L13)

___

### dutyStatusLog

• **dutyStatusLog**: [`DutyStatusLog`](DutyStatusLog.md)

Gets or sets the current HosStatusInfo.DutyStatusLog.

#### Defined in

[src/types/Checkmate/ObjectModel/HosStatusInfo.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HosStatusInfo.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### userHosRuleSet

• **userHosRuleSet**: [`UserHosRuleSet`](UserHosRuleSet.md)

Gets or sets the current HosStatusInfo.UserHosRuleSet.

#### Defined in

[src/types/Checkmate/ObjectModel/HosStatusInfo.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HosStatusInfo.ts#L17)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
