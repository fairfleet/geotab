//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";

/** An object used to search for {@link Certificate}s. */
export interface CertificateSearch extends Search {
  /** Gets or sets the boolean indicating if {@link Certificate} is root, used for searching the root certificate. */
  isRoot: boolean;
  /** Gets or sets the issuer of the {@link Certificate}. */
  issuer: string;
}