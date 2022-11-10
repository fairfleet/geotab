//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** The various statuses that a {@link DeviceShare} can have. */
export enum DeviceShareStatus {
  /** The device share request is pending. */
  Pending = "Pending",
  /** The device share request has been approved and is active. */
  Active = "Active",
  /** The device share has been rejected by the target database. */
  Rejected = "Rejected",
  /** The device share has been cancelled by the source database before it was accepted by the target. */
  Cancelled = "Cancelled",
  /** The active device share has been terminated by the target database. */
  Terminated = "Terminated",
  /** The data stream failed to start for the device share. */
  Error = "Error",
  /** Termination of an incoming active device share has been requested by a user on this database. This status will change to Terminated once the updated request has been processed. */
  RequestTerminated = "RequestTerminated",
  /** The incoming device share request has been accepted by a user on this database. This status will change to Active once the updated request has been processed. */
  RequestApproved = "RequestApproved",
  /** The incoming device share request has been declined by a user on this database (via the UI). This status will change to Rejected once the updated request has been pulled from MyAdmin by the DeviceShareDownloaderService. */
  RequestDeclined = "RequestDeclined",
  /** The incoming device share request has been cancelled by a user on this database before it was accepted by the target database (via the UI). This status will change to Cancelled once the updated request has been pulled from MyAdmin by the DeviceShareDownloaderService. */
  RequestCancelled = "RequestCancelled",
}
