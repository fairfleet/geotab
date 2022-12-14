//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "../Search";
import { SourceSearch } from "./SourceSearch";

/** The object used to specify the arguments when searching for {@link Controller}(s). */
export interface ControllerSearch extends Search {
  /** Gets or sets search for Controllers with this Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%". */
  name: string;
  /**
   * Gets or sets search for Controllers with this {@link SourceSearch} Id.
   *  Available SourceSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  sourceSearch: SourceSearch;
  /** Gets or sets the row version of the {@link Controller} search criteria. */
  version: number;
}
