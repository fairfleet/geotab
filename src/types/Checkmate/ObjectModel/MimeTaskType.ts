//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntity } from "./NameEntity";

/**
 *  A unique identifier for different types of {@link MimeTask}s that are executed
 *  for additional {@link MimeContent} processing.
 *
 * @deprecated
 */
export interface MimeTaskType extends NameEntity {
  /** Gets or sets the unique identifier for this entity. See {@link Id}. */
  id: string;
  /** Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity. */
  name: string;
}
