[@fairfleet/geotab](../README.md) / EventOccurrenceSearch

# Interface: EventOccurrenceSearch

The object used to specify the arguments when searching for
 [EventOccurrence](EventOccurrence.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EventOccurrenceSearch`**

## Table of contents

### Properties

- [activeOnly](EventOccurrenceSearch.md#activeonly)
- [deviceIds](EventOccurrenceSearch.md#deviceids)
- [deviceSearch](EventOccurrenceSearch.md#devicesearch)
- [eventRuleIds](EventOccurrenceSearch.md#eventruleids)
- [eventRuleSearch](EventOccurrenceSearch.md#eventrulesearch)
- [eventTypeIds](EventOccurrenceSearch.md#eventtypeids)
- [fromDate](EventOccurrenceSearch.md#fromdate)
- [id](EventOccurrenceSearch.md#id)
- [includeHistoricDevices](EventOccurrenceSearch.md#includehistoricdevices)
- [includeSkipped](EventOccurrenceSearch.md#includeskipped)
- [includeSkippedMaintenance](EventOccurrenceSearch.md#includeskippedmaintenance)
- [includeUnplannedMaintenance](EventOccurrenceSearch.md#includeunplannedmaintenance)
- [keywords](EventOccurrenceSearch.md#keywords)
- [latestRecordsOnly](EventOccurrenceSearch.md#latestrecordsonly)
- [maxId](EventOccurrenceSearch.md#maxid)
- [minId](EventOccurrenceSearch.md#minid)
- [returnLinkageEvents](EventOccurrenceSearch.md#returnlinkageevents)
- [toDate](EventOccurrenceSearch.md#todate)
- [version](EventOccurrenceSearch.md#version)

## Properties

### activeOnly

• **activeOnly**: `boolean`

Gets or sets a value indicating whether gets or sets search for active [EventOccurrence](EventOccurrence.md)s recorded Only.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L17)

___

### deviceIds

• **deviceIds**: `string`[]

Gets or sets a list of Device Ids to search by. [Device](Device.md)

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L19)

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

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L28)

___

### eventRuleIds

• **eventRuleIds**: `string`[]

Gets or sets a list of EventRule Ids to search by. [EventRule](EventRule.md)

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:30](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L30)

___

### eventRuleSearch

• **eventRuleSearch**: [`EventRuleSearch`](EventRuleSearch.md)

Gets or sets search for [EventOccurrence](EventOccurrence.md)s matching this
 [EventRuleSearch](EventRuleSearch.md). Providing a event rule id will
 search for any EventOccurrences that are assigned to that Event Rule.
 Providing the Groups will search for EventOccurrences for that have Event Rules in that group.
 Available EventRuleSearch options are:.
 <list><item><description>Id</description></item><item><description>Groups</description></item><item><description>IncludeGroups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:39](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L39)

___

### eventTypeIds

• **eventTypeIds**: `string`[]

Gets or sets a list of EventType Ids to search by. [EventType](EventType.md)

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:41](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L41)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for [EventOccurrence](EventOccurrence.md)s recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:43](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L43)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeHistoricDevices

• **includeHistoricDevices**: `boolean`

Gets or sets a value indicating whether event has historic devices.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:45](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L45)

___

### includeSkipped

• **includeSkipped**: `boolean`

Gets or sets a value indicating whether event is skipped.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:47](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L47)

___

### includeSkippedMaintenance

• **includeSkippedMaintenance**: `boolean`

Gets or sets a value indicating whether searching for 'skipped' maintenance.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:49](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L49)

___

### includeUnplannedMaintenance

• **includeUnplannedMaintenance**: `boolean`

Gets or sets a value indicating whether searching for 'unplanned maintenance'.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:51](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L51)

___

### keywords

• **keywords**: `string`[]

Gets or sets search for entities that contain specific keywords in all wildcard string-searchable fields.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:53](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L53)

___

### latestRecordsOnly

• **latestRecordsOnly**: `boolean`

Gets or sets a value indicating whether the search returns latest [EventOccurrence](EventOccurrence.md) records only.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:55](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L55)

___

### maxId

• **maxId**: `string`

Gets or sets gets maximum Id of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:57](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L57)

___

### minId

• **minId**: `string`

Gets or sets gets minimum Id of the search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:59](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L59)

___

### returnLinkageEvents

• **returnLinkageEvents**: `boolean`

Gets or sets a value indicating whether search returns linkage [EventOccurrence](EventOccurrence.md) records for once-off [EventRule](EventRule.md).

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:61](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L61)

___

### toDate

• **toDate**: `Date`

Gets or sets search for [EventOccurrence](EventOccurrence.md)s recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts:63](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EventOccurrenceSearch.ts#L63)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
