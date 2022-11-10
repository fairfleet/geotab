//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "./Entity";
import { Employee } from "./Employee";
import { Route } from "./Route";

/**
 *  The {@link Employee} /
 *  {@link Route} association.
 *
 * @deprecated
 */
export interface EmployeeRoutePlan extends Entity {
  /** Gets or sets the associated {@link Employee}. */
  employee: Employee;
  /** Gets or sets the end date for the plan item. */
  endDate: Date;
  /** Gets or sets the external (custom) reference. */
  externalReference: string;
  /** Gets or sets the associated {@link Route}. */
  route: Route;
  /** Gets or sets the start date for the plan item. */
  startDate: Date;
}
