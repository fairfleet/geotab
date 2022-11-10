//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** Defines the different types of rule monitor predicates. */
export enum MonitorPredicate {
  /** None */
  None = "None",
  /** Captures first occurrence of monitored data. */
  Start = "Start",
  /** Captures last occurrence of monitored data. */
  End = "End",
  /** Captures average value of the monitored data. */
  Avg = "Avg",
  /** Captures minimum value of the monitored data. */
  Min = "Min",
  /** Captures maximum value of the monitored data. */
  Max = "Max",
  /** Captures lower edge value of the monitored data (based on the startdate of the exception event). */
  LowerEdge = "LowerEdge",
  /** Captures upper edge value of the monitored data (based on the enddate of the exception event). */
  UpperEdge = "UpperEdge",
  /** Captures longtitude of the exception event start location. */
  Longitude = "Longitude",
  /** Captures the latitude of the exception event start location. */
  Latitude = "Latitude",
}