[@fairfleet/geotab](../README.md) / ExceptionEventSearch

# Interface: ExceptionEventSearch

The object used to specify the arguments when searching for [ExceptionEvent](ExceptionEvent.md).
 This search has been designed to work efficiently with these combinations of parameters:<list><item><description>Id</description></item><item><description>DeviceSearch + RuleSearch + FromDate and/or ToDate</description></item></list>

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ExceptionEventSearch`**

## Table of contents

### Properties

- [deviceSearch](ExceptionEventSearch.md#devicesearch)
- [fromDate](ExceptionEventSearch.md#fromdate)
- [id](ExceptionEventSearch.md#id)
- [includeCameraData](ExceptionEventSearch.md#includecameradata)
- [includeDeleted](ExceptionEventSearch.md#includedeleted)
- [includeDismissedEvents](ExceptionEventSearch.md#includedismissedevents)
- [includeExceptionCount](ExceptionEventSearch.md#includeexceptioncount)
- [includeInvalidated](ExceptionEventSearch.md#includeinvalidated)
- [includeMetadata](ExceptionEventSearch.md#includemetadata)
- [maxVersion](ExceptionEventSearch.md#maxversion)
- [ruleSearch](ExceptionEventSearch.md#rulesearch)
- [states](ExceptionEventSearch.md#states)
- [toDate](ExceptionEventSearch.md#todate)
- [useEntityTimeZone](ExceptionEventSearch.md#useentitytimezone)
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

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L24)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for Exception Events that occurred at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L26)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### includeCameraData

• **includeCameraData**: `boolean`

Gets or sets include camera data.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L28)

___

### includeDeleted

• **includeDeleted**: `boolean`

Gets or sets search for [ExceptionEvent](ExceptionEvent.md)s that have been soft deleted for any reason.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L30)

___

### includeDismissedEvents

• **includeDismissedEvents**: `boolean`

Gets or sets include dismissed events.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L32)

___

### includeExceptionCount

• **includeExceptionCount**: `boolean`

Gets or sets a value indicating whether to include the count of exception instances for the returned exception events.
 When set to true, the ExceptionEvent.ExceptionCount property will be populated.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L37)

___

### includeInvalidated

• **includeInvalidated**: `boolean`

Gets or sets search for [ExceptionEvent](ExceptionEvent.md)s that have been invalidated because of new data being processed.
 The default value is [false] while using "Get" and "GetFeed" APIs.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:42](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L42)

___

### includeMetadata

• **includeMetadata**: `boolean`

Gets or sets the flag to include metadata.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L44)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum row version of the
 [ExceptionEvent](ExceptionEvent.md) search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:49](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L49)

___

### ruleSearch

• **ruleSearch**: [`RuleSearch`](RuleSearch.md)

Gets or sets filter by the [RuleSearch](RuleSearch.md) options. Providing a Rule ID
 will search for any Exception Events recorded for that Rule. Providing a [ExceptionRuleBaseType](../README.md#exceptionrulebasetype)
 will search for any Exception Events with the given Base Type.
 Available RuleSearch options are:.
 <list><item><description>Id</description><description>BaseType</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:57](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L57)

___

### states

• **states**: `string`[]

Gets or sets a case-insensitive filter by multiple names of the [ExceptionEventState](ExceptionEventState.md).
 Possible values: "Valid", "Invalid", "Dismissed", "MarkedForCoaching", "CoachingCompleted", "PositiveRecognition", "SavedForLater".

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:62](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L62)

___

### toDate

• **toDate**: `Date`

Gets or sets search for Exception Events that occurred at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:64](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L64)

___

### useEntityTimeZone

• **useEntityTimeZone**: `boolean`

Gets or sets the use entity time zone flag.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:66](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L66)

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

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:76](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L76)

___

### version

• **version**: `number`

Gets or sets the row version of the [ExceptionEvent](ExceptionEvent.md)
 search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:81](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L81)

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

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts:90](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventSearch.ts#L90)
