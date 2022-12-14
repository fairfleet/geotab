//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "../../Search";
import { DiagnosticSearch } from "../DiagnosticSearch";
import { DisplayMeasurementProfileSearch } from "./DisplayMeasurementProfileSearch";

/** The object used to specify the arguments when searching for a {@link DisplayUnitOfMeasure}. */
export interface DisplayUnitOfMeasureSearch extends Search {
  /**
   * Gets or sets search for DisplayUnitsOfMeasurse with this {@link IEnumerable`1} with an id for each DiagnosticSearch.
   *  Available DiagnosticSearch options are:
   *  <list><item><description>Id</description></item></list>
   */
  diagnosticSearch: DiagnosticSearch[];
  /**
   * Gets or sets search for DisplayProfileDetail with this {@link DisplayMeasurementProfileSearch} Id.
   *  Available DisplayMeasurementProfileSearch options are:
   *  <list><item><description>Id</description></item></list>
   */
  displayMeasurementProfileSearch: DisplayMeasurementProfileSearch;
}
