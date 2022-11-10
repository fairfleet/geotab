//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "../Entity";
import { Device } from "../Device";

/** Log of energy consumed processing */
export interface FuelAndEnergySnapshotProcessing extends Entity {
  /** Gets or sets the UTC date and time of the upper limit date for processing. */
  backfillDate: Date;
  /** Gets or sets the {@link Device}. */
  device: Device;
  /** Gets or sets the UTC date and time of the most recent processed date. */
  earliestProcessedDate: Date;
  /** Gets or sets a value indicating whether processing is completed. */
  isProcessingComplete: boolean;
  /** Gets or sets the type of snapshot that was processed. */
  snapshotType: string;
}
