[@fairfleet/geotab](../README.md) / ExceptionEventSearch

# Interface: ExceptionEventSearch

The object used to specify the arguments when searching for [ExceptionEvent](ExceptionEvent.md).
 This search has been designed to work efficiently with these combinations of parameters:<list><item><description>Id</description></item><item><description>DeviceSearch + RuleSearch + FromDate and/or ToDate</description></item></list>

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ExceptionEventSearch`**

  ↳↳ [`VirtualExceptionEventSearch`](VirtualExceptionEventSearch.md)

## Table of contents

### Properties

- [deviceSearch](ExceptionEventSearch.md#devicesearch)
- [fromDate](ExceptionEventSearch.md#fromdate)
- [id](ExceptionEventSearch.md#id)
- [includeDismissedEvents](ExceptionEventSearch.md#includedismissedevents)
- [includeInvalidated](ExceptionEventSearch.md#includeinvalidated)
- [includeMetadata](ExceptionEventSearch.md#includemetadata)
- [maxVersion](ExceptionEventSearch.md#maxversion)
- [ruleSearch](ExceptionEventSearch.md#rulesearch)
- [toDate](ExceptionEventSearch.md#todate)
- [userSearch](ExceptionEventSearch.md#usersearch)
- [version](ExceptionEventSearch.md#version)
- [zoneSearch](ExceptionEventSearch.md#zonesearch)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a Device ID will
 search for any Exception Events recorded for that Device.
 Providing Groups will search Exception Events recorded for Devices that are members of the provided
 GroupSearch(s) or their children.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L24)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for Exception Events that occurred at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L26)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeDismissedEvents

• **includeDismissedEvents**: `boolean`

Gets or sets include dismissed events.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L28)

___

### includeInvalidated

• **includeInvalidated**: `boolean`

Gets or sets search for [ExceptionEvent](ExceptionEvent.md)s that have been invalidated because of new data being processed.
 The default value is [false] using "Get" API and [true] using "GetFeed" API.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:33](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L33)

___

### includeMetadata

• **includeMetadata**: `boolean`

Gets or sets the flag to include metadata.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:35](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L35)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum row version of the
 [ExceptionEvent](ExceptionEvent.md) search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:40](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L40)

___

### ruleSearch

• **ruleSearch**: [`RuleSearch`](RuleSearch.md)

Gets or sets filter by the [RuleSearch](RuleSearch.md) options. Providing a Rule ID
 will search for any Exception Events recorded for that Rule.
 Available RuleSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:47](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L47)

___

### toDate

• **toDate**: `Date`

Gets or sets search for Exception Events that occurred at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:49](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L49)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets the filter by the [UserSearch](UserSearch.md) options. Providing a User ID will search
 for any Exception Events recorded for that User.
 Providing Groups will search Exception Events recorded for Users that are members of the provided GroupSearch(s) or
 their children.
 Available UserSearch options are:
 <list><item><description>Id</description></item><item><description>DriverGroups</description></item><item><description>DriverGroupFilterCondition</description></item><item><description>CompanyGroups</description></item><item><description>UserGroupFilterCondition</description></item></list><para />
 Cannot be used with DeviceSearch.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:59](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L59)

___

### version

• **version**: `number`

Gets or sets the row version of the [ExceptionEvent](ExceptionEvent.md)
 search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:64](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L64)

___

### zoneSearch

• **zoneSearch**: [`ZoneSearch`](ZoneSearch.md)

Gets or sets filter by the [ZoneSearch](ZoneSearch.md) options.
 Providing a zone ID will search for Exception Events recorded with ZoneId metadata.
 Providing the Groups will search for Exception Events recorded with ZoneId metadata of Zones that are members of the provided
 GroupSearch(s) or their children.
 Available ZoneSearch options are:.
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:73](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L73)
