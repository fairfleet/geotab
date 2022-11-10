//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntityWithVersion } from "../NameEntityWithVersion";
import { ExceptionRuleBaseType } from "./ExceptionRuleBaseType";
import { Color } from "../../../Drawing/Color";
import { Condition } from "./Condition";
import { Group } from "../Group";

/**
 *  A rule is the definition of conditions that, when "violated", will generate an
 *  {@link ExceptionEvent}.
 *  The rule's logic is defined by it's tree of {@link Condition}
 *  (s).
 *  It's condition tree will be evaluated against data for device(s) that are members of the rule's assigned group(s) or the
 *  device(s)/driver(s) defined in the rule condition tree.
 *  The conditions will be evaluated independently against the assets in the selected groups.
 */
export interface Rule extends NameEntityWithVersion {
  /**
   * Gets or sets start date of the Rule's notification activity period.
   *
   * @remarks The events with earlier date than this date will not be reported through the notification engine.
   */
  activeFrom: Date;
  /** Gets or sets end date of the Rule's notification activity period. */
  activeTo: Date;
  /** Gets or sets the {@link ExceptionRuleBaseType} of the rule; either Custom, Stock or ZoneStop. */
  baseType: ExceptionRuleBaseType;
  /**
   * Gets or sets the {@link Color} associated with this rule.
   *  Used when rendering {@link ExceptionEvent}(s) related to this rule. Color is defined by the parameters "Red", "Green" and "Blue".
   */
  color: Color;
  /** Gets or sets free text field where any user information can be stored and referenced for this entity. */
  comment: string;
  /**
   * Gets or sets the hierarchical tree of {@link Condition}(s) defining
   *  the logic of a rule. A rule should have one or more conditions in it's tree.
   */
  condition: Condition;
  /**
   * Gets or sets a list of {@link Group}(s) assigned to the rule. Device in these groups
   *  will have the rule evaluated against their data.
   *
   * @remarks Device conditions will override devices in the assigned groups.
   */
  groups: Group[];
  /** Gets or sets the unique identifier for this entity. See {@link Id}. */
  id: string;
  /** Gets or sets the {@link RuleMonitor}(s). */
  monitors: unknown[];
  /** Gets or sets the name of the rule entity that uniquely identifies it and is used when displaying this entity. */
  name: string;
}
