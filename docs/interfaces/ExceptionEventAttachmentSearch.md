[@fairfleet/geotab](../README.md) / ExceptionEventAttachmentSearch

# Interface: ExceptionEventAttachmentSearch

The object used to specify the arguments when searching for [ExceptionEventAttachment](ExceptionEventAttachment.md)s.
 See comments on each nested [Search](Search.md) for what parameters are supported.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ExceptionEventAttachmentSearch`**

## Table of contents

### Properties

- [exceptionEventSearch](ExceptionEventAttachmentSearch.md#exceptioneventsearch)
- [fromDate](ExceptionEventAttachmentSearch.md#fromdate)
- [id](ExceptionEventAttachmentSearch.md#id)
- [mediaFileSearch](ExceptionEventAttachmentSearch.md#mediafilesearch)
- [populateExceptionEvent](ExceptionEventAttachmentSearch.md#populateexceptionevent)
- [propertySelector](ExceptionEventAttachmentSearch.md#propertyselector)
- [toDate](ExceptionEventAttachmentSearch.md#todate)
- [version](ExceptionEventAttachmentSearch.md#version)

## Properties

### exceptionEventSearch

• **exceptionEventSearch**: [`ExceptionEventSearch`](ExceptionEventSearch.md)

Gets or sets the ExceptionEventAttachmentSearch.ExceptionEventSearch used to find comments related to particular [ExceptionEvent](ExceptionEvent.md)s.

**`Remarks`**

All search properties are supported.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachmentSearch.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachmentSearch.ts#L19)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the ToDate to filter only [ExceptionEventComment](ExceptionEventComment.md)s that have been created since the date.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachmentSearch.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachmentSearch.ts#L21)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### mediaFileSearch

• **mediaFileSearch**: [`MediaFileSearch`](MediaFileSearch.md)

Gets or sets the ExceptionEventAttachmentSearch.MediaFileSearch that can be used to filter for [ExceptionEventAttachment](ExceptionEventAttachment.md) with a specific attachment.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachmentSearch.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachmentSearch.ts#L23)

___

### populateExceptionEvent

• **populateExceptionEvent**: `boolean`

Gets or sets the Boolean indicating whether to populate ExceptionEvents on the result.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachmentSearch.ts:25](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachmentSearch.ts#L25)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### toDate

• **toDate**: `Date`

Gets or sets the ToDate to filter only [ExceptionEventComment](ExceptionEventComment.md)s that have been created up to the date.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachmentSearch.ts:27](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventAttachmentSearch.ts#L27)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
