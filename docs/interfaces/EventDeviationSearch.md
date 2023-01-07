[@fairfleet/geotab](../README.md) / EventDeviationSearch

# Interface: EventDeviationSearch

The object used to specify the arguments when searching for
 [EventDeviation](EventDeviation.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`EventDeviationSearch`**

## Table of contents

### Properties

- [activeOnly](EventDeviationSearch.md#activeonly)
- [deviceIds](EventDeviationSearch.md#deviceids)
- [deviceSearch](EventDeviationSearch.md#devicesearch)
- [eventRuleIds](EventDeviationSearch.md#eventruleids)
- [eventRuleSearch](EventDeviationSearch.md#eventrulesearch)
- [id](EventDeviationSearch.md#id)
- [version](EventDeviationSearch.md#version)

## Properties

### activeOnly

• **activeOnly**: `boolean`

Gets or sets a value indicating whether gets or sets search for active [EventDeviation](EventDeviation.md)s recorded Only.

#### Defined in

src/types/Checkmate/ObjectModel/EventDeviationSearch.ts:17

___

### deviceIds

• **deviceIds**: `string`[]

Gets or sets a list of Device Ids to search by. [Device](Device.md)

#### Defined in

src/types/Checkmate/ObjectModel/EventDeviationSearch.ts:19

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [EventDeviation](EventDeviation.md)s matching this
 [DeviceSearch](DeviceSearch.md). Providing a device ID will
 search for any EventDeviations that are assigned to that Device.
 Providing the Groups will search for EventDeviations for that have Devices in that group.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

src/types/Checkmate/ObjectModel/EventDeviationSearch.ts:28

___

### eventRuleIds

• **eventRuleIds**: `string`[]

Gets or sets a list of EventRule Ids to search by. [EventRule](EventRule.md)

#### Defined in

src/types/Checkmate/ObjectModel/EventDeviationSearch.ts:30

___

### eventRuleSearch

• **eventRuleSearch**: [`EventRuleSearch`](EventRuleSearch.md)

Gets or sets search for [EventDeviation](EventDeviation.md)s matching this
 [EventRuleSearch](EventRuleSearch.md). Providing a event rule id will
 search for any EventDeviations that are assigned to that Event Rule.
 Providing the Groups will search for EventDeviations for that have Event Rules in that group.
 Available EventRuleSearch options are:.
 <list><item><description>Id</description></item><item><description>Groups</description></item><item><description>IncludeGroups</description></item></list>

#### Defined in

src/types/Checkmate/ObjectModel/EventDeviationSearch.ts:39

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
