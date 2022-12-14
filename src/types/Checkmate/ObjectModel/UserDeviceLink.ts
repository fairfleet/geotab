//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { EntityWithVersion } from "./EntityWithVersion";
import { User } from "./User";
import { Device } from "./Device";
import { EntityLinkType } from "./EntityLink/EntityLinkType";

/**
 * @deprecated
 */
export interface UserDeviceLink extends EntityWithVersion {
  /** Gets or sets the {@link Device} associated with this user device link. */
  device: Device;
  /** Gets or sets the {@link User} who created the user device linkage. */
  driver: User;
  /** Gets or sets the link type */
  entityLinkType: EntityLinkType;
  /** Gets or sets the date when the link was added. */
  fromDate: Date;
  /** Gets or sets the date when the link was removed. */
  toDate: Date;
}
