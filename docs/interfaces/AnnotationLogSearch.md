[@fairfleet/geotab](../README.md) / AnnotationLogSearch

# Interface: AnnotationLogSearch

The object used to specify the arguments when searching for [AnnotationLog](AnnotationLog.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`AnnotationLogSearch`**

## Table of contents

### Properties

- [comment](AnnotationLogSearch.md#comment)
- [fromDate](AnnotationLogSearch.md#fromdate)
- [id](AnnotationLogSearch.md#id)
- [maxVersion](AnnotationLogSearch.md#maxversion)
- [toDate](AnnotationLogSearch.md#todate)
- [userSearch](AnnotationLogSearch.md#usersearch)
- [version](AnnotationLogSearch.md#version)

## Properties

### comment

• **comment**: `string`

Gets or sets search for AnnotationLogs which have a comment that contains this String. Wildcard can be used by prepending/appending "%" to string.

#### Defined in

[src/types/Checkmate/ObjectModel/AnnotationLogSearch.ts:11](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/AnnotationLogSearch.ts#L11)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for AnnotationLogs that were recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/AnnotationLogSearch.ts:13](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/AnnotationLogSearch.ts#L13)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets search for [AnnotationLog](AnnotationLog.md)s with a maximum of this version.

#### Defined in

[src/types/Checkmate/ObjectModel/AnnotationLogSearch.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/AnnotationLogSearch.ts#L15)

___

### toDate

• **toDate**: `Date`

Gets or sets search for AnnotationLogs that were recorded at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/AnnotationLogSearch.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/AnnotationLogSearch.ts#L17)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search for AnnotationLogs with this [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/AnnotationLogSearch.ts:23](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/AnnotationLogSearch.ts#L23)

___

### version

• **version**: `number`

Gets or sets the row version of the AnnotationLog search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/AnnotationLogSearch.ts:25](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/AnnotationLogSearch.ts#L25)
