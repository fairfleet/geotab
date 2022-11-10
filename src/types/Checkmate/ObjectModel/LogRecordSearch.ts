//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { DeviceSearch } from "./DeviceSearch";

/**
 *  The object used to specify the arguments when searching for
 *  {@link LogRecord}(s).
 *  When searching for log records the system will return all records that match the
 *  search criteria and interpolate the value at the provided from/to dates when there is no record that
 *  corresponds to the date. Interpolated records are dynamically created when the request is made and
 *  can be identified as not having the ID property populated. Records with an ID are stored in the
 *  database.
 *  This search has been designed to work efficiently with these combinations of parameters:<list><item><description>Id</description></item><item><description>DeviceSearch + FromDate and/or ToDate</description></item></list>
 */
export interface LogRecordSearch extends Search {
  /**
   * Gets or sets search for LogRecords for this {@link DeviceSearch} Id.
   *  Available DeviceSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  deviceSearch: DeviceSearch;
  /** Gets or sets search for LogRecords at this date or after. */
  fromDate: Date;
  /** Gets or sets a value indicating whether [observe active state]. */
  observeActiveState: boolean;
  /** Gets or sets search for LogRecords at this date or before. */
  toDate: Date;
}
