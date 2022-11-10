//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** The interval in which a {@link Diagnostic} reading is monitored, may be logged and the slope can be drawn between values and interpolated according to the slope of the line. */
export enum ValidLoggingPeriod {
  /** No period in which it is valid to interpolate. */
  None = "None",
  /** May be logged within the active state of the device. */
  Active = "Active",
  /** May be logged within the power state of the device. */
  Power = "Power",
}
