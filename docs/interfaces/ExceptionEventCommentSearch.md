[@fairfleet/geotab](../README.md) / ExceptionEventCommentSearch

# Interface: ExceptionEventCommentSearch

The object used to specify the arguments when searching for [ExceptionEventComment](ExceptionEventComment.md)s.
 See comments on each nested [Search](Search.md) for what parameters are supported.

## Hierarchy

- [`Search`](Search.md)

  ↳ **`ExceptionEventCommentSearch`**

## Table of contents

### Properties

- [exceptionEventSearch](ExceptionEventCommentSearch.md#exceptioneventsearch)
- [fromDate](ExceptionEventCommentSearch.md#fromdate)
- [id](ExceptionEventCommentSearch.md#id)
- [populateExceptionEvent](ExceptionEventCommentSearch.md#populateexceptionevent)
- [toDate](ExceptionEventCommentSearch.md#todate)
- [userSearch](ExceptionEventCommentSearch.md#usersearch)
- [version](ExceptionEventCommentSearch.md#version)

## Properties

### exceptionEventSearch

• **exceptionEventSearch**: [`ExceptionEventSearch`](ExceptionEventSearch.md)

Gets or sets the ExceptionEventCommentSearch.ExceptionEventSearch used to find comments related to particular [ExceptionEvent](ExceptionEvent.md)s.

**`Remarks`**

All search properties are supported. When specified, ExceptionEvents will be populated.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventCommentSearch.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventCommentSearch.ts#L19)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the ToDate to filter only [ExceptionEventComment](ExceptionEventComment.md)s that have been created since the date.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventCommentSearch.ts:21](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventCommentSearch.ts#L21)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### populateExceptionEvent

• **populateExceptionEvent**: `boolean`

Gets or sets the Boolean indicating whether to populate ExceptionEvents on the result.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventCommentSearch.ts:23](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventCommentSearch.ts#L23)

___

### toDate

• **toDate**: `Date`

Gets or sets the ToDate to filter only [ExceptionEventComment](ExceptionEventComment.md)s that have been created up to the date.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventCommentSearch.ts:25](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventCommentSearch.ts#L25)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets the ExceptionEventCommentSearch.UserSearch used to filter for [ExceptionEventComment](ExceptionEventComment.md)s created by a specific user.

#### Defined in

[src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventCommentSearch.ts:27](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Exceptions/ExceptionEventCommentSearch.ts#L27)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
