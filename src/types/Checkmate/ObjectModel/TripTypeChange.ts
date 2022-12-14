//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "./Entity";
import { Device } from "./Device";
import { TripType } from "./TripType";

/** Indicates when a {@link TripTypeChange.TripType} was changed. */
export interface TripTypeChange extends Entity {
  /** Gets or sets the date time. */
  dateTime: Date;
  /** Gets or sets the device. */
  device: Device;
  /** Gets or sets the type of the trip. */
  tripType: TripType;
}
