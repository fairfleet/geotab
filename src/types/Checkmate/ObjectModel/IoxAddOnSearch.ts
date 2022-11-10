//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { DeviceSearch } from "./DeviceSearch";

/**
 *  The object used to specify the arguments when searching for {@link IoxAddOn}(s).
 */
export interface IoxAddOnSearch extends Search {
  /** Gets or sets if <c>true</c> only Iox Add-Ons that are currently connected to a device will be returned. */
  connectedOnly: boolean;
  /**
   * Gets or sets search for Iox Add-Ons that are or have been attached to this {@link IoxAddOnSearch.DeviceSearch} Id.
   *  Available DeviceSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  deviceSearch: DeviceSearch;
  /** Gets or sets search for Iox Add-Ons of a specific type (Garmin, GoTalk etc). See {@link KnownIoxAddOnType}. */
  type: number;
}