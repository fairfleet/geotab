//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";

/** The search object for {@link Property}. */
export interface PropertySearch extends Search {
  /**
   * Gets or sets search for Properties with this External Reference. Wildcard can be used by prepending/appending "%" to string. Example
   *  "%externalreference%".
   */
  externalReference: string;
  /**
   * Gets or sets search for Properties with this Name. Wildcard can be used by prepending/appending "%" to string. Example
   *  "%name%".
   */
  name: string;
}
