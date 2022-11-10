//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { FuelEvent } from "./FuelEvent";
import { Device } from "../Device";
import { Driver } from "../Driver";
import { FuelTransactionProvider } from "./FuelTransactionProvider";

/**
 * Information from a fuel card provider representing a fuel transaction. Fuel card information will be matched to a
 *  {@link FuelTransaction.Device} by one of these fields: vehicleIdentificationNumber, serialNumber, licencePlate or comments.
 */
export interface FuelTransaction extends FuelEvent {
  /** Gets or sets the masked or partial purchasing card number. */
  cardNumber: string;
  /** Gets or sets the free text field where any user information can be stored and referenced for this entity. This can be used to associate the transaction with a {@link FuelTransaction.Device}. Maximum length [1024] Default [""]. */
  comments: string;
  /** Gets or sets the vehicle description of the vehicle. This can be used to associate the transaction with a {@link FuelTransaction.Device}. Maximum length [255] Default [""]. */
  description: string;
  /** Gets or sets the {@link Device} the transaction belongs to. Default [null]. */
  device: Device;
  /** Gets or sets the {@link Driver} the transaction belongs to. */
  driver: Driver;
  /** Gets or sets the fuel card holder name. This can be used to associate the transaction with a {@link FuelTransaction.Driver}. Maximum length [255] Default [""]. */
  driverName: string;
  /** Gets or sets the external reference to the transaction. Typically this is an external identifier. Maximum length [255] Default [""]. */
  externalReference: string;
  /** Gets or sets the licence plate of the vehicle of the vehicle. This can be used to associate the transaction with a {@link FuelTransaction.Device}. Maximum length [255] Default [""]. */
  licencePlate: string;
  /** Gets or sets the {@link FuelTransactionProvider} of this transaction. Default [Unknown]. */
  provider: FuelTransactionProvider;
  /** Gets or sets the Product Description given by the Provider. */
  providerProductDescription: string;
  /** Gets or sets the serial number of the device. This can be used to associate the transaction with a {@link FuelTransaction.Device}. Maximum length [255] Default [""]. */
  serialNumber: string;
  /** Gets or sets the site/merchant name where the transaction took place. */
  siteName: string;
  /** Gets or sets the JSON string representing the source data. Default [""]. */
  sourceData: string;
  /** Gets or sets the vehicle identification number (VIN) of the vehicle. This is used to associate the transaction with a {@link FuelTransaction.Device}. Maximum length [255] Default [""]. */
  vehicleIdentificationNumber: string;
}