//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { EntityWithVersion } from "./EntityWithVersion";
import { Device } from "./Device";

/** Represents the status of an IoxAddOn that is attached to a GO unit. */
export interface IoxAddOnStatus extends EntityWithVersion {
  /** Gets or sets date/time the message was delivered. */
  delivered: Date;
  /** Gets or sets the {@link Device} this IoxAddOn is connected to. */
  device: Device;
  /** Gets or sets the device connection status (Active = 0, Inactive = 4, Disconnected = 1). */
  deviceConnectionStatus: number;
  /** Gets or sets the date/time of last IOX/Passthrough communication for the device. */
  lastCommunicated: Date;
  /** Gets or sets the queue size of pending messages. */
  queueSize: number;
}
