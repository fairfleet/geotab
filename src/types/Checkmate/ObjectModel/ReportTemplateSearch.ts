//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { ReportDataSource } from "./ReportDataSource";

/**
 *  The object used to specify the arguments when searching for
 *  {@link ReportTemplate}(s).
 *
 * @deprecated
 */
export interface ReportTemplateSearch extends Search {
  /** Gets or sets include report Binary Data for this ReportTemplate. */
  includeBinaryData: boolean;
  /** Gets or sets search for a ReportTemplate with this ReportDataSource. */
  reportDataSource: ReportDataSource;
}