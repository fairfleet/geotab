//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Zone } from "./Zone";

/**
 *  The address and {@link Zone} (if any found) returned by a reverse geocode
 *  operation.
 */
export interface ReverseGeocodeAddress {
  /**
   * Gets or sets the city name. In some cases there is a suburb and city and these are contained in City and OtherCity
   *  respectively.
   */
  city: string;
  /** Gets or sets the country name. */
  country: string;
  /** Gets or sets the full formatted address, containing all the available information for street, province/state, postal/ZIP code and country. */
  formattedAddress: string;
  /**
   * Gets or sets the secondary or other city name. In some cases there is a suburb and city and these are contained in City and
   *  OtherCity respectively.
   */
  otherCity: string;
  /** Gets or sets the postal code (ZIP code in USA). */
  postalCode: string;
  /** Gets or sets the Region name. This is typically a province, state, region or constituent country. */
  region: string;
  /** Gets or sets the street name of the address; this will not always include the street number. */
  street: string;
  /** Gets or sets the street name of the address. */
  streetName: string;
  /** Gets or sets the street number of the address. */
  streetNumber: string;
  /** Gets or sets the collection of {@link Zone}(s) the address is within. */
  zones: Zone[];
}