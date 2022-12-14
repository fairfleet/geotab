//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { User } from "./User";
import { DutyStatusViolationType } from "./DutyStatusViolationType";

/**
 *  A {@link DutyStatusLog} violation for a {@link User}.
 */
export interface DutyStatusViolation {
  /** Gets or sets the maximum or minimum days limit of the duty status violation. */
  daysLimit: number;
  /** Gets or sets the {@link User} associated with the duty status violation. */
  driver: User;
  /** Gets or sets the driving duration of the duty status violation. */
  drivingDuration: string;
  /** Gets or sets the date and time that the duty status violation started. */
  fromDate: Date;
  /** Gets or sets the maximum or minimum hours limit of the duty status violation. */
  hoursLimit: number;
  /** Gets or sets the unique identifier for the specific {@link Entity} object in the Geotab system. See {@link Id}. */
  id: string;
  /** Gets or sets the log Id. */
  logId: string;
  /** Gets or sets the stated reason why the duty status violation occurred. */
  reason: string;
  /** Gets or sets the date and time that the duty status violation ended. */
  toDate: Date;
  /** Gets or sets the {@link DutyStatusViolationType} of the duty status violation. */
  type: DutyStatusViolationType;
}
