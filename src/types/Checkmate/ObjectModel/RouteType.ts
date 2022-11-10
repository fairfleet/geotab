//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** A type of {@link Route}. */
export enum RouteType {
  /** A basic route. Does not have a {@link Device} associated. */
  Basic = "Basic",
  /** A route with a plan of the time/distance it is expected to take from stop to stop. A plan route has a {@link Device} associated. */
  Plan = "Plan",
  /** A route with a plan with completion criteria. A service route has a {@link Device} associated. */
  Service = "Service",
}
