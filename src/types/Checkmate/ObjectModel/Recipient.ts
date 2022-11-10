//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "./Entity";
import { TripType } from "./TripType";
import { DataPrivacyType } from "./DataPrivacyType";
import { Group } from "./Group";
import { NotificationBinaryFile } from "./NotificationBinaryFile";
import { RecipientType } from "./RecipientType";
import { User } from "./User";

/**
 *  The recipient for a specific notification. A recipient is linked to
 *  {@link Rule}(s) via a
 *  {@link DistributionList}.
 *  When a {@link Rule} is violated the
 *  {@link DistributionList} linked recipient receives a notification.
 *  The type of recipient is defined by it's {@link RecipientType}.
 *  Not all properties of this object will have a value at the same time they are dependent on the
 *  {@link RecipientType}.
 *  Recipient is represented by the string "NoRecipientId" where there is no recipient.
 */
export interface Recipient extends Entity {
  /** Gets or sets the email address used when sending notifications via Email. */
  address: string;
  /** Gets or sets the {@link DataPrivacyType} to assign the related device to. */
  dataPrivacyType: DataPrivacyType;
  /** Gets or sets the {@link Group} to assign the related device to. */
  group: Group;
  /** Gets or sets the NotificationBinaryFile to notify with. */
  notificationBinaryFile: NotificationBinaryFile;
  /** Gets or sets the {@link RecipientType} (type of notification message) this instance refers to. */
  recipientType: RecipientType;
  /** Gets or sets the {@link TripType} to assign the related device to. */
  tripType: TripType;
  /** Gets or sets the {@link User} to receive notification. */
  user: User;
}
