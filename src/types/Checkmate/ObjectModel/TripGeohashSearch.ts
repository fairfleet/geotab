//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { DeviceSearch } from "./DeviceSearch";

/** The object used to specify the arguments when searching for a {@link TripGeohash}. */
export interface TripGeohashSearch extends Search {
  /**
   * Gets or sets search for TripGeohashes with a {@link DeviceSearch} Id.
   *  Available DeviceSearch options are:
   *  <list><item><description>Id</description></item></list>
   */
  deviceSearch: DeviceSearch;
  /** Gets or sets search for TripGeohashes recorded from this date onwards. */
  startDateTime: Date;
}
