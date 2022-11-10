//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "../Search";
import { DeviceSearch } from "../DeviceSearch";
import { UserSearch } from "../UserSearch";

/** The object used to specify the arguments when searching for {@link MediaFile}. This will return the data describing a file, not the actual file. */
export interface MediaFileSearch extends Search {
  /**
   * Gets or sets filter by the {@link DeviceSearch} options. Providing a device ID will
   *  search for any MediaFiles that are assigned to that Device.
   *  Providing the Groups will search for MediaFiles for that have Devices in that group.
   *  Available DeviceSearch options are:
   *  <list><item><description>Id</description></item><item><description>Group</description></item></list>
   */
  deviceSearch: DeviceSearch;
  /**
   * Gets or sets search for MediaFile with this {@link UserSearch} Id.
   *  Available UserSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  driverSearch: UserSearch;
  /** Gets or sets search for MediaFile records at this date or after. Includes overlapping dates. */
  fromDate: Date;
  /** Gets or sets search for MediaFile records before this version. */
  maxVersion: number;
  /** Gets or sets search for MediaFile records at or after this version. */
  minVersion: number;
  /** Gets or sets search for MediaFile records at this date or before. Includes overlapping dates. */
  toDate: Date;
}
