[@fairfleet/geotab](../README.md) / TextMessage

# Interface: TextMessage

<para />
 A message to send or received from a device.
 <para />
 When working with text messages it is important to make the distinction between a "Reply" and a "Response".
 <list><item><description>
 Reply: A reply is a Text Message that is a Reply to another text message.
 For example: A text message is sent to a device and the device replies with a text message of it's own.
 </description></item><item><description>
 Response: A response is a predefined ("canned") response within a text message.
 For example: A text message is sent to a device with a number of canned responses to reply with (Yes,
 No, Maybe).
 One of those responses is selected by the driver and is the message of the Reply from the device.
 </description></item></list>

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`TextMessage`**

## Table of contents

### Properties

- [activeFrom](TextMessage.md#activefrom)
- [activeTo](TextMessage.md#activeto)
- [delivered](TextMessage.md#delivered)
- [device](TextMessage.md#device)
- [id](TextMessage.md#id)
- [isDirectionToVehicle](TextMessage.md#isdirectiontovehicle)
- [markedReadBy](TextMessage.md#markedreadby)
- [messageContent](TextMessage.md#messagecontent)
- [messageSize](TextMessage.md#messagesize)
- [parentMessage](TextMessage.md#parentmessage)
- [read](TextMessage.md#read)
- [recipient](TextMessage.md#recipient)
- [replyMessage](TextMessage.md#replymessage)
- [sent](TextMessage.md#sent)
- [user](TextMessage.md#user)
- [version](TextMessage.md#version)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets the date and time the text message is active from.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:27](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L27)

___

### activeTo

• **activeTo**: `Date`

Gets or sets the date and time the text message is active to.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:29](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L29)

___

### delivered

• **delivered**: `Date`

Gets or sets the date and time the message was delivered. Default [MaxDate].

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:31](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L31)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) the message was sent to. Default [Null].

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:33](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L33)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### isDirectionToVehicle

• **isDirectionToVehicle**: `boolean`

Gets or sets if message is going to or from vehicle.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:35](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L35)

___

### markedReadBy

• **markedReadBy**: [`User`](User.md)

Gets or sets the [User](User.md) who read the message or null if the message has not been read.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:37](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L37)

___

### messageContent

• **messageContent**: [`TextMessageContentType`](TextMessageContentType.md)

Gets or sets the message content. A basic message can be sent via a
 TextContent
 or a message with predefined ("canned") responses by a
 CannedResponseContent or a series of
 LocationContent comprising a route.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:45](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L45)

___

### messageSize

• **messageSize**: `number`

Gets or sets the message length.

**`Deprecated`**

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:52](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L52)

___

### parentMessage

• **parentMessage**: [`TextMessage`](TextMessage.md)

Gets or sets the text message that this is the reply to. Only a reply message will have a parent.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:54](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L54)

___

### read

• **read**: `Date`

Gets or sets the date and time the message was read or null if the message has not been read.

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:56](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L56)

___

### recipient

• **recipient**: [`User`](User.md)

Gets or sets the [User](User.md) the message was sent to. Default [Null].

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:58](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L58)

___

### replyMessage

• **replyMessage**: [`TextMessage`](TextMessage.md)

Gets or sets the text message reply to this message. A text message should only have one reply. (Should not reply to a reply). Default [Null]

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:60](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L60)

___

### sent

• **sent**: `Date`

Gets or sets the date and time the message was sent. Default [MaxDate].

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:62](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L62)

___

### user

• **user**: [`User`](User.md)

Gets or sets the [User](User.md) that the message was sent from or null. If the message was sent from a device or was generated by the system the user property will be null. Default [Null].

#### Defined in

[src/types/Checkmate/ObjectModel/TextMessage.ts:64](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TextMessage.ts#L64)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
