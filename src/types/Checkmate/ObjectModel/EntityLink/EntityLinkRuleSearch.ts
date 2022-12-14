//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "../Search";
import { Group } from "../Group";
import { EntityLinkType } from "./EntityLinkType";

/** The object used to specify the arguments when searching for a {@link EntityLinkRule}. */
export interface EntityLinkRuleSearch extends Search {
  /** Gets or sets the collection of destination groups to search for. */
  destinationGroups: Group[];
  /** Gets or sets the entity link type to search for. */
  entityLinkTypes: EntityLinkType[];
  /** Gets or sets a value indicating rules from source to destination are unioned with rules from destination to source. */
  isBidirectionalSearch: boolean;
  /** Gets or sets the link date, which is used to search for records that reside within the range. */
  linkDate: Date;
  /** Gets or sets a value indicating only active rules are to be searched. */
  onlyActiveRules: boolean;
  /** Gets or sets the collection of source groups to search for. */
  sourceGroups: Group[];
  /** Gets or sets the from date, which is used to search for records recorded on or after this date. */
  validFrom: Date;
  /** Gets or sets the to date, which is used to search for records recorded on or before this date. */
  validTo: Date;
}
