//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { UserSearch } from "./UserSearch";

/** The object used to specify the arguments when searching for {@link AnnotationLog}(s). */
export interface AnnotationLogSearch extends Search {
  /** Gets or sets search for AnnotationLogs which have a comment that contains this {@link String}. Wildcard can be used by prepending/appending "%" to string. */
  comment: string;
  /** Gets or sets search for AnnotationLogs that were recorded at this date or after. */
  fromDate: Date;
  /** Gets or sets search for {@link AnnotationLog}s with a maximum of this version. */
  maxVersion: number;
  /** Gets or sets search for AnnotationLogs that were recorded at this date or before. */
  toDate: Date;
  /**
   * Gets or sets search for AnnotationLogs with this {@link UserSearch} Id.
   *  Available UserSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  userSearch: UserSearch;
  /** Gets or sets the row version of the AnnotationLog search criteria. */
  version: number;
}