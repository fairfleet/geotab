//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";

/**
 *  The object used to specify the
 *  arguments when searching for a {@link Dashboard}.
 */
export interface DashboardSearch extends Search {
  /**
   * Gets or sets search for Dashboard with this Name. Wildcard can be used by prepending/appending "%" to
   *  string. Example "%name%".
   */
  name: string;
}
