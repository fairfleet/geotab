//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "../../Search";

/** The object used to specify the arguments when searching for a {@link DisplayMeasurementProfile}. */
export interface DisplayMeasurementProfileSearch extends Search {
  /** Gets or sets whether or not to include corresponding DisplayMeasurementProfileDetails. It can only be used when the number of returned profiles is limited by id or resultsLimit. */
  includeDetails: boolean;
  /** Gets or sets whether or not to include the display unit of measure details. */
  includeUnitDetails: boolean;
}
