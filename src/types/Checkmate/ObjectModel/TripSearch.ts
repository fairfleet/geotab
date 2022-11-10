//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { BoundingBox } from "./Geographical/BoundingBox";
import { DeviceSearch } from "./DeviceSearch";
import { UserSearch } from "./UserSearch";

/**
 *  The object used to specify the arguments when searching for
 *  {@link Trip}(s).
 *  This search has been designed to work efficiently with these combinations of parameters:<list><item><description>Id</description></item><item><description>DeviceSearch + FromDate and/or ToDate (+ IncludeOverlappedTrips)</description></item><item><description>UserSearch + FromDate and/or ToDate (+ IncludeOverlappedTrips)</description></item></list>
 */
export interface TripSearch extends Search {
  /**
   * Gets or sets search for Trips with this {@link DeviceSearch} Id.
   *  Available DeviceSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  deviceSearch: DeviceSearch;
  /**
   * Gets or sets search for Trips recorded at this date or after. When "IncludeOverlappedTrips" is set to True, search for Trips
   *  where the NextTripStartTime is at this date, after or NULL.
   */
  fromDate: Date;
  /**
   * Gets or sets a value indicating whether when OverlappedTrips is set to True; any part of a trip that overlaps with the FromDate or ToDate boundary
   *  will have the entire trip included in the data.
   */
  includeOverlappedTrips: boolean;
  /** Gets or sets maximum Id of the search criteria. */
  maxId: string;
  /** Gets or sets minimum Id of the search criteria. */
  minId: string;
  /**
   * Gets or sets search rectangular area for Trips; the trips being retrieved must be located in this area.
   *  The {@link BoundingBox} object should contain the bottom left and top right coordinates of the searching rectangle.
   */
  searchArea: BoundingBox;
  /**
   * Gets or sets search for Trips recorded at this date or before. When "IncludeOverlappedTrips" is set to True, search for Trips
   *  where the StartDateTime is this date or before.
   */
  toDate: Date;
  /**
   * Gets or sets search for Trips with this {@link UserSearch} Id.
   *  Available UserSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  userSearch: UserSearch;
}