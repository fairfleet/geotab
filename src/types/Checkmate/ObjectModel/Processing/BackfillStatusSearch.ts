//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "../Search";
import { DeviceSearch } from "../DeviceSearch";

/** The object used to specify the arguments when searching for a {@link BackfillStatus} entry. */
export interface BackfillStatusSearch extends Search {
  /** Gets or sets to the backfill type, which is used to search for Snapshot Processing. */
  backfillType: string;
  /**
   * Gets or sets the device search criteria for the BackfillStatus entry with this {@link DeviceSearch} Id. Available DeviceSearch options are:.
   *  <list><item><description>Id</description><description>Groups</description></item></list>
   */
  deviceSearch: DeviceSearch;
  /** Gets or sets the from date, which is used to search for Snapshot Processing recorded on or after this date. */
  fromDate: Date;
  /** Gets or sets the IsProcessingComplete flag, which is used to search for Snapshot Processing that is completed. */
  isProcessingComplete: boolean;
  /** Gets or sets the IsProcessingRequired flag, which is used to search for records that need processing. */
  isProcessingRequired: boolean;
  /** Gets or sets the to date, which is used to search for Snapshot Processing recorded on or before this date. */
  toDate: Date;
}