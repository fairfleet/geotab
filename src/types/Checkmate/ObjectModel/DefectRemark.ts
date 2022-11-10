//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "./Entity";
import { DVIRDefect } from "./DVIRDefect";
import { User } from "./User";
import { MediaFile } from "./Files/MediaFile";

/**
 *  An DefectRemark is a remark that can be associated with a {@link DVIRDefect}.
 */
export interface DefectRemark extends Entity {
  /** Gets or sets the date and time the log was created. */
  dateTime: Date;
  /** Gets or sets the {@link DefectRemark.DVIRDefect} which this DefectRemark belongs to. */
  dvirDefect: DVIRDefect;
  /** Gets or sets the list of {@link MediaFile} for a defect remark. */
  mediaFiles: MediaFile[];
  /** Gets or sets the DVIR text associated with the log. */
  remark: string;
  /** Gets or sets the {@link User} who created the log. */
  user: User;
}