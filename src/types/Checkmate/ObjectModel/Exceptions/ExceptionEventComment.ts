//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "../Entity";
import { ExceptionEvent } from "./ExceptionEvent";
import { User } from "../User";

/** A class representing a user comment on an {@link ExceptionEventComment.ExceptionEvent} instance. */
export interface ExceptionEventComment extends Entity {
  /** Gets or sets the time when the comment was created. */
  dateTime: Date;
  /** Gets or sets the {@link ExceptionEventComment.ExceptionEvent} that this comment is in relation to. */
  exceptionEvent: ExceptionEvent;
  /** Gets or sets the text body of the comment. */
  text: string;
  /** Gets or sets the {@link ExceptionEventComment.User} who created the comment. */
  user: User;
}
