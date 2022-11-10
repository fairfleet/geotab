//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntity } from "./NameEntity";
import { WorkTimeHolidayGroupId } from "./WorkTimeHolidayGroupId";

/**
 * The set of {@link WorkTimeDetail}(s)
 *  defining periods during the week that are considered as part of regular working hours. Work times that apply to all
 *  times are represented by "WorkTimeAllHoursId".
 */
export interface WorkTime extends NameEntity {
  /** Gets or sets free text field where any user information can be stored and referenced for this entity. Default [""]. */
  comment: string;
  /** Gets or sets the list of {@link WorkTimeDetail}(s). */
  details: unknown[];
  /** Gets or sets the {@link WorkTimeHolidayGroupId}. */
  holidayGroup: WorkTimeHolidayGroupId;
  /** Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity. Maximum length [50]. */
  name: string;
}