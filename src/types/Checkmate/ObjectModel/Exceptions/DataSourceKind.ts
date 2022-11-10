//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** Kinds of data sources for {@link Condition}s. */
export enum DataSourceKind {
  /** None */
  None = "None",
  /** None */
  Any = "Any",
  /** Instance of {@link DataSourceKind.LogRecord}. */
  LogRecord = "LogRecord",
  /** Instance of {@link DataSourceKind.FaultData}. */
  FaultData = "FaultData",
  /** Instance of {@link DataSourceKind.StatusData}. */
  StatusData = "StatusData",
  /** Instance of {@link DataSourceKind.NotificationDataApplicationException}. */
  NotificationDataApplicationException = "NotificationDataApplicationException",
  /** {@link DataSourceKind.ExceptionEvent}. */
  ExceptionEvent = "ExceptionEvent",
  /** {@link Double}. */
  Numeric = "Numeric",
  /** {@link DataSourceKind.WorkTime}. */
  WorkTime = "WorkTime",
  /** {@link DataSourceKind.DVIRDefect}. */
  DVIRDefect = "DVIRDefect",
}