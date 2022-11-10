//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntity } from "./NameEntity";
import { ReportDataSource } from "./ReportDataSource";
import { SigningInfo } from "./SigningInfo";
import { ReportTemplateType } from "./ReportTemplateType";

/** ReportTemplate class represents a template for reports that is an Excel file. */
export interface ReportTemplate extends NameEntity {
  /** Gets or sets the Excel binary data. */
  binaryData: number[];
  /** Gets or sets whether the ReportTemplate is System. */
  isSystem: boolean;
  /** Gets or sets the {@link ReportDataSource}. */
  reportDataSource: ReportDataSource;
  /** Gets or sets the {@link ReportTemplateType}. */
  reportTemplateType: ReportTemplateType;
  /** Gets or sets whether the ReportTemplate is shown in the report dropdowns. */
  showReport: boolean;
  /** Gets or sets the {@link ReportTemplate.SigningInfo}. */
  signingInfo: SigningInfo;
}
