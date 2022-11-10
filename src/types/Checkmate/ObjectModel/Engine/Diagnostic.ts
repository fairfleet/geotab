//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntityWithVersion } from "../NameEntityWithVersion";
import { Controller } from "./Controller";
import { DiagnosticType } from "./DiagnosticType";
import { EngineType } from "./EngineType";
import { FaultResetMode } from "./FaultResetMode";
import { Source } from "./Source";
import { UnitOfMeasure } from "./UnitOfMeasure";
import { ValidLoggingPeriod } from "../ValidLoggingPeriod";

/**
 * Vehicle diagnostic information from the engine computer that can either be
 *  measurement data or fault code data.
 *
 * @remarks Note: Diagnostics cannot be added, set or removed via the API.
 */
export interface Diagnostic extends NameEntityWithVersion {
  /** Gets or sets the diagnostic parameter code number. */
  code: number;
  /** Gets or sets the applicable {@link Controller} for the diagnostic parameter. */
  controller: Controller;
  /** Gets or sets the {@link DiagnosticType} (source) of the diagnostic parameter. */
  diagnosticType: DiagnosticType;
  /**
   * Gets or sets the {@link EngineType} for this diagnostic if
   *  applicable, otherwise null.
   */
  engineType: EngineType;
  /** Gets or sets the {@link FaultResetMode} of the diagnostic (whether the fault resets automatically or manually). */
  faultResetMode: FaultResetMode;
  /** Gets or sets the unique identifier for this entity. See {@link Id}. */
  id: string;
  /** Gets or sets the value which describes if the diagnostic guarantees it will log when estimate error is exceeded. */
  isLogGuaranteedOnEstimateError: boolean;
  /** Gets a value indicating whether the diagnostic is readonly */
  isReadOnly: boolean;
  /** Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity. */
  name: string;
  /** Gets or sets the {@link Source} for the diagnostic (the type of diagnostic code). */
  source: Source;
  /** Gets the tampering diagnostic codes. */
  tamperingDiagnostics: Diagnostic[];
  /** Gets or sets the {@link UnitOfMeasure} applicable to the diagnostic parameter. */
  unitOfMeasure: UnitOfMeasure;
  /** Gets or sets the {@link Diagnostic.ValidLoggingPeriod}. The diagnostic should only be interpolated within the range of the given type. */
  validLoggingPeriod: ValidLoggingPeriod;
}
