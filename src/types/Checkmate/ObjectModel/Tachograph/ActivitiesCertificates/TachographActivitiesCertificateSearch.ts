//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "../../Search";
import { User } from "../../User";

/** A {@link Search} object to search for {@link TachographActivitiesCertificateSearch} rows. */
export interface TachographActivitiesCertificateSearch extends Search {
  /** Gets or sets the Period end of activities certificate. */
  periodEnd: Date;
  /** Gets or sets Period start of activities certificate. */
  periodStart: Date;
  /** Gets or sets the User Id. */
  user: User;
}