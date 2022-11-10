//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** Describes the state of a {@link ReprocessRequest} or a {@link DeviceReprocessRequest}. */
export enum ReprocessRequestStatus {
  /** Request has been created and is waiting to be processed. */
  Scheduled = "Scheduled",
  /** Request is currently being processed. */
  Processing = "Processing",
  /** Request has completed successfully. */
  Success = "Success",
  /** Request was attempted, but failed. */
  Failure = "Failure",
  /** Request was cancelled before processing started. */
  Cancelled = "Cancelled",
  /** Request has completed. */
  Complete = "Complete",
  /** Unknown State. */
  Unknown = "Unknown",
}
