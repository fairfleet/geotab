//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntity } from "./NameEntity";
import { DateTimeWithTimeZone } from "./DateTimeWithTimeZone";
import { WorkTimeHolidayGroupId } from "./WorkTimeHolidayGroupId";

/**  Day that is specified as not being a regular working day. */
export interface WorkHoliday extends NameEntity {
  /** Gets or sets the midnight of the work holiday. */
  date: DateTimeWithTimeZone;
  /**
   * Gets or sets the holiday group for this holiday day. See
   *  {@link WorkTimeHolidayGroupId}.
   */
  holidayGroup: WorkTimeHolidayGroupId;
}
