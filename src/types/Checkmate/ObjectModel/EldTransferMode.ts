//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/**
 *  The type of {@link EldTransferMode}.
 *
 * @deprecated
 */
export enum EldTransferMode {
  /** No value is present (not a valid value). */
  None = "None",
  /** Email ELD agency to transfer HOS data securely for drivers */
  Email = "Email",
  /** ELD agency web services to transfer HOS data securely */
  WebServices = "WebServices",
  /** Ping the ELD agency web services to test connectivity */
  Ping = "Ping",
  /** Email ELD agency to transfer HOS data securely for drivers in Canada Jurisdiction */
  CanadaEmail = "CanadaEmail",
}
