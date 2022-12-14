//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { EntityWithVersion } from "../EntityWithVersion";
import { Rule } from "./Rule";
import { Device } from "../Device";
import { Diagnostic } from "../Engine/Diagnostic";
import { Driver } from "../Driver";
import { ExceptionEventState } from "./ExceptionEventState";

/** The event of an exception generated by Rule violation. */
export interface ExceptionEvent extends EntityWithVersion {
  /** Gets or sets the start date of the ExceptionEvent; at or after this date. */
  activeFrom: Date;
  /** Gets or sets the end date of the ExceptionEvent; at or before this date. */
  activeTo: Date;
  /** Gets or sets the {@link Device} specified for the device. */
  device: Device;
  /**
   * @inheritdoc
   */
  diagnostic: Diagnostic;
  /** Gets or sets the km distance traveled since the start of the ExceptionEvent. */
  distance: number;
  /** Gets or sets the {@link Driver} specified for the device. */
  driver: Driver;
  /** Gets the duration of the violation. */
  duration: string;
  /**
   * @inheritdoc
   */
  exceptions: unknown[];
  /**
   * @inheritdoc
   */
  from: Date;
  /** Gets or sets the time this exception event was last updated. Default [MinDate]. */
  lastModifiedDateTime: Date;
  /** Gets or sets the {@link Rule} which was violated. */
  rule: Rule;
  /** Gets or sets the {@link ExceptionEventState} of the exception. */
  state: ExceptionEventState;
  /**
   * @inheritdoc
   */
  to: Date;
}
