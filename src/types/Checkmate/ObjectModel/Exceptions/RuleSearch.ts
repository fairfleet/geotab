//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "../Search";
import { ExceptionRuleBaseType } from "./ExceptionRuleBaseType";
import { ExceptionRuleCategory } from "./ExceptionRuleCategory";
import { GroupSearch } from "../GroupSearch";
import { GroupFilterCondition } from "../GroupFilterCondition";
import { ZoneType } from "../ZoneType";

/**
 *  The object used to specify the arguments when searching for a
 *  {@link Rule}.
 */
export interface RuleSearch extends Search {
  /**
   * Gets or sets search for Rules that are this
   *  {@link ExceptionRuleBaseType}; either Custom, Stock, or ZoneStop.
   */
  baseType: ExceptionRuleBaseType;
  /**
   * Gets or sets search for Rules that are in this
   *  {@link ExceptionRuleCategory}; either ApplicationExceptionRule, UserExceptionRules or ZoneStopExceptionRules.
   */
  category: ExceptionRuleCategory;
  /** Gets or sets the groups to find the rules belonging to parents or children of the groups using and/or relationship. */
  groupFilterCondition: GroupFilterCondition;
  /**
   * Gets or sets search for Rules that are members of these {@link GroupSearch}(s) one of
   *  it's children or one of it's parents.
   *  Available GroupSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  groups: GroupSearch[];
  /**
   * Gets or sets search for a {@link Rule} with this
   *  {@link Id}.
   *
   * @remarks Id cannot be used with any other search properties.
   */
  id: string;
  /** Gets or sets include zone stop rules. Default [false]. */
  includeZoneStopRules: boolean;
  /**
   * Gets or sets search for Rules with this Name. Wildcard can be used by prepending/appending "%" to string. Example
   *  "%comments%".
   */
  name: string;
  /** Gets or sets the list of {@link ZoneType} to search by. */
  zoneTypes: ZoneType[];
}
