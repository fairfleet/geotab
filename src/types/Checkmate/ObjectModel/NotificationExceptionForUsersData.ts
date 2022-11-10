//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NotificationData } from "./NotificationData";

/** The notification data associated with application exceptions that can be resolved by user action. */
export interface NotificationExceptionForUsersData extends NotificationData {
  /** Gets or sets what is the description for the exception. */
  description: string;
  /** Gets or sets additional info related to the exception. */
  info: string;
  /** Gets or sets the machine name where the exception occurred. */
  machineName: string;
  /** Gets or sets what is the source of the exception. */
  source: string;
}
