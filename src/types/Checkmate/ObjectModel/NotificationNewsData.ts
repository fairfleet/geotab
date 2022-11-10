//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NotificationData } from "./NotificationData";

/** The notification data pertaining to Exception Rules. */
export interface NotificationNewsData extends NotificationData {
  /** Gets or sets the exception event that holds the data for this notification. */
  info: unknown;
  /** Gets or sets what is the source of the news. */
  source: string;
}