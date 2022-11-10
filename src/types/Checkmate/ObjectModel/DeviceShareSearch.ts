//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { DeviceShareStatus } from "./DeviceShareStatus";
import { DeviceShareType } from "./DeviceShareType";
import { DevicePlan } from "./DevicePlan";
import { DevicePlanBillingInfo } from "./DevicePlanBillingInfo";
import { Device } from "./Device";

/** The object used to specify the arguments when searching for {@link DeviceShare}(s). */
export interface DeviceShareSearch extends Search {
  /** Gets or sets search for DeviceShares accepted from this date onwards. */
  acceptedDateTime: Date;
  /** Gets or sets search for DeviceShares created from this date onwards. */
  dateTime: Date;
  /** Gets or sets search for DeviceShares using {@link DevicePlan}. */
  devicePlan: DevicePlan;
  /**
   * Gets or sets search for a DeviceShare using billing level in {@link DeviceShareSearch.DevicePlanBillingInfo}.
   *  Available {@link DeviceShareSearch.DevicePlanBillingInfo} search options are:
   *  <list><item><description>BillingLevel</description></item></list>
   */
  devicePlanBillingInfo: DevicePlanBillingInfo;
  /** Gets or sets the ExclusiveDateSearch flag. Set to true to search for dates exclusively (meaning greater/less than is used instead greater/less or equal to when filtering results). */
  exclusiveDates: boolean;
  /**
   * Gets or sets the FindFirstAfterDate flag. Set to true to find the first device share after the only
   *  non-null date field. Setting more than one date field will cause an exception. Also, this option cannot
   *  be used in combination with the FindFirstBeforeDate.
   */
  findFirstAfterDate: boolean;
  /**
   * Gets or sets the GetFirstBeforeDate flag. Set to true to find the first device share before the only
   *  non-null date field. Setting more than one date field will cause an exception. Also, this option cannot
   *  be used in combination with the FindFirstAfterDate
   */
  findFirstBeforeDate: boolean;
  /**
   * Gets or sets search for device shares belonging to devices (using their serial number).Note, if this field is set,
   *  no other search field is considered.
   */
  findFromDevices: Device[];
  /** Gets or sets search for device shares using a list MyAdmin ids. */
  findFromMyAdminIds: number[];
  /**
   * Gets or sets search for device shares using device serial numbers. Note, if this field is set, no other
   *  search field is considered.
   */
  findFromSerialNumbers: string[];
  /**
   * Gets or sets the FindPendingOrActiveOnly flag. Set to true to find only device shares that have a share
   *  status of either pending or active.
   */
  findPendingOrActiveOnly: boolean;
  /** Gets or sets search for a DeviceShare using its MyAdmin id. */
  myAdminId: number;
  /** Gets or sets search for a DeviceShares having a given serial number. */
  serialNumber: string;
  /** Gets or sets search for DeviceShares using {@link DeviceShareStatus}. */
  shareStatus: DeviceShareStatus;
  /** Gets or sets search for DeviceShares using {@link DeviceShareType}. */
  shareType: DeviceShareType;
  /**
   * Gets or sets search for DeviceShares using SourceDatabaseName matching this value. Wildcard can be used by
   *  prepending/appending "%" to string. Example "%database%".
   */
  sourceDatabaseName: string;
  /**
   * Gets or sets search for DeviceShares using TargetDatabaseName matching this value. Wildcard can be used by
   *  prepending/appending "%" to string. Example "%database%".
   */
  targetDatabaseName: string;
  /** Gets or sets search for DeviceShares terminated from this date onwards. */
  terminatedDateTime: Date;
  /**
   * Gets or sets the max date that a date field will be bound by. Only one other date field can be used in
   *  combination with the ToDate. If this is the only date field set, then the results will be bound by the
   *  {@link DeviceShareSearch.DateTime} field.
   */
  toDate: Date;
  /** Gets or sets search for DeviceShares updated from this date onwards. */
  updatedDateTime: Date;
}
