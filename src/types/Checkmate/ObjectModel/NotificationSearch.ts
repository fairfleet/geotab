//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { NotificationData } from "./NotificationData";
import { RecipientSearch } from "./RecipientSearch";

/**
 *  The object used to specify the arguments when searching for
 *  {@link Notification}(s).
 *
 * @deprecated
 */
export interface NotificationSearch extends Search {
  /** Gets or sets a value indicating whether to search for active notifications only */
  activeOnly: boolean;
  /** Gets or sets search for Notifications with this {@link NotificationData} Id. */
  notificationData: NotificationData;
  /** Gets or sets search for Notifications with this {@link RecipientSearch} Id. */
  recipientSearch: RecipientSearch;
}
