//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { EntityWithVersion } from "../EntityWithVersion";
import { Device } from "../Device";
import { FuelUpEventConfidences } from "./FuelUpEventConfidences";

/** Log of fueling events. */
export interface FuelUsed extends EntityWithVersion {
  /** Gets or sets the confidence associated with the FuelUsage record. */
  confidence: FuelUpEventConfidences;
  /** Gets or sets the UTC date and time of the transaction. */
  dateTime: Date;
  /** Gets or sets the StatusData for the {@link Device} specified. */
  device: Device;
  /** Gets or sets the volume of fuel purchased in Liters. Default [0]. */
  totalFuelUsed: number;
}
