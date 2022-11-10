//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/**
 * The supported ComponentType values for DataToComponentContent Messages {@link DataToComponentContent}.
 *  Tells the device what to do with / where to send the data
 */
export enum DeviceComponentType {
  /** For sending raw UART serial data (usually to IoX device) */
  UartPassthrough = "UartPassthrough",
  /** Aux device */
  Aux = "Aux",
  /** For accessing the immobilization relay */
  Relay = "Relay",
  /** For making the beeps */
  Buzzer = "Buzzer",
  /** For requesting status data */
  DataPoll = "DataPoll",
  /** For accessing flash memory */
  FlashMemory = "FlashMemory",
  /** For accessing the IOX output */
  Output = "Output",
  /** For making changes to the permitted driver list */
  DriverList = "DriverList",
  /** For sending commands to the vehicle */
  VehicleCommand = "VehicleCommand",
  /** For sending data to the CAN bus */
  CanPassthrough = "CanPassthrough",
  /** For updating ECU */
  EcuUpdate = "EcuUpdate",
  /** For enabling CAN Passthrough */
  PassthroughEnabled = "PassthroughEnabled",
  /** For setting enabling or disabling workshop mode */
  WorkshopMode = "WorkshopMode",
}