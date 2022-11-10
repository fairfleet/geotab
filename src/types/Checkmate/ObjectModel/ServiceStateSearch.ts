//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";

/** The object used to specify the arguments when searching for a {@link ServiceState}. */
export interface ServiceStateSearch extends Search {
  /** Gets or sets search for ServiceState with this Name. Name is unique for each ServiceState. Wildcard can not be used. */
  name: string;
}
