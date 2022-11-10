//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";

/**
 *  The object used to specify the
 *  arguments when searching for a {@link Widget}.
 *
 * @deprecated
 */
export interface WidgetSearch extends Search {
  /**
   * Gets or sets search for Widget with this Name. Wildcard can be used by prepending/appending "%" to
   *  string. Example "%name%".
   */
  name: string;
  /**
   * Gets or sets search for Widgets by the list of widgetIds. Available WidgetSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  widgetIds: string[];
}