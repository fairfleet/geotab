[@fairfleet/geotab](../README.md) / ExceptionEventMediaLinkSearch

# Interface: ExceptionEventMediaLinkSearch

The object used to specify the arguments when searching for [ExceptionEventMediaLink](ExceptionEventMediaLink.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ExceptionEventMediaLinkSearch`**

## Table of contents

### Properties

- [exceptionEventId](ExceptionEventMediaLinkSearch.md#exceptioneventid)
- [exceptionEventIds](ExceptionEventMediaLinkSearch.md#exceptioneventids)
- [id](ExceptionEventMediaLinkSearch.md#id)
- [maxVersion](ExceptionEventMediaLinkSearch.md#maxversion)
- [mediaRequestId](ExceptionEventMediaLinkSearch.md#mediarequestid)
- [mediaRequestIds](ExceptionEventMediaLinkSearch.md#mediarequestids)
- [mediaStatuses](ExceptionEventMediaLinkSearch.md#mediastatuses)
- [mediaType](ExceptionEventMediaLinkSearch.md#mediatype)
- [populateExceptionEvent](ExceptionEventMediaLinkSearch.md#populateexceptionevent)
- [version](ExceptionEventMediaLinkSearch.md#version)

## Properties

### exceptionEventId

• **exceptionEventId**: `string`

Gets or sets the exception event id, which is used to search for a specific matching exception event id.

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts#L13)

___

### exceptionEventIds

• **exceptionEventIds**: `string`[]

Gets or sets the exception event ids, which matches based on the exception ids in the list.

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts#L15)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the max row version of the [ExceptionEventMediaLink](ExceptionEventMediaLink.md) search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts#L17)

___

### mediaRequestId

• **mediaRequestId**: `string`

Gets or sets the media request id, which is used to search for a specific matching media request id.

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts#L19)

___

### mediaRequestIds

• **mediaRequestIds**: `string`[]

Gets or sets the media request ids, which matches based on the media request ids in the list.

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts#L21)

___

### mediaStatuses

• **mediaStatuses**: `string`[]

Gets or sets the media statuses, which is used to search for specific media statuses.

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts#L23)

___

### mediaType

• **mediaType**: [`MediaContentType`](../README.md#mediacontenttype)

Gets or sets the media type, which is used to search for specific types of media only (i.e. only Video, only Snapshot).

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts#L25)

___

### populateExceptionEvent

• **populateExceptionEvent**: `boolean`

Gets or sets the property indicating whether to populate the [ExceptionEvent](ExceptionEvent.md) associated with the [ExceptionEventMediaLink](ExceptionEventMediaLink.md).

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts#L27)

___

### version

• **version**: `number`

Gets or sets the row version of the [ExceptionEventMediaLink](ExceptionEventMediaLink.md) search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/ExceptionEventMediaLinkSearch.ts#L29)
