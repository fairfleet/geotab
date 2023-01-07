//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { EntityWithVersion } from "../../EntityWithVersion";
import { Driver } from "../../Driver";
import { Device } from "../../Device";

/** The entity which describes the tachograph file. */
export interface TachographDataFile extends EntityWithVersion {
  /** Gets or sets the binary data for the {@link TachographDataFile} object. */
  binaryData: number[];
  /** Gets or sets the date on which the file was uploaded. */
  dateTime: Date;
  /**
   * @inheritdoc
   */
  device: Device;
  /**
   * @inheritdoc
   */
  driver: Driver;
  /** Gets or sets the string with the errors found in the download, the download is NOT valid and will have to be repeated. */
  errors: string;
  /** Gets or sets the file name. */
  fileName: string;
  /** Gets or sets the DDD file name. */
  fileNameDdd: string;
  /** Gets or sets the TGD file name. */
  fileNameTgd: string;
  /** Gets or sets the V1B file name. */
  fileNameV1B: string;
  /** Gets or sets the value that contains file gaps. */
  lockGaps: string;
  /** Gets or sets the file origin according to IGP-1312. */
  origin: number;
  /** Gets or sets the description of the origin of the file. */
  originDescription: string;
  /** Gets or sets the int code for the processing status. */
  processingStatus: number;
  /** Gets or sets the signature. */
  signature: number;
  /** Gets or sets the summary. */
  summary: string;
  /** Gets or sets the date on which the file was generated by a tachograph or reader. */
  timestamp: Date;
  /** Gets or sets the most recent date with activity. */
  timestampEnd: Date;
  /** Gets or sets the minimum date containing all data. */
  timestampStart: Date;
  /** Gets or sets the string with the warnings found in the download, the download is correct for the administration. */
  warnings: string;
}