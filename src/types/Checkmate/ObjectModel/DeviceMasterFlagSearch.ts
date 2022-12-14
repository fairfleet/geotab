//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { DeviceSearch } from "./DeviceSearch";
import { DevicePlanMasterFlag } from "./DevicePlanMasterFlag";

/**
 *  The object used to specify the arguments when searching for {@link DeviceMasterFlag}(s).
 */
export interface DeviceMasterFlagSearch extends Search {
  /** Gets or sets search for {@link DeviceMasterFlag}s with this {@link DeviceMasterFlagSearch.DevicePlanMasterFlag}. */
  devicePlanMasterFlag: DevicePlanMasterFlag;
  /** Gets or sets search for {@link DeviceMasterFlag}s with this {@link DeviceMasterFlagSearch.DeviceSearch}. */
  deviceSearch: DeviceSearch;
  /** Gets or sets search for {@link DeviceMasterFlag}s recorded at this date or after. */
  fromDate: Date;
  /** Gets or sets a value indicating whether gets or sets a value to include the first {@link DeviceMasterFlag} before the {@link DeviceMasterFlagSearch.FromDate}. If {@link DeviceMasterFlagSearch.FromDate} is <c>null</c> this has no effect. */
  includeFromDateOverlap: boolean;
  /** Gets or sets search for {@link DeviceMasterFlag}s recorded at this date or before. */
  toDate: Date;
}
