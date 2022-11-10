//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "./Entity";

/** An object representing a {@link X509Certificate2} used to check if a message came from the correct external source. */
export interface Certificate extends Entity {
  /** Gets or sets a value indicating whether certificate is a root certificate that is used for validating all client certificate. */
  isRoot: boolean;
  /** Gets or sets the issuer of the {@link Certificate}. */
  issuer: string;
  /** Gets or sets the public key of the {@link Certificate}. */
  key: unknown;
  /** Gets or sets the {@link Uri} to go to when a {@link User} with this {@link Certificate} logs in. */
  logInUrl: unknown;
  /** Gets or sets the {@link Uri} to go to when a {@link User} with this {@link Certificate} logs off. */
  logOffUrl: unknown;
}