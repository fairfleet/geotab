[@fairfleet/geotab](../README.md) / MaintenanceNotificationStateSearch

# Interface: MaintenanceNotificationStateSearch

The object used to specify the arguments when searching for [IoxAddOn](IoxAddOn.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`MaintenanceNotificationStateSearch`**

## Table of contents

### Properties

- [deviceSearch](MaintenanceNotificationStateSearch.md#devicesearch)
- [id](MaintenanceNotificationStateSearch.md#id)
- [notificationRuleId](MaintenanceNotificationStateSearch.md#notificationruleid)
- [propertySelector](MaintenanceNotificationStateSearch.md#propertyselector)
- [version](MaintenanceNotificationStateSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [MaintenanceNotificationState](MaintenanceNotificationState.md)s matching this
 [DeviceSearch](DeviceSearch.md). Providing a device ID will
 search for any MaintenanceNotificationStates that are assigned to that Device.
 Providing the Groups will search for MaintenanceNotificationStates that have Devices in that group.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationStateSearch.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/MaintenanceNotificationStateSearch.ts#L20)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### notificationRuleId

• **notificationRuleId**: `string`

Gets or sets the EventRule [MaintenanceNotificationRule](MaintenanceNotificationRule.md) to search by&gt;.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationStateSearch.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/MaintenanceNotificationStateSearch.ts#L22)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
