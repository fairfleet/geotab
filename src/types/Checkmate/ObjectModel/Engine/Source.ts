//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntity } from "../NameEntity";

/** The source is the underlying producer of the engine data. */
export interface Source extends NameEntity {
  /** Gets or sets the unique identifier for this entity. See {@link Id}. */
  id: string;
  /** Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity. */
  name: string;
}
