[@fairfleet/geotab](../README.md) / VirtualExceptionEventSearch

# Interface: VirtualExceptionEventSearch

The object used to specify the arguments when searching for [VirtualExceptionEvent](VirtualExceptionEvent.md).
 This search has been designed to work efficiently with these combinations of parameters:<list><item><description>Id</description></item><item><description>DeviceSearch + RuleSearch + FromDate and/or ToDate</description></item></list>

## Hierarchy

- [`ExceptionEventSearch`](ExceptionEventSearch.md)

  ↳ **`VirtualExceptionEventSearch`**

## Table of contents

### Properties

- [deviceSearch](VirtualExceptionEventSearch.md#devicesearch)
- [fromDate](VirtualExceptionEventSearch.md#fromdate)
- [id](VirtualExceptionEventSearch.md#id)
- [includeDismissedEvents](VirtualExceptionEventSearch.md#includedismissedevents)
- [includeInvalidated](VirtualExceptionEventSearch.md#includeinvalidated)
- [includeMetadata](VirtualExceptionEventSearch.md#includemetadata)
- [maxVersion](VirtualExceptionEventSearch.md#maxversion)
- [ruleSearch](VirtualExceptionEventSearch.md#rulesearch)
- [toDate](VirtualExceptionEventSearch.md#todate)
- [userSearch](VirtualExceptionEventSearch.md#usersearch)
- [version](VirtualExceptionEventSearch.md#version)
- [zoneSearch](VirtualExceptionEventSearch.md#zonesearch)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a Device ID will
 search for any Exception Events recorded for that Device.
 Providing Groups will search Exception Events recorded for Devices that are members of the provided
 GroupSearch(s) or their children.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Inherited from

[ExceptionEventSearch](ExceptionEventSearch.md).[deviceSearch](ExceptionEventSearch.md#devicesearch)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L24)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for Exception Events that occurred at this date or after.

#### Inherited from

[ExceptionEventSearch](ExceptionEventSearch.md).[fromDate](ExceptionEventSearch.md#fromdate)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L26)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[ExceptionEventSearch](ExceptionEventSearch.md).[id](ExceptionEventSearch.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeDismissedEvents

• **includeDismissedEvents**: `boolean`

Gets or sets include dismissed events.

#### Inherited from

[ExceptionEventSearch](ExceptionEventSearch.md).[includeDismissedEvents](ExceptionEventSearch.md#includedismissedevents)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L28)

___

### includeInvalidated

• **includeInvalidated**: `boolean`

Gets or sets search for [ExceptionEvent](ExceptionEvent.md)s that have been invalidated because of new data being processed.
 The default value is [false] using "Get" API and [true] using "GetFeed" API.

#### Inherited from

[ExceptionEventSearch](ExceptionEventSearch.md).[includeInvalidated](ExceptionEventSearch.md#includeinvalidated)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:33](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L33)

___

### includeMetadata

• **includeMetadata**: `boolean`

Gets or sets the flag to include metadata.

#### Inherited from

[ExceptionEventSearch](ExceptionEventSearch.md).[includeMetadata](ExceptionEventSearch.md#includemetadata)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:35](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L35)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum row version of the
 [ExceptionEvent](ExceptionEvent.md) search criteria.

#### Inherited from

[ExceptionEventSearch](ExceptionEventSearch.md).[maxVersion](ExceptionEventSearch.md#maxversion)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:40](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L40)

___

### ruleSearch

• **ruleSearch**: [`RuleSearch`](RuleSearch.md)

Gets or sets filter by the [RuleSearch](RuleSearch.md) options. Providing a Rule ID
 will search for any Exception Events recorded for that Rule.
 Available RuleSearch options are:.
 <list><item><description>Id</description></item></list>

#### Inherited from

[ExceptionEventSearch](ExceptionEventSearch.md).[ruleSearch](ExceptionEventSearch.md#rulesearch)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:47](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L47)

___

### toDate

• **toDate**: `Date`

Gets or sets search for Exception Events that occurred at this date or before.

#### Inherited from

[ExceptionEventSearch](ExceptionEventSearch.md).[toDate](ExceptionEventSearch.md#todate)

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

#### Inherited from

[ExceptionEventSearch](ExceptionEventSearch.md).[userSearch](ExceptionEventSearch.md#usersearch)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:59](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L59)

___

### version

• **version**: `number`

Gets or sets the row version of the [ExceptionEvent](ExceptionEvent.md)
 search criteria.

#### Inherited from

[ExceptionEventSearch](ExceptionEventSearch.md).[version](ExceptionEventSearch.md#version)

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

#### Inherited from

[ExceptionEventSearch](ExceptionEventSearch.md).[zoneSearch](ExceptionEventSearch.md#zonesearch)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:73](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L73)
