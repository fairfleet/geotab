//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "../Search";
import { EngineTypeSearch } from "./EngineTypeSearch";
import { SourceSearch } from "./SourceSearch";
import { DiagnosticType } from "./DiagnosticType";
import { FaultResetMode } from "./FaultResetMode";

/**
 *  The object used to specify the
 *  arguments when searching for {@link Diagnostic}(s).
 */
export interface DiagnosticSearch extends Search {
  /** Gets or sets search for a Diagnostic by the code number. */
  code: number;
  /** Gets or sets the {@link DiagnosticType} to search for in Diagnostics. */
  diagnosticType: DiagnosticType;
  /**
   * Gets or sets search for {@link Diagnostic}(s) with this
   *  {@link EngineTypeSearch}{@link Id}. Available EngineTypeSearch
   *  options are:.
   *  <list><item><description>Id</description></item></list>
   */
  engineTypeSearch: EngineTypeSearch;
  /** Gets or sets the {@link FaultResetMode} to search by. */
  faultResetMode: FaultResetMode;
  /**
   * Gets or sets search for Diagnostics with this Name. Wildcard can be used by prepending/appending "%" to
   *  string. Example "%name%".
   */
  name: string;
  /**
   * Gets or sets the {@link SourceSearch} Id to search for in
   *  Diagnostics. Available SourceSearch
   *  options are:.
   *  <list><item><description>Id</description></item><item><description>Name</description></item></list>
   */
  sourceSearch: SourceSearch;
  /**
   * Gets or sets the row version of the
   *  {@link Diagnostic} search
   *  criteria.
   */
  version: number;
}
