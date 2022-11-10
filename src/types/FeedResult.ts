/** Describes a type that contains the feed data and a feed version. */
export interface FeedResult<TEntity> {
  /** The collection of entities returned by the feed. */
  data: TEntity[];
  /**
   * The last version of the data returned by the feed call. If this parameter is passed
   * back into the feed call, then returned data will be the changes that occurred after
   * the last feed call was made. In this way the feed can return a continuous stream of
   * data.
   */
  toVersion: string;
}
