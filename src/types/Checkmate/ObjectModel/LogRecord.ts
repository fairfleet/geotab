//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "./Entity";
import { Device } from "./Device";

/** Record of log entries containing data for a device's position and speed at a specific date and time. */
export interface LogRecord extends Entity {
  /** Gets or sets the date and time the log was recorded. */
  dateTime: Date;
  /** Gets or sets the {@link Device} this log belongs to. */
  device: Device;
  /**
   * Gets or sets a value indicating whether this instance is the last active record in the vehicle's active period. Possible values are:.
   *  <list type="bullet"><item><description>false: The record is within the active period and not the last active record</description></item><item><description>true: The record is within the active period and is the last active record</description></item><item><description>null: The record is not within the active period (ex. GPS heartbeat)</description></item></list>
   */
  isLastActive: boolean;
  /** Gets or sets the latitude of the log record. */
  latitude: number;
  /** Gets or sets the longitude of the log record. */
  longitude: number;
  /** Gets or sets the logged speed or an invalid speed (in km/h). */
  speed: number;
}
