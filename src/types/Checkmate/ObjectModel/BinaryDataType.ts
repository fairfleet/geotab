//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/**  Represents the specific binary format of data being stored in the {@link BinaryData} object. */
export enum BinaryDataType {
  /** No data. */
  None = "None",
  /** Jpeg image. */
  Jpeg = "Jpeg",
  /** ASCII text data. */
  Ascii = "Ascii",
  /** Engine Serial Number. */
  EngineSerialNumber = "EngineSerialNumber",
  /** Software Version. */
  SoftwareVersion = "SoftwareVersion",
  /** Calibration Id. */
  CalibrationId = "CalibrationId",
  /** ECU Make. */
  EcuMake = "EcuMake",
  /** ECU Model. */
  EcuModel = "EcuModel",
  /** Data reported by the manufacturer. */
  ManufacturerData = "ManufacturerData",
  /** Data about the manufacturer part number reported by the ECU. */
  EcuManufacturerPartNumber = "EcuManufacturerPartNumber",
  /** SData about the manufacturer serial number reported by the ECU. */
  EcuManufacturerSerialNumber = "EcuManufacturerSerialNumber",
  /** Software Version 1. */
  SoftwareVersionSection1 = "SoftwareVersionSection1",
  /** Software Version 2. */
  SoftwareVersionSection2 = "SoftwareVersionSection2",
  /** Software Version 3. */
  SoftwareVersionSection3 = "SoftwareVersionSection3",
  /** Software Version Full. */
  SoftwareVersionFull = "SoftwareVersionFull",
  /** A grouping of OBD-II data that forms a snapshot of the state of the vehicle. */
  VariableEngineDataSnapshot = "VariableEngineDataSnapshot",
  /** Third Party Data. */
  ThirdPartyData = "ThirdPartyData",
  /** 33 byte VLR record sent from go device to support secure proximity cards on the Keyless platform. */
  ProximityCardEccKey = "ProximityCardEccKey",
  /** 26 byte VLR record sent from go device to support secure proximity cards on the Keyless platform. */
  ReservationId = "ReservationId",
}
