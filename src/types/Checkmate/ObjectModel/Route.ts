//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntityWithVersion } from "./NameEntityWithVersion";
import { RouteType } from "./RouteType";
import { RouteStatus } from "./RouteStatus";
import { Device } from "./Device";
import { Schedule } from "./Schedule";

/**
 *  A connected sequence of zones which create a path for the vehicle to follow.
 */
export interface Route extends NameEntityWithVersion {
  /** Gets or sets free text field where any user information can be stored and referenced for this entity. Default [""]. */
  comment: string;
  /** Gets or sets the {@link Device} linked to the route. Only applies to "Plan" type routes. */
  device: Device;
  /** Gets the end date and time of the route which is the arrival time of the last stop. */
  endTime: Date;
  /** Gets or sets the unique identifier for this entity. See {@link Id}. */
  id: string;
  /** Gets or sets a value indicating whether the route is repeatable or not. */
  isRepeatable: boolean;
  /** Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity. Maximum length [255]. */
  name: string;
  /** Gets or sets the {@link RoutePlanItem} item collection (sequence of stops which make up the route). */
  routePlanItemCollection: unknown[];
  /** Gets or sets the {@link RouteType}. Default [Basic]. */
  routeType: RouteType;
  /** Gets or sets the {@link Route.Schedule}. */
  schedule: Schedule;
  /** Gets the start date and time or the route which is the arrival time of the 1st stop. */
  startTime: Date;
  /** Gets or sets the {@link RouteStatus}. */
  status: RouteStatus;
  /** Gets or sets the timezone id. */
  timezoneId: string;
}
