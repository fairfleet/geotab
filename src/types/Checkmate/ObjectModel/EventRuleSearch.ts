//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { GroupSearch } from "./GroupSearch";
import { GroupFilterCondition } from "./GroupFilterCondition";
import { IncludeGroups } from "./IncludeGroups";

/**
 *  The object used to specify the
 *  arguments when searching for {@link EventRule}(s).
 *
 * @deprecated
 */
export interface EventRuleSearch extends Search {
  /** Gets or sets a value indicating whether to filter for EventRules that have the days recurrence field populated. */
  days: boolean;
  /** Gets or sets a value indicating whether to filter for EventRules that are set to not generate recurring events. */
  engineHours: boolean;
  /** Gets or sets a value indicating whether to filter for EventRules by the event type id. */
  eventTypeId: string;
  /** Gets or sets a value indicating a list of {@link EventType} Id-s to search by. */
  eventTypeIds: string[];
  /** Gets or sets the groups to find the event rules belonging to parents or children of the groups using and/or relationship. */
  groupFilterCondition: GroupFilterCondition;
  /**
   * Gets or sets search for Event Rules that are members of these {@link GroupSearch}(s) one of
   *  it's children or one of it's parents.
   *  Available GroupSearch options are:.
   *  <list><item><description>Id</description></item></list>
   */
  groups: GroupSearch[];
  /** Gets or sets a value indicating how to filter on Group. */
  includeGroups: IncludeGroups;
  /** Gets or sets a value indicating whether to filter for EventRules that have the kilometers recurrence field populated. */
  kilometers: boolean;
  /** Gets or sets a value indicating whether to filter for EventRules that have the months recurrence field populated. */
  months: boolean;
  /** Gets or sets search for all {@link EventRule} matching this Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%". */
  name: string;
  /** Gets or sets a value indicating whether to filter for EventRules that have the datetime one-off field populated. */
  nonRepeating: boolean;
  /** Gets or sets a value indicating whether to filter for EventRules that are set to generate recurring events. */
  repeats: boolean;
}