//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { EntityWithVersion } from "./EntityWithVersion";
import { User } from "./User";
import { TextMessageContentType } from "./TextMessageContentType";
import { Device } from "./Device";

/**
 * <para />
 *  A message to send or received from a device.
 *  <para />
 *  When working with text messages it is important to make the distinction between a "Reply" and a "Response".
 *  <list><item><description>
 *  Reply: A reply is a Text Message that is a Reply to another text message.
 *  For example: A text message is sent to a device and the device replies with a text message of it's own.
 *  </description></item><item><description>
 *  Response: A response is a predefined ("canned") response within a text message.
 *  For example: A text message is sent to a device with a number of canned responses to reply with (Yes,
 *  No, Maybe).
 *  One of those responses is selected by the driver and is the message of the Reply from the device.
 *  </description></item></list>
 */
export interface TextMessage extends EntityWithVersion {
  /** Gets or sets the date and time the text message is active from. */
  activeFrom: Date;
  /** Gets or sets the date and time the text message is active to. */
  activeTo: Date;
  /** Gets or sets the date and time the message was delivered. Default [MaxDate]. */
  delivered: Date;
  /** Gets or sets the {@link Device} the message was sent to. Default [Null]. */
  device: Device;
  /** Gets or sets if message is going to or from vehicle. */
  isDirectionToVehicle: boolean;
  /** Gets or sets the {@link User} who read the message or null if the message has not been read. */
  markedReadBy: User;
  /**
   * Gets or sets the message content. A basic message can be sent via a
   *  {@link TextContent}
   *  or a message with predefined ("canned") responses by a
   *  {@link CannedResponseContent} or a series of
   *  {@link LocationContent} comprising a route.
   */
  messageContent: TextMessageContentType;
  /**
   * Gets or sets the message length.
   *
   *
   * @deprecated
   */
  messageSize: number;
  /** Gets or sets the text message that this is the reply to. Only a reply message will have a parent. */
  parentMessage: TextMessage;
  /** Gets or sets the date and time the message was read or null if the message has not been read. */
  read: Date;
  /** Gets or sets the {@link User} the message was sent to. Default [Null]. */
  recipient: User;
  /** Gets or sets the text message reply to this message. A text message should only have one reply. (Should not reply to a reply). Default [Null] */
  replyMessage: TextMessage;
  /** Gets or sets the date and time the message was sent. Default [MaxDate]. */
  sent: Date;
  /** Gets or sets the {@link User} that the message was sent from or null. If the message was sent from a device or was generated by the system the user property will be null. Default [Null]. */
  user: User;
}
