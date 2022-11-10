//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "../Search";
import { DeviceSearch } from "../DeviceSearch";

/** The object used to specify the arguments when searching for a {@link FuelUpEvent}. */
export interface FuelUpEventSearch extends Search {
  /**
   * Gets or sets the device search criteria for the FuelUpEvent with this {@link DeviceSearch} Id. Available DeviceSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  deviceSearch: DeviceSearch;
  /** Gets or sets the from date, which is used to search for FuelUpEvent(s) recorded on or after this date. */
  fromDate: Date;
  /** Gets or sets the to date, which is used to search for FuelUpEvent(s) recorded on or before this date. */
  toDate: Date;
}