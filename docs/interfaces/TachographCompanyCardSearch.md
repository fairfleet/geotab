[@fairfleet/geotab](../README.md) / TachographCompanyCardSearch

# Interface: TachographCompanyCardSearch

The object used to specify the arguments when searching for [TachographCompanyCardSearch](TachographCompanyCardSearch.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`TachographCompanyCardSearch`**

## Table of contents

### Properties

- [cardNumber](TachographCompanyCardSearch.md#cardnumber)
- [icc](TachographCompanyCardSearch.md#icc)
- [id](TachographCompanyCardSearch.md#id)
- [isValidAt](TachographCompanyCardSearch.md#isvalidat)
- [status](TachographCompanyCardSearch.md#status)
- [version](TachographCompanyCardSearch.md#version)

## Properties

### cardNumber

• **cardNumber**: `string`

Gets or sets search for tachograph company cards that match the card number.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCardSearch.ts:11

___

### icc

• **icc**: `number`

Gets or sets search for tachograph company cards with this icc.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCardSearch.ts:13

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isValidAt

• **isValidAt**: `Date`

Gets or sets search for tachograph company cards
 where the company card is valid at this time, and it is not expired.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCardSearch.ts:18

___

### status

• **status**: [`TachographCompanyCardStatus`](../README.md#tachographcompanycardstatus)

Gets or sets search for tachograph company cards that match this status.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCardSearch.ts:20

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
