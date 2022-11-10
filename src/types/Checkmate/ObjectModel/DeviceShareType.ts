//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** Represents the data flow type for a {@link DeviceShare}. */
export enum DeviceShareType {
  /** Indicates that an active {@link DeviceShare} means that device data from a different database is being shared with this one. */
  Incoming = "Incoming",
  /** Indicates that an active {@link DeviceShare} means that device data from this database is being shared with a different one. */
  Outgoing = "Outgoing",
}