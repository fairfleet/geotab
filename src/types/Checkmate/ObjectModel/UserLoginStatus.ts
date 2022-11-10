//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "./Entity";
import { User } from "./User";

/** User's Login status. */
export interface UserLoginStatus extends Entity {
  /** Gets or sets updated time of this record. */
  dateTime: Date;
  /** Gets or sets user's first failure authentication time. */
  firstLoginFailureDatetime: Date;
  /** Gets or sets user's lockout time. */
  lockoutUntil: Date;
  /** Gets or sets user's failure count. */
  loginFailureCount: number;
  /** Gets or sets the user. */
  user: User;
}