//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { EntityWithVersion } from "./EntityWithVersion";
import { Device } from "./Device";

/** A DeviceLink is a relationship between two {@link Device}s over a period of time. */
export interface DeviceLink extends EntityWithVersion {
  /** Gets the date the {@link Device}s were linked. This is only present so that we can implement IDateTimeProvider. */
  dateTime: Date;
  /** Gets or sets the linked {@link Device} (destination). */
  destinationDevice: Device;
  /** Gets or sets the date and time the {@link Device}s were linked. Default [UtcNow]. */
  fromDate: Date;
  /** Gets or sets the {@link Device} (source) which another {@link Device} is linked to. */
  sourceDevice: Device;
  /** Gets or sets the date and time the {@link Device}s were delinked. Default [MaxDate]. */
  toDate: Date;
}
