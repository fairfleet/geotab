[@fairfleet/geotab](../README.md) / MaintenanceNotificationRuleSearch

# Interface: MaintenanceNotificationRuleSearch

The object used to specify the arguments when searching for [IoxAddOn](IoxAddOn.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`MaintenanceNotificationRuleSearch`**

## Table of contents

### Properties

- [eventRuleId](MaintenanceNotificationRuleSearch.md#eventruleid)
- [id](MaintenanceNotificationRuleSearch.md#id)
- [propertySelector](MaintenanceNotificationRuleSearch.md#propertyselector)
- [recipientId](MaintenanceNotificationRuleSearch.md#recipientid)
- [version](MaintenanceNotificationRuleSearch.md#version)

## Properties

### eventRuleId

• **eventRuleId**: `string`

Gets or sets the EventRule [EventRule](EventRule.md) to search by&gt;.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationRuleSearch.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/MaintenanceNotificationRuleSearch.ts#L12)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### recipientId

• **recipientId**: `string`

Gets or sets the Recipient [Recipient](Recipient.md) to search by&gt;.

#### Defined in

[src/types/Checkmate/ObjectModel/MaintenanceNotificationRuleSearch.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/MaintenanceNotificationRuleSearch.ts#L14)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
