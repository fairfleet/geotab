//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "./Entity";
import { Device } from "./Device";
import { DataModeType } from "./DataModeType";

/** Indicates when a {@link RestrictedDataModeChange.DataModeType} was changed. */
export interface RestrictedDataModeChange extends Entity {
  /** Gets or sets the type of the trip. */
  dataModeType: DataModeType;
  /** Gets or sets the date time. */
  dateTime: Date;
  /** Gets or sets the device. */
  device: Device;
}
