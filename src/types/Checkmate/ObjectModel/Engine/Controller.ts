//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntityWithVersion } from "../NameEntityWithVersion";
import { Source } from "./Source";

/** The controller that the diagnostic belongs to. Controllers could be ABS controller, suspension controller etc. The available controllers are listed in the {@link KnownId}. */
export interface Controller extends NameEntityWithVersion {
  /** Gets the controller diagnostic code (if applicable). */
  code: number;
  /** Gets or sets the message identification code for the controller of the diagnostic (if applicable). */
  codeId: number;
  /** Gets or sets the unique identifier for the specific {@link Entity} object in the Geotab system. See {@link Id}. */
  id: string;
  /** Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity. */
  name: string;
  /** Gets or sets the standard (format) of the {@link Source}. */
  source: Source;
}