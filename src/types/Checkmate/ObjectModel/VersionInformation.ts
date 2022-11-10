//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** Software version information for the server. */
export interface VersionInformation {
  /** Gets or sets the {@link ApplicationVersionInformation}. */
  application: unknown;
  /** Gets or sets the current version of the MyGeotab databases on the server. */
  database: string;
  /** Gets or sets the Text to Speech firmware version provided by the server. */
  goTalk: string;
  /** Gets or sets the current version of MyGeotab, branch, and commit hash running on the server. */
  server: string;
  /** Gets or sets the server flags. */
  serverFlags: number;
  /** Gets or sets the unique Id of the server cluster. */
  serverId: string;
}
