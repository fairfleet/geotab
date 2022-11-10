//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { DeviceSearch } from "./DeviceSearch";
import { UserSearch } from "./UserSearch";

/**
 *  The object used to specify the arguments when searching for
 *  {@link ShipmentLog}(s).
 */
export interface ShipmentLogSearch extends Search {
  /** Gets or sets search for ShipmentLogs with this commodity. Wildcard can be used by prepending/appending "%" to string. */
  commodity: string;
  /**
   * Gets or sets search for ShipmentLogs for this {@link DeviceSearch} Id.
   *  Available DeviceSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  deviceSearch: DeviceSearch;
  /** Gets or sets search for ShipmentLogs with this document number. Wildcard can be used by prepending/appending "%" to string. */
  documentNumber: string;
  /**
   * Gets or sets search for ShipmentLogs that were active at this date or after. Set to UTC now to search for
   *  only currently active ShipmentLogs.
   */
  fromDate: Date;
  /** Gets or sets search for entities that contain specific keywords in all wildcard string-searchable fields. */
  keywords: string[];
  /**
   * Gets or sets
   *  Search for {@link ShipmentLog}s with a maximum of this version.
   *
   * @deprecated
   */
  maxVersion: number;
  /**
   * Gets or sets
   *  Search for {@link ShipmentLog}s with a minimum of this version.
   *
   * @deprecated
   */
  minVersion: number;
  /** Gets or sets search for ShipmentLogs with this shipper name. Wildcard can be used by prepending/appending "%" to string. */
  shipperName: string;
  /** Gets or sets search for ShipmentLogs that were active at this date or before. */
  toDate: Date;
  /**
   * Gets or sets search for ShipmentLogs with this {@link UserSearch} Id.
   *  Available UserSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  userSearch: UserSearch;
}