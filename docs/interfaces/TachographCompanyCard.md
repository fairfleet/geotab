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

[src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts#L10)

___

### cardAuthority

• **cardAuthority**: `string`

Gets or sets the card authority.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts#L12)

___

### cardNumber

• **cardNumber**: `string`

Gets or sets the card number.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts#L14)

___

### companyName

• **companyName**: `string`

Gets or sets the company name of the card.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts#L16)

___

### expiry

• **expiry**: `Date`

Gets or sets the expiry of the card.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts#L18)

___

### icc

• **icc**: `number`

Gets or sets the ICC number of the card.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts#L20)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### lastUpdate

• **lastUpdate**: `Date`

Gets or sets the last time this card was updated.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts#L22)

___

### registrationTime

• **registrationTime**: `Date`

Gets or sets the time this card was registered on the system.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts#L24)

___

### source

• **source**: `string`

Gets or sets the source of the card.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts#L26)

___

### status

• **status**: `string`

Gets or sets the status of the card.
 The available values are:
 <list><item><description>"Available": Company card available.</description></item><item><description>"Busy": Company card authenticating.</description></item><item><description>"Offline": Company card disconnected.</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts#L32)

___

### validity

• **validity**: `Date`

Gets or sets the validity of the card.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/CompanyCards/TachographCompanyCard.ts#L34)
