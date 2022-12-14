//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntityWithVersion } from "./NameEntityWithVersion";

/** For managing security identifiers. */
export interface SecurityId extends NameEntityWithVersion {
  /** Gets or Sets the custom page name. */
  customPageName: string;
  /** Gets or sets a value indicating whether this securityIdentifier is a system Id or custom identifier. */
  isSystemSecurityId: boolean;
}
