//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "../Search";
import { DeviceSearch } from "../DeviceSearch";
import { DiagnosticSearch } from "./DiagnosticSearch";

/**
 *  The object used to specify the arguments when searching for
 *  {@link StatusData}.
 *  When searching for status data including DeviceSearch and DiagnosticSearch
 *  the system will return all records that match the search criteria and interpolate the value at the
 *  provided from/to dates when there is no record that corresponds to the date. Interpolated records
 *  are dynamically created when the request is made and can be identified as not having the ID property
 *  populated. Records with an ID are stored in the database.
 *  This search has been designed to work efficiently with these combinations of parameters:<list><item><description>Id</description></item><item><description>DeviceSearch + DiagnosticSearch + FromDate and/or ToDate</description></item></list>
 */
export interface StatusDataSearch extends Search {
  /**
   * Gets or sets filter by the {@link DeviceSearch} options. Providing a device ID will
   *  search for any StatusData recorded for that Device.
   *  Providing the Groups will search for StatusData recorded for Devices in that group.
   *  Available DeviceSearch options are:
   *  <list><item><description>Id</description></item><item><description>Group</description></item></list>
   */
  deviceSearch: DeviceSearch;
  /**
   * Gets or sets search for StatusData with this {@link DiagnosticSearch} Id.
   *  Available DiagnosticSearch options are:
   *  <list><item><description>Id</description></item></list>
   */
  diagnosticSearch: DiagnosticSearch;
  /** Gets or sets search for StatusData records that were logged at this date or after. */
  fromDate: Date;
  /** Gets or sets a value indicating whether [observe active state]. */
  observeActiveState: boolean;
  /** Gets or sets search for StatusData records that were logged at this date or before. */
  toDate: Date;
  /** Gets or sets the row version of the {@link StatusData} search criteria. */
  version: number;
}
