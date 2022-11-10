//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { EntityWithVersion } from "../../EntityWithVersion";
import { DisplayUnitOfMeasure } from "./DisplayUnitOfMeasure";

/**
 *  Class to track a single DisplayUnitOfMeasure for a given DisplayMeasurementProfile.
 *
 * @deprecated
 */
export interface DisplayMeasurementProfileDetail extends EntityWithVersion {
  /** Gets or Sets the Identifier of the related Diagnostic. */
  diagnosticId: string;
  /** Gets or sets the {@link DisplayMeasurementProfileDetail.DisplayUnitOfMeasure} matched to the base diagnostic {@link Id} for the profile. */
  displayUnitOfMeasure: DisplayUnitOfMeasure;
  /** Gets or sets the Identifier of the related profile. */
  profileId: string;
}