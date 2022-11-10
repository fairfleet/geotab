//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntityWithVersion } from "./NameEntityWithVersion";
import { DeviceShareStatus } from "./DeviceShareStatus";
import { DeviceShareType } from "./DeviceShareType";
import { DevicePlan } from "./DevicePlan";
import { DeviceShareOptions } from "./DeviceShareOptions";
import { DevicePlanBillingInfo } from "./DevicePlanBillingInfo";

/**
 * A device share represents the sharing of steaming data from a device into multiple databases.
 *  A database which is the primary device subscriber may share the data with one or many other databases.
 */
export interface DeviceShare extends NameEntityWithVersion {
  /** Gets or sets the date that the {@link DeviceShare} was accepted. */
  acceptedDateTime: Date;
  /** Gets or sets the date time of when the {@link DeviceShare} was created. */
  dateTime: Date;
  /** Gets or sets the {@link DevicePlan} for this DeviceShare. */
  devicePlan: DevicePlan;
  /** Gets or sets the {@link DeviceShare.DevicePlanBillingInfo} of this DeviceShare. */
  devicePlanBillingInfo: DevicePlanBillingInfo;
  /** Gets or sets the {@link Int32} id that MyAdmin associates with this {@link DeviceShare}. */
  myAdminId: number;
  /** Gets or sets the {@link DeviceShareOptions} of this DeviceShare. */
  options: DeviceShareOptions;
  /** Gets or sets the {@link String} serial number of the device associated with this {@link DeviceShare}. */
  serialNumber: string;
  /** Gets or sets the {@link DeviceShareStatus} of this DeviceShare. */
  shareStatus: DeviceShareStatus;
  /** Gets or sets the {@link DeviceShareType} of this DeviceShare. */
  shareType: DeviceShareType;
  /**
   * Gets or sets the name of the source database for this device share. This is the database that owns the
   *  device and is allowing the sharing to occur.
   */
  sourceDatabaseName: string;
  /**
   * Gets or sets the name of the target database for this device share. This is the database that the device's
   *  data is being shared to, and does not own the device.
   */
  targetDatabaseName: string;
  /** Gets or sets the date that the {@link DeviceShare} was terminated. */
  terminatedDateTime: Date;
  /**
   * Gets or sets the date time of when the {@link DeviceShare} status was updated. This is when the share request was
   *  accepted/rejected by a target-database user or cancelled by a source-database user.
   */
  updatedDateTime: Date;
}