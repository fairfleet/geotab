[@fairfleet/geotab](../README.md) / ConsentStatusAuditSearch

# Interface: ConsentStatusAuditSearch

The object used to specify the arguments when searching for [ConsentStatusAudit](ConsentStatusAudit.md).

## Hierarchy

- [`ConsentStatusSearch`](ConsentStatusSearch.md)

  ↳ **`ConsentStatusAuditSearch`**

## Table of contents

### Properties

- [fromDate](ConsentStatusAuditSearch.md#fromdate)
- [id](ConsentStatusAuditSearch.md#id)
- [optionSearch](ConsentStatusAuditSearch.md#optionsearch)
- [productSearch](ConsentStatusAuditSearch.md#productsearch)
- [toDate](ConsentStatusAuditSearch.md#todate)
- [userSearch](ConsentStatusAuditSearch.md#usersearch)
- [version](ConsentStatusAuditSearch.md#version)

## Properties

### fromDate

• **fromDate**: `Date`

Gets or sets search for Data Permissions at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusAuditSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusAuditSearch.ts#L12)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[ConsentStatusSearch](ConsentStatusSearch.md).[id](ConsentStatusSearch.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### optionSearch

• **optionSearch**: [`OptionSearch`](OptionSearch.md)

Gets or sets search with a ConsentStatusSearch.OptionSearch.

#### Inherited from

[ConsentStatusSearch](ConsentStatusSearch.md).[optionSearch](ConsentStatusSearch.md#optionsearch)

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusSearch.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusSearch.ts#L15)

___

### productSearch

• **productSearch**: [`ProductSearch`](ProductSearch.md)

Gets or sets search based on the version of the Solution.

#### Inherited from

[ConsentStatusSearch](ConsentStatusSearch.md).[productSearch](ConsentStatusSearch.md#productsearch)

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusSearch.ts#L17)

___

### toDate

• **toDate**: `Date`

Gets or sets search for Data Permissions at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusAuditSearch.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusAuditSearch.ts#L14)

___

### userSearch

• **userSearch**: [`UserSearch`](UserSearch.md)

Gets or sets search with a [UserSearch](UserSearch.md) Id.
 Available UserSearch options are:
 <list><item><description>Id</description></item></list>

#### Inherited from

[ConsentStatusSearch](ConsentStatusSearch.md).[userSearch](ConsentStatusSearch.md#usersearch)

#### Defined in

[src/types/Checkmate/ObjectModel/Consent/ConsentStatusSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Consent/ConsentStatusSearch.ts#L23)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[ConsentStatusSearch](ConsentStatusSearch.md).[version](ConsentStatusSearch.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
