//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** An enum indicating the type of a trip. */
export enum TripType {
  /** The device does not have a specific {@link TripType} assigned. */
  Unknown = "Unknown",
  /** The device is in private mode and will have it's GPS data hidden. */
  Private = "Private",
  /** The device is a special NoGPS device. This device will report speed but not position. */
  NoGpsDevice = "NoGpsDevice",
  /** While a device has this {@link TripType} it will not send any positional or speed data. */
  NoGpsOrSpeedDevice = "NoGpsOrSpeedDevice",
}
