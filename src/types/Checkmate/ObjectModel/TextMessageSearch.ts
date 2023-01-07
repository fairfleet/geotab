//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Search } from "./Search";
import { DeviceSearch } from "./DeviceSearch";
import { GroupSearch } from "./GroupSearch";
import { UserSearch } from "./UserSearch";
import { MessageContentType } from "./MessageContentType";

/** The object used to specify the arguments when searching for a {@link TextMessage}. */
export interface TextMessageSearch extends Search {
  /** Gets or sets search for TextMessages with {@link DataToComponentContent} filtered based on the channelNumber. */
  channelNumbers: number[];
  /** Gets or sets search for TextMessages filtered based on the {@link MessageContentType}. */
  contentTypes: MessageContentType[];
  /**
   * Gets or sets filter by the {@link DeviceSearch} options. Providing a device ID will
   *  search for any TextMessages that are assigned to that Device.
   *  Providing the Groups will search for TextMessages for that have Devices in that group.
   *  Available DeviceSearch options are:
   *  <list><item><description>Id</description></item><item><description>Groups</description></item></list>
   */
  deviceSearch: DeviceSearch;
  /** Gets or sets search for TextMessages that were sent at this date or after. */
  fromDate: Date;
  /**
   * Gets or sets search for TextMessages sent to Devices, Users or Recipients that are members of these GroupSearch(s) or their child Groups.
   *  Available {@link GroupSearch} options are:
   *  <list><item><description>Id</description></item></list>
   */
  groups: GroupSearch[];
  /**
   * Gets or sets search for delivered or undelivered TextMessages. If it's set to true, it will return all TextMessages
   *  that were delivered. If it set to false, it will return all TextMessages that were not delivered. If it is set to
   *  null, it will return both delivered and undelivered TextMessages.
   */
  isDelivered: boolean;
  /**
   * Gets or sets search for TextMessages based on the "direction" of the message. If it's set to true, it will return all TextMessages
   *  that were sent to a {@link Device}. If it set to false, it will return all TextMessages that
   *  were not sent to a {@link Device}. If it is set to null, it will return TextMessages sent to or from any asset type.
   */
  isDirectionToVehicle: boolean;
  /**
   * Gets or sets search for read or unread TextMessages. If it's set to true, it will return all TextMessages
   *  that were read. If it set to false, it will return all TextMessages that were not unread. If it is set to
   *  null, it will return both read and unread TextMessages.
   */
  isRead: boolean;
  /**
   * Gets or sets a value indicating whether when LatestMessageOnly is set to True; only a single most recent message that matches the search parameters
   *  will be returned per device (using the date sent time to determine most recent).
   */
  latestMessageOnly: boolean;
  /** Gets or sets search for TextMessages with {@link MimeContent} filtered based on the messages MIME type. */
  mimeTypes: string[];
  /** Gets or sets search for TextMessages that were delivered/sent/read since this date. */
  modifiedSinceDate: Date;
  /** Gets or sets search for TextMessages that have parent id as this {@link Id}. */
  parentMessageId: string;
  /** Gets or sets search for TextMessages that have parent id as this id. */
  parentTextMessageId: number;
  /**
   * Gets or sets search for TextMessages sent to this {@link UserSearch}.
   *  Available UserSearch options are:
   *  <list><item><description>Id</description></item><item><description>CompanyGroups</description></item><item><description>DriverGroups</description></item><item><description>DriverGroupFilterCondition</description></item></list>
   */
  recipientSearch: UserSearch;
  /** Gets or sets search for TextMessages that were sent at this date or before. */
  toDate: Date;
  /**
   * Gets or sets search for TextMessages sent by this {@link UserSearch}.
   *  Available UserSearch options are:
   *  <list><item><description>Id</description></item><item><description>CompanyGroups</description></item><item><description>DriverGroups</description></item><item><description>DriverGroupFilterCondition</description></item></list>
   */
  userSearch: UserSearch;
}
