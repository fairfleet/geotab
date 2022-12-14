//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "../Entity";
import { Jurisdiction } from "../Jurisdictional/Jurisdiction";
import { RegistrationStatus } from "../Registration/Gateway/RegistrationStatus";

/** A particular instance of an {@link DeviceRegistrationState}. */
export interface DeviceRegistrationState extends Entity {
  /** Gets or sets the actual registration state. */
  actualState: RegistrationStatus;
  /** Gets or sets the record creation date time. */
  createdDate: Date;
  /** Gets or sets the device ID. */
  deviceId: string;
  /** Gets or sets the exception message. */
  exceptionMessage: string;
  /** Gets or sets the exception type. */
  exceptionType: string;
  /** Gets or sets the hardware ID. */
  hardwareId: number;
  /** Gets or sets the intended registration state. */
  intendedState: RegistrationStatus;
  /** Gets or sets the flag indicating this record is the most recent, compared to historical records held in the table. */
  isCurrent: boolean;
  /** Gets or sets the jurisdiction. */
  jurisdiction: Jurisdiction;
}
