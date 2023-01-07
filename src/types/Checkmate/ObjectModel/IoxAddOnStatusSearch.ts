//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { DeviceSearch } from "./DeviceSearch";

/**
 *  The object used to specify the arguments when searching for {@link IoxAddOnStatus}(s).
 */
export interface IoxAddOnStatusSearch extends Search {
  /** Gets or sets the device connection status (Active = 0, Inactive = 4, Disconnected = 1). */
  deviceConnectionStatus: number;
  /**
   * Gets or sets search for Iox Add-On Statusess that are or have been attached to this {@link IoxAddOnStatusSearch.DeviceSearch} Id.
   *  Available DeviceSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  deviceSearch: DeviceSearch;
  /** Gets or sets search for IoxAddOnStatus records that were logged at this date or after. */
  fromDate: Date;
  /** Gets or sets search for IoxAddOnStatus records that were logged at this date or before. */
  toDate: Date;
}