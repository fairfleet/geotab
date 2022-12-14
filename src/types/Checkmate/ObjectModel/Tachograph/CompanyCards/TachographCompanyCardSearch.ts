//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "../../Search";
import { TachographCompanyCardStatus } from "./TachographCompanyCardStatus";

/** The object used to specify the arguments when searching for {@link TachographCompanyCardSearch}. */
export interface TachographCompanyCardSearch extends Search {
  /** Gets or sets search for tachograph company cards that match the card number. */
  cardNumber: string;
  /** Gets or sets search for tachograph company cards with this icc. */
  icc: number;
  /**
   * Gets or sets search for tachograph company cards
   *  where the company card is valid at this time, and it is not expired.
   */
  isValidAt: Date;
  /** Gets or sets search for tachograph company cards that match this status. */
  status: TachographCompanyCardStatus;
}
