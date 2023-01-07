//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { EntityWithVersion } from "./EntityWithVersion";
import { ExceptionEvent } from "./Exceptions/ExceptionEvent";
import { Device } from "./Device";
import { Driver } from "./Driver";
import { Group } from "./Group";

/** Represents the current state of a vehicle by providing information such as the vehicle bearing location and speed, active exception events and whether the device is currently communicating. */
export interface DeviceStatusInfo extends EntityWithVersion {
  /**
   * Gets or sets the bearing (heading) in integer degrees.
   *
   * @remarks Valued between 0 and 359 inclusive. 0 represents North, 90 represents East, and so on. -1 represents unknown bearing.
   */
  bearing: number;
  /** Gets or sets the duration between the last Trip state change (i.e. driving or stop), and the most recent date of location information. */
  currentStateDuration: string;
  /** Gets or sets the most recent {@link DeviceStatusInfo.DateTime} of the latest piece of status, gps or fault data. */
  dateTime: Date;
  /** Gets or sets the {@link Device} this DeviceStatusInfo belongs to. */
  device: Device;
  /** Gets or sets a dictionary for latest {@link IDeviceStatusInfoDiagnostic}(s) of current {@link Device}. */
  diagnostics: { [key: string]: unknown };
  /** Gets or sets the {@link Driver} associated to the current {@link Device}. */
  driver: Driver;
  /** Gets or sets the {@link ExceptionEvent}(s) that are currently active. */
  exceptionEvents: ExceptionEvent[];
  /** Gets or sets the {@link Group}(s) that the {@link Device} currently belongs to. */
  groups: Group[];
  /** Gets or sets a value indicating whether the {@link Device} is communicating. */
  isDeviceCommunicating: boolean;
  /** Gets or sets a value indicating whether the current {@link Device} state. If set true, is driving. Otherwise, it is stopped. */
  isDriving: boolean;
  /** Gets or sets a value indicating whether the {@link Device} has been assigned to "UnknownDriver" and the last {@link Trip}{@link Driver} is returned. */
  isHistoricLastDriver: boolean;
  /** Gets or sets the current latitude of the {@link Device}. */
  latitude: number;
  /** Gets or sets the current longitude of the {@link Device}. */
  longitude: number;
  /** Gets or sets the current vehicle speed. */
  speed: number;
}
