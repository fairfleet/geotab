//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/**
 * The supported ComponentType values for DataToComponentContent Messages {@link DataToComponentContent}.
 *  Tells the device what to do with / where to send the data
 */
export type DeviceComponentType =
  | "UartPassthrough"
  | "Aux"
  | "Relay"
  | "Buzzer"
  | "DataPoll"
  | "FlashMemory"
  | "Output"
  | "DriverList"
  | "VehicleCommand"
  | "CanPassthrough"
  | "EcuUpdate"
  | "PassthroughEnabled"
  | "WorkshopMode";
