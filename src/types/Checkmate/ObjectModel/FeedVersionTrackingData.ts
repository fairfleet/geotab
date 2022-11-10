//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "./Entity";

/**
 * Represents the most recent records inserted into each table. This is used to ensure that the feed
 *  pulls the newest data possible without missing data.
 */
export interface FeedVersionTrackingData extends Entity {
  /** Gets or sets specify when this log was taken. */
  dateTime: Date;
  /** Gets or sets specify the table name that this record belongs to. */
  tableName: string;
  /** Gets or sets specify the latest row version for this table. */
  trackedRowVersion: number;
}