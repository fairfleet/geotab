//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** GPSData and DebugData Log Reason codes. */
export type LogReason =
  | "CustomDataOrUnknown"
  | "Accident"
  | "Heading"
  | "Speed"
  | "Time"
  | "Aux"
  | "Ignition"
  | "Reset"
  | "Next"
  | "All"
  | "Antenna"
  | "SpeedingStart"
  | "SpeedingStop"
  | "GpsShutdown"
  | "HotStartStart"
  | "HotStartValidSignal"
  | "HotStartNoValidSignal"
  | "InvalidGpsSignals"
  | "GpsQuiet"
  | "BrownOut"
  | "HarshBraking"
  | "BeginOfStop"
  | "EndOfStop"
  | "SystemReset"
  | "ConnectedToServer"
  | "ConnectionFailure"
  | "DeviceUnplugged"
  | "CurveBased"
  | "CurveSpeed"
  | "MultiplexRequestGPS"
  | "MultiplexConnectedGPS"
  | "MultiplexRequestRF"
  | "MultiplexConnectedRF"
  | "RestartGPS"
  | "RestartRF"
  | "CurvePositionEstimateError"
  | "CurveTimeOut"
  | "CurveOtherEvent"
  | "CurveZeroSpeed"
  | "CurveTimeChange"
  | "RfUploadComplete"
  | "DevicePoll"
  | "CurveSpeedEstimateError"
  | "WifiInRange"
  | "WifiConnected"
  | "WifiUploadSuccess"
  | "IridiumIgnition"
  | "IridiumAux"
  | "IridiumTime"
  | "IridiumPoll"
  | "IridiumEmergency"
  | "IridiumLowVoltage"
  | "IridiumAccelEvent"
  | "IridiumMovementDetected"
  | "IridiumOutOfCoverage"
  | "IridiumPowerUp"
  | "IridiumDriverChange"
  | "J1708ICPError"
  | "ErrorRestartGPSStateMachine"
  | "ErrorRebootSlave"
  | "ErrorRestartRfStateMachine"
  | "ErrorRestartRfManagerStateMachine"
  | "ErrorRestartWifiStateMachine"
  | "ErrorRestartWifiManagerStateMachine"
  | "ErrorRestartModemStateMachine"
  | "ErrorRestartModemManagerStateMachine"
  | "SoftwareInsertedLog"
  | "ErrorClockStopped"
  | "ErrorReadingFlash"
  | "InvalidStackPointer"
  | "ErrorInterruptError"
  | "EventPlaceholder";
