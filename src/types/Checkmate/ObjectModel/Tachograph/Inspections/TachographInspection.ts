//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "../../Entity";

/** The class representing an Authority Inspections. */
export interface TachographInspection extends Entity {
  /** Gets or sets the internal Notes about inspection. */
  notes: string;
  /** Gets or sets when Inspection has been notified. */
  receptionDate: Date;
  /** Gets or sets the reference number document. */
  reference: string;
  /** Gets or sets the requirement files date from. */
  requirementFrom: Date;
  /** Gets or sets the requirement files date to. */
  requirementTo: Date;
  /** Gets or sets the date when files have been submitted. */
  submitDate: Date;
  /** Gets or sets the limit submit to send files. */
  submitLimit: number;
}