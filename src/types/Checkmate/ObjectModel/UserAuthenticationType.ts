//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/**
 * The user authentication type.
 *  User types are XOR'd, so each type must be 2**X so that no type is a combination of two others.
 */
export type UserAuthenticationType =
  | "None"
  | "BasicAuthentication"
  | "WindowsAuthentication"
  | "MyAdmin"
  | "SAML"
  | "ClientCertificate";
