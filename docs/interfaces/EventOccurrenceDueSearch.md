[@fairfleet/geotab](../README.md) / EventOccurrenceDueSearch

# Interface: EventOccurrenceDueSearch

The object used to specify the arguments when searching for
 [EventOccurrence](EventOccurrence.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EventOccurrenceDueSearch`**

## Table of contents

### Properties

- [deviceIds](EventOccurrenceDueSearch.md#deviceids)
- [deviceSearch](EventOccurrenceDueSearch.md#devicesearch)
- [dueDistance](EventOccurrenceDueSearch.md#duedistance)
- [dueEngineHours](EventOccurrenceDueSearch.md#dueenginehours)
- [duePeriod](EventOccurrenceDueSearch.md#dueperiod)
- [eventRuleIds](EventOccurrenceDueSearch.md#eventruleids)
- [eventRuleSearch](EventOccurrenceDueSearch.md#eventrulesearch)
- [fromDate](EventOccurrenceDueSearch.md#fromdate)
- [id](EventOccurrenceDueSearch.md#id)
- [maxId](EventOccurrenceDueSearch.md#maxid)
- [minId](EventOccurrenceDueSearch.md#minid)
- [propertySelector](EventOccurrenceDueSearch.md#propertyselector)
- [status](EventOccurrenceDueSearch.md#status)
- [toDate](EventOccurrenceDueSearch.md#todate)
- [version](EventOccurrenceDueSearch.md#version)

## Properties

### deviceIds

• **deviceIds**: `string`[]

Gets or sets a list of Device Ids to search by. [Device](Device.md)

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts#L17)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [EventOccurrence](EventOccurrence.md)s matching this
 [DeviceSearch](DeviceSearch.md). Providing a device ID will
 search for any EventOccurrences that are assigned to that Device.
 Providing the Groups will search for EventOccurrences for that have Devices in that group.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts:26](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts#L26)

___

### dueDistance

• **dueDistance**: `number`

Gets or sets a value indicating the distance until due (in kilometers).

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts:28](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts#L28)

___

### dueEngineHours

• **dueEngineHours**: `string`

Gets or sets a value indicating the engine hours until due.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts:30](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts#L30)

___

### duePeriod

• **duePeriod**: `string`

Gets or sets a value indicating the timespan from now in for which to search for events.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts:32](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts#L32)

___

### eventRuleIds

• **eventRuleIds**: `string`[]

Gets or sets a list of EventRule Ids to search by. [EventRule](EventRule.md)

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts:34](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts#L34)

___

### eventRuleSearch

• **eventRuleSearch**: [`EventRuleSearch`](EventRuleSearch.md)

Gets or sets search for [EventOccurrenceDue](EventOccurrenceDue.md)s matching this
 [EventRuleSearch](EventRuleSearch.md). Providing a event rule id will
 search for any EventOccurrences that are assigned to that Event Rule.
 Providing the Groups will search for EventOccurrences for that have Event Rules in that group.
 Available EventRuleSearch options are:.
 <list><item><description>Id</description></item><item><description>Groups</description></item><item><description>IncludeGroups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts:43](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts#L43)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for [EventOccurrenceDue](EventOccurrenceDue.md)s recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts:45](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts#L45)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### maxId

• **maxId**: `string`

Gets or sets gets maximum Id of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts:47](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts#L47)

___

### minId

• **minId**: `string`

Gets or sets gets minimum Id of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts:49](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts#L49)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### status

• **status**: `string`

Gets or sets a value indicating the [EventOccurrenceDue](EventOccurrenceDue.md)s status.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts:51](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts#L51)

___

### toDate

• **toDate**: `Date`

Gets or sets search for [EventOccurrenceDue](EventOccurrenceDue.md)s recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts:53](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EventOccurrenceDueSearch.ts#L53)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
