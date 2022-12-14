//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { SearchRelation } from "./SearchRelation";

/** Device Status And/Or Filter object */
export interface DeviceStatusFilterCondition extends Search {
  /** Gets or sets the filter conditions */
  deviceStatusFilterConditions: DeviceStatusFilterCondition[];
  /**
   * Gets or sets search for devices based on their current communicating status.
   *  A device is communicating:
   *  - When the vehicle is driving and has communicated within the past 10 minutes.
   *  - When the vehicle is not driving and has communicated within the past 24 hours.
   */
  isDeviceCommunicating: boolean;
  /**
   * Gets or sets the filter indicating if device is deriving
   *  Can only be driving if IsCommunicating is true
   */
  isDriving: boolean;
  /** Gets or sets And/Or for device status filter */
  relation: SearchRelation;
}
