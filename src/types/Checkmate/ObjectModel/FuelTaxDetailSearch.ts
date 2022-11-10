//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { DeviceSearch } from "./DeviceSearch";

/**
 *  The object used to specify the arguments when searching for {@link FuelTaxDetail} elements.
 *  This search has been designed to work efficiently with these parameters:<list><item><description>DeviceSearch</description></item><item><description>FromDate</description></item><item><description>ToDate</description></item></list>
 */
export interface FuelTaxDetailSearch extends Search {
  /**
   * Gets or sets filter by the {@link DeviceSearch} options. Providing a device ID will
   *  search for any fuel tax details that are assigned to that Device.
   *  Providing the Groups will search for fuel tax details for that have Devices in that group.
   *  <list><item><description>Id</description></item><item><description>Groups</description></item></list>
   */
  deviceSearch: DeviceSearch;
  /** Gets or sets the beginning of the time interval. The search will adjust it to the nearest hour on or before this time. For instance, 8:20 AM will become 8 AM. */
  fromDate: Date;
  /** Gets or sets a value indicating whether to include any parts of boundary details that fall outside the time interval. */
  includeBoundaries: boolean;
  /** Gets or sets a value indicating whether to include hourly data. */
  includeHourlyData: boolean;
  /** Gets or sets the max row version of the {@link FuelTaxDetail} search criteria. */
  maxVersion: number;
  /** Gets or sets the end of the time interval. The search will adjust it to the nearest hour on or after this time. For instance, 5:40 PM will become 6 PM. */
  toDate: Date;
  /** Gets or sets the row version of the {@link FuelTaxDetail} search criteria. */
  version: number;
}