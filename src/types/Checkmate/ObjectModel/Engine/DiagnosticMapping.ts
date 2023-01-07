//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "../Entity";
import { Device } from "../Device";
import { MappedDiagnostic } from "./MappedDiagnostic";
import { Diagnostic } from "./Diagnostic";

/**
 * Represents the relationship of a {@link DiagnosticMapping.Device} and a {@link DiagnosticMapping.MappedDiagnostic} with a {@link DiagnosticMapping.Diagnostic}.
 *  {@link DiagnosticMapping.Device} and {@link DiagnosticMapping.MappedDiagnostic} pair must be unique for this entity, so a {@link DiagnosticMapping.MappedDiagnostic}
 *  can be resolved as follows: "For this device and mapped diagnostic, tell me which is the actual diagnostic I have to use.".
 */
export interface DiagnosticMapping extends Entity {
  /** Gets or sets the device for this mapping. */
  device: Device;
  /** Gets or sets the actual diagnostic that must be used for this {@link DiagnosticMapping.Device} and {@link DiagnosticMapping.MappedDiagnostic} pair. */
  diagnostic: Diagnostic;
  /** Gets or sets the mapped diagnostic for this mapping. */
  mappedDiagnostic: MappedDiagnostic;
}
