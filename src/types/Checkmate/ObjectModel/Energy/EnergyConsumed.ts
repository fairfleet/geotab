//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { EntityWithVersion } from "../EntityWithVersion";
import { Device } from "../Device";

/** Log of energy consumed */
export interface EnergyConsumed extends EntityWithVersion {
  /** Gets or sets the UTC date and time of the event. */
  dateTime: Date;
  /** Gets or sets the StatusData for the {@link Device} specified. */
  device: Device;
  /** Gets or sets the ammount of total energy out (kWh). Default [0]. */
  totalEnergyIn: number;
  /** Gets or sets the ammount of total energy in (kWh). Default [0]. */
  totalEnergyOut: number;
}
