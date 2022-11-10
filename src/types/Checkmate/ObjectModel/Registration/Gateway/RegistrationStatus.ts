//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** Enum denoting registration states between MyG and the Gateway. */
export enum RegistrationStatus {
  /** Populated when the registration status is not known. */
  None = "None",
  /** The device is registered. */
  Registered = "Registered",
  /** The device failed to register. */
  FailedRegistration = "FailedRegistration",
  /** The device is unregistered. */
  Unregistered = "Unregistered",
  /** The device failed to unregister. */
  FailedUnregistration = "FailedUnregistration",
  /** The Gateway has the device registered but MyG does not. */
  ReconciledAsRegistered = "ReconciledAsRegistered",
  /** The Gateway has the device unregistered but MyG does not. */
  ReconciledAsUnregistered = "ReconciledAsUnregistered",
}
