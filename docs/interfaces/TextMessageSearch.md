[@fairfleet/geotab](../README.md) / TextMessageSearch

# Interface: TextMessageSearch

The object used to specify the arguments when searching for a [TextMessage](TextMessage.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`TextMessageSearch`**

## Table of contents

### Properties

- [contentTypes](TextMessageSearch.md#contenttypes)
- [deviceSearch](TextMessageSearch.md#devicesearch)
- [fromDate](TextMessageSearch.md#fromdate)
- [groups](TextMessageSearch.md#groups)
- [id](TextMessageSearch.md#id)
- [isDelivered](TextMessageSearch.md#isdelivered)
- [isDirectionToVehicle](TextMessageSearch.md#isdirectiontovehicle)
- [isRead](TextMessageSearch.md#isread)
- [modifiedSinceDate](TextMessageSearch.md#modifiedsincedate)
- [parentMessageId](TextMessageSearch.md#parentmessageid)
- [parentTextMessageId](TextMessageSearch.md#parenttextmessageid)
- [propertySelector](TextMessageSearch.md#propertyselector)
- [recipientSearch](TextMessageSearch.md#recipientsearch)
- [toDate](TextMessageSearch.md#todate)
- [userSearch](TextMessageSearch.md#usersearch)
- [version](TextMessageSearch.md#version)

## Properties

### contentTypes

• **contentTypes**: [`MessageContentType`](../README.md#messagecontenttype)[]

Gets or sets search for TextMessages filtered based on the [MessageContentType](../README.md#messagecontenttype).

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L14)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any TextMessages that are assigned to that Device.
 Providing the Groups will search for TextMessages for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L22)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for TextMessages that were sent at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:24](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L24)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for TextMessages sent to Devices, Users or Recipients that are members of these GroupSearch(s) or their child Groups.
 Available [GroupSearch](GroupSearch.md) options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:30](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L30)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### isDelivered

• **isDelivered**: `boolean`

Gets or sets search for delivered or undelivered TextMessages. If it's set to true, it will return all TextMessages
 that were delivered. If it set to false, it will return all TextMessages that were not delivered. If it is set to
 null, it will return both delivered and undelivered TextMessages.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:36](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L36)

___

### isDirectionToVehicle

• **isDirectionToVehicle**: `boolean`

Gets or sets search for TextMessages based on the "direction" of the message. If it's set to true, it will return all TextMessages
 that were sent to a [Device](Device.md). If it set to false, it will return all TextMessages that
 were not sent to a [Device](Device.md). If it is set to null, it will return TextMessages sent to or from any asset type.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:42](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L42)

___

### isRead

• **isRead**: `boolean`

Gets or sets search for read or unread TextMessages. If it's set to true, it will return all TextMessages
 that were read. If it set to false, it will return all TextMessages that were not unread. If it is set to
 null, it will return both read and unread TextMessages.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:48](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L48)

___

### modifiedSinceDate

• **modifiedSinceDate**: `Date`

Gets or sets search for TextMessages that were delivered/sent/read since this date.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:50](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L50)

___

### parentMessageId

• **parentMessageId**: `string`

Gets or sets search for TextMessages that have parent id as this Id.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:52](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L52)

___

### parentTextMessageId

• **parentTextMessageId**: `number`

Gets or sets search for TextMessages that have parent id as this id.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:54](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L54)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### recipientSearch

• **recipientSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for TextMessages sent to this [UserSearch](UserSearch.md).
 Available UserSearch options are:
 <list><item><description>Id</description></item><item><description>CompanyGroups</description></item><item><description>DriverGroups</description></item><item><description>DriverGroupFilterCondition</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:60](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L60)

___

### toDate

• **toDate**: `Date`

Gets or sets search for TextMessages that were sent at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:62](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L62)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for TextMessages sent by this [UserSearch](UserSearch.md).
 Available UserSearch options are:
 <list><item><description>Id</description></item><item><description>CompanyGroups</description></item><item><description>DriverGroups</description></item><item><description>DriverGroupFilterCondition</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:68](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L68)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
