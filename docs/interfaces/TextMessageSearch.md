[@fairfleet/geotab](../README.md) / TextMessageSearch

# Interface: TextMessageSearch

The object used to specify the arguments when searching for a [TextMessage](TextMessage.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`TextMessageSearch`**

## Table of contents

### Properties

- [channelNumbers](TextMessageSearch.md#channelnumbers)
- [contentTypes](TextMessageSearch.md#contenttypes)
- [deviceSearch](TextMessageSearch.md#devicesearch)
- [fromDate](TextMessageSearch.md#fromdate)
- [groups](TextMessageSearch.md#groups)
- [id](TextMessageSearch.md#id)
- [isDelivered](TextMessageSearch.md#isdelivered)
- [isDirectionToVehicle](TextMessageSearch.md#isdirectiontovehicle)
- [isRead](TextMessageSearch.md#isread)
- [latestMessageOnly](TextMessageSearch.md#latestmessageonly)
- [mimeTypes](TextMessageSearch.md#mimetypes)
- [modifiedSinceDate](TextMessageSearch.md#modifiedsincedate)
- [parentMessageId](TextMessageSearch.md#parentmessageid)
- [parentTextMessageId](TextMessageSearch.md#parenttextmessageid)
- [recipientSearch](TextMessageSearch.md#recipientsearch)
- [toDate](TextMessageSearch.md#todate)
- [userSearch](TextMessageSearch.md#usersearch)
- [version](TextMessageSearch.md#version)

## Properties

### channelNumbers

• **channelNumbers**: `number`[]

Gets or sets search for TextMessages with DataToComponentContent filtered based on the channelNumber.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L14)

___

### contentTypes

• **contentTypes**: [`MessageContentType`](../README.md#messagecontenttype)[]

Gets or sets search for TextMessages filtered based on the [MessageContentType](../README.md#messagecontenttype).

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L16)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any TextMessages that are assigned to that Device.
 Providing the Groups will search for TextMessages for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L24)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for TextMessages that were sent at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L26)

___

### groups

• **groups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for TextMessages sent to Devices, Users or Recipients that are members of these GroupSearch(s) or their child Groups.
 Available [GroupSearch](GroupSearch.md) options are:
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:32](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L32)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isDelivered

• **isDelivered**: `boolean`

Gets or sets search for delivered or undelivered TextMessages. If it's set to true, it will return all TextMessages
 that were delivered. If it set to false, it will return all TextMessages that were not delivered. If it is set to
 null, it will return both delivered and undelivered TextMessages.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:38](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L38)

___

### isDirectionToVehicle

• **isDirectionToVehicle**: `boolean`

Gets or sets search for TextMessages based on the "direction" of the message. If it's set to true, it will return all TextMessages
 that were sent to a [Device](Device.md). If it set to false, it will return all TextMessages that
 were not sent to a [Device](Device.md). If it is set to null, it will return TextMessages sent to or from any asset type.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:44](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L44)

___

### isRead

• **isRead**: `boolean`

Gets or sets search for read or unread TextMessages. If it's set to true, it will return all TextMessages
 that were read. If it set to false, it will return all TextMessages that were not unread. If it is set to
 null, it will return both read and unread TextMessages.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:50](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L50)

___

### latestMessageOnly

• **latestMessageOnly**: `boolean`

Gets or sets a value indicating whether when LatestMessageOnly is set to True; only a single most recent message that matches the search parameters
 will be returned per device (using the date sent time to determine most recent).

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:55](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L55)

___

### mimeTypes

• **mimeTypes**: `string`[]

Gets or sets search for TextMessages with MimeContent filtered based on the messages MIME type.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:57](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L57)

___

### modifiedSinceDate

• **modifiedSinceDate**: `Date`

Gets or sets search for TextMessages that were delivered/sent/read since this date.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:59](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L59)

___

### parentMessageId

• **parentMessageId**: `string`

Gets or sets search for TextMessages that have parent id as this Id.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:61](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L61)

___

### parentTextMessageId

• **parentTextMessageId**: `number`

Gets or sets search for TextMessages that have parent id as this id.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:63](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L63)

___

### recipientSearch

• **recipientSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for TextMessages sent to this [UserSearch](UserSearch.md).
 Available UserSearch options are:
 <list><item><description>Id</description></item><item><description>CompanyGroups</description></item><item><description>DriverGroups</description></item><item><description>DriverGroupFilterCondition</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:69](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L69)

___

### toDate

• **toDate**: `Date`

Gets or sets search for TextMessages that were sent at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:71](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L71)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for TextMessages sent by this [UserSearch](UserSearch.md).
 Available UserSearch options are:
 <list><item><description>Id</description></item><item><description>CompanyGroups</description></item><item><description>DriverGroups</description></item><item><description>DriverGroupFilterCondition</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessageSearch.ts:77](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/TextMessageSearch.ts#L77)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
