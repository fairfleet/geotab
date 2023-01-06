[@fairfleet/geotab](../README.md) / ReverseGeocodeAddress

# Interface: ReverseGeocodeAddress

The address and [Zone](Zone.md) (if any found) returned by a reverse geocode
 operation.

## Table of contents

### Properties

- [city](ReverseGeocodeAddress.md#city)
- [country](ReverseGeocodeAddress.md#country)
- [formattedAddress](ReverseGeocodeAddress.md#formattedaddress)
- [otherCity](ReverseGeocodeAddress.md#othercity)
- [postalCode](ReverseGeocodeAddress.md#postalcode)
- [region](ReverseGeocodeAddress.md#region)
- [street](ReverseGeocodeAddress.md#street)
- [streetName](ReverseGeocodeAddress.md#streetname)
- [streetNumber](ReverseGeocodeAddress.md#streetnumber)
- [zones](ReverseGeocodeAddress.md#zones)

## Properties

### city

• **city**: `string`

Gets or sets the city name. In some cases there is a suburb and city and these are contained in City and OtherCity
 respectively.

#### Defined in

[src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts#L16)

___

### country

• **country**: `string`

Gets or sets the country name.

#### Defined in

[src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts#L18)

___

### formattedAddress

• **formattedAddress**: `string`

Gets or sets the full formatted address, containing all the available information for street, province/state, postal/ZIP code and country.

#### Defined in

[src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts#L20)

___

### otherCity

• **otherCity**: `string`

Gets or sets the secondary or other city name. In some cases there is a suburb and city and these are contained in City and
 OtherCity respectively.

#### Defined in

[src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts:25](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts#L25)

___

### postalCode

• **postalCode**: `string`

Gets or sets the postal code (ZIP code in USA).

#### Defined in

[src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts:27](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts#L27)

___

### region

• **region**: `string`

Gets or sets the Region name. This is typically a province, state, region or constituent country.

#### Defined in

[src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts:29](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts#L29)

___

### street

• **street**: `string`

Gets or sets the street name of the address; this will not always include the street number.

#### Defined in

[src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts:31](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts#L31)

___

### streetName

• **streetName**: `string`

Gets or sets the street name of the address.

#### Defined in

[src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts:33](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts#L33)

___

### streetNumber

• **streetNumber**: `string`

Gets or sets the street number of the address.

#### Defined in

[src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts:35](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts#L35)

___

### zones

• **zones**: [`Zone`](Zone.md)[]

Gets or sets the collection of [Zone](Zone.md)(s) the address is within.

#### Defined in

[src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts:37](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/ReverseGeocodeAddress.ts#L37)
