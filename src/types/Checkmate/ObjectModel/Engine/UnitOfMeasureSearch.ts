//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "../Search";

/** The object used to specify the arguments when searching for a {@link UnitOfMeasure}. */
export interface UnitOfMeasureSearch extends Search {
  /** Gets or sets search for a UnitOfMeasure with a name containing this String. Wildcard can be used by prepending/appending "%" to string. Example "%name%". */
  name: string;
}
