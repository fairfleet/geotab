[@fairfleet/geotab](../README.md) / TachographCompanyCard

# Interface: TachographCompanyCard

Represents a tachograph company card used to identify transport companies in EU countries.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`TachographCompanyCard`**

## Table of contents

### Properties

- [address](TachographCompanyCard.md#address)
- [cardAuthority](TachographCompanyCard.md#cardauthority)
- [cardNumber](TachographCompanyCard.md#cardnumber)
- [companyName](TachographCompanyCard.md#companyname)
- [expiry](TachographCompanyCard.md#expiry)
- [icc](TachographCompanyCard.md#icc)
- [id](TachographCompanyCard.md#id)
- [lastUpdate](TachographCompanyCard.md#lastupdate)
- [registrationTime](TachographCompanyCard.md#registrationtime)
- [source](TachographCompanyCard.md#source)
- [status](TachographCompanyCard.md#status)
- [validity](TachographCompanyCard.md#validity)

## Properties

### address

• **address**: `string`

Gets or sets the company's address.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:11

___

### cardAuthority

• **cardAuthority**: `string`

Gets or sets the card authority.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:13

___

### cardNumber

• **cardNumber**: `string`

Gets or sets the card number.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:15

___

### companyName

• **companyName**: `string`

Gets or sets the company name of the card.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:17

___

### expiry

• **expiry**: `Date`

Gets or sets the expiry of the card.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:19

___

### icc

• **icc**: `number`

Gets or sets the ICC number of the card.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:21

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lastUpdate

• **lastUpdate**: `Date`

Gets or sets the last time this card was updated.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:23

___

### registrationTime

• **registrationTime**: `Date`

Gets or sets the time this card was registered on the system.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:25

___

### source

• **source**: `string`

Gets or sets the source of the card.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:27

___

### status

• **status**: [`TachographCompanyCardStatus`](../README.md#tachographcompanycardstatus)

Gets or sets the [TachographCompanyCardStatus](../README.md#tachographcompanycardstatus) of the card.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:29

___

### validity

• **validity**: `Date`

Gets or sets the validity of the card.

#### Defined in

src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:31
