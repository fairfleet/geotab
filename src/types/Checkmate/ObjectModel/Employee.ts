//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "./Entity";

/** The class representing an Employee. */
export interface Employee extends Entity {
  /** Gets or sets the {@link Employee} first name. */
  firstName: string;
  /** Gets or sets the {@link Employee} identification reference. */
  identification: string;
  /** Gets or sets the {@link Employee} last name. */
  lastName: string;
}