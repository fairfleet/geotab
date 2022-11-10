//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntity } from "./NameEntity";
import { MediaFileType } from "./MediaFileType";
import { NotificationTemplatePurpose } from "./NotificationTemplatePurpose";
import { NotificationBinaryFileType } from "./NotificationBinaryFileType";

/** Notification binary file. */
export interface NotificationBinaryFile extends NameEntity {
  /** Gets or sets the file type. */
  fileType: MediaFileType;
  /** Gets or sets the purpose of the template {@link NotificationTemplatePurpose}. */
  purpose: NotificationTemplatePurpose;
  /** Gets or sets get the type of the binary data for notifications. */
  type: NotificationBinaryFileType;
}