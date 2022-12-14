//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntityWithVersion } from "./NameEntityWithVersion";
import { Group } from "./Group";
import { DeviceFlags } from "./DeviceFlags";
import { DeviceType } from "./DeviceType";
import { WorkTime } from "./WorkTime";
import { RegisterDeviceResultLite } from "./Registration/Gateway/RegisterDeviceResultLite";
import { DevicePlan } from "./DevicePlan";
import { DevicePlanBillingInfo } from "./DevicePlanBillingInfo";
import { DeviceCustomFeature } from "./DeviceCustomFeature";
import { DeviceReplacementInfo } from "./DeviceReplacement/DeviceReplacementInfo";
import { MediaFile } from "./Files/MediaFile";

/**
 *  A Device represents the physical tracking device installed in
 *  the vehicle. A device and vehicle is typically synonymous since the GO tracking device is
 *  installed in a vehicle. In the case where there is no device; this is represented by "NoDeviceId". The device
 *  types that are supported are:.
 *  <list><item><description>{@link Go9}</description></item><item><description>{@link Go8}</description></item><item><description>{@link Go7}</description></item><item><description>{@link Go6}</description></item><item><description>{@link Go5}</description></item><item><description>{@link Go4v3}</description></item><item><description>{@link CustomDevice}</description></item></list>
 */
export interface Device extends NameEntityWithVersion {
  /** Gets or sets the date the device is active from. Default [MinDate]. */
  activeFrom: Date;
  /** Gets or sets the date that the device is active to. Default [MaxDate]. */
  activeTo: Date;
  /** Gets or sets free text field where any user information can be stored and referenced for this entity. */
  comment: string;
  /** Gets or sets a list of {@link DeviceCustomFeature}s for this {@link Device} and their values. */
  customFeatures: { [key in DeviceCustomFeature]: boolean };
  /** Gets or sets the set of dynamic, user created, custom properties. */
  customProperties: unknown[];
  /** Gets or sets the device features which have been enabled whether the feature is in use (e.g. HOS, Iridium). */
  deviceFlags: DeviceFlags;
  /** Gets or sets the {@link Device.DevicePlanBillingInfo} that has been purchased for this device. */
  devicePlanBillingInfo: DevicePlanBillingInfo[];
  /** Gets or sets the Geotab DevicePlan that has been purchased for this device. */
  devicePlans: DevicePlan[];
  /** Gets or sets the device replacement information. */
  deviceReplacementInfo: DeviceReplacementInfo;
  /** Gets specifies the GO or Custom {@link DeviceType}. */
  deviceType: DeviceType;
  /** Gets or sets the list of {@link Group}(s) the device belongs to. */
  groups: Group[];
  /** Gets or sets the unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system. */
  hardwareId: number;
  /** Gets or sets the unique identifier for this entity. See {@link Id}. */
  id: string;
  /** Gets or sets The date that tells the system at what moment should it start checking the device status and warn if there is no new data. Used when a new device is just installed or the vehicle undergoes a lengthy service. Default [MinDate]. */
  ignoreDownloadsUntil: Date;
  /**
   * Gets or sets the maximum allowed time between logs when the ignition is on in seconds.
   *  When the value is exceeded, data is considered to be missing. Default [200].
   */
  maxSecondsBetweenLogs: number;
  /** Gets or sets the list of {@link MediaFile} photos of this asset. Maximum length [1]. */
  mediaFiles: MediaFile[];
  /** Gets the minimum allowable value for {@link Device.MaxSecondsBetweenLogs}. Defaults to 0.0f. */
  minSecondsBetweenLogs: number;
  /** Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity. Maximum length [50]. */
  name: string;
  /** Gets or sets the product id. Each device is assigned a unique hardware product id. */
  productId: number;
  /** Gets or sets a value indicating the current registration status of the device to the Gateway. */
  registerDeviceResultLite: RegisterDeviceResultLite;
  /** Gets or sets the Serial Number of the device. Maximum length [12]. */
  serialNumber: string;
  /**
   * Gets or sets the expected time between downloads, i.e. how frequently the
   *  device is expected to produce new data. For passive devices this might range from 1 to a few
   *  days. For live devices this should be maximum 24h unless vehicles travel out of coverage
   *  frequently. This is used to check if the device is in good state.
   */
  timeToDownload: string;
  /** Gets or sets the IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"]. */
  timeZoneId: string;
  /** Gets or sets the trailerId for the assets of type trailer. */
  tmpTrailerId: string;
  /** Gets or sets the {@link WorkTime} rules to apply to the device. Default [WorkTimeStandardHours]. */
  workTime: WorkTime;
}
