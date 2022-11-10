//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntity } from "../NameEntity";

/**
 * The type of engine the device has, or which engine type an
 *  Engine Management Code belongs to. The standard types are represented by the strings
 *  "EngineTypeGenericId" for the generic engine and "EngineTypeNoneId" where engine type is not
 *  available.
 */
export interface EngineType extends NameEntity {
  /** Gets or sets the unique identifier for this entity. See {@link Id}. */
  id: string;
  /** Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity. */
  name: string;
}